# MedAgenda Testes

Base do projeto de Teste de Software 2026.2 da UNIFACISA. O repositório reúne a aplicação original, os documentos das entregas e as pastas onde os testes serão desenvolvidos.

## Executar o sistema

Com o Docker e o Docker Compose instalados, execute na raiz:

```sh
docker compose up --build -d
```

- Interface: http://localhost:8080
- API: http://localhost:3000/api
- Saúde da API: http://localhost:3000/api/saude

Para parar mantendo os dados:

```sh
docker compose down
```

As instruções completas e as contas fictícias estão no [README original](docs/referencias/README-aplicacao.md) e nos [documentos de referência](docs/referencias/).

## Organização dos testes

| Pasta | Ferramentas previstas |
| --- | --- |
| `tests/api-postman/` | Postman e Newman |
| `tests/interface-playwright/` | Playwright e TypeScript |
| `tests/bdd-cucumber/` | Cucumber.js e TypeScript |
| `tests/shared/` | Page Objects e apoio compartilhados |
| `tests/desempenho-k6/` | k6 |
| `tests/acessibilidade/` | axe e Playwright |

O [BDD](tests/bdd-cucumber/) já contém cenários Gherkin associados às Issues #1 a #4 e um cenário adicional de validação de CPF. Os passos, os executores e as dependências das ferramentas ainda serão implementados. As demais pastas permanecem reservadas para desenvolvimento posterior.

## Pipeline

O [GitHub Actions](.github/workflows/testes.yml) executa em push, pull request e acionamento manual. Ele valida o Docker Compose, constrói e inicia a aplicação, aguarda a API responder e disponibiliza os logs como artefato por 14 dias.

As suítes serão acrescentadas conforme forem desenvolvidas. O sucesso desta pipeline confirma a inicialização do ambiente, não a aprovação dos requisitos do sistema.

## Entregas

| Entrega | Prazo | Material |
| --- | --- | --- |
| 1 | 19/11/2026 | [Plano de testes](docs/entrega-1/) |
| 2 | 01/12/2026 | [Casos, Gherkin, exploração e rastreabilidade](docs/entrega-2/) |
| Final | 15/12/2026 | [Automação, resultados e parecer](docs/entrega-final/) |

Integrantes, matrículas e links ainda precisam ser preenchidos nos documentos pelo grupo.

## Aplicação original

O código em `api/`, `web/` e o `docker-compose.yml` foram extraídos do ZIP fornecido pelo professor. A aplicação deve ser testada como foi entregue, sem correções no seu código. Os testes e documentos do grupo ficam separados.
