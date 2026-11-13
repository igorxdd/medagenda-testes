# Cenários BDD

Os arquivos em `features/` descrevem o comportamento esperado conforme o enunciado. Os cenários associados às Issues devem continuar exigindo esse comportamento, mesmo quando a aplicação apresentar o defeito registrado.

| Arquivo | Requisito | Referência |
| --- | --- | --- |
| autenticacao.feature | RN04 | CT-001, Issue #1 |
| prontuario.feature | RNF02 e matriz de permissões | CT-002, Issue #2 |
| busca-paciente.feature | RF03 | CT-003, Issue #3 |
| relatorio-consultas.feature | RN16 | CT-004, Issue #4 |
| validacao-cpf.feature | RN05 | Cenário adicional, sem Issue associada |

O conjunto descreve três regras de negócio (RN04, RN05 e RN16), além de RF03 e permissões/RNF02, e inclui Esquemas do Cenário. Isso atende à quantidade mínima de regras prevista para os cenários Gherkin, mas não substitui os demais artefatos da Entrega 2.

Os cenários ainda não possuem implementação dos passos ou configuração do Cucumber. A pasta `steps/` está reservada para os passos em TypeScript. A pipeline atual apenas verifica a inicialização do ambiente e não executa esses cenários.

Na automação, cada cenário deve preparar sua própria massa fictícia, usar datas calculadas e sessões isoladas. O relatório deve usar o dia preparado pelo próprio cenário, sem depender de uma data fixa do seed.
