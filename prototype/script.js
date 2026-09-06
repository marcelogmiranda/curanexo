const data = {
  plans: [
    { name: "Essencial", price: 89, coverage: "Consultas clinicas, teleorientacao e rede basica" },
    { name: "Familiar", price: 169, coverage: "Titular, 3 dependentes, exames simples e descontos" },
    { name: "Premium", price: 289, coverage: "Rede ampliada, prioridade e autorizacao agil" },
  ],
  clients: [
    "Marina Alves", "Paulo Nogueira", "Bianca Sousa", "Andre Lima", "Carla Duarte", "Rafael Rocha",
    "Tereza Moura", "Igor Freitas", "Livia Barros", "Renato Sales", "Marta Vieira", "Joao Castro",
  ],
  providers: [
    { name: "Clinica Vida Plena", state: "CE", specialty: "Clinica geral", sla: "18 min", status: "Ativo" },
    { name: "Imagem Norte", state: "CE", specialty: "Diagnostico", sla: "2 h", status: "Ativo" },
    { name: "LabFort", state: "CE", specialty: "Laboratorio", sla: "35 min", status: "Ativo" },
    { name: "Saude Recife", state: "PE", specialty: "Urgencia leve", sla: "22 min", status: "Ativo" },
    { name: "ClinMed Natal", state: "RN", specialty: "Pediatria", sla: "28 min", status: "Ativo" },
    { name: "CardioMais", state: "PE", specialty: "Cardiologia", sla: "1 h", status: "Ativo" },
    { name: "OrtoCenter", state: "RN", specialty: "Ortopedia", sla: "45 min", status: "Pendente" },
    { name: "Bem Estar CE", state: "CE", specialty: "Fisioterapia", sla: "4 h", status: "Ativo" },
  ],
  requests: [
    { id: "SOL-1048", client: "Marina Alves", service: "Consulta clinica", state: "CE", status: "Autorizada", code: "CNX-8421" },
    { id: "SOL-1049", client: "Paulo Nogueira", service: "Exame imagem", state: "CE", status: "Em analise", code: "-" },
    { id: "SOL-1050", client: "Bianca Sousa", service: "Pediatria", state: "RN", status: "Despachada", code: "CNX-7710" },
    { id: "SOL-1051", client: "Andre Lima", service: "Ortopedia", state: "PE", status: "Contingencia", code: "TMP-2290" },
  ],
  bills: [
    { client: "Marina Alves", amount: 169, status: "Pago", due: "05/09" },
    { client: "Paulo Nogueira", amount: 89, status: "Atrasado", due: "28/08" },
    { client: "Bianca Sousa", amount: 289, status: "Pago", due: "02/09" },
    { client: "Andre Lima", amount: 169, status: "A vencer", due: "12/09" },
  ],
  contingencies: [
    { id: "CNT-021", reason: "Prestador indisponivel", risk: "Medio", audit: "Pendente" },
    { id: "CNT-022", reason: "Gateway instavel", risk: "Baixo", audit: "Revisada" },
  ],
};

const state = {
  mode: "client",
  clientPage: "home",
  officePage: "dashboard",
  scenario: "normal",
};

const clientNav = [
  ["home", "Inicio"],
  ["plan", "Plano"],
  ["network", "Rede"],
  ["history", "Historico"],
  ["profile", "Perfil"],
];

const officeNav = [
  ["dashboard", "Dashboard"],
  ["clients", "Clientes"],
  ["contracts", "Contratos"],
  ["operation", "Operacao"],
  ["providers", "Prestadores"],
  ["finance", "Financeiro"],
  ["results", "Resultados"],
  ["contingency", "Contingencia"],
  ["audit", "Auditoria"],
];

const money = value => value.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
const badge = status => {
  const klass = {
    Pago: "success",
    Ativo: "success",
    Autorizada: "success",
    Despachada: "info",
    "Em analise": "warn",
    "A vencer": "warn",
    Atrasado: "danger",
    Contingencia: "danger",
    Pendente: "warn",
    Revisada: "success",
  }[status] || "neutral";
  return `<span class="badge ${klass}">${status}</span>`;
};

function render() {
  document.querySelectorAll(".switcher button").forEach(button => {
    button.classList.toggle("active", button.dataset.mode === state.mode);
  });

  document.getElementById("clientApp").classList.toggle("hidden", state.mode !== "client");
  document.getElementById("officeApp").classList.toggle("hidden", state.mode !== "office");
  document.getElementById("pageTitle").textContent = state.mode === "client" ? "Jornada do cliente" : "Backoffice executivo";
  document.getElementById("toggleScenario").textContent = `Cenario: ${state.scenario}`;
  document.getElementById("primaryAction").textContent = state.mode === "client" ? "Nova solicitacao" : "Exportar visao";

  renderSideNav();
  renderClient();
  renderOffice();
}

