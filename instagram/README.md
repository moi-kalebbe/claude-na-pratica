# O Claude cuidando do teu Instagram: 13 skills grátis (link e como instalar)

O **instagram-agent-skill** é um pacote grátis com 13 skills que fazem o Claude trabalhar no teu Instagram: roteiro com nota do gancho, legenda, análise do que está bombando no teu nicho, perfil, plano da semana, comentários, direct e mais. Elas escrevem; quem posta és tu. Nada sai sem o teu "sim".

- Link: **https://github.com/Jakeschincariol/instagram-agent-skill**
- Licença MIT, grátis, cerca de 7 mil estrelas (conferido em 17/11/2026). Não precisa de chave de API nem de conectar a conta.

## Como instalar (cola no Claude)

```
https://github.com/Jakeschincariol/instagram-agent-skill

Instala essa skill e depois confere se o /ig-reel funciona.
```

Ou no terminal, com o Claude Code:

```
git clone https://github.com/Jakeschincariol/instagram-agent-skill.git
cp -r instagram-agent-skill/skills/ig-* ~/.claude/skills/
```

## As 4 que eu testei

| Comando | O que faz | O meu teste |
|---|---|---|
| `/ig-reel` | Escreve o roteiro e dá nota pro gancho antes de gravar | Dei nota a 4 ganchos: o melhor tirou 62,6 e o pior 42,2. Gravei com o melhor. |
| `/ig-caption` | Revisa a legenda e mostra onde o feed corta no "… mais" | Mostrou que a 1ª linha da minha legenda passava do corte (125 caracteres) |
| `/ig-human` | Diz o quanto o texto parece IA, de 0 a 100 | Uma legenda típica de IA tirou 26,3 |
| `/ig-viral` | Acha os Reels que estão bombando no teu nicho e mostra quantas vezes cada um passou da média do perfil | Li 94 Reels de 10 perfis: o maior fez 56,9 vezes a média |

Dica do teste: as notas foram feitas para inglês. Em português elas saem mais baixas, então compara um gancho com outro, não o número solto.

## Como usar

```
/ig-reel <a tua ideia de vídeo>
/ig-caption <cola a legenda>
/ig-human <cola o texto>
/ig-viral
```

---
Toda semana eu testo uma IA nova. Segue no Instagram: [@moiseskalebbe](https://www.instagram.com/moiseskalebbe/)
