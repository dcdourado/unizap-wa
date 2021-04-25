# UniZap

**Observação:** o código visa atender a plataforma SIGAA e apenas (neste momento) atua na UNIFEI.

## Projeto
UniZap tem o intuito de oferecer um canal de fácil acesso à estudantes para se conectarem com o resto da turma via grupos de aplicativos de mensagem. A partir de cada matéria, é armazenado e distribuído aos seus usuários o link de convite do seu respectivo.

O projeto é composto por três frentes:

- [Crawler](https://github.com/dcdourado/unizap-crawler)
- Bot
  - [WhatsApp](https://github.com/dcdourado/unizap-wa)
  - Telegram (pendente)
- [Prisma Schemas](https://github.com/dcdourado/unizap-prisma-schemas)

## WA
Esta aplicação é um ponto de comunicação entre o ecossistema UniZap e o usuário final, entregando informações pertinentes ao usuário. Atualmente o objetivo é entregar links de grupos e criar grupos não existentes *on-demand*.

## Contribuições
Para contribuir com o projeto crie uma *issue*, discutimos a solução proposta e então cria-se *fork*. Este projeto utiliza segue [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) como guia de estilo de commits (e branches).

Sinta-se convidado a ajudar.

## Licença
**MIT**