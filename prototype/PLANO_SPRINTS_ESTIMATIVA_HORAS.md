# Plano de Sprints, Cronograma e Estimativa de Horas

Documento preliminar baseado no PRD atual e no protótipo visual mockado da CuraNexo.

> Status: estimativa inicial para discussão. Ainda depende da validação do OWNER, fechamento de escopo, definição técnica final e detalhamento das regras de negócio.

## 1. Premissas da estimativa

- Escopo considerado: primeira versão funcional P0, não apenas protótipo visual.
- Plataformas consideradas:
  - app mobile do cliente;
  - backoffice web responsivo;
  - backend/API;
  - banco de dados;
  - autenticação;
  - pagamentos;
  - trilha de auditoria;
  - regras de elegibilidade;
  - contingência operacional.
- Stack-alvo considerada:
  - Flutter/Dart para mobile;
  - web responsivo para backoffice;
  - Supabase/PostgreSQL para autenticação, dados e storage;
  - Vercel para camada web/backoffice;
  - Stripe para pagamentos;
  - APIs de prestadores via camada abstrata, com mocks/stubs na primeira versão.
- Não considera integrações reais complexas com múltiplos prestadores na primeira entrega.
- Considera testes unitários, validação de rotas, validação funcional manual e revisão com OWNER.
- Considera uma equipe de:
  - 1 analista sênior;
  - 1 dev sênior;
  - 2 devs júnior.

## 2. Avaliação da equipe proposta

A equipe proposta é viável para uma primeira versão controlada, desde que o escopo seja protegido e o dev sênior atue fortemente em arquitetura, revisão de código e decisões técnicas.

Pontos positivos:

- O analista sênior reduz risco de ambiguidade nas regras de negócio.
- O dev sênior pode estruturar arquitetura, padrões, segurança e integrações críticas.
- Dois devs júnior aumentam vazão em telas, componentes, testes unitários e rotas.

Riscos:

- Um único dev sênior pode virar gargalo em arquitetura, revisão, Flutter, backend, pagamentos e segurança.
- Dados de saúde exigem cuidado maior com LGPD, permissões, logs e exposição de dados.
- Backoffice e mobile em paralelo podem sobrecarregar a coordenação técnica.
- Stripe, Supabase, autenticação e auditoria aumentam complexidade real além do protótipo.

Reforços recomendados:

- 1 UX/UI designer part-time durante as primeiras 3 ou 4 sprints.
- 1 QA part-time a partir da Sprint 4.
- 1 consultoria pontual de segurança/LGPD antes de produção.
- 1 pessoa de DevOps/Cloud part-time, se a equipe não tiver experiência sólida com Vercel, Supabase, ambientes e deploy.

## 3. Capacidade estimada da equipe

Considerando sprints de 2 semanas:

| Perfil | Dedicação por sprint | Observação |
|---|---:|---|
| Analista sênior | 60 h | Requisitos, regras, aceite, validação com OWNER |
| Dev sênior | 80 h | Arquitetura, backend, integrações, revisão, decisões críticas |
| Dev júnior 1 | 80 h | Frontend/mobile, testes e rotas |
| Dev júnior 2 | 80 h | Backoffice, testes e rotas |
| Total base | 300 h | Sem contar reforços opcionais |

Com reforços recomendados:

| Perfil adicional | Dedicação sugerida | Quando |
|---|---:|---|
| UX/UI designer | 24 a 40 h por sprint | Sprints 1 a 4 |
| QA | 30 a 50 h por sprint | Sprints 4 a 9 |
| Segurança/LGPD | 24 a 40 h total | Sprint 8 ou 9 |
| DevOps/Cloud | 20 a 40 h total | Sprints 1, 7 e 9 |

## 4. Cronograma macro sugerido

| Fase | Duração | Objetivo |
|---|---:|---|
| Validação e refinamento | 1 sprint | Fechar P0 com OWNER |
| Fundação técnica | 1 sprint | Arquitetura, ambientes, autenticação e modelo inicial |
| Construção P0 | 5 sprints | Mobile, backoffice, regras, financeiro e operação |
| Integrações e hardening | 2 sprints | Stripe, Supabase, auditoria, segurança e testes |
| Homologação e ajustes | 1 sprint | Validação final com OWNER e correções |

