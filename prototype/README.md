# CuraNexo — Protótipo Visual Mockado

Protótipo navegável baseado no PRD disponível no repositório (`docs/01_Product/04_PRD.md`) para validação com OWNER.

## Como abrir

Abra `prototype/index.html` no navegador pelo VS Code ou use a extensão Live Server apontando para este arquivo.

## Escopo

- Mobile do cliente com plano, dependentes, solicitação, elegibilidade, autorização, rede, histórico, cobranças e perfil.
- Backoffice responsivo com dashboard, clientes, contratos, operação, prestadores, financeiro, centro de resultados, contingência e auditoria.
- Dados 100% mockados, sem Supabase, Stripe ou APIs reais.

## Cenários clicáveis

- `Cenario: normal`: atendimento coberto e autorização.
- `Cenario: avulso`: serviço fora da cobertura, pagamento mock e autorização.
- `Cenario: contingencia`: código provisório e auditoria posterior.
