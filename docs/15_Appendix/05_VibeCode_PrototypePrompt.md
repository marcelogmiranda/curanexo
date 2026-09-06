# Prompt Mestre para Vibe Code — Protótipo CuraNexo

Você é um Product Designer + Senior Flutter Engineer especializado em protótipos navegáveis.

## Objetivo
Construir um protótipo visual navegável da CuraNexo para validação com o OWNER.

## Regra fundamental
NÃO implementar backend real, Stripe real, Supabase real ou APIs de prestadores. Usar dados mockados, mas estruturar o código para permitir integração futura.

## Produto
CuraNexo é uma plataforma de saúde por recorrência que:
- administra contratos e planos;
- controla elegibilidade;
- autoriza atendimentos;
- conecta clientes a uma rede de prestadores;
- administra recorrência, cobrança e inadimplência;
- possui venda avulsa;
- possui financeiro;
- possui centros de resultado;
- possui protocolo de contingência;
- não depende de ERP;
- não depende de um prestador específico.

## Plataformas
1. Mobile Flutter/Dart para cliente.
2. Web responsivo para backoffice.

## Jornada principal
Cliente → login → home → solicitar atendimento → escolher serviço/local → elegibilidade → autorização → prestador → acompanhamento.

## Jornada avulsa
Cliente → serviço não coberto → oferta avulsa → pagamento mock → confirmação → autorização → prestador.

## Jornada contingência
Solicitação → sistema indisponível → avaliar risco → contingência → código provisório → prestador → auditoria posterior.

## Backoffice
Criar dashboard com:
- clientes;
- contratos;
- solicitações;
- autorizações;
- prestadores;
- estados/regiões;
- MRR;
- recebimentos;
- inadimplência;
- despesas;
- centro de resultado;
- contingências;
- auditoria.

## Dados mock
Criar dados realistas para:
- 3 planos;
- 12 clientes;
- 8 prestadores;
- 3 estados;
- 10 contratos;
- cobranças pagas e atrasadas;
- solicitações em diferentes estados;
- 2 eventos de contingência;
- receitas e despesas.

## UX
Priorizar:
- clareza;
- confiança;
- poucos cliques;
- status visual;
- hierarquia de informação;
- responsividade.

## Navegação
Mobile:
Home / Meu Plano / Rede / Histórico / Perfil.

Backoffice:
Dashboard / Clientes / Contratos / Operação / Prestadores / Financeiro / Resultados / Contingência / Auditoria.

## Entregável
Um protótipo navegável que permita ao OWNER compreender:
1. proposta de valor;
2. jornada do cliente;
3. operação;
4. modelo financeiro;
5. rede de prestadores;
6. contingência;
7. escalabilidade multiestado.

Não adicionar funcionalidades que não estejam neste documento sem registrar como hipótese.