Tempo total estimado: 10 sprints de 2 semanas, aproximadamente 20 semanas.

## 5. Sprints sugeridas

### Sprint 0 — Validação do protótipo e fechamento do P0

Duração: 2 semanas.

Objetivo:

- Validar protótipo com OWNER.
- Confirmar jornadas do cliente, backoffice e operação.
- Fechar escopo real da primeira versão.
- Converter decisões em backlog priorizado.

Entregas:

- PRD revisado.
- Regras de elegibilidade iniciais.
- Regras de inadimplência iniciais.
- Critérios de aceite por fluxo.
- Backlog P0 priorizado.

Horas estimadas:

| Perfil | Horas |
|---|---:|
| Analista sênior | 70 h |
| Dev sênior | 40 h |
| Dev júnior 1 | 20 h |
| Dev júnior 2 | 20 h |
| UX/UI recomendado | 40 h |
| Total sem reforço | 150 h |
| Total com reforço | 190 h |

### Sprint 1 — Fundação técnica e arquitetura

Duração: 2 semanas.

Objetivo:

- Criar estrutura real dos projetos.
- Definir padrões de arquitetura, rotas, autenticação e ambientes.
- Preparar base de dados inicial.

Entregas:

- Projeto Flutter inicial.
- Projeto backoffice web inicial.
- Estrutura de backend/Supabase.
- Modelo inicial de entidades.
- Autenticação base.
- Ambientes dev/staging.
- Pipeline mínimo de build e validação.

Horas estimadas:

| Perfil | Horas |
|---|---:|
| Analista sênior | 50 h |
| Dev sênior | 90 h |
| Dev júnior 1 | 80 h |
| Dev júnior 2 | 80 h |
| UX/UI recomendado | 32 h |
| DevOps recomendado | 20 h |
| Total sem reforço | 300 h |
| Total com reforço | 352 h |

### Sprint 2 — App cliente: autenticação, home, plano e perfil

Duração: 2 semanas.

Objetivo:

- Implementar a base da experiência mobile do cliente.

Entregas:

- Login.
- Onboarding simples.
- Home do cliente.
- Cartão do plano.
- Dependentes.
- Perfil.
- Documentos/termos em versão inicial.
- Testes unitários de estado e rotas.

Horas estimadas:

| Perfil | Horas |
|---|---:|
| Analista sênior | 55 h |
| Dev sênior | 75 h |
| Dev júnior 1 | 90 h |
| Dev júnior 2 | 70 h |
| UX/UI recomendado | 32 h |
| Total sem reforço | 290 h |
| Total com reforço | 322 h |

### Sprint 3 — App cliente: solicitação, elegibilidade e autorização

Duração: 2 semanas.

Objetivo:

- Implementar a jornada principal de atendimento coberto.

Entregas:

- Solicitar atendimento.
- Escolha de serviço.
- Localização/estado.
- Motor inicial de elegibilidade.
- Código de autorização.
- Acompanhamento da solicitação.
- Estados de loading, erro, vazio e restrito.
- Testes unitários de regras e rotas.

Horas estimadas:

| Perfil | Horas |
|---|---:|
| Analista sênior | 65 h |
| Dev sênior | 90 h |
| Dev júnior 1 | 90 h |
| Dev júnior 2 | 70 h |
| UX/UI recomendado | 24 h |
| Total sem reforço | 315 h |
| Total com reforço | 339 h |

### Sprint 4 — App cliente: rede, histórico, cobrança e venda avulsa

Duração: 2 semanas.

Objetivo:

- Fechar fluxos essenciais do cliente.

Entregas:

- Rede de prestadores.
- Detalhe do prestador.
- Histórico de atendimentos.
- Cobranças.
- Fluxo de serviço não coberto.
- Compra avulsa.
- Pagamento mock/inicial.
- Testes unitários e validação de rotas.

Horas estimadas:

| Perfil | Horas |
|---|---:|
| Analista sênior | 60 h |
| Dev sênior | 85 h |
| Dev júnior 1 | 90 h |
| Dev júnior 2 | 80 h |
| UX/UI recomendado | 24 h |
| QA recomendado | 30 h |
| Total sem reforço | 315 h |
| Total com reforço | 369 h |

### Sprint 5 — Backoffice: dashboard, clientes, contratos e planos

Duração: 2 semanas.

