# Arquitetura da Solução

## Camadas
1. Presentation — Flutter Mobile / Web.
2. Application — casos de uso.
3. Domain — contratos, planos, elegibilidade, autorização, cobrança, financeiro.
4. Infrastructure — Supabase, Stripe, APIs de prestadores, notificações.

## Backoffice
O backoffice será parte do produto e não uma ferramenta externa de gestão.

## Multiestado
Entidades devem permitir:
- estado;
- cidade;
- região;
- unidade operacional;
- parceiro;
- prestador.

## Integração de prestadores
Usar interface comum:
- checkAvailability;
- requestAuthorization;
- dispatch;
- cancel;
- confirmExecution;
- getStatus;
- reconcile.

Cada prestador possui adapter próprio.
