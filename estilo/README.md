# 10 estilos de animação da mesma cena, sem pagar nada

Como eu fiz o vídeo: uma IA redesenha a cena em cada estilo e outra faz a imagem andar. Nenhuma das duas cobrou nada a mais de mim.

## O que tu precisas
- **Para as imagens:** qualquer IA que gere imagem e aceite uma imagem de referência. Eu usei o gerador de imagens do ChatGPT (pelo Codex, que vem no plano). O plano grátis do ChatGPT também gera imagem, com limite por dia.
- **Para o movimento:** o LTX-Video, modelo aberto que roda no próprio computador. No meu Mac leva uns 2 minutos por clipe de 4 segundos. Sem computador forte, dá para usar o mesmo modelo de graça no Hugging Face.

## Passo 1: a cena-base
Gera uma imagem só, que vai servir de molde da pose:

> Imagem vertical 9:16. Vista de lado, uma mulher de rabo de cavalo, suéter mostarda e calça cinza, andando da esquerda para a direita num escritório, no meio de um passo. Ela segura um copo de café com a mão direita, que é a do braço mais perto da câmera: braço dobrado na frente do corpo, costas da mão aparecendo. O braço esquerdo fica atrás do corpo. Ao fundo: estante, mesa com computador, cadeira e uma planta grande. Corpo inteiro, dos pés à cabeça.

**Confere a mão antes de seguir.** Amplia a imagem e olha se o copo está na mão certa e se os dedos fazem sentido. Se a base sair errada, as dez saem erradas (aconteceu comigo).

## Passo 2: os 10 estilos
Manda a imagem-base como referência e pede, um estilo por vez:

> Redesenha esta mesma cena, com a mesma pose e o mesmo enquadramento, no estilo abaixo. O cenário inteiro muda para combinar com o estilo, não só as cores. Mantém o copo na mesma mão.

1. **Holograma:** holograma ciano brilhante, com linhas de varredura, sobre fundo escuro.
2. **Neon Cyberpunk:** escritório de noite, iluminado por neon roxo e rosa, chão refletindo, cidade na janela.
3. **Papel Recortado:** tudo feito de camadas de papel recortado, com sombra entre as camadas.
4. **Isométrico:** ilustração 3D limpa, formas foscas em tons pastel, fundo de uma cor só.
5. **Planta Técnica:** desenho de linhas brancas sobre papel azul quadriculado.
6. **Câmera Térmica:** imagem de câmera de calor, pessoa em laranja e amarelo, fundo roxo.
7. **Anime:** animação japonesa desenhada, céu azul com nuvens na janela.
8. **Terminal ASCII:** imagem toda feita de letras verdes de terminal sobre fundo preto.
9. **Aquarela:** pintura em aquarela solta, com manchas de tinta e papel aparecendo.
10. **Massinha:** cena de massinha de modelar, como animação quadro a quadro.

## Passo 3: fazer andar
No LTX-Video, modo imagem para vídeo, 576 × 1024, 4 segundos, com este pedido (em inglês funciona melhor):

> Side view of a woman walking from left to right at a steady pace, holding a coffee cup, her legs taking clear alternating steps, her ponytail swaying. She is the only person in the scene and nobody else ever appears. She walks in place in the frame while the office behind her slides slowly to the left. Everything stays [ESTILO EM INGLÊS]. The camera tracks sideways with her.

Troca o final pelo estilo, por exemplo: `a glowing cyan hologram with scan lines`, `a layered paper cutout craft scene`, `a stop-motion claymation scene`.

**Assiste cada clipe inteiro.** Em três dos meus apareceu uma segunda pessoa ou a cena escureceu. Resolvi gerando de novo com outra semente e com a frase "ela é a única pessoa na cena".

## Passo 4: juntar
Corta 1 a 2 segundos de cada clipe e coloca em sequência em qualquer editor (CapCut serve). Como a pose é a mesma, a troca de um estilo para o outro fica parecendo mágica.
