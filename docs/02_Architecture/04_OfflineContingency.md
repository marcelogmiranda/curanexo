# Estratégia de Contingência

## Níveis

### Nível 0 — Normal
Sistemas disponíveis. Elegibilidade sistêmica obrigatória e autorização única.

### Nível 1 — Degradação
Integrações indisponíveis, mas operação central disponível. Permitir procedimentos manuais controlados.

### Nível 2 — Contingência
Sistema central indisponível. Avaliar risco à vida.

### Nível 3 — Emergência
Risco à vida + indisponibilidade sistêmica. Ativar atendimento presumido conforme protocolo.

## Fluxo
```mermaid
flowchart TD
A[Solicitação] --> B{Sistema disponível?}
B -->|Sim| C[Elegibilidade]
B -->|Não| D{Risco à vida?}
D -->|Não| E[Validação manual / aguardar]
D -->|Sim| F[Ativar contingência]
F --> G[Gerar código provisório]
G --> H[Despachar prestador]
H --> I[Registrar evidências]
I --> J[Retorno do sistema]
J --> K[Reconciliar]
K --> L[Ajustar cobrança/faturamento]
```

## Regras
- Código de contingência deve ser único.
- Toda ação deve possuir operador/responsável e horário.
- Dados coletados durante contingência devem ser mínimos.
- Ao retornar, reconciliar contra contrato e regras vigentes.
- Divergências devem gerar pendência de auditoria.
