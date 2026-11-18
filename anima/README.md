# 4 animações, 1 comando cada (Claude Code + Lemo-Opuscar)

As quatro animações do vídeo saíram da **Lemo-Opuscar**, uma biblioteca grátis com 66 estilos de filme feitos só com código (desenho, holograma, mapa, 3D). O Claude escreve o código, desenha quadro a quadro e entrega o vídeo pronto. Sem programa de edição e sem gerador de vídeo.

- Link: **https://github.com/lemomo-ai/lemo-opuscar**
- Grátis. O código é MIT; os filmes de exemplo são CC BY 4.0 (crédito: LemoLab).
- Precisa do Claude Code, Node 20+, ffmpeg e Python 3.11+.

## Como instalar

No terminal:

```
claude plugin marketplace add lemomo-ai/lemo-opuscar
claude plugin install lemo-opuscar@lemolab
```

Ou cola no Claude Code:

```
https://github.com/lemomo-ai/lemo-opuscar

Instala essa skill e confere se o /lemo-opuscar aparece.
```

## Os 4 comandos do vídeo

Troca o assunto pelo teu. Para Reels, pede em pé (1080x1920).

**1. Desenho feito à mão (um traço só)**
```
/lemo-opuscar one-line
Um traço só, desenhado à mão: uma pessoa trabalhando no notebook e um balão com um "certo". 4,5 segundos, em pé, 1080x1920.
```

**2. Holograma 3D**
```
/lemo-opuscar hologram-hud
Um notebook feito de luz, girando devagar, e o processador acendendo em amarelo. 4,5 segundos, em pé, 1080x1920.
```

**3. Mapa com a rota andando**
```
/lemo-opuscar transit-map
Mapa de metrô com a rota crescendo do meu escritório até o cliente e um contador de km girando. 4,5 segundos, em pé, 1080x1920.
```

**4. Produto desmontando no ar**
```
/lemo-opuscar teardown
Um celular se desmontando no ar, camada por camada (vidro, tela, placa, bateria, tampa). 4,5 segundos, em pé, 1080x1920.
```

Dica do teste: cada animação levou de 15 a 30 minutos de trabalho do Claude. O render em si é rápido.

---
Toda semana eu testo uma IA nova. Segue no Instagram: [@moiseskalebbe](https://www.instagram.com/moiseskalebbe/)