Objetivo:

- Implementar a primeira camada gerencial do backoffice.

Entregas:

- Login backoffice.
- Dashboard executivo.
- Clientes.
- Contratos.
- Planos.
- Filtros e tabelas.
- Permissões iniciais por perfil.
- Testes unitários e validação de rotas.

Horas estimadas:

| Perfil | Horas |
|---|---:|
| Analista sênior | 60 h |
| Dev sênior | 85 h |
| Dev júnior 1 | 70 h |
| Dev júnior 2 | 95 h |
| QA recomendado | 40 h |
| Total sem reforço | 310 h |
| Total com reforço | 350 h |

### Sprint 6 — Backoffice: operação, autorizações e prestadores

Duração: 2 semanas.

Objetivo:

- Implementar a gestão operacional da CuraNexo.

Entregas:

- Solicitações.
- Autorizações.
- Prestadores.
- Rede por estado.
- Estados operacionais.
- Ações de aprovação, bloqueio e despacho.
- Stubs para APIs futuras de prestadores.
- Testes unitários e validação de rotas.

Horas estimadas:

| Perfil | Horas |
|---|---:|
| Analista sênior | 65 h |
| Dev sênior | 90 h |
| Dev júnior 1 | 75 h |
| Dev júnior 2 | 95 h |
| QA recomendado | 45 h |
| Total sem reforço | 325 h |
| Total com reforço | 370 h |

### Sprint 7 — Financeiro, recorrência, inadimplência e Stripe

Duração: 2 semanas.

Objetivo:

- Implementar a base financeira e preparar integração de pagamentos.

Entregas:

- Assinaturas.
- Cobranças.
- Contas a receber.
- Contas a pagar.
- Inadimplência.
- Regras de bloqueio/liberação.
- Integração Stripe inicial ou sandbox.
- Webhooks básicos.
- Testes unitários de regras financeiras.

Horas estimadas:

| Perfil | Horas |
|---|---:|
| Analista sênior | 70 h |
| Dev sênior | 100 h |
| Dev júnior 1 | 75 h |
| Dev júnior 2 | 85 h |
| QA recomendado | 50 h |
| DevOps recomendado | 10 h |
| Total sem reforço | 330 h |
| Total com reforço | 390 h |

### Sprint 8 — Centro de resultados, contingência, auditoria e segurança

Duração: 2 semanas.

Objetivo:

- Implementar governança operacional e visão de resultado.

Entregas:

- Centro de resultados.
- Margem por estado/parceiro.
- Protocolo de contingência.
- Código provisório.
- Auditoria posterior.
- Logs de ações críticas.
- Revisão de permissões.
- Revisão LGPD/security.
- Testes unitários e cenários de exceção.

Horas estimadas:

| Perfil | Horas |
|---|---:|
| Analista sênior | 70 h |
| Dev sênior | 100 h |
| Dev júnior 1 | 80 h |
| Dev júnior 2 | 85 h |
| QA recomendado | 50 h |
| Segurança/LGPD recomendado | 40 h |
| Total sem reforço | 335 h |
| Total com reforço | 425 h |

### Sprint 9 — Homologação, ajustes finais e preparação de release

Duração: 2 semanas.

Objetivo:

- Consolidar versão homologável para decisão do OWNER.

Entregas:

- Correções de bugs.
- Ajustes de UX.
- Revisão de performance.
- Revisão de responsividade.
- Massa de dados de homologação.
- Checklist de aceite.
- Documentação operacional inicial.
- Deploy staging.
- Go/no-go com OWNER.

Horas estimadas:

| Perfil | Horas |
|---|---:|
| Analista sênior | 65 h |
| Dev sênior | 85 h |
| Dev júnior 1 | 80 h |
| Dev júnior 2 | 80 h |
| QA recomendado | 60 h |
| DevOps recomendado | 10 h |
| Total sem reforço | 310 h |
| Total com reforço | 380 h |

## 6. Resumo de horas

| Sprint | Total sem reforços | Total com reforços |
|---|---:|---:|
| Sprint 0 | 150 h | 190 h |
| Sprint 1 | 300 h | 352 h |
| Sprint 2 | 290 h | 322 h |
| Sprint 3 | 315 h | 339 h |
| Sprint 4 | 315 h | 369 h |
| Sprint 5 | 310 h | 350 h |
| Sprint 6 | 325 h | 370 h |
| Sprint 7 | 330 h | 390 h |
| Sprint 8 | 335 h | 425 h |
| Sprint 9 | 310 h | 380 h |
| Total | 2.980 h | 3.487 h |

