# language: pt
@RF01 @smoke
Funcionalidade: Autenticação no portal do paciente
  O paciente precisa acessar o portal com a conta fictícia disponibilizada pela clínica.

  Cenário: Paciente ativo entra com credenciais válidas
    Dado que o paciente está na página de login
    Quando informa as credenciais válidas da conta de demonstração
    Então acessa o painel autenticado