function renderSideNav() {
  const nav = state.mode === "client" ? clientNav : officeNav;
  const active = state.mode === "client" ? state.clientPage : state.officePage;
  document.getElementById("sideNav").innerHTML = nav.map(([id, label]) =>
    `<button class="${active === id ? "active" : ""}" data-nav="${id}">${label}</button>`
  ).join("");
}

function renderMobileTabs() {
  document.getElementById("mobileTabs").innerHTML = clientNav.map(([id, label]) =>
    `<button class="${state.clientPage === id ? "active" : ""}" data-mobile="${id}">${label}</button>`
  ).join("");
}

function renderClient() {
  renderMobileTabs();
  const page = {
    home: clientHome,
    plan: clientPlan,
    network: clientNetwork,
    history: clientHistory,
    profile: clientProfile,
  }[state.clientPage];
  document.getElementById("phoneScreen").innerHTML = page();
  document.getElementById("journeyTimeline").innerHTML = [
    ["1", "Solicitacao criada", "Servico e local escolhidos pelo cliente."],
    ["2", state.scenario === "contingencia" ? "Contingencia ativada" : "Elegibilidade aprovada", "Regra mock considera plano, pagamento e cobertura."],
    ["3", state.scenario.startsWith("avulso") ? "Pagamento mock confirmado" : "Codigo emitido", "Autorizacao apresentada ao cliente e ao prestador."],
    ["4", "Auditoria visual", "Evento fica rastreavel no backoffice."],
  ].map(item => `<div class="timeline-item"><span class="dot">${item[0]}</span><div><strong>${item[1]}</strong><p class="muted">${item[2]}</p></div></div>`).join("");
}

function clientHome() {
  const scenarioCard = state.scenario === "avulso"
    ? `<div class="card stack"><span class="badge warn">Servico fora da cobertura</span><h3>Oferta avulsa: exame de imagem</h3><p class="muted">Pagamento mock de ${money(129)} libera autorizacao CNX-AV-203.</p><button class="primary" data-flow="pay">Confirmar pagamento mock</button></div>`
    : state.scenario === "avulso pago"
      ? `<div class="card stack"><span class="badge success">Pagamento mock confirmado</span><h3>Autorizacao CNX-AV-203 emitida</h3><p class="muted">Exame de imagem liberado para agendamento na rede credenciada.</p><button class="primary" data-client-jump="network">Escolher prestador</button></div>`
    : state.scenario === "contingencia"
      ? `<div class="card stack"><span class="badge danger">Modo contingencia</span><h3>Codigo provisorio TMP-2290</h3><p class="muted">Autorizacao provisoria para atendimento com auditoria posterior.</p><button class="primary" data-office-jump="contingency">Ver no backoffice</button></div>`
      : `<div class="card stack"><span class="badge success">Elegivel</span><h3>Autorizacao CNX-8421 emitida</h3><p class="muted">Consulta clinica liberada na Clinica Vida Plena.</p><button class="primary" data-client-jump="network">Ver prestador</button></div>`;

  return `<div class="mobile-page stack">
    <div class="mobile-header"><div><p class="eyebrow">Bom dia</p><h2>Marina Alves</h2></div><div class="avatar">MA</div></div>
    <div class="card plan-card stack">
      <span class="badge neutral">Plano Familiar</span>
      <h2>Cartao CuraNexo</h2>
      <div class="row-between"><span>Titular + 2 dependentes</span><strong>Ativo</strong></div>
    </div>
    <div class="grid-2">
      <button class="card stack" data-flow="normal"><strong>Consulta</strong><span class="muted">Coberto</span></button>
      <button class="card stack" data-flow="avulso"><strong>Exame</strong><span class="muted">Oferta avulsa</span></button>
    </div>
    ${scenarioCard}
    <div class="card stack">
      <h3>Proximas etapas</h3>
      <div class="list-row"><span>Escolher rede</span>${badge("Autorizada")}</div>
      <div class="list-row"><span>Acompanhar atendimento</span>${badge("Em analise")}</div>
    </div>
  </div>`;
}