## 7. Estimativa de duração

| Cenário | Duração | Observação |
|---|---:|---|
| Conservador sem reforços | 20 a 24 semanas | Maior risco de gargalo no dev sênior |
| Recomendado com QA e UX part-time | 20 semanas | Melhor previsibilidade e menor retrabalho |
| Escopo reduzido para MVP enxuto | 14 a 16 semanas | Exige cortar financeiro avançado, auditoria parcial e integrações |
| Escopo ampliado com integrações reais de prestadores | 24 a 32 semanas | Depende da maturidade das APIs externas |

## 8. Distribuição por tipo de trabalho

| Tipo de atividade | Estimativa |
|---|---:|
| Análise, requisitos e aceite | 630 h |
| UX/UI e ajustes de experiência | 152 h |
| Arquitetura e backend | 650 h |
| Mobile cliente | 620 h |
| Backoffice web | 620 h |
| Integrações e pagamentos | 280 h |
| Testes unitários e rotas | 360 h |
| QA funcional/homologação | 275 h |
| Segurança, LGPD e DevOps | 80 h |

> A soma por tipo inclui sobreposições de atuação e deve ser usada como visão gerencial, não como apontamento exato por pessoa.

## 9. Recomendação de composição mínima

Para reduzir risco, a equipe recomendada para a primeira versão real seria:

| Papel | Dedicação |
|---|---:|
| Analista sênior / PO funcional | 60 a 70 h por sprint |
| Tech lead / dev sênior full-stack | 80 a 100 h por sprint |
| Dev júnior mobile/frontend | 80 a 90 h por sprint |
| Dev júnior backoffice/frontend | 80 a 90 h por sprint |
| UX/UI designer | 24 a 40 h por sprint até Sprint 4 |
| QA | 30 a 60 h por sprint a partir da Sprint 4 |
| Segurança/LGPD | 24 a 40 h pontuais |
| DevOps/Cloud | 20 a 40 h pontuais |

## 10. Principais riscos de prazo

- Regras de elegibilidade mudarem após início da implementação.
- Regras de inadimplência e bloqueio não estarem fechadas.
- Stripe exigir fluxos fiscais/financeiros mais complexos.
- Necessidade de conciliação financeira detalhada.
- Exigência de integração real com prestadores já na primeira versão.
- Requisitos de LGPD e permissões serem definidos tarde.
- Mobile e backoffice competirem pela atenção do único dev sênior.
- OWNER solicitar mudança relevante de UX após Sprint 4.

## 11. Recomendações para controlar custo

- Fechar o P0 com o OWNER antes da Sprint 1.
- Tratar integrações de prestadores como stubs até a homologação inicial.
- Implementar Stripe em sandbox antes de qualquer cenário real.
- Começar com poucos status operacionais e evoluir após uso.
- Priorizar relatórios financeiros essenciais antes de análises avançadas.
- Definir permissões mínimas por perfil desde o início.
- Fazer revisão do OWNER ao final de toda sprint.
- Evitar adicionar novos módulos sem troca explícita de escopo.

## 12. Critério de prontidão para iniciar desenvolvimento real

Antes de iniciar a Sprint 1, recomenda-se aprovar:

- PRD revisado pelo OWNER.
- Escopo P0 congelado.
- Fluxos principais assinados.
- Entidades principais do domínio.
- Regras de elegibilidade.
- Regras de inadimplência.
- Perfis e permissões.
- Critérios de aceite.
- Decisão sobre o nível real de integração com Stripe e prestadores.
- Orçamento estimado em horas aprovado.

## 13. Conclusão executiva

Estimativa inicial para a primeira versão funcional:

- Equipe base: 2.980 horas.
- Equipe recomendada com reforços: 3.487 horas.
- Prazo recomendado: 20 semanas.
- Margem de variação esperada nesta fase: 25% a 40%.

Considerando a maturidade atual do escopo, a recomendação é validar o protótipo com o OWNER, consolidar o P0 e só então transformar esta estimativa em orçamento fechado por sprint.
