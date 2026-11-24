# O kit do funcionário de IA: as 10 peças do vídeo, prontas para copiar

No vídeo eu montei um funcionário de IA peça por peça no Claude Code. Aqui está cada peça com o arquivo pronto e onde colocar. Tudo conferido na documentação oficial do Claude Code (code.claude.com/docs) em 24/11/2026.

Dica: não precisa montar tudo de uma vez. Comece pelo caderno (peça 1) e vá somando.

---

## 1. O caderno: CLAUDE.md

É um arquivo de texto na pasta do projeto que o Claude lê toda vez que começa. Cria um `CLAUDE.md` na raiz da pasta com algo assim (troca pelo jeito da tua empresa):

```markdown
# Malharia Boa Linha (exemplo)

## Quem somos
Malharia de Limeira. Vendemos camiseta lisa e estampada no atacado (mínimo 50 peças).

## Como falar com cliente
- Sempre "você", nunca "senhor".
- Orçamento sai em até 2 horas, com prazo de entrega escrito.

## Regras
- Preço vem SEMPRE da planilha de preços, nunca de cabeça.
- Antes de mandar qualquer e-mail, me mostra o texto.
```

Atalho: dentro do Claude Code, digita `/init` e ele escreve um primeiro caderno olhando a tua pasta.

## 2. Caderno curto: menos de 200 linhas

A própria documentação recomenda **menos de 200 linhas** por CLAUDE.md. Caderno grande gasta contexto e ele segue pior. Passo a passo comprido vai para uma skill (peça 3).

## 3. As pastas: skills

Uma skill é uma pasta com um `SKILL.md` que ele só abre quando precisa. Cria `.claude/skills/orcamento/SKILL.md`:

```markdown
---
name: orcamento
description: Monta orçamento de camiseta para cliente. Use quando pedirem orçamento ou preço.
---

1. Pergunta quantidade, modelo e se tem estampa.
2. Pega o preço na planilha de preços (nunca chuta).
3. Soma frete pela tabela da transportadora.
4. Escreve o orçamento no modelo abaixo e me mostra antes de enviar.
```

## 4. O caderninho de bolso: memória automática

Quando você corrige ele ("não é assim, é assado"), ele mesmo anota para não errar de novo. Já vem ligada. Para ver ou editar o que ele anotou, digita `/memory`.

## 5. Os cabos: MCP

É o que liga o Claude à tua planilha, e-mail e agenda. Exemplo, dentro do terminal:

```
claude mcp add --transport http notion https://mcp.notion.com/mcp
```

Cada serviço tem o seu endereço (procura "MCP" + nome do serviço). Depois, dentro do Claude Code, `/mcp` mostra o que está ligado.

## 6. O navegador: Claude no Chrome

Para sistema que não tem cabo nenhum, só tela de login. Instala a extensão **Claude in Chrome** e abre o Claude Code com:

```
claude --chrome
```

Ele usa o login que já está no teu navegador e para quando aparece tela de login ou CAPTCHA, para você resolver.

## 7. O segurança: hook

O caderno é conselho, não é ordem. Para **barrar** uma ação de verdade, usa um hook `PreToolUse`, que roda antes de cada comando. Exemplo que barra qualquer `rm -rf`:

`.claude/settings.json`
```json
{
  "hooks": {
    "PreToolUse": [
      {
        "matcher": "Bash",
        "hooks": [
          { "type": "command", "command": "\"$CLAUDE_PROJECT_DIR\"/.claude/hooks/barra-apagar.sh" }
        ]
      }
    ]
  }
}
```

`.claude/hooks/barra-apagar.sh` (depois roda `chmod +x` nele)
```bash
#!/bin/bash
COMANDO=$(jq -r '.tool_input.command')
if echo "$COMANDO" | grep -q "rm -rf"; then
  echo "Apagar pasta inteira está bloqueado neste projeto." >&2
  exit 2   # 2 = barra a ação
fi
exit 0
```

## 8. Voltar no tempo: rewind

Errou? Aperta **Esc duas vezes** (ou digita `/rewind`) e escolhe o ponto da conversa para onde voltar, com o código junto.

## 9. Os ajudantes: subagentes

Pede assim: "usa subagentes, um para cada pedido, e me devolve só o resumo de cada um". Cada ajudante trabalha separado e devolve só o resultado. Para ter um ajudante fixo, pede: "cria um subagente em .claude/agents/ que confere orçamento antes de eu mandar".

## 10. A sala dele: mod

No app do Claude, você descreve o painel que quer ("um painel ao lado da conversa com os pedidos do dia") e o Claude escreve o mod para você.

## A última peça: tarefa agendada

Para ele trabalhar sozinho, toda segunda às 8h, com o teu notebook desligado: tarefa agendada na nuvem. Cria em **claude.ai/code/routines** → New task, ou no terminal:

```
/schedule toda segunda às 8h, lê os pedidos novos e me manda o resumo
```

Roda nos servidores da Anthropic, sem a tua máquina ligada. Intervalo mínimo de 1 hora. Precisa de plano pago (Pro, Max ou maior).

---
Todos os dados acima (Malharia Boa Linha, preços) são exemplos.

Toda semana eu testo uma IA nova. Segue no Instagram: [@moiseskalebbe](https://www.instagram.com/moiseskalebbe/)
