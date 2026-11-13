# Prompt Master: o botão que conserta o teu pedido no Claude

Tu escreves o pedido do teu jeito, clicas em **✦ Prompt Master** e o Claude lê, pergunta o que falta e reescreve o pedido organizado (Papel, Tarefa, Contexto e Formato). Nada é enviado sozinho: tu conferes e apertas Enter.

**Onde funciona:** no app do Claude **no computador**, na aba Code. O botão aparece numa faixa logo em cima da caixa de mensagem. No celular ele não aparece.

## Jeito 1: pedir pro próprio Claude criar
1. Abre o app do Claude no computador.
2. Clica em **Code**.
3. Começa uma conversa nova.
4. Cola este pedido:

```
Cria um mod que reescreve meu pedido cru em um pedido melhor antes de eu enviar. Coloca um botão Prompt Master acima da caixa de mensagem. Quando eu clicar, ele lê o que escrevi, me faz até 3 perguntas sobre o que falta e troca o texto da caixa pelo pedido reescrito em Papel, Tarefa, Contexto e Formato.
```

O Claude escreve o mod e pergunta se pode ligar. Aceita, e o botão aparece quando ele terminar de responder.

## Jeito 2: instalar o meu, já pronto
O código está na pasta [`prompt-master`](prompt-master) deste repositório.

No app do Claude: clica no **+** ao lado da caixa de mensagem, depois em **Plugins**, **Add marketplace**, escreve `moi-kalebbe/claude-na-pratica`, e por fim **Add plugin** em `prompt-master`. Abre uma conversa nova para ele carregar.

No Claude Code pelo terminal, é uma linha só:

```
/plugin install prompt-master --marketplace moi-kalebbe/claude-na-pratica
```

## Como usar
1. Escreve na caixa, por exemplo: `faz um post da minha cafeteria`
2. Clica em **✦ Prompt Master**.
3. Se ele perguntar algo, responde na própria caixa e clica em **✦ Reescrever**.
4. Confere o pedido novo e envia.

Também funciona por comando: `/prompt-master faz um post da minha cafeteria`
