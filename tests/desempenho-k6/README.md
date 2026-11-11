# Desempenho

O script rnf03.js realiza login de preparacao, escolhe uma data futura de atendimento e consulta horarios e agenda do dia com 50 usuarios simultaneos durante um minuto. Os limites sao verificados separadamente para cada endpoint: p95 menor que 800 ms e erros menores que 1%.

Com k6 instalado e a API disponivel:

```sh
npm run prepare:reports
k6 run --summary-export=reports/k6/resumo.json tests/desempenho-k6/rnf03.js
```

No GitHub Actions, o job de desempenho e executado ao acionar manualmente o workflow. Os demais testes rodam tambem em push e pull request. Registrar recursos da maquina, versoes, massa e resultados; uma rodada curta nao substitui analise de estabilidade e repetibilidade.
