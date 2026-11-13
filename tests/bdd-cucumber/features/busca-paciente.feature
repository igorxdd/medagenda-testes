# language: pt
@RF03
Funcionalidade: Busca de pacientes pelo CPF
  A recepção deve localizar uma ficha existente pelo CPF informado.

  # CT-003 - https://github.com/igorxdd/medagenda-testes/issues/3
  @CT003 @issue3
  Esquema do Cenário: Localizar paciente pelo CPF com diferentes formatos
    Dado que estou autenticado pela API como recepção
    E existe uma ficha de paciente fictício com CPF válido cadastrado
    Quando pesquiso o CPF desse paciente pela API no formato "<formato>"
    Então a pesquisa deve retornar a ficha correspondente ao CPF

    Exemplos:
      | formato     |
      | com máscara |
      | sem máscara |