function clientPlan() {
  return `<div class="mobile-page stack">
    <div class="mobile-header"><div><p class="eyebrow">Contrato CN-9328</p><h2>Meu plano</h2></div>${badge("Ativo")}</div>
    <div class="card plan-card stack"><h2>Familiar</h2><p>Titular, dependentes, exames simples e rede local.</p><strong>${money(169)}/mes</strong></div>
    <div class="card stack"><h3>Dependentes</h3>${["Lucas Alves", "Helena Alves"].map(name => `<div class="list-row"><span>${name}</span>${badge("Ativo")}</div>`).join("")}</div>
    <div class="card stack"><h3>Cobranca</h3><div class="list-row"><span>Setembro</span>${badge("Pago")}</div><button class="ghost">Ver historico financeiro</button></div>
  </div>`;
}

function clientNetwork() {
  return `<div class="mobile-page stack">
    <div class="mobile-header"><div><p class="eyebrow">Rede credenciada</p><h2>Prestadores proximos</h2></div><select class="select-like"><option>CE</option><option>PE</option><option>RN</option></select></div>
    ${data.providers.slice(0, 5).map(provider => `<div class="card stack"><div class="row-between"><strong>${provider.name}</strong>${badge(provider.status)}</div><p class="muted">${provider.specialty} | ${provider.state} | SLA ${provider.sla}</p><button class="ghost">Selecionar prestador</button></div>`).join("")}
  </div>`;
}

function clientHistory() {
  return `<div class="mobile-page stack">
    <div class="mobile-header"><div><p class="eyebrow">Historico</p><h2>Atendimentos</h2></div></div>
    ${data.requests.map(request => `<div class="card stack"><div class="row-between"><strong>${request.service}</strong>${badge(request.status)}</div><p class="muted">${request.id} | ${request.client} | codigo ${request.code}</p></div>`).join("")}
  </div>`;
}

function clientProfile() {
  return `<div class="mobile-page stack">
    <div class="mobile-header"><div><p class="eyebrow">Perfil</p><h2>Marina Alves</h2></div><div class="avatar">MA</div></div>
    <div class="card stack"><h3>Dados protegidos</h3><p class="muted">Documentos, termos e dados sensiveis aparecem como placeholders no prototipo.</p></div>
    <div class="card stack"><h3>Notificacoes</h3><div class="list-row"><span>Autorizacao emitida</span><span class="meta">Agora</span></div><div class="list-row"><span>Cobranca paga</span><span class="meta">Ontem</span></div></div>
    <button class="ghost">Ajuda e suporte</button>
  </div>`;
}

function renderOffice() {
  document.getElementById("officeSummary").innerHTML = [
    ["MRR", money(28470), "+12% mes"],
    ["Clientes", "12 mock", "3 estados"],
    ["Inadimplencia", "8,6%", "2 contratos"],
    ["Margem", "34%", "centro consolidado"],
  ].map(([label, value, hint]) => `<div class="card metric"><div><span class="muted">${label}</span><strong>${value}</strong></div><span class="chip info">${hint}</span></div>`).join("");

  const content = {
    dashboard: officeDashboard,
    clients: officeClients,
    contracts: officeContracts,
    operation: officeOperation,
    providers: officeProviders,
    finance: officeFinance,
    results: officeResults,
    contingency: officeContingency,
    audit: officeAudit,
  }[state.officePage];
  document.getElementById("officeMain").innerHTML = content();
  document.getElementById("officeAside").innerHTML = officeAside();
}

function officeDashboard() {
  return `<div class="card stack"><div class="row-between"><div><p class="eyebrow">Visao executiva</p><h2>Carteira, receita e operacao</h2></div>${badge("Ativo")}</div>
    <div class="kpi-grid">
      <div><span class="muted">Utilizacao</span><div class="progress"><span style="width:68%"></span></div></div>
      <div><span class="muted">SLA rede</span><div class="progress"><span style="width:82%"></span></div></div>
      <div><span class="muted">Recebiveis</span><div class="progress"><span style="width:74%"></span></div></div>
      <div><span class="muted">Auditoria</span><div class="progress"><span style="width:55%"></span></div></div>
    </div>
  </div>${table("Solicitacoes recentes", ["ID", "Cliente", "Status", "Codigo"], data.requests.map(r => [r.id, r.client, badge(r.status), r.code]))}`;
}

function officeClients() {
  return table("Clientes", ["Nome", "Plano", "Estado", "Status"], data.clients.map((name, index) => [name, data.plans[index % 3].name, ["CE", "PE", "RN"][index % 3], badge(index === 5 ? "Atrasado" : "Ativo")]));
}

function officeContracts() {
  return table("Contratos e recorrencia", ["Contrato", "Cliente", "Plano", "Situacao"], data.clients.slice(0, 10).map((name, index) => [`CN-${9300 + index}`, name, data.plans[index % 3].name, badge(index === 2 ? "A vencer" : "Ativo")]));
}

