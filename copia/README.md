# O Claude copia qualquer vídeo: rea-video (link e passo a passo)

O **rea-video** (Reverse Engineer Video) é um repositório grátis no GitHub que desmonta um vídeo cena por cena e mostra como refazer cada uma. Ele separa o que foi gravado, o que é vídeo de IA, 3D, código ou tela gravada, e entrega os cortes, a legenda, a música e os efeitos sonoros.

- Link: **https://github.com/JuneYaooo/rea-video**
- Licença Apache-2.0, cerca de 9 mil estrelas (conferido em 15/11/2026)
- Funciona no Claude Code e no Codex. Precisa de ffmpeg e Python 3.10+ (se faltar, o próprio Claude instala).

## O pedido que instala e já desmonta um vídeo (cola no Claude Code)

```
Instala https://github.com/JuneYaooo/rea-video e depois desmonta este vídeo: /caminho/do/video.mp4
Quando terminar, revisa tu mesmo cada cena (rea-video review + apply-review) antes de me mostrar o relatório.
```

Ele gera duas coisas:
- **report.html**: o relatório para ti ler, com a lista de cenas, tempo de cada corte, como cada uma foi feita e como refazer.
- **VIDEO.md**: o mesmo conteúdo organizado para a IA, que é o que o Claude usa para copiar o formato.

## Testei aqui

Rodei num vídeo meu de 1 min 36 s: em pouco mais de 2 minutos ele desmontou em **27 cenas**, com os cortes, a música (132 BPM) e os efeitos sonoros.

Uma dica do teste: **sozinho ele errou** e chamou filmagem real de "3D". Quando o Claude revisou cena por cena, acertou (filmagem real 81%). Por isso o pedido acima já manda o Claude revisar.

## Como usar no teu conteúdo

1. Acha um vídeo que viralizou no teu nicho e baixa o arquivo.
2. Cola o pedido acima com o caminho do vídeo.
3. Depois pede assim:

```
Com o VIDEO.md desse vídeo, monta o meu roteiro no mesmo formato: mesma ordem de cenas,
mesmo tempo de corte, mesmo tipo de legenda e de efeito sonoro. O assunto é: <o teu assunto>.
```

O formato que já deu certo fica igual; o conteúdo é teu.

---
Toda semana eu testo uma IA nova. Segue no Instagram: [@moiseskalebbe](https://www.instagram.com/moiseskalebbe/)
