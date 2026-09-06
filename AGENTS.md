# AGENTS.md — CuraNexo

## Estado
Projeto em fase de protótipo visual. Não implementar produção nesta etapa.

## Stack-alvo
- Flutter/Dart: aplicativo mobile do cliente.
- Web Backoffice: aplicação web responsiva.
- Supabase/PostgreSQL: persistência e autenticação na solução real.
- Vercel: hospedagem do backoffice e camada web.
- Stripe: assinaturas, cobranças avulsas e serviços adicionais.
- APIs de prestadores: camada abstrata, sem dependência de CAVOK.

## Princípios
1. A CuraNexo é o sistema central de negócio.
2. Não depender de ERP externo para operação, contratos, elegibilidade, cobrança ou auditoria.
3. Dados de saúde são tratados como dados pessoais sensíveis.
4. O protótipo deve representar os fluxos reais sem fingir integrações reais.
5. Não gerar código de produção antes da aprovação do OWNER.

## Pendências
Consultar `docs/15_Appendix/06_Pendencias_Pos_Prototipo.md`.
