# Roteiro de Validação com OWNER

Este roteiro orienta a revisão do protótipo visual mockado da CuraNexo antes de avançar para decisões de produto, arquitetura e implementação real.

## 1. Objetivo da sessão

Validar se o protótipo comunica corretamente:

- proposta de valor da CuraNexo;
- jornada do cliente;
- operação de elegibilidade e autorização;
- gestão de contratos, recorrência e cobrança;
- visão financeira e centro de resultados;
- rede de prestadores multiestado;
- contingência e auditoria.

## 2. Alinhamento inicial

- O OWNER entende a CuraNexo como sistema central do negócio?
- Está claro que o protótipo não usa Supabase, Stripe ou APIs reais?
- A separação entre app do cliente e backoffice está adequada?
- Algum fluxo crítico do negócio ficou fora do protótipo?
- O nível de fidelidade visual é suficiente para tomada de decisão?

## 3. Validação da experiência do cliente

### Login, início e plano

- O cliente entende rapidamente qual plano possui?
- O cartão do plano transmite confiança e status de cobertura?
- As informações de dependentes estão claras?
- O status de cobrança aparece no lugar certo?
- Existe alguma informação sensível que não deveria aparecer nessa etapa?

### Solicitação de atendimento

- O fluxo de solicitar atendimento está simples o bastante?
- A diferença entre serviço coberto e serviço avulso está clara?
- O cliente entende por que uma solicitação foi aprovada, recusada ou direcionada para compra avulsa?
- A emissão do código de autorização está compreensível?
- O cliente saberia qual é o próximo passo após receber o código?

### Rede de prestadores

- Os dados exibidos ajudam o cliente a escolher um prestador?
- Estado, especialidade, status e SLA são informações suficientes?
- Faltam filtros importantes, como cidade, bairro, urgência ou tipo de serviço?
- A experiência transmite que a CuraNexo coordena a rede, e não apenas lista prestadores?

### Histórico, cobranças e perfil

- O histórico de atendimentos está claro?
- O cliente consegue entender o status das solicitações anteriores?
- A área de cobrança é suficiente para validar recorrência e inadimplência?
- Documentos, termos e notificações estão posicionados corretamente?

## 4. Validação do backoffice

### Dashboard executivo

- Os indicadores principais são os corretos para o OWNER?
- MRR, clientes, inadimplência e margem são suficientes para a primeira visão?
- Faltam indicadores como churn, CAC, LTV, utilização por plano ou custo por atendimento?
- A visão multiestado está clara?
- O dashboard ajuda na tomada de decisão diária?

### Clientes, contratos e planos

- A estrutura de cliente, contrato e plano representa o negócio real?
- O contrato deve ser a principal entidade operacional?
- As situações exibidas são suficientes: ativo, a vencer, atrasado, cancelado, suspenso?
- É necessário visualizar titulares e dependentes no backoffice já no protótipo?
- O OWNER precisa aprovar regras diferentes por plano?

### Operação e autorizações

- A lista de solicitações mostra as informações essenciais?
- Os status operacionais fazem sentido?
- O código de autorização deve ter validade, prestador, serviço e regras associadas?
- A equipe de operação conseguiria priorizar atendimentos com essa visão?
- Que exceções precisam aparecer no fluxo operacional?

### Prestadores e rede por estado

- A visão de prestadores por UF atende à operação inicial?
- É necessário separar parceiro comercial, prestador clínico e unidade de atendimento?
- O SLA por prestador deve ser manual, calculado ou importado futuramente?
- Quais critérios definem ativação, suspensão ou bloqueio de um prestador?
- Há necessidade de ranking de qualidade ou custo por prestador?

## 5. Validação financeira

- O modelo de recorrência está corretamente representado?
- O OWNER precisa distinguir mensalidade, venda avulsa e serviços adicionais?
- A inadimplência deve bloquear elegibilidade automaticamente?
- Existem regras de carência, coparticipação ou franquia?
- O centro de resultados por estado é suficiente ou precisa ser por parceiro, plano e prestador?
- Quais despesas devem entrar no cálculo de margem?
- O Stripe será apenas provedor de pagamento ou também fonte de conciliação inicial?

## 6. Validação de contingência

- O fluxo de contingência representa um risco real do negócio?
- Quando um código provisório pode ser emitido?
- Quem autoriza a contingência?
- Quais dados mínimos devem ser registrados durante indisponibilidade?
- Qual é o prazo para auditoria posterior?
- A contingência deve aparecer para o cliente, para o prestador ou apenas para a operação?
- Que eventos exigem bloqueio ou revisão manual?

## 7. Validação de auditoria e LGPD

- Os eventos auditáveis apresentados são suficientes?
- Que ações precisam obrigatoriamente gerar log?
- Quem pode visualizar dados sensíveis?
- Há necessidade de mascaramento de CPF, documentos ou informações clínicas?
- O protótipo evita expor dados sensíveis desnecessários?
- Quais permissões devem existir para operação, financeiro, gestão e prestador?

## 8. Validação de UX e identidade visual

- A interface transmite saúde, confiança e modernidade?
- O visual está amigável sem parecer informal demais?
- A hierarquia das informações está clara?
- O OWNER consegue explicar o produto olhando o protótipo?
- A navegação entre cliente e backoffice está intuitiva?
- Há telas com excesso ou falta de informação?
- Alguma nomenclatura deve mudar?

## 9. Decisões esperadas ao final da validação

Registrar se o OWNER aprovou, rejeitou ou solicitou revisão sobre:

- escopo P0 do app cliente;
- escopo P0 do backoffice;
- entidades principais do domínio;
- status de solicitação e autorização;
- regras de elegibilidade;
- regras de inadimplência;
- modelo financeiro;
- visão multiestado;
- protocolo de contingência;
- direção visual e tom da marca.

## 10. Pendências para pós-validação

- Ajustar fluxos aprovados com ressalvas.
- Atualizar PRD e especificação funcional.
- Detalhar regras de negócio críticas.
- Definir arquitetura real apenas após aprovação.
- Definir stack final de frontend, backend e autenticação.
- Planejar integração futura com Supabase, Stripe e APIs de prestadores.
- Definir backlog técnico e critérios de aceite da primeira versão real.

## 11. Critério de aprovação do protótipo

O protótipo pode ser considerado validado quando o OWNER conseguir responder:

- quem usa a CuraNexo;
- qual problema ela resolve;
- como o cliente solicita atendimento;
- como a elegibilidade é decidida;
- como a autorização é emitida;
- como a operação acompanha solicitações;
- como a gestão acompanha receita, custo e inadimplência;
- como contingências são tratadas;
- quais pontos precisam entrar na próxima versão.
