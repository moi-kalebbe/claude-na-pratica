# Texto sem cara de IA: Humanizer (link e como instalar)

Pedir pro Claude "humaniza esse texto" não resolve: ele continua escrevendo com os mesmos vícios. O **Humanizer** é uma skill grátis que tira esses vícios um por um. Ela foi feita a partir da página da Wikipédia que lista os sinais de texto escrito por IA.

- Link: **https://github.com/blader/humanizer**
- Licença MIT, grátis, cerca de 70 mil estrelas (conferido em 17/11/2026)
- A página da Wikipédia em português: [Sinais de texto gerado por inteligência artificial](https://pt.wikipedia.org/wiki/Wikip%C3%A9dia:Sinais_de_texto_gerado_por_intelig%C3%AAncia_artificial)

## Como instalar no Claude Code

Cola estas duas linhas no Claude Code, uma de cada vez:

```
/plugin marketplace add blader/humanizer
/plugin install humanizer@humanizer
```

Precisa do Claude Code 2.1.142 ou mais novo. Em versão mais velha, roda no terminal:

```
npx skills add blader/humanizer --global --agent claude-code
```

No Codex: `npx skills add blader/humanizer --global --agent codex`.
No Claude.ai ou no app do Claude: baixa o repositório em ZIP (Code → Download ZIP) e sobe como skill em Configurações.

## Como usar

```
/humanizer

<cola aqui o teu texto>
```

Serve pra legenda, e-mail, proposta, post, qualquer texto.

## Testei aqui

Colei uma legenda típica de IA:

> "Não é sobre trabalhar mais — é sobre trabalhar melhor. 🚀 A inteligência artificial está revolucionando a forma como as empresas operam, oferecendo eficiência, agilidade e inovação. Neste cenário em constante evolução, quem não se adapta fica para trás. A pergunta não é SE você vai usar IA, mas QUANDO. Comece hoje. Seu futuro agradece."

Ele marcou 7 sinais: o "não é sobre X, é sobre Y" (duas vezes), o travessão, a lista de três, o exagero ("revolucionando"), a frase de efeito no fim, a palavra em caixa alta e o emoji de enfeite. E devolveu:

> "Empresa que usa IA faz o mesmo trabalho em menos tempo. Quem demorar para começar vai ficar atrás de quem já começou."

O texto ficou sem nenhum dos sinais e não ganhou informação inventada.

---
Toda semana eu testo uma IA nova. Segue no Instagram: [@moiseskalebbe](https://www.instagram.com/moiseskalebbe/)
