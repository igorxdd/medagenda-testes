# Dependencias das ferramentas de teste

O package-lock.json fixa as versoes instaladas. A aplicacao original mantem seus manifests e locks intactos; as dependencias dos testes ficam no package.json da raiz.

TypeScript 5.9.3 foi escolhido para compatibilidade com ts-node 10.9.2 e o carregamento CommonJS do Cucumber. A versao mais recente de TypeScript disponivel durante a preparacao nao era compativel com esse executor.

O Newman 6.2.3 foi mantido para atender a estrategia Postman/Newman aprovada e utiliza colecoes v2.1. Dependencias transitivas antigas dessa ferramenta ainda geram alertas no npm audit. Foram aplicados overrides de versoes compativeis nas familias de handlebars, lodash, qs, node-forge, flatted, underscore e jose; esses overrides foram exercitados pela colecao inicial.

A auditoria apos os ajustes indicou nove alertas transitivos, quatro moderados e cinco altos, sem alertas criticos. Isso nao equivale a uma auditoria de seguranca completa. Nao importar ou executar colecoes e scripts de origem desconhecida. A migracao futura do executor Postman deve ser avaliada pelo grupo, pois altera a ferramenta prevista no plano.

Para repetir a verificacao: npm audit. Nao executar npm audit fix --force sem avaliar incompatibilidades. A instalacao e os testes nao exigem tokens do GitHub ou credenciais reais dentro do repositorio.
