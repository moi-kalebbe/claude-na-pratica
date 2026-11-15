# Som de verdade no Claude: 3 plugins grátis (pedido de instalação e guia)

O Claude edita vídeo muito bem, mas sem ajuda ele usa efeitos sonoros fracos. Estas três ferramentas grátis dão a ele sons de verdade. Testei as três no meu Mac em 15/11/2026.

| Ferramenta | O que faz | Licença |
|---|---|---|
| [Openverse](https://openverse.org/) | Busca em mais de 5 milhões de sons de verdade (porta, chuva, teclado…) | Cada som tem a sua; peça só **CC0** |
| [UI SFX](https://github.com/romainsimon/uisfx) | 936 sons de interface prontos: clique, pop, deslize, digitação, notificação | Áudio CC0 |
| [earshot](https://github.com/Leonxlnx/earshot) | Se o som não existe, ele cria. Também descreve e avalia o som do teu vídeo | MIT |

## O pedido que instala as três (cola no Claude Code)

```
Instala estas três ferramentas de som pra mim e me diz quando estiverem funcionando:
1. UI SFX: baixa o pacote com "npm pack uisfx" numa pasta ~/sons/uisfx e descompacta.
2. earshot: instala com "uv tool install \"earshot[mcp] @ git+https://github.com/Leonxlnx/earshot\""
   e roda "earshot doctor" (o "--fetch" baixa 1,1 GB de modelos; só precisa dele para gerar som novo).
3. Openverse: não instala nada. Usa a API aberta https://api.openverse.org/v1/audio/?q=<som>&license=cc0
   sempre com license=cc0.
Depois testa: acha um som de "door slam" no Openverse (CC0), toca um clique do UI SFX
e gera um som de teclado com o earshot.
```

Precisa ter `npm` (Node) e `uv` instalados. Se não tiver, o próprio Claude instala quando tu pedir.

## Como usar no teu próximo vídeo

Depois de instalado, pede assim:

```
Põe som em cada coisa que aparece na tela deste vídeo.
Ordem: primeiro UI SFX (clique, pop, notificação), depois o banco do earshot
(whoosh, impacto), e Openverse só com licença CC0 para som do mundo real.
Se não achar o som certo, cria com o earshot. No fim, confere com "earshot critique".
```

**O truque:** no Openverse, peça sempre `license=cc0`. Sem esse filtro vêm sons CC BY, que exigem dar crédito ao autor.

## O que eu testei
- Openverse: "door slam" deu 240 sons; a contagem total da API era de 5,22 milhões de áudios em 15/11/2026.
- UI SFX: os 936 sons baixaram completos, em 12 pacotes (minimal, soft, glass, mechanical…).
- earshot: `earshot sfx render click/thock` sai em menos de 1 segundo; `earshot forge` fez 4 versões de um som de teclado em 41 s; `earshot describe` reconheceu sozinho um som do Openverse como "door slam".
- No meu vídeo, cada som que eu falo toca de verdade: porta, chuva e teclado vieram do Openverse (CC0); clique, pop, deslize, digitação e notificação vieram do UI SFX; o whoosh final foi gerado pelo earshot.
