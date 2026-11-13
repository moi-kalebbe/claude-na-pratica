import type { Register } from 'claude-code'

import type { Pendente } from '../types'

const PENDENTE = { plugin: 'prompt-master', key: 'pendente' } as const
const OCUPADO = { plugin: 'prompt-master', key: 'ocupado' } as const

const MODELO = 'haiku'
const PAINEL = 'prompt-master'
const MAX_PERGUNTAS = 3

const REGRAS = `Você melhora pedidos que uma pessoa vai mandar para uma IA.
Responda SOMENTE com JSON válido, sem cercas de código: {"perguntas": string[], "pedido": string}.
- Escreva na mesma língua do pedido original.
- "perguntas": no máximo ${MAX_PERGUNTAS} perguntas curtas, só sobre o que falta e muda o resultado (para quem é, tom, tamanho, formato). Lista vazia se nada essencial falta ou se as respostas já vieram.
- "pedido": o pedido reescrito em blocos "Papel:", "Tarefa:", "Contexto:", "Formato:". Não invente fatos; o que não foi dito fica de fora.
- Se houver perguntas, "pedido" fica "".`

type Resposta = { perguntas: string[]; pedido: string }

/** Lê o JSON do modelo; texto fora do formato vira o próprio pedido reescrito. */
const interpretar = (texto: string): Resposta => {
  const inicio = texto.indexOf('{')
  const fim = texto.lastIndexOf('}')
  try {
    const dados = JSON.parse(texto.slice(inicio, fim + 1)) as Partial<Resposta>
    const perguntas = Array.isArray(dados.perguntas) ? dados.perguntas.map(String).slice(0, MAX_PERGUNTAS) : []

    return { perguntas, pedido: typeof dados.pedido === 'string' ? dados.pedido : '' }
  } catch {
    return { perguntas: [], pedido: texto.trim() }
  }
}

const montarEntrada = (rascunho: string, espera: Pendente | null): string =>
  espera === null
    ? `Pedido original:\n${rascunho}`
    : `Pedido original:\n${espera.original}\n\nPerguntas feitas:\n${espera.perguntas.join('\n')}\n\nRespostas da pessoa:\n${rascunho}\n\nAgora devolva o pedido reescrito, sem novas perguntas.`

export const register: Register = on => {
  // Caminho por comando: funciona também onde a faixa acima da caixa não é desenhada (celular, Remote Control).
  on('session.start', async ($, e, next) => {
    void $.ui.open({ id: PAINEL, title: 'Prompt Master' })
    await $.command.register({ name: 'prompt-master', description: 'Reescreve o teu pedido cru em um pedido melhor', argumentHint: '<pedido cru>' })

    return next(e)
  })

  on('command.run', { command: 'prompt-master' }, async ($, e) => {
    const rascunho = e.args.trim()
    if (rascunho === '') {
      await $.ui.open({ id: PAINEL, title: 'Prompt Master' })

      return { text: 'Painel Prompt Master aberto. Também dá para usar: /prompt-master faz um post da minha cafeteria', isTextDisplayOnly: true }
    }

    const r = await $.model.complete({ model: MODELO, system: REGRAS, prompt: montarEntrada(rascunho, null), maxTokens: 900 })
    if (!r.isAnswered) {
      return { text: 'O Prompt Master não conseguiu resposta. Tenta de novo.', isTextDisplayOnly: true }
    }

    const { perguntas, pedido } = interpretar(r.text)
    const corpo = perguntas.length > 0
      ? `Antes de reescrever, falta saber:\n${perguntas.map((p, i) => `${i + 1}. ${p}`).join('\n')}\n\nRoda de novo com as respostas junto do pedido.`
      : pedido

    return { text: `✦ Prompt Master\n\n${corpo}`, isTextDisplayOnly: true }
  })
  // O mesmo desenho serve à faixa acima da caixa e ao painel lateral.
  on('ui.render', async ($, e, next) => {
    const ehFaixa = e.component === 'AbovePrompt' && !e.props.hasSurvey
    const ehPainel = e.component === 'Pane' && e.requestId === PAINEL
    if (!ehFaixa && !ehPainel) {
      return next(e)
    }

    const { value: espera = null } = await $.state.get(PENDENTE)
    const { value: trabalhando = false } = await $.state.get(OCUPADO)
    const { Box, Button, Text } = $.ui.resolve(e)

    const melhorar = async () => {
      const { text } = await $.prompt.read()
      const rascunho = text.trim()
      if (rascunho === '') {
        $.ui.toast('Escreve o teu pedido na caixa e clica de novo.')
        return
      }

      await $.state.set(OCUPADO, true)
      try {
        const r = await $.model.complete({ model: MODELO, system: REGRAS, prompt: montarEntrada(rascunho, espera), maxTokens: 900 })
        if (!r.isAnswered) {
          $.ui.toast('O Prompt Master não conseguiu resposta. Tenta de novo.')
          return
        }

        const { perguntas, pedido } = interpretar(r.text)
        if (perguntas.length > 0 && espera === null) {
          await $.state.set(PENDENTE, { original: rascunho, perguntas })
          await $.prompt.fill({ text: '', mode: 'replace' })
          return
        }

        await $.state.set(PENDENTE, null)
        await $.prompt.fill({ text: pedido || rascunho, mode: 'replace' })
      } finally {
        await $.state.set(OCUPADO, false)
      }
    }

    const cancelar = async () => {
      if (espera !== null) {
        await $.prompt.fill({ text: espera.original, mode: 'replace' })
      }
      await $.state.set(PENDENTE, null)
    }

    if (trabalhando) {
      return (
        <Box>
          <Text dimColor>✦ Prompt Master lendo o teu pedido…</Text>
        </Box>
      )
    }

    if (espera !== null) {
      return (
        <Box flexDirection="column">
          <Text bold>✦ Prompt Master: responde na caixa abaixo</Text>
          {espera.perguntas.map((pergunta, i) => (
            <Text key={`p${i}`}>
              {i + 1}. {pergunta}
            </Text>
          ))}
          <Box>
            <Button key="reescrever" label="✦ Reescrever" onPress={melhorar} />
            <Text> </Text>
            <Button key="cancelar" label="Cancelar" onPress={cancelar} />
          </Box>
        </Box>
      )
    }

    return (
      <Box>
        <Button key="melhorar" label="✦ Prompt Master" onPress={melhorar} />
      </Box>
    )
  })
}
