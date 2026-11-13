---
name: cena-3d-um-pedido
description: Monta uma cena 3D interativa completa (lugar, clima, movimento e som) em um único arquivo HTML a partir de uma frase curta. Use quando pedirem "monta uma cena 3D de...", "uma rua 3D", "um mundo 3D interativo", "quero andar por...".
---

# Cena 3D em um pedido

Transforma uma frase ("uma rua de São Paulo, cyberpunk, de noite e chovendo") numa cena 3D que abre no navegador, anda sozinha e deixa a pessoa assumir o controle.

## O que entregar

Um único arquivo `.html`, sem instalação:
- Three.js carregado de `https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js`.
- Nenhuma imagem, modelo ou áudio externo. Texturas são desenhadas em `<canvas>` e o som é gerado com Web Audio.
- Funciona em tela deitada e em pé (celular).

## Antes de escrever

Tire da frase, sem perguntar de volta:
1. **Lugar** (cidade, bairro, tipo de rua) e o que o torna reconhecível: letreiros no idioma local, comércio típico, transporte típico.
2. **Clima e hora** (noite com chuva, pôr do sol, neblina).
3. **Estilo** (cyberpunk, realista, desenho, voxel).

Se faltar algum dos três, escolha o que deixa a cena mais bonita e siga.

## As 10 camadas (todas obrigatórias)

1. **Céu:** esfera grande com degradê desenhado em canvas, que acompanha a câmera. Neblina (`FogExp2`) na cor do horizonte.
2. **Chão com reflexo:** o piso é semitransparente e tudo o que brilha ganha uma cópia invertida embaixo dele (`position.y = -y`, `scale.y = -1`). É isso que dá a cara de rua molhada.
3. **Construções variadas:** larguras e alturas sorteadas, recuo no topo em parte delas, janelas acesas em textura de canvas usada também como `emissiveMap`.
4. **Marcos que identificam o lugar (o mais importante):** de 3 a 5 construções ou elementos que qualquer pessoa da cidade reconhece, com a silhueta fiel e o nome escrito quando existir. Para São Paulo: MASP com os pórticos vermelhos e o vão livre, antenas da Paulista, Copan em S, Farol Santander em degraus, Ponte Estaiada em X, ciclovia vermelha, placa azul de rua, totem do metrô, ônibus com letreiro de linha. Sem isso a cena vira "uma cidade qualquer". A câmera passa perto do marco principal e vira o olhar para ele.
5. **Sinais do lugar:** letreiros com palavras reais do idioma local, metade em bandeira (de frente para quem anda) e metade na fachada. Pelo menos um painel grande animado.
6. **Brilho:** um halo (sprite com degradê radial e mistura aditiva) em cada luz. No máximo 16 `PointLight`; o resto é halo.
7. **Movimento:** veículos nos dois sentidos com farol e lanterna, pessoas na calçada, algo passando no alto (trem, drone, avião).
8. **Clima:** partículas (chuva em `LineSegments`, neve ou poeira), respingos no chão, vapor, e um evento ocasional (raio, rajada).
9. **Som gerado na hora:** ruído filtrado para chuva ou vento, um zumbido grave de cidade e o som do evento. Só começa depois do primeiro clique.
10. **Câmera:** anda sozinha com um leve balanço até a pessoa clicar ou apertar uma tecla. Depois: arrastar para olhar, W A S D para andar, limites laterais, e volta ao começo com um escurecimento quando chega ao fim.

## Regras de qualidade

- Rodar de primeira: nada de recurso que dependa de servidor, módulo ES ou biblioteca extra.
- Manter 60 quadros por segundo num notebook comum: reaproveitar texturas e geometrias, até 8 mil partículas.
- Um título curto do lugar some depois de 3 segundos. Uma linha de instrução some no primeiro clique.
- Nomes de variáveis e comentários no idioma de quem pediu.

## Depois de escrever

Abra o arquivo, confira se não há erro no console e descreva em duas linhas o que a pessoa vai ver e como se move.

## Exemplos de pedido

- "Monta uma rua 3D interativa de São Paulo em estilo cyberpunk, à noite e com chuva."
- "Uma praia do Nordeste ao pôr do sol, com jangadas e coqueiros."
- "A Avenida Paulista num domingo de manhã, fechada para carros."
