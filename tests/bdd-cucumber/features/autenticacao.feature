# language: pt
@RN04
Funcionalidade: Acesso de contas desativadas
  A clínica deve impedir o acesso de usuários com a conta desativada.

  # CT-001 - https://github.com/igorxdd/medagenda-testes/issues/1
  @CT001 @issue1
  Cenário: Recusar login de uma conta desativada
    Dado que existe uma conta fictícia de recepção desativada
    Quando solicito o login pela API com o e-mail e a senha corretos dessa conta
    Então o login deve ser recusado
    E a resposta não deve fornecer um token de acesso
