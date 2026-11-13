# language: pt
@RN16
Funcionalidade: Período inclusivo do relatório de consultas
  O relatório deve incluir as consultas das datas inicial e final do período.

  # CT-004 - https://github.com/igorxdd/medagenda-testes/issues/4
  @CT004 @issue4
  Cenário: Incluir consultas quando o período abrange um único dia
    Dado que estou autenticado pela API como administrador
    E existem exatamente 2 consultas fictícias em um dia de referência
    Quando solicito o relatório de consultas pela API usando esse dia como início e fim
    Então o total do relatório deve ser 2
    E o relatório deve incluir as 2 consultas desse dia
