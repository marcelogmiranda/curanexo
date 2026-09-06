# Especificação Funcional — Protótipo

## Jornada central

```mermaid
flowchart LR
A[Cliente] --> B[Solicita atendimento]
B --> C[Elegibilidade]
C -->|Elegível| D[Autorização]
D --> E[Prestador]
E --> F[Execução]
F --> G[Auditoria]
C -->|Não elegível| H[Venda avulsa]
H --> I[Pagamento confirmado]
I --> E
C -->|Sistema indisponível| J[Contingência]
J --> E
J --> G
```

## Módulos
1. Cliente.
2. Contratos.
3. Planos.
4. Atendimento.
5. Autorização.
6. Prestadores.
7. Cobrança.
8. Financeiro.
9. Centro de resultados.
10. Contingência.
11. Auditoria.
