# PRD — Product Requirements Document

**Versão:** 0.1.0  
**Status:** Protótipo visual / validação OWNER  
**Nome provisório:** CuraNexo

## 1. Visão geral

A CuraNexo é uma plataforma digital de gestão e operação de serviços de saúde por recorrência.

### Plataformas
- Mobile do cliente: Flutter/Dart, Android e iOS.
- Backoffice: Web responsivo.
- Camada de serviços/API: futura, hospedada na arquitetura baseada em Supabase/Vercel.

### Modelo
- Assinaturas recorrentes.
- Venda avulsa.
- Serviços adicionais.
- Rede de prestadores locais.
- Gestão financeira e centro de resultados.

## 2. Público-alvo

### Cliente
Pessoa que contrata um plano/serviço de saúde e utiliza a rede de prestadores.

### Operação
Atendimento, autorização, relacionamento e acompanhamento de solicitações.

### Financeiro
Contas a receber, contas a pagar, inadimplência, conciliação e resultados.

### Gestão
OWNER/diretoria acompanhando carteira, receita, custos, margem, utilização e desempenho por estado/parceiro.

### Prestador
Parceiro de saúde que recebe solicitações autorizadas e retorna eventos de execução.

## 3. Funcionalidades P0 do protótipo

| ID | Funcionalidade | Prioridade | Protótipo |
|---|---|---:|---|
| F01 | Login/seleção de perfil | P0 | Sim |
| F02 | Dashboard cliente | P0 | Sim |
| F03 | Plano/contrato | P0 | Sim |
| F04 | Solicitação de atendimento | P0 | Sim |
| F05 | Elegibilidade | P0 | Sim |
| F06 | Autorização/código | P0 | Sim |
| F07 | Rede/prestadores | P0 | Sim |
| F08 | Histórico de atendimentos | P0 | Sim |
| F09 | Financeiro gerencial | P0 | Sim |
| F10 | Contratos e recorrência | P0 | Sim |
| F11 | Inadimplência | P0 | Sim |
| F12 | Centro de resultados | P0 | Sim |
| F13 | Contingência | P0 | Sim |
| F14 | Gestão de parceiros | P0 | Sim |
| F15 | Auditoria visual | P1 | Parcial |

## 4. Escopo do mobile inicial
- onboarding;
- login;
- início;
- cartão do plano;
- dependentes;
- solicitar atendimento;
- acompanhamento da solicitação;
- código de autorização;
- rede de prestadores;
- histórico;
- cobrança/assinatura;
- perfil;
- documentos/termos;
- notificações.

## 5. Escopo do backoffice inicial
- dashboard executivo;
- clientes;
- contratos;
- planos;
- solicitações;
- autorizações;
- prestadores;
- parceiros/estado;
- financeiro;
- contas a receber;
- contas a pagar;
- inadimplência;
- centro de resultados;
- contingência;
- auditoria.

## 6. Premissas
- A aplicação é independente de ERP.
- A aplicação é a fonte de verdade dos contratos e operação.
- Prestadores são integrados por APIs abstratas.
- CAVOK não é requisito arquitetural.
- Stripe é provedor de pagamento, mas o histórico financeiro de negócio pertence à CuraNexo.
- O armazenamento de dados sensíveis deve ser desenhado com privacy-by-design.

## 7. Riscos principais
| Risco | Impacto | Mitigação |
|---|---|---|
| Dados sensíveis | Alto | LGPD/privacy-by-design |
| Dependência de prestadores | Alto | Adapter/API Gateway |
| Indisponibilidade | Alto | Modo contingência |
| Inadimplência | Alto | Motor de cobrança e regras |
| Expansão multiestado | Médio | Multi-tenant lógico por região/parceiro |
| Acoplamento ao pagamento | Médio | Stripe como provider, domínio próprio |

## 8. Cronograma desta fase
- Definição visual: 1 semana.
- Protótipo mobile: 1 semana.
- Protótipo backoffice: 1 semana.
- Revisão OWNER: 1 semana.

Este cronograma é exclusivamente para o protótipo e não representa prazo de construção da plataforma de produção.

## Documentos relacionados
- `05_Especificacao_Funcional.md`
- `08_BusinessRules.md`
- `09_FunctionalRequirements.md`
- `10_NonFunctionalRequirements.md`
- `04_UX_UI/`
- `03_DataModel/`
