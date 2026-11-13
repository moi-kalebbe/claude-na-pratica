# Um filme inteiro feito só com código (link e pedido)

A skill se chama **Lemo-Opuscar**. É grátis e de código aberto: https://github.com/lemomo-ai/lemo-opuscar

Ela ensina o Claude Code a fazer um curta animado inteiro (imagem, som e legenda) desenhando quadro a quadro com código. Tem 66 estilos prontos: cinema mudo, pixel, anime, gibi, aquarela, fita de câmera antiga e outros.

## 1. O que tu precisas

- O **Claude Code** no computador (é pago).
- Node 20 ou mais novo, ffmpeg 7 ou mais novo e Python 3.11 ou mais novo. Se faltar algum, pede para o próprio Claude instalar.

## 2. Instala a skill

No terminal, um comando de cada vez:

```
claude plugin marketplace add lemomo-ai/lemo-opuscar
```

```
claude plugin install lemo-opuscar@lemolab
```

## 3. Pede o filme

Abre o Claude Code numa pasta vazia e cola um destes pedidos. São os três do vídeo; troca o negócio pelo teu.

**Padaria (desenho antigo, preto e branco):**

```
Faz uma propaganda de 30 segundos, em pé (1080x1920), no estilo desenho animado de 1930,
para a Padaria Aurora. São 5 da manhã, o padeiro acende o forno, o cheiro do pão sai pela
janela e vai acordando o bairro. Forma fila, o pão acaba, chega um menino atrasado e o
padeiro tira um pão que tinha guardado. Fecha com "O bairro acorda com a gente."
```

**Entrega (anime dos anos 80):**

```
Faz uma propaganda de 30 segundos, em pé (1080x1920), no estilo anime dos anos 80, para a
Raio Entregas. Um entregador de moto leva o bolo de aniversário de uma avó e tem 10 minutos:
trânsito, chuva, atalho e um salto. Chega com a vela ainda acesa. Mostra um relógio
descendo na tela. Fecha com "Chega antes de a vela apagar."
```

**Contabilidade (câmera de segurança, terror que vira piada):**

```
Faz uma propaganda de 30 segundos, em pé (1080x1920), como gravação de câmera de segurança,
para a Contábil Farol. Dia 19, quase meia-noite, o dono da loja sozinho com os papéis.
A luz pisca e um vulto chega mais perto a cada piscada. A luz acende: é a contadora com
a guia paga. Ela diz "Já paguei. Vai dormir." Fecha com "O susto fica com a gente."
```

Os três negócios são inventados.

## 4. O que esperar

- Cada propaganda de 30 segundos levou uns 15 minutos para ficar pronta aqui.
- Na primeira vez ele baixa as ferramentas (uns 350 MB).
- Confere os quadros antes de publicar: às vezes um braço cruza o outro ou um texto fica fora do lugar. É só pedir para ele corrigir.
- A voz pronta da skill é em inglês. Para português, grava a tua ou pede sem narração.

## O que eu testei e o que não testei

- **Testado:** instalei a skill e gerei as três propagandas do vídeo, em pé, com imagem e som feitos em código.
- **Não testado:** colar o pedido numa conversa nova e deixar o Claude fazer tudo sozinho do começo ao fim. Eu fiz acompanhando e pedindo correções.
