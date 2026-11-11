# MedAgenda Testes

Repositorio do grupo para o projeto de Teste de Software 2026.2 da UNIFACISA. Reune a aplicacao original, a estrategia de validacao, os testes e as entregas academicas.

## Estado da entrega

Esta e a estrutura inicial. Foram preparados testes de disponibilidade da API, abertura do login, autenticacao em BDD, auditorias axe e um script k6. Isso nao representa os 50 casos, os cinco fluxos E2E completos ou a validacao final. Falhas da aplicacao devem ser registradas e permanecer visiveis.

| Entrega | Prazo | Material |
| --- | --- | --- |
| 1 | 19/11/2026 | [Plano de testes](docs/entrega-1/) |
| 2 | 01/12/2026 | [Casos, Gherkin, exploracao e rastreabilidade](docs/entrega-2/) |
| Final | 15/12/2026 | [Resultados, defeitos e parecer](docs/entrega-final/) |

As entregas devem estar disponiveis ate o inicio da aula. Integrantes e matriculas: a preencher pelo grupo no plano. Video e apresentacao: pendentes.

## Aplicacao original

`api/`, `web/` e `docker-compose.yml` foram extraidos do medagenda.zip fornecido pelo professor. Nao corrigir o codigo da aplicacao: o trabalho e avaliar o sistema como entregue. O [README original](docs/referencias/README-aplicacao.md), o enunciado e o guia estao em [referencias](docs/referencias/).

Os manifests da API e da interface informam versao 1.0.0. O banco e populado automaticamente na primeira inicializacao. Os dados e as contas do material sao ficticios, destinados ao ambiente de teste local.

## Requisitos e instalacao

- Docker Desktop ou Docker Engine com Compose funcionando.
- Node.js 22 ou superior para as ferramentas de teste; o Node da aplicacao permanece definido no Dockerfile original.
- Google Chrome atual e Firefox instalado pelo Playwright.
- k6 opcional para desempenho local; o CI tambem oferece execucao manual.

Na raiz do repositorio:

```sh
npm ci
npx playwright install chrome firefox
docker compose up --build -d
npm run wait:api
```

No Linux, use `npx playwright install --with-deps chrome firefox` se faltarem dependencias dos navegadores. O instalador de Chrome pode substituir uma instalacao existente; se o navegador ja estiver instalado, basta `npx playwright install firefox`.

Sistema: http://localhost:8080. API: http://localhost:3000/api. MongoDB: mongodb://localhost:27017/medagenda.

```sh
docker compose logs -f api
docker compose exec -T api npm run seed
docker compose down
```

**O seed substitui os dados do ambiente.** Execute somente no banco descartavel de teste e entre suites, nunca durante outra execucao. `docker compose down` mantem o volume local.

Para um ambiente ja iniciado sem Docker, configure `WEB_BASE_URL=http://localhost:5173` e `API_BASE_URL=http://localhost:3000/api` no terminal. As ferramentas nao carregam arquivos .env automaticamente. No PowerShell:

```powershell
$env:WEB_BASE_URL = 'http://localhost:5173'
$env:API_BASE_URL = 'http://localhost:3000/api'
npm run test:smoke
```

## Suites e comandos

| Suite | Ferramentas | Comando |
| --- | --- | --- |
| API | Postman v2.1 + Newman | `npm run test:api` |
| Interface | Playwright Test + TypeScript | `npm run test:interface` |
| BDD | Cucumber.js + TypeScript + Playwright | `npm run test:bdd` |
| Acessibilidade | axe + Playwright | `npm run test:a11y` |
| Tipos | TypeScript | `npm run typecheck` |
| Disponibilidade | HTTP com espera limitada | `npm run wait:api` |
| Verificacao inicial | Tipos, API, interface e BDD | `npm run test:smoke` |

As suites da interface e axe usam Chrome e Firefox em larguras de 1280 e 390 pixels. O BDD inicial usa Chrome. `npm run test:smoke` encerra no primeiro erro; o CI coleta os resultados das suites independentes mesmo quando uma falha.

Page Objects e configuracoes comuns ficam em `tests/shared/`. E2E e BDD compartilham `LoginPage`, mas possuem executores e relatorios separados. O BDD inicial cobre RF01; ainda sera necessario adicionar cenarios de regras de negocio conforme as entregas.

A colecao de `tests/api-postman/collections/` e o ambiente de `tests/api-postman/environments/` podem ser importados no Postman. O ambiente versionado contem somente a URL; tokens nao devem ser salvos no Git. O Newman e mantido nesta entrega para corresponder ao plano e requer colecoes v2.1.

O login automatizado usa uma conta ficticia do seed. Para substituir, configure `TEST_PATIENT_EMAIL` e `TEST_PATIENT_PASSWORD` no terminal. Nao usar credenciais reais. Consulte os documentos fornecidos para os demais perfis.

Veja as instrucoes de [desempenho](tests/desempenho-k6/) e [acessibilidade e teclado](tests/acessibilidade/).

## CI e evidencias

O [workflow](.github/workflows/testes.yml) executa em push e pull request:

1. Smoke: instalacao reproduzivel, tipos, Docker Compose e verificacao de saude; API, interface e BDD em sequencia, com seed entre suites.
2. Acessibilidade: ambiente Docker isolado e axe nas quatro telas do RNF04, sem ignorar violacoes conhecidas.
3. Desempenho: job adicional ao executar manualmente o workflow, com 50 usuarios e thresholds do RNF03.

Os relatorios ficam nos artefatos do Actions por 14 dias. Localmente, ficam em `reports/`, fora do Git. Baixe e preserve as evidencias necessarias antes de expirarem. Um workflow vermelho deve ser investigado: pode indicar defeito da aplicacao, do teste ou do ambiente.

Registrar em cada evidencia: caso/requisito, versao, data, navegador, perfil e resultado. Nao publicar tokens, senhas reais ou dados pessoais. Issues devem seguir o modelo de defeito do enunciado, com resultado esperado, obtido, passos e evidencia; suspeitas de codigo ainda precisam de reproducao.

## Pendencias do grupo

- Preencher equipe, links e versao no plano; revisar as regras e os riscos.
- Elaborar pelo menos 50 casos e a matriz de rastreabilidade.
- Preparar duas sessoes exploratorias e Gherkin para tres regras, incluindo Esquema do Cenario.
- Implementar os cinco fluxos E2E obrigatorios e verificacao de conteudo de PDF.
- Ampliar API e BDD para regras e permissoes; preparar dados isolados para testes que gravam.
- Executar os casos e a verificacao manual por teclado; consolidar resultados, Issues e parecer.
- Publicar o video e preparar a apresentacao final.
