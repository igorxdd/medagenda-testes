# Acessibilidade

`npm run test:a11y` executa axe nas quatro telas do RNF04, em Chrome e Firefox, nas larguras 1280 e 390. As violacoes geram falha, sem exclusoes para acomodar problemas da aplicacao. Relatorios e resultados completos do axe ficam em reports/a11y.

A automacao nao comprova conformidade integral com WCAG 2.1 AA. A revisao manual ainda deve registrar, por tela: ordem de foco; foco visivel; operacao com Tab, Shift+Tab, Enter, Espaco e Escape; ausencia de bloqueios de teclado; selecao de horarios; envio do assistente; leitura das notificacoes. Registrar navegador, largura, data, resultado e evidencia. Nao marcar itens pendentes como aprovados.