function officeOperation() {
  return table("Operacao e autorizacoes", ["ID", "Servico", "Status", "Codigo"], data.requests.map(r => [r.id, r.service, badge(r.status), r.code]));
}

function officeProviders() {
  return table("Prestadores por estado", ["Prestador", "UF", "Especialidade", "Status"], data.providers.map(p => [p.name, p.state, p.specialty, badge(p.status)]));
}

function officeFinance() {
  return table("Cobrancas", ["Cliente", "Valor", "Vencimento", "Status"], data.bills.map(b => [b.client, money(b.amount), b.due, badge(b.status)]));
}

function officeResults() {
  return `<div class="card stack"><p class="eyebrow">Centro de resultados</p><h2>Receitas e despesas mockadas</h2>
    ${[["CE", 14200, 8100], ["PE", 7960, 5100], ["RN", 6310, 4200]].map(([uf, revenue, cost]) => `<div><div class="row-between"><strong>${uf}</strong><span>${money(revenue - cost)} margem</span></div><div class="progress"><span style="width:${Math.round(((revenue - cost) / revenue) * 100)}%"></span></div><p class="muted">Receita ${money(revenue)} | Despesa ${money(cost)}</p></div>`).join("")}
  </div>`;
}

function officeContingency() {
  return table("Eventos de contingencia", ["ID", "Motivo", "Risco", "Auditoria"], data.contingencies.map(c => [c.id, c.reason, c.risk, badge(c.audit)]));
}

function officeAudit() {
  return `<div class="card stack"><p class="eyebrow">Auditoria visual</p><h2>Trilha de eventos</h2>
    ${["Login cliente", "Elegibilidade consultada", "Codigo emitido", "Prestador notificado", "Pagamento mock registrado"].map((event, index) => `<div class="list-row"><span>${event}</span><span class="meta">AUD-${1200 + index}</span></div>`).join("")}
  </div>`;
}

function officeAside() {
  return `<div class="card stack"><p class="eyebrow">Alertas</p><h3>Pontos para OWNER</h3>
    <div class="list-row"><span>2 contingencias exigem revisao</span>${badge("Pendente")}</div>
    <div class="list-row"><span>1 prestador aguardando ativacao</span>${badge("Em analise")}</div>
    <div class="list-row"><span>2 cobrancas atrasadas</span>${badge("Atrasado")}</div>
  </div>
  <div class="card stack"><p class="eyebrow">Premissas</p><p class="muted">CuraNexo e fonte de verdade de contratos, elegibilidade, cobranca e auditoria. Integracoes futuras ficam fora deste prototipo.</p></div>`;
}

function table(title, headers, rows) {
  return `<div class="card table stack"><div class="row-between"><div><p class="eyebrow">Mock data</p><h2>${title}</h2></div><button class="ghost">Filtrar</button></div>
    <div class="table-head">${headers.map(header => `<span>${header}</span>`).join("")}</div>
    ${rows.map(row => `<div class="table-row">${row.map(cell => `<span>${cell}</span>`).join("")}</div>`).join("")}
  </div>`;
}

document.addEventListener("click", event => {
  const mode = event.target.closest("[data-mode]")?.dataset.mode;
  const nav = event.target.closest("[data-nav]")?.dataset.nav;
  const mobile = event.target.closest("[data-mobile]")?.dataset.mobile;
  const flow = event.target.closest("[data-flow]")?.dataset.flow;
  const clientJump = event.target.closest("[data-client-jump]")?.dataset.clientJump;
  const officeJump = event.target.closest("[data-office-jump]")?.dataset.officeJump;

  if (mode) state.mode = mode;
  if (nav && state.mode === "client") state.clientPage = nav;
  if (nav && state.mode === "office") state.officePage = nav;
  if (mobile) state.clientPage = mobile;
  if (flow) state.scenario = flow === "pay" ? "avulso pago" : flow;
  if (clientJump) state.clientPage = clientJump;
  if (officeJump) {
    state.mode = "office";
    state.officePage = officeJump;
  }
  render();
});

document.getElementById("toggleScenario").addEventListener("click", () => {
  const cycle = ["normal", "avulso", "contingencia"];
  state.scenario = cycle[(cycle.indexOf(state.scenario) + 1) % cycle.length];
  render();
});

document.getElementById("primaryAction").addEventListener("click", () => {
  if (state.mode === "client") {
    state.clientPage = "home";
    state.scenario = "normal";
  } else {
    state.officePage = "dashboard";
  }
  render();
});

render();
