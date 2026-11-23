# A skill que audita teu site como o Google e a IA: claude-seo (link e passo a passo)

O **claude-seo** é um plugin grátis para o Claude Code que olha o teu site do jeito que o Google e as buscas com IA (ChatGPT, Perplexity, Visão geral do Google) olham. Ele solta vários agentes ao mesmo tempo, cada um conferindo uma parte, e no fim te entrega a nota do site e a lista do que arrumar, em ordem de prioridade.

- Link: **https://github.com/AgriciDaniel/claude-seo**
- Licença MIT, grátis, cerca de 31 mil estrelas (conferido em 23/11/2026)
- Não precisa de chave de API. Precisa do Claude Code e de Python 3.11 ou mais novo.

## Como instalar (dentro do Claude Code)

Cola uma linha de cada vez:

```
/plugin marketplace add AgriciDaniel/claude-seo
/plugin install claude-seo@agricidaniel-claude-seo
/seo setup
```

O `/seo setup` cria um ambiente separado e baixa um navegador sem janela, que ele usa para abrir o teu site. Não pede senha.

## Como usar

```
/seo audit https://teusite.com.br
```

Outros comandos úteis:
- `/seo geo https://teusite.com.br`: mede a chance de a IA citar o teu site.
- `/seo page https://teusite.com.br/pagina`: confere uma página só, mais rápido.

## Testei aqui

Rodei no meu site: levou **9 minutos**, usou **9 agentes** e deu **nota 59 de 100**. Ele achou coisa que eu nem sabia, como o site respondendo com e sem `www` (o Google vê duas cópias) e a data de vencimento do domínio. Cada problema veio com o motivo e o jeito de arrumar.

## Depois da auditoria

Se o código do teu site está no teu computador, abre o Claude Code na pasta dele e pede:

```
Lê o ACTION-PLAN.md da auditoria e arruma os itens críticos e altos, um por vez. Me mostra cada mudança antes de aplicar.
```

Dica: a auditoria completa usa bastante do teu plano do Claude. Para um teste rápido, comece pelo `/seo page` na página principal.

---
Toda semana eu testo uma IA nova. Segue no Instagram: [@moiseskalebbe](https://www.instagram.com/moiseskalebbe/)
