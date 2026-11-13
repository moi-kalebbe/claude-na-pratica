/** Pedido à espera das respostas: o texto cru e o que o modelo perguntou. */
export type Pendente = { original: string; perguntas: string[] }

declare module 'claude-code' {
  interface PluginState {
    'prompt-master': { pendente: Pendente | null; ocupado: boolean }
  }
}
