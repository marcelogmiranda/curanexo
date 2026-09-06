# Visão de Arquitetura

```mermaid
flowchart TB
M[Flutter Mobile] --> API[Camada de API/Serviços]
W[Backoffice Web] --> API
API --> DB[(Supabase PostgreSQL)]
API --> AUTH[Supabase Auth]
API --> PAY[Stripe]
API --> PROV[Provider Integration Layer]
PROV --> P1[Prestador A]
PROV --> P2[Prestador B]
API --> AUD[Audit/Event Log]
```

## Decisão principal
A CuraNexo é o núcleo de domínio. Stripe, Supabase e prestadores são infraestrutura/integrações.

O ERP citado no material consultivo não faz parte da arquitetura-alvo desta solução.
