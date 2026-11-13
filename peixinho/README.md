# O elefante e o peixinho dourado (link e como usar)

É um plugin grátis e de código aberto do Google, chamado **Elephant-Goldfish Model**: https://github.com/google/elephant-goldfish-model

Ele serve para quem pede para a IA construir um programa (site, sistema, aplicativo) errar menos.

## A ideia, com uma comparação
- **O elefante é o arquiteto.** Conversa contigo, lembra de tudo e escreve o plano. Não escreve código.
- **Os peixinhos são revisores que nunca viram a conversa.** Recebem só o plano. Onde eles não entendem, o plano tem um buraco, e é dali que os erros iam nascer.
- **Só depois** de resolver os buracos a IA programa.

## Instalar no Claude Code (uma vez)
No terminal, um comando de cada vez:

```
claude plugin marketplace add google/elephant-goldfish-model
```

```
claude plugin install egm@egm
```

Também funciona no Codex e no Antigravity; os comandos de cada um estão na página do projeto.

## Usar
Abre uma conversa nova no Claude Code, na pasta do teu projeto:

1. `/egm:egm-draft` e o que tu queres construir. Ele monta o plano conversando contigo.
2. `/egm:egm-review` para os revisores lerem o plano e apontarem o que falta.
3. `/egm:egm-resolve` para resolver o que eles apontaram.
4. Depois pede para o Claude programar seguindo o plano.

**Quando vale a pena:** coisa que mexe com dinheiro, banco de dados, dados de cliente ou várias partes do sistema. Para um ajuste pequeno, não compensa.

## O que eu testei
- Instalei no Claude Code com os dois comandos acima; os 7 comandos do plugin aparecem.
- Pedi o plano de uma página de pagamento de exemplo. O plano saiu sem código, e 5 revisores leram só o documento. Nenhum o considerou pronto: juntos apontaram 53 casos estranhos, como cobrança dupla ao tentar de novo, cupom de 100% que nunca ativa a assinatura e cupom vencendo 3 horas antes por causa do fuso. Levou uns 4 minutos.
- **Atenção:** cada revisão sobe vários agentes e gasta franquia. E a revisão não substitui teste: ela pega erro de planejamento, não erro no código.
