# language: pt
@RNF02 @permissoes
Funcionalidade: Proteção do prontuário
  A recepção pode consultar os dados administrativos da consulta sem acessar o prontuário.

  # CT-002 - https://github.com/igorxdd/medagenda-testes/issues/2
  @CT002 @issue2
  Cenário: Omitir o prontuário na consulta realizada pela recepção
    Dado que estou autenticado pela API como recepção
    E existe uma consulta realizada com diagnóstico registrado
    Quando solicito o detalhe dessa consulta pela API
    Então devo receber os dados administrativos permitidos da consulta
    E a resposta não deve conter o prontuário ou seu diagnóstico
