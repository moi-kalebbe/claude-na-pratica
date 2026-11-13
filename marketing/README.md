# Time de marketing grátis no Claude (link e passo a passo)

O pacote se chama **Marketing Skills**, do Corey Haines. É grátis e de código aberto (licença MIT): https://github.com/coreyhaines31/marketingskills

São 53 skills de marketing para o Claude: texto de venda, melhoria de página, SEO, preço, e-mail, anúncio, redes sociais e outras. Tu descreves o problema e o Claude escolhe as que servem.

## 1. O que tu precisas

- O **Claude Code** no computador (vem na assinatura paga do Claude).

## 2. Instala

No terminal, dentro da pasta do teu projeto:

```
npx skills add coreyhaines31/marketingskills
```

Esse é o comando que o autor recomenda na página do pacote. Outra forma é abrir o Claude Code, colar o link do GitHub e pedir "instala essa skill": ele baixa o pacote e copia as skills para a pasta certa, pedindo a tua permissão antes de baixar.

## 3. Usa

Conta o problema com as tuas palavras. Exemplos:

```
Ninguém sabe que o site da minha cafeteria existe. Me ajuda.
```

```
Reescreve o título e o botão da minha página para vender mais.
```

## 4. O conselho de marketing

É a skill que eu mais gostei. Ela simula uma mesa com até 12 nomes do marketing (Hormozi, Ogilvy, Seth Godin, Schwartz e outros) e mostra onde eles discordam. Pede assim:

```
Usa o conselho de marketing: devo baixar a assinatura de R$ 59 para R$ 39 para ganhar mais clientes?
```

No meu teste com uma cafeteria inventada, a recomendação foi não baixar o preço e testar uma oferta com mais valor por algumas semanas.

Importante: é **simulação** a partir do que cada um publicou. Não é a opinião real dessas pessoas.

## O que eu testei e o que não testei

- **Testado:** o pacote carrega no Claude Code com as 53 skills; para "ninguém sabe que meu site existe" o Claude escolheu as de SEO, posicionamento e redes sociais; o conselho respondeu a pergunta do preço com quatro posições diferentes e uma recomendação.
- **Testado em parte:** colei o link no Claude e pedi "instala essa skill". Ele entendeu e partiu para baixar e copiar as skills; no meu teste parou no pedido de permissão, porque rodei sem ninguém para aprovar.
- **Não testado:** a instalação pelo comando `npx skills add` do começo ao fim. Eu rodei o pacote direto da pasta baixada.
- **Limites:** ele foi pensado para empresa de software, então cobre menos o comércio de bairro. A skill de SEO pede acesso ao teu site para dar um diagnóstico de verdade. Ele entrega plano e texto; cliente ele não traz sozinho.
