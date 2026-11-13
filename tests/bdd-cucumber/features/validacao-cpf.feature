# language: pt
@RN05
Funcionalidade: Validação do CPF no cadastro do paciente
  A clínica deve aceitar somente CPFs com dígitos verificadores válidos.

  # Cenário adicional para RN05, ainda sem Issue associada.
  Esquema do Cenário: Rejeitar CPF inválido no cadastro pela recepção
    Dado que estou autenticado pela API como recepção
    E preparo uma ficha fictícia com todos os demais campos válidos
    Quando solicito o cadastro do paciente pela API com o CPF "<cpf>"
    Então a API deve recusar o cadastro por CPF inválido
    E nenhuma ficha de paciente deve ser criada

    Exemplos:
      | cpf         |
      | 00000000000 |
      | 11111111111 |
      | 12345678901 |
