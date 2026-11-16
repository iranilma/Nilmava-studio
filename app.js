/**
 * NILMA VA — INDEPENDENT DIGITAL SOLUTIONS & PRODUCT STUDIO
 * Interactive Engine: Bilingual Dictionary, 3D WebGL Canvas, Experience Simulator & Modals
 * (c) 2026 Nilma Fernandes
 */

// ==========================================================================
// 1. BILINGUAL DICTIONARY (ENGLISH & BRAZILIAN PORTUGUESE)
// ==========================================================================
const i18n = {
  en: {
    // Navigation
    nav_brand_tag: "STUDIO 2026",
    nav_capabilities: "Capabilities",
    nav_experiences: "Experiences",
    nav_work: "Selected Work",
    nav_tech: "Tech Stack",
    nav_process: "Process",
    nav_about: "About",
    nav_contact: "Contact",
    nav_cta: "Let's Collaborate",

    // Hero Section
    hero_status: "STUDIO OPERATIONAL · ACCEPTING HIGH-IMPACT PROJECTS",
    hero_eyebrow: "INDEPENDENT DIGITAL STUDIO · 2026",
    hero_title_1: "Ideas deserve to become",
    hero_title_highlight: "something real.",
    hero_subtitle: "Let's build it.",
    hero_desc: "Digital solutions, interactive experiences and smarter systems for ambitious businesses.",
    hero_btn_work: "Explore My Work",
    hero_btn_collab: "Let's Collaborate",
    hero_tele_phuket: "PHUKET / UTC+7",
    hero_tele_status: "AVAILABLE FOR SELECT WORK",
    hero_tele_focus: "WEB APPS · PWAS · AUTOMATION · AI",

    // Floating Panels
    panel_hub_title: "Nilma Business Hub",
    panel_hub_desc: "Unified multi-brand operations OS",
    panel_hub_status: "SYSTEM ACTIVE",
    panel_auto_title: "Automation Workflows",
    panel_auto_desc: "n8n & Make intelligent pipelines",
    panel_auto_uptime: "99.9% UPTIME",
    panel_pwa_title: "Interactive PWAs",
    panel_pwa_desc: "Offline-ready digital products",
    panel_pwa_metric: "21-DAY ENGINE",

    // Section 01: Capabilities
    cap_eyebrow: "DISCIPLINES & CAPABILITIES",
    cap_heading: "Technology should make business easier.",
    cap_subhead: "Four specialized disciplines designed to eliminate operational friction and turn complex challenges into seamless digital reality.",

    cap_1_num: "01 // WEB ARCHITECTURE",
    cap_1_title: "Website Care & Digital Support",
    cap_1_desc: "WordPress and Elementor maintenance, updates, backups, security, website troubleshooting, performance improvements and digital support.",
    
    cap_2_num: "02 // INTERACTIVE SOFTWARE",
    cap_2_title: "Interactive Digital Tools",
    cap_2_desc: "Interactive dashboards, business tools, calculators, assessments, PWAs, client portals and no-code/low-code prototypes.",

    cap_3_num: "03 // SYSTEMS ARCHITECTURE",
    cap_3_title: "Automation & AI Workflows",
    cap_3_desc: "Make, Zapier and n8n automations, AI integrations, customer onboarding, email workflows and connected business systems.",

    cap_4_num: "04 // DIGITAL VENTURES",
    cap_4_title: "Digital Product Studio",
    cap_4_desc: "Digital product development, interactive guides, digital storefronts, product experiences and custom applications.",

    // Section 02: Digital Experiences Simulator
    sim_eyebrow: "LIVE INTERACTION PLAYGROUND",
    sim_heading: "From ideas to interactive experiences.",
    sim_subhead: "Don't just imagine how your system looks—explore live interactive architectural prototypes built for modern business performance.",
    
    tab_dashboard: "01 // Operations Dashboard",
    tab_automation: "02 // Automation Flow Engine",
    tab_assessment: "03 // Interactive Assessment",
    tab_pwa: "04 // Offline-Ready PWA",

    // Simulator View 1: Dashboard
    dash_metric_rev: "MONTHLY RUN-RATE",
    dash_metric_uptime: "SYSTEM STABILITY",
    dash_metric_tasks: "ACTIVE AUTOMATIONS",
    dash_audit_title: "REAL-TIME TELEMETRY STREAM",
    dash_log_1: "[14:22:04] Webhook received from Stripe → Order #8491 confirmed",
    dash_log_2: "[14:22:05] Supabase DB record synced → Customer PWA profile initiated",
    dash_log_3: "[14:22:06] n8n AI onboarding email sequence deployed with dynamic PDF",

    // Simulator View 2: Automation
    auto_trigger_btn: "Simulate Webhook Trigger ⚡",
    auto_node_1: "Inbound Webhook",
    auto_node_1_sub: "Store Event / Form",
    auto_node_2: "AI Transformation",
    auto_node_2_sub: "Content / Scoring",
    auto_node_3: "PostgreSQL DB",
    auto_node_3_sub: "Supabase Vault",
    auto_node_4: "Client Delivery",
    auto_node_4_sub: "Instant Notification",

    // Simulator View 3: Assessment
    assess_title: "Digital Maturity Quick Gauge",
    assess_slider_1: "Website Performance & Security",
    assess_slider_2: "Workflow & CRM Automation",
    assess_slider_3: "Customer Journey & Analytics",
    assess_score_label: "Calculated Digital Index:",
    assess_advice: "Recommendation: Prioritize automated onboarding and unified dashboard metrics.",

    // Simulator View 4: PWA
    pwa_sim_title: "Guided PWA Micro-Simulator",
    pwa_sim_sub: "Offline-Ready Health & Habit Framework",
    pwa_day_label: "DAY 08 OF 21 · MINDFUL HORMONAL BALANCE",
    pwa_prompt_label: "Daily Reflection Log:",
    pwa_prompt_placeholder: "Type your observation here... (Data persists offline)",
    pwa_save_btn: "Store in Local Offline Cache",

    // Section 03: Selected Work
    work_eyebrow: "PORTFOLIO & CASE STUDIES",
    work_heading: "Ideas designed, built and brought to life.",
    work_subhead: "A curated collection of proprietary platforms, client websites, interactive web apps, and digital product suites.",
    
    filter_all: "All Works (7)",
    filter_apps: "Web Apps & PWAs",
    filter_products: "Digital Products",
    filter_clients: "Client Websites",
    filter_tools: "Interactive Tools",

    proj_hub_title: "Nilma Business Hub",
    proj_hub_type: "PROPRIETARY PLATFORM · MULTI-BRAND OS",
    proj_hub_desc: "Unified multi-brand business operating system with strategic planning, automation diagrams, content tools and financial analytics.",
    
    proj_harmonious_title: "The Harmonious Home™",
    proj_harmonious_type: "DIGITAL PRODUCT SUITE · STOREFRONT",
    proj_harmonious_desc: "Home organization digital product suite, printable planners, cleaning checklists and digital storefront.",

    proj_menopause_title: "Phoenix Menopause Reset™",
    proj_menopause_type: "PROGRESSIVE WEB APP (PWA)",
    proj_menopause_desc: "Interactive 21-day guided PWA with reflection prompts, tracking and offline reader support.",

    proj_clarity_title: "Digital Clarity Check",
    proj_clarity_type: "INTERACTIVE ASSESSMENT TOOL",
    proj_clarity_desc: "Interactive digital maturity assessment with a personalized action roadmap.",

    proj_boutique_title: "Little Moments Boutique",
    proj_boutique_type: "FAITH-BASED DIGITAL STATIONERY",
    proj_boutique_desc: "Faith-based educational digital stationery and printable products.",

    proj_realestate_title: "CM Top Estate",
    proj_realestate_type: "INTERNATIONAL REAL ESTATE WEBSITE",
    proj_realestate_desc: "International real estate website with property filtering and inquiry workflows.",

    proj_resort_title: "Ocean View Treasure",
    proj_resort_type: "BOUTIQUE BEACHFRONT RESORT",
    proj_resort_desc: "Boutique beachfront resort website with room galleries and direct reservation pathways.",

    btn_view_details: "Explore Architecture",
    btn_launch_live: "Launch Live Experience ↗",

    // Section 04: Technology & Expertise
    tech_eyebrow: "STACK & INFRASTRUCTURE",
    tech_heading: "The tools behind the ideas.",
    tech_subhead: "A disciplined, modern technical stack engineered for dependability, performance, and real business results.",

    tech_col_1: "Development & Data",
    tech_col_2: "CMS & Commerce",
    tech_col_3: "Automation & AI",
    tech_col_4: "Operations & Leadership",

    // Section 05: How I Work (Process)
    proc_eyebrow: "STRUCTURED EXECUTION",
    proc_heading: "From the first idea to the final solution.",
    proc_subhead: "A transparent, collaborative three-phase framework engineered to deliver high-impact results without friction.",

    step_1_num: "PHASE 01",
    step_1_title: "Clarify & Scope",
    step_1_desc: "Understand the business, challenge or idea. We map requirements, audit current tools, identify constraints, and establish clear operational milestones.",

    step_2_num: "PHASE 02",
    step_2_title: "Design & Prototype",
    step_2_desc: "Define the right approach and create the solution. Interactive wireframes, modern visual styling, and technical architecture are rapidly validated.",

    step_3_num: "PHASE 03",
    step_3_title: "Implement & Launch",
    step_3_desc: "Build, test and deliver a dependable experience. Rigorous cross-device testing, full deployment, documentation, and continuous ongoing support.",

    // Section 06: About Nilma
    about_eyebrow: "FOUNDER & INDEPENDENT DIRECTOR",
    about_heading: "The person behind the digital solutions.",
    about_p1: "Hello, I’m Nilma Fernandes. I combine creative technology, hands-on digital systems development, and strategic operations to turn ambitious ideas into dependable, beautiful digital reality.",
    about_p2: "Holding an MSc in Oil & Gas Management (Coventry University, UK) and a BSc in Business Administration, my background bridges high-touch multi-unit facility and hospitality leadership with more than 8 years of freelance web design, e-commerce catalog operations, and automated digital systems.",
    about_p3: "When you work with NILMA VA, you work directly with me. No agency bloat, no outsourced handoffs—just focused expertise, technical excellence, and personal dedication to your vision.",

    cred_1_title: "MSc Management",
    cred_1_sub: "Coventry University, UK",
    cred_2_title: "BSc Business Admin",
    cred_2_sub: "ULBRA (Brazil)",
    cred_3_title: "8+ Years Track Record",
    cred_3_sub: "Web Design, PWAs & Systems",
    cred_4_title: "Bilingual Fluency",
    cred_4_sub: "English & Portuguese",

    // Section 07: Let's Collaborate
    collab_eyebrow: "INITIATE COLLABORATION",
    collab_heading: "What would you love to bring to life?",
    collab_subhead: "Whether you need dependable website support, a custom digital tool or smarter automated workflows, let's explore what we can build together.",
    collab_direct_title: "DIRECT STUDIO CHANNEL",
    collab_direct_desc: "Prefer sending an email directly? Reach out anytime with your project brief or inquiry:",
    collab_phuket_loc: "Patong, Phuket, Thailand · Global Remote",

    form_name_label: "YOUR NAME / ORGANIZATION",
    form_name_ph: "e.g. Alex Morgan",
    form_email_label: "EMAIL ADDRESS",
    form_email_ph: "alex@company.com",
    form_type_label: "PROJECT DISCIPLINE",
    form_type_opt_1: "Website Care & Digital Support",
    form_type_opt_2: "Interactive Digital Tool / Dashboard",
    form_type_opt_3: "Automation & AI Workflows",
    form_type_opt_4: "Digital Product Studio / Storefront",
    form_type_opt_5: "Full Digital Infrastructure Audit",
    form_msg_label: "PROJECT VISION & GOALS",
    form_msg_ph: "Tell me about your goals, current bottlenecks, or the idea you'd love to build...",
    form_submit_btn: "Send Project Inquiry ⚡",

    // Footer
    footer_desc: "Independent Digital Solutions & Product Studio. Creative technology, practical tools and smarter business systems.",
    footer_copy: "© 2026 Nilma Fernandes. All rights reserved. Built with precision.",
    footer_coords: "8.0863° N, 98.2965° E · PHUKET, THAILAND"
  },

  pt: {
    // Navigation
    nav_brand_tag: "ESTÚDIO 2026",
    nav_capabilities: "Capacidades",
    nav_experiences: "Experiências",
    nav_work: "Trabalhos",
    nav_tech: "Tecnologias",
    nav_process: "Metodologia",
    nav_about: "Sobre",
    nav_contact: "Contato",
    nav_cta: "Vamos Conversar",

    // Hero Section
    hero_status: "ESTÚDIO EM OPERAÇÃO · ACEITANDO PROJETOS DE ALTO IMPACTO",
    hero_eyebrow: "ESTÚDIO DIGITAL INDEPENDENTE · 2026",
    hero_title_1: "Ideias merecem se tornar",
    hero_title_highlight: "algo real.",
    hero_subtitle: "Vamos construir.",
    hero_desc: "Soluções digitais, experiências interativas e sistemas mais inteligentes para negócios ambiciosos.",
    hero_btn_work: "Explorar Projetos",
    hero_btn_collab: "Iniciar Projeto",
    hero_tele_phuket: "PHUKET / UTC+7",
    hero_tele_status: "DISPONÍVEL PARA NOVOS PROJETOS",
    hero_tele_focus: "WEB APPS · PWAS · AUTOMAÇÃO · IA",

    // Floating Panels
    panel_hub_title: "Nilma Business Hub",
    panel_hub_desc: "Sistema operacional multi-marcas",
    panel_hub_status: "SISTEMA ONLINE",
    panel_auto_title: "Fluxos de Automação",
    panel_auto_desc: "Esteiras inteligentes n8n & Make",
    panel_auto_uptime: "99.9% UPTIME",
    panel_pwa_title: "PWAs Interativos",
    panel_pwa_desc: "Produtos com suporte offline",
    panel_pwa_metric: "SISTEMA 21 DIAS",

    // Section 01: Capabilities
    cap_eyebrow: "DISCIPLINAS & CAPACIDADES",
    cap_heading: "A tecnologia deve tornar os negócios mais simples.",
    cap_subhead: "Quatro disciplinas especializadas criadas para eliminar o atrito operacional e transformar desafios complexos em realidade digital fluida.",

    cap_1_num: "01 // ARQUITETURA WEB",
    cap_1_title: "Cuidado de Websites & Suporte Digital",
    cap_1_desc: "Manutenção de WordPress e Elementor, atualizações, backups, segurança, resolução de falhas técnicas, otimizações de velocidade e suporte digital dedicado.",
    
    cap_2_num: "02 // SOFTWARE INTERATIVO",
    cap_2_title: "Ferramentas Digitais Interativas",
    cap_2_desc: "Dashboards interativos, ferramentas de negócios, calculadoras, diagnósticos dinâmicos, PWAs, portais de clientes e protótipos ágeis no-code/low-code.",

    cap_3_num: "03 // ENGENHARIA DE SISTEMAS",
    cap_3_title: "Automação & Fluxos de IA",
    cap_3_desc: "Automações com Make, Zapier e n8n, integrações práticas com IA, onboarding de clientes, automações de e-mail e sistemas comerciais integrados.",

    cap_4_num: "04 // ESTÚDIO DE PRODUTOS",
    cap_4_title: "Estúdio de Produtos Digitais",
    cap_4_desc: "Desenvolvimento de produtos digitais, guias interativos, vitrines e e-commerces, experiências de produto e aplicações sob medida.",

    // Section 02: Digital Experiences Simulator
    sim_eyebrow: "SIMULADOR DE EXPERIÊNCIAS AO VIVO",
    sim_heading: "De ideias a experiências interativas.",
    sim_subhead: "Não imagine apenas a interface do seu sistema—explore protótipos funcionais interativos desenvolvidos para máxima performance comercial.",
    
    tab_dashboard: "01 // Painel Operacional",
    tab_automation: "02 // Motor de Automação",
    tab_assessment: "03 // Diagnóstico Interativo",
    tab_pwa: "04 // PWA com Suporte Offline",

    // Simulator View 1: Dashboard
    dash_metric_rev: "RECEITA EM TEMPO REAL",
    dash_metric_uptime: "ESTABILIDADE DO SISTEMA",
    dash_metric_tasks: "AUTOMAÇÕES ATIVAS",
    dash_audit_title: "LOGS DE TELEMETRIA EM TEMPO REAL",
    dash_log_1: "[14:22:04] Webhook do Stripe processado → Pedido #8491 confirmado",
    dash_log_2: "[14:22:05] Banco Supabase sincronizado → Perfil PWA do cliente gerado",
    dash_log_3: "[14:22:06] Fluxo n8n com IA enviou e-mail de boas-vindas com PDF personalizado",

    // Simulator View 2: Automation
    auto_trigger_btn: "Disparar Webhook de Teste ⚡",
    auto_node_1: "Webhook de Entrada",
    auto_node_1_sub: "Loja / Formulário",
    auto_node_2: "Processamento IA",
    auto_node_2_sub: "Pontuação / Resumo",
    auto_node_3: "Banco PostgreSQL",
    auto_node_3_sub: "Supabase Conectado",
    auto_node_4: "Entrega ao Cliente",
    auto_node_4_sub: "Notificação Imediata",

    // Simulator View 3: Assessment
    assess_title: "Termômetro Rápido de Maturidade Digital",
    assess_slider_1: "Performance & Segurança do Website",
    assess_slider_2: "Automação de Processos & CRM",
    assess_slider_3: "Jornada do Cliente & Métricas",
    assess_score_label: "Índice Digital Calculado:",
    assess_advice: "Recomendação: Priorizar esteira de onboarding automatizada e consolidação de métricas em dashboard.",

    // Simulator View 4: PWA
    pwa_sim_title: "Micro-Simulador de PWA Guiado",
    pwa_sim_sub: "Estrutura de Hábitos e Bem-Estar com Modo Offline",
    pwa_day_label: "DIA 08 DE 21 · EQUILÍBRIO HORMONAL PLENO",
    pwa_prompt_label: "Registro de Reflexão do Dia:",
    pwa_prompt_placeholder: "Escreva suas anotações aqui... (Salvo mesmo sem internet)",
    pwa_save_btn: "Salvar no Cache Local",

    // Section 03: Selected Work
    work_eyebrow: "PORTFÓLIO & ESTUDOS DE CASO",
    work_heading: "Ideias concebidas, construídas e trazidas à vida.",
    work_subhead: "Uma seleção de plataformas proprietárias, sites de clientes, aplicações web interativas e suítes de produtos digitais.",
    
    filter_all: "Todos os Trabalhos (7)",
    filter_apps: "Web Apps & PWAs",
    filter_products: "Produtos Digitais",
    filter_clients: "Sites de Clientes",
    filter_tools: "Ferramentas Interativas",

    proj_hub_title: "Nilma Business Hub",
    proj_hub_type: "PLATAFORMA PROPRIETÁRIA · OS MULTI-MARCAS",
    proj_hub_desc: "Sistema operacional de negócios multi-marcas com planejamento estratégico, diagramas de automação n8n/Make, copiloto de conteúdo e métricas financeiras.",
    
    proj_harmonious_title: "The Harmonious Home™",
    proj_harmonious_type: "SUÍTE DE PRODUTOS DIGITAIS · E-COMMERCE",
    proj_harmonious_desc: "Suíte de produtos para organização da casa, planners imprimíveis em alta resolução, checklists de limpeza e vitrine virtual.",

    proj_menopause_title: "Phoenix Menopause Reset™",
    proj_menopause_type: "APLICAÇÃO WEB PROGRESSIVA (PWA)",
    proj_menopause_desc: "PWA interativo com jornada guiada de 21 dias, registros diários de reflexão, acompanhamento e suporte a leitura offline.",

    proj_clarity_title: "Digital Clarity Check",
    proj_clarity_type: "FERRAMENTA DE DIAGNÓSTICO INTERATIVO",
    proj_clarity_desc: "Diagnóstico interativo de maturidade digital com cálculo em tempo real e plano de ação personalizado.",

    proj_boutique_title: "Little Moments Boutique",
    proj_boutique_type: "PAPELARIA DIGITAL COM BASE EM VALORES",
    proj_boutique_desc: "Papelaria digital educativa e produtos imprimíveis baseados em valores espirituais e familiares.",

    proj_realestate_title: "CM Top Estate",
    proj_realestate_type: "PORTAL IMOBILIÁRIO INTERNACIONAL",
    proj_realestate_desc: "Website imobiliário internacional com filtros avançados de busca de propriedades e captação de clientes.",

    proj_resort_title: "Ocean View Treasure",
    proj_resort_type: "RESORT BOUTIQUE BEIRA-MAR",
    proj_resort_desc: "Website para resort boutique à beira-mar com galerias de acomodações e fluxos diretos para reservas.",

    btn_view_details: "Ver Arquitetura",
    btn_launch_live: "Acessar Experiência ↗",

    // Section 04: Technology & Expertise
    tech_eyebrow: "INFRAESTRUTURA TÉCNICA",
    tech_heading: "As ferramentas por trás das ideias.",
    tech_subhead: "Uma stack técnica disciplinada e moderna, projetada para estabilidade, alta velocidade e resultados tangíveis de negócio.",

    tech_col_1: "Desenvolvimento & Dados",
    tech_col_2: "CMS & Comércio",
    tech_col_3: "Automação & IA",
    tech_col_4: "Operações & Gestão",

    // Section 05: How I Work (Process)
    proc_eyebrow: "EXECUÇÃO ESTRUTURADA",
    proc_heading: "Da primeira ideia à solução final.",
    proc_subhead: "Uma metodologia transparente e colaborativa em três etapas, desenvolvida para entregar alto impacto sem burocracia.",

    step_1_num: "FASE 01",
    step_1_title: "Clarificar & Escopar",
    step_1_desc: "Compreender profundamente o negócio, desafio ou ideia. Mapeamos requisitos técnicos, eliminamos gargalos e definimos marcos claros.",

    step_2_num: "FASE 02",
    step_2_title: "Projetar & Prototipar",
    step_2_desc: "Definir a melhor abordagem e criar a solução. Validamos wireframes interativos, interfaces visuais de alto padrão e a arquitetura técnica.",

    step_3_num: "FASE 03",
    step_3_title: "Implementar & Lançar",
    step_3_desc: "Construir, testar exaustivamente e entregar uma experiência sólida. Deploy seguro, documentação técnica e acompanhamento contínuo.",

    // Section 06: About Nilma
    about_eyebrow: "FUNDADORA & DIRETORA INDEPENDENTE",
    about_heading: "A pessoa por trás das soluções digitais.",
    about_p1: "Olá, sou a Nilma Fernandes. Uno tecnologia criativa, engenharia prática de sistemas digitais e gestão estratégica para transformar ideias ambiciosas em soluções digitais elegantes e confiáveis.",
    about_p2: "Com Mestrado (MSc) em Gestão de Petróleo e Gás pela Coventry University (Reino Unido) e Bacharelado em Administração de Empresas, minha trajetória une gestão operacional presencial de alta exigência (fitness e hospitalidade) a mais de 8 anos criando websites, e-commerces e sistemas digitais automatizados.",
    about_p3: "Ao trabalhar com o NILMA VA, você lida diretamente comigo. Sem intermediários, sem repasses—apenas foco técnico rigoroso, atenção pessoal aos detalhes e comprometimento absoluto com a sua visão.",

    cred_1_title: "Mestrado (MSc) Gestão",
    cred_1_sub: "Coventry University, Reino Unido",
    cred_2_title: "Bacharelado Administração",
    cred_2_sub: "ULBRA (Brasil)",
    cred_3_title: "8+ Anos de Experiência",
    cred_3_sub: "Web Design, PWAs & Sistemas",
    cred_4_title: "Fluência Bilíngue",
    cred_4_sub: "Inglês e Português",

    // Section 07: Let's Collaborate
    collab_eyebrow: "INICIAR PARCERIA",
    collab_heading: "O que você gostaria de transformar em realidade?",
    collab_subhead: "Quer você precise de suporte contínuo para o seu site, uma ferramenta digital sob medida ou fluxos inteligentes de automação, vamos conversar sobre o que podemos construir.",
    collab_direct_title: "CANAL DIRETO DO ESTÚDIO",
    collab_direct_desc: "Prefere enviar um e-mail direto com o resumo da sua necessidade? Estou à disposição:",
    collab_phuket_loc: "Patong, Phuket, Tailândia · Atendimento Global",

    form_name_label: "SEU NOME / EMPRESA",
    form_name_ph: "ex.: Marina Silva",
    form_email_label: "E-MAIL DE CONTATO",
    form_email_ph: "marina@empresa.com",
    form_type_label: "DISCIPLINA DO PROJETO",
    form_type_opt_1: "Cuidado de Websites & Suporte Digital",
    form_type_opt_2: "Ferramenta Digital Interativa / Painel",
    form_type_opt_3: "Automação & Fluxos de IA",
    form_type_opt_4: "Estúdio de Produtos Digitais / E-commerce",
    form_type_opt_5: "Diagnóstico Completo de Infraestrutura Digital",
    form_msg_label: "VISÃO E DETALHES DO PROJETO",
    form_msg_ph: "Conte sobre seus objetivos, desafios atuais ou a ideia que você quer construir...",
    form_submit_btn: "Enviar Proposta de Projeto ⚡",

    // Footer
    footer_desc: "Estúdio Independente de Soluções Digitais e Produtos. Tecnologia criativa, ferramentas práticas e sistemas operacionais mais inteligentes.",
    footer_copy: "© 2026 Nilma Fernandes. Todos os direitos reservados. Engenharia digital de precisão.",
    footer_coords: "8.0863° N, 98.2965° E · PHUKET, TAILÂNDIA"
  }
};

let currentLang = 'en';

// Set language function
function setLanguage(lang) {
  if (!i18n[lang]) return;
  currentLang = lang;
  document.documentElement.lang = lang;
  localStorage.setItem('nilma_lang', lang);

  // Update active state on language pills
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });

  // Update all elements with data-i18n
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (i18n[lang][key]) {
      el.textContent = i18n[lang][key];
    }
  });

  // Update placeholders
  document.querySelectorAll('[data-i18n-ph]').forEach(el => {
    const key = el.getAttribute('data-i18n-ph');
    if (i18n[lang][key]) {
      el.placeholder = i18n[lang][key];
    }
  });

  // Dispatch custom event for custom components (e.g. simulator)
  window.dispatchEvent(new CustomEvent('languageChanged', { detail: { lang } }));
}


// ==========================================================================
// 2. INTERACTIVE 3D WEBGL/CANVAS CENTERPIECE (CHROME LATTICE SCULPTURE)
// ==========================================================================
class FuturisticSculpture {
  constructor(canvasId) {
    this.canvas = document.getElementById(canvasId);
    if (!this.canvas) return;
    this.ctx = this.canvas.getContext('2d');
    this.width = this.canvas.width = this.canvas.offsetWidth * window.devicePixelRatio;
    this.height = this.canvas.height = this.canvas.offsetHeight * window.devicePixelRatio;
    
    this.rotX = 0.2;
    this.rotY = 0.4;
    this.targetRotX = 0.2;
    this.targetRotY = 0.4;
    this.mouseHover = false;

    this.points = [];
    this.edges = [];
    this.generateGeometry();

    this.initEvents();
    this.animate();
  }

  generateGeometry() {
    // Generate an avant-garde stellated icosahedron / geodesic chrome lattice
    const phi = (1 + Math.sqrt(5)) / 2;
    const baseVertices = [
      [-1, phi, 0], [1, phi, 0], [-1, -phi, 0], [1, -phi, 0],
      [0, -1, phi], [0, 1, phi], [0, -1, -phi], [0, 1, -phi],
      [phi, 0, -1], [phi, 0, 1], [-phi, 0, -1], [-phi, 0, 1]
    ];

    const scale = 110 * window.devicePixelRatio;
    baseVertices.forEach(v => {
      this.points.push({ x: v[0] * scale, y: v[1] * scale, z: v[2] * scale });
    });

    // Add satellite chrome orbital rings
    const ringSegments = 24;
    const rRing = 190 * window.devicePixelRatio;
    for (let i = 0; i < ringSegments; i++) {
      const theta = (i / ringSegments) * Math.PI * 2;
      this.points.push({
        x: Math.cos(theta) * rRing,
        y: Math.sin(theta) * (rRing * 0.35),
        z: Math.sin(theta) * (rRing * 0.95),
        isRing: true
      });
    }

    // Connect edges for primary mesh
    for (let i = 0; i < 12; i++) {
      for (let j = i + 1; j < 12; j++) {
        const dx = baseVertices[i][0] - baseVertices[j][0];
        const dy = baseVertices[i][1] - baseVertices[j][1];
        const dz = baseVertices[i][2] - baseVertices[j][2];
        const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);
        if (Math.abs(dist - 2) < 0.1) {
          this.edges.push([i, j]);
        }
      }
    }
  }

  initEvents() {
    window.addEventListener('resize', () => {
      if (!this.canvas) return;
      this.width = this.canvas.width = this.canvas.offsetWidth * window.devicePixelRatio;
      this.height = this.canvas.height = this.canvas.offsetHeight * window.devicePixelRatio;
    });

    window.addEventListener('mousemove', (e) => {
      const rect = this.canvas.getBoundingClientRect();
      const x = e.clientX - (rect.left + rect.width / 2);
      const y = e.clientY - (rect.top + rect.height / 2);
      this.targetRotY = (x / rect.width) * 1.5;
      this.targetRotX = -(y / rect.height) * 1.5;
    });
  }

  animate() {
    requestAnimationFrame(() => this.animate());

    // Auto idle rotation
    this.rotY += (this.targetRotY - this.rotY) * 0.05 + 0.005;
    this.rotX += (this.targetRotX - this.rotX) * 0.05;

    this.ctx.clearRect(0, 0, this.width, this.height);

    const cx = this.width / 2;
    const cy = this.height / 2;
    const cosY = Math.cos(this.rotY);
    const sinY = Math.sin(this.rotY);
    const cosX = Math.cos(this.rotX);
    const sinX = Math.sin(this.rotX);

    // Project points
    const projected = this.points.map(p => {
      // Rotate Y
      let x1 = p.x * cosY + p.z * sinY;
      let y1 = p.y;
      let z1 = -p.x * sinY + p.z * cosY;

      // Rotate X
      let x2 = x1;
      let y2 = y1 * cosX - z1 * sinX;
      let z2 = y1 * sinX + z1 * cosX;

      const fov = 420 * window.devicePixelRatio;
      const factor = fov / (fov + z2 + 250);
      return {
        x: cx + x2 * factor,
        y: cy + y2 * factor,
        z: z2,
        factor: factor,
        isRing: p.isRing
      };
    });

    // Draw connecting chrome edges
    this.ctx.lineWidth = 1.6 * window.devicePixelRatio;
    this.edges.forEach(([i, j]) => {
      const p1 = projected[i];
      const p2 = projected[j];
      const avgZ = (p1.z + p2.z) / 2;
      const alpha = Math.max(0.15, (avgZ + 150) / 300);

      const grad = this.ctx.createLinearGradient(p1.x, p1.y, p2.x, p2.y);
      grad.addColorStop(0, `rgba(185, 255, 57, ${alpha * 0.8})`);
      grad.addColorStop(0.5, `rgba(217, 224, 213, ${alpha * 0.95})`);
      grad.addColorStop(1, `rgba(185, 255, 57, ${alpha * 0.5})`);

      this.ctx.strokeStyle = grad;
      this.ctx.beginPath();
      this.ctx.moveTo(p1.x, p1.y);
      this.ctx.lineTo(p2.x, p2.y);
      this.ctx.stroke();
    });

    // Draw vertex nodes and ring particles
    projected.forEach(p => {
      const radius = (p.isRing ? 2.5 : 4) * p.factor;
      const alpha = Math.max(0.2, (p.z + 180) / 320);

      this.ctx.beginPath();
      this.ctx.arc(p.x, p.y, radius, 0, Math.PI * 2);
      this.ctx.fillStyle = p.isRing ? `rgba(185, 255, 57, ${alpha * 0.6})` : `rgba(255, 255, 255, ${alpha})`;
      this.ctx.shadowColor = '#B9FF39';
      this.ctx.shadowBlur = p.isRing ? 6 : 14;
      this.ctx.fill();
      this.ctx.shadowBlur = 0;
    });
  }
}


// ==========================================================================
// 3. EXPERIENCE SIMULATOR INTERACTION ENGINE
// ==========================================================================
function initExperienceSimulator() {
  const tabs = document.querySelectorAll('.sim-tab-btn');
  const views = document.querySelectorAll('.sim-view');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      views.forEach(v => v.classList.remove('active'));

      tab.classList.add('active');
      const targetId = tab.dataset.view;
      const targetView = document.getElementById(targetId);
      if (targetView) targetView.classList.add('active');
    });
  });

  // Simulator: Trigger Automation Simulation
  const triggerBtn = document.getElementById('btnSimTrigger');
  const nodes = document.querySelectorAll('.workflow-node');
  const pulse = document.querySelector('.connector-pulse');

  if (triggerBtn) {
    triggerBtn.addEventListener('click', () => {
      triggerBtn.disabled = true;
      triggerBtn.textContent = currentLang === 'pt' ? 'Executando Pipeline...' : 'Executing Pipeline...';

      nodes.forEach((n, idx) => {
        setTimeout(() => {
          nodes.forEach(node => node.classList.remove('active-node'));
          n.classList.add('active-node');
        }, idx * 600);
      });

      setTimeout(() => {
        nodes.forEach(node => node.classList.remove('active-node'));
        triggerBtn.disabled = false;
        triggerBtn.textContent = i18n[currentLang].auto_trigger_btn;
      }, 2800);
    });
  }

  // Simulator: Maturity Calculator Sliders
  const sliders = document.querySelectorAll('.calc-slider');
  const scoreDisplay = document.getElementById('calcScoreDisplay');

  function calculateMaturity() {
    if (!sliders.length || !scoreDisplay) return;
    let sum = 0;
    sliders.forEach(s => sum += parseInt(s.value, 10));
    const avg = Math.round(sum / sliders.length);
    scoreDisplay.textContent = `${avg}/100`;
  }

  sliders.forEach(s => s.addEventListener('input', calculateMaturity));
}


// ==========================================================================
// 4. EDITORIAL PORTFOLIO FILTERS & MODAL SHOWCASE
// ==========================================================================
const projectDetails = {
  hub: {
    title: "Nilma Business Hub",
    badge: "PROPRIETARY PLATFORM · MULTI-BRAND OS",
    desc_en: "An all-in-one business operating system tailored for solopreneurs and multi-brand operators. Features automated revenue forecasting, live n8n pipeline diagrams, content co-pilot and automated client reporting.",
    desc_pt: "Sistema operacional completo para negócios digitais e operadores multi-marcas. Conta com projeção financeira automatizada, visualizador de fluxos n8n, copiloto de conteúdo e relatórios integrados.",
    tech: ["Python", "Supabase", "PostgreSQL", "TailwindCSS", "n8n Webhooks"],
    action_label: "Request Custom Architecture",
    action_url: "#contact"
  },
  harmonious: {
    title: "The Harmonious Home™",
    badge: "DIGITAL PRODUCT SUITE · STOREFRONT",
    desc_en: "A comprehensive digital organization system designed for modern households. Includes room-by-room printable guides, daily reset frameworks, and high-conversion e-commerce storefront.",
    desc_pt: "Sistema digital completo de organização doméstica para famílias modernas. Inclui planners imprimíveis de alta resolução, rotinas semanais e vitrine de e-commerce de alta conversão.",
    tech: ["E-Commerce", "PDF Dynamic Engine", "Elementor Pro", "Stripe Checkout"],
    action_label: "Inquire About Digital Products",
    action_url: "#contact"
  },
  menopause: {
    title: "Phoenix Menopause Reset™",
    badge: "PROGRESSIVE WEB APP (PWA)",
    desc_en: "An interactive, compassionate 21-day digital companion PWA. Features daily guided reflection journals, habit checkpoints, and offline reader architecture powered by Service Workers.",
    desc_pt: "PWA compassivo e interativo de 21 dias. Traz diários de reflexão diária, acompanhamento de hábitos e arquitetura de leitura 100% offline via Service Workers.",
    tech: ["PWA", "Service Workers", "Local Storage", "Responsive UI"],
    action_label: "Launch Live PWA ↗",
    action_url: "https://phoenix21days-menopause-reset.lovable.app/"
  },
  clarity: {
    title: "Digital Clarity Check",
    badge: "INTERACTIVE ASSESSMENT TOOL",
    desc_en: "A proprietary web assessment tool that audits a business's digital maturity in under 3 minutes, generating an actionable, tailored optimization roadmap.",
    desc_pt: "Ferramenta proprietária de diagnóstico web que audita a maturidade digital de empresas em menos de 3 minutos, gerando um plano de ação personalizado.",
    tech: ["JavaScript Engine", "Dynamic Scoring", "Tailwind UI"],
    action_label: "Run Free Assessment ↗",
    action_url: "digital-clarity-check.html"
  },
  boutique: {
    title: "Little Moments Boutique",
    badge: "FAITH-BASED DIGITAL STATIONERY",
    desc_en: "Digital stationery brand featuring vector devotionals, educational printable stationery, and high-volume automated digital delivery via Shopify.",
    desc_pt: "Marca de papelaria digital com devocionais em vetor, recursos educativos para impressão e distribuição digital automatizada via Shopify.",
    tech: ["Shopify Store", "Digital Downloads", "Vector Asset Design"],
    action_label: "Inquire About Digital Stores",
    action_url: "#contact"
  },
  realestate: {
    title: "CM Top Estate",
    badge: "INTERNATIONAL REAL ESTATE WEBSITE",
    desc_en: "Luxury real estate property portal in Phuket featuring dynamic location filtering, villa catalogs, and integrated multi-channel lead capture pipelines.",
    desc_pt: "Portal imobiliário de luxo em Phuket com filtros dinâmicos de localização, catálogo de vilas e esteiras de captação de leads qualificados.",
    tech: ["WordPress", "Custom Filters", "CRM Integration"],
    action_label: "Visit Live Website ↗",
    action_url: "https://cm-topestate.com/"
  },
  resort: {
    title: "Ocean View Treasure",
    badge: "BOUTIQUE BEACHFRONT RESORT",
    desc_en: "Boutique hospitality web presence for beachfront villas with room visualizers, localized experiences guide, and commission-free direct booking pathways.",
    desc_pt: "Website para resort boutique à beira-mar com visualizador de acomodações, guia local e fluxo direto para reservas sem comissão.",
    tech: ["Hospitality UI", "Direct Booking Gateway", "High-Resolution Media"],
    action_label: "Visit Live Website ↗",
    action_url: "https://oceanviewtreasure.com/"
  }
};

function initPortfolio() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');
  const grid = document.querySelector('.portfolio-editorial-grid');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.dataset.filter;
      let visibleCount = 0;

      projectCards.forEach(card => {
        const categories = card.dataset.category.split(' ');
        if (filter === 'all' || categories.includes(filter)) {
          card.style.display = 'flex';
          visibleCount++;
        } else {
          card.style.display = 'none';
        }
      });

      if (grid) {
        if (filter === 'all') {
          grid.classList.remove('is-filtered');
          grid.removeAttribute('data-visible-count');
        } else {
          grid.classList.add('is-filtered');
          grid.setAttribute('data-visible-count', visibleCount);
        }
      }
    });
  });

  // Modal handler
  const modal = document.getElementById('projectModal');
  const modalClose = document.getElementById('modalCloseBtn');
  const modalTitle = document.getElementById('modalTitle');
  const modalBadge = document.getElementById('modalBadge');
  const modalDesc = document.getElementById('modalDesc');
  const modalTechList = document.getElementById('modalTechList');
  const modalActionBtn = document.getElementById('modalActionBtn');

  document.querySelectorAll('.open-modal-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const key = btn.dataset.project;
      const data = projectDetails[key];
      if (!data) return;

      modalTitle.textContent = data.title;
      modalBadge.textContent = data.badge;
      modalDesc.textContent = currentLang === 'pt' ? data.desc_pt : data.desc_en;
      modalActionBtn.textContent = data.action_label;
      modalActionBtn.href = data.action_url;
      if (data.action_url.startsWith('http')) {
        modalActionBtn.target = '_blank';
        modalActionBtn.rel = 'noopener';
      } else {
        modalActionBtn.removeAttribute('target');
      }

      modalTechList.innerHTML = '';
      data.tech.forEach(t => {
        const li = document.createElement('span');
        li.className = 'tech-tag';
        li.textContent = t;
        modalTechList.appendChild(li);
      });

      modal.classList.add('open');
      document.body.style.overflow = 'hidden';
    });
  });

  if (modalClose && modal) {
    modalClose.addEventListener('click', () => {
      modal.classList.remove('open');
      document.body.style.overflow = '';
    });

    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.classList.remove('open');
        document.body.style.overflow = '';
      }
    });
  }
}


// ==========================================================================
// 5. PROJECT INQUIRY FORM VALIDATION & HANDLING (WEB3FORMS + RESILIENT FALLBACK)
// ==========================================================================
function initContactForm() {
  const form = document.getElementById('projectInquiryForm');
  const statusMsg = document.getElementById('formStatusMsg');
  const submitBtn = form ? form.querySelector('button[type="submit"]') : null;
  const submitBtnText = submitBtn ? submitBtn.querySelector('span') : null;

  if (!form) return;

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const name = form.elements['name'] ? form.elements['name'].value.trim() : '';
    const email = form.elements['email'] ? form.elements['email'].value.trim() : '';
    const type = form.elements['project_type'] ? form.elements['project_type'].value : 'General Inquiry';
    const message = form.elements['message'] ? form.elements['message'].value.trim() : '';
    const botcheck = form.elements['botcheck'] ? form.elements['botcheck'].checked : false;

    // Silent honeypot abort if bot filled the hidden checkbox
    if (botcheck) return;

    if (!name || !email || !message) {
      statusMsg.innerHTML = currentLang === 'pt' 
        ? "⚠️ Por favor, preencha todos os campos obrigatórios." 
        : "⚠️ Please complete all required fields.";
      statusMsg.style.color = "#ff5f56";
      return;
    }

    // Basic email format validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      statusMsg.innerHTML = currentLang === 'pt'
        ? "⚠️ Por favor, informe um endereço de e-mail válido."
        : "⚠️ Please enter a valid email address.";
      statusMsg.style.color = "#ff5f56";
      return;
    }

    // Set loading state
    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.style.opacity = '0.7';
      submitBtn.style.cursor = 'wait';
    }
    if (submitBtnText) {
      submitBtnText.textContent = currentLang === 'pt'
        ? "Transmitindo Proposta..."
        : "Transmitting Telemetry...";
    }
    statusMsg.innerHTML = currentLang === 'pt'
      ? `<span style="color:var(--text-sage);">Enviando com segurança para a caixa postal de Nilma Fernandes...</span>`
      : `<span style="color:var(--text-sage);">Securing direct transmission to Nilma Fernandes...</span>`;

    const payload = {
      access_key: "a7556596-3d23-41f8-bf7a-5aba3156cea9",
      name: name,
      email: email,
      project_type: type,
      message: message,
      from_name: "Nilma VA Studio",
      subject: `[Nilma VA Studio] New Inquiry: ${type} — ${name}`,
      replyto: email
    };

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(payload)
      });

      const json = await response.json();

      if (response.status === 200 && json.success) {
        statusMsg.innerHTML = currentLang === 'pt'
          ? `<div style="background: rgba(185,255,57,0.08); border: 1px solid var(--accent-lime); border-radius: 6px; padding: 0.85rem; color: var(--accent-lime); line-height: 1.45; text-align: left;">
              <strong style="display:block; margin-bottom: 4px; font-size: 0.95rem;">✓ Proposta enviada com sucesso!</strong>
              Nilma recebeu sua mensagem diretamente no e-mail e responderá em até 24–48 horas para <em>${email}</em>.
            </div>`
          : `<div style="background: rgba(185,255,57,0.08); border: 1px solid var(--accent-lime); border-radius: 6px; padding: 0.85rem; color: var(--accent-lime); line-height: 1.45; text-align: left;">
              <strong style="display:block; margin-bottom: 4px; font-size: 0.95rem;">✓ Inquiry Transmitted Successfully!</strong>
              Nilma has received your project details and will review your scope within 24–48 hours at <em>${email}</em>.
            </div>`;
        form.reset();
      } else {
        throw new Error(json.message || "Transmission failed");
      }
    } catch (err) {
      console.warn("Web3Forms transmission error:", err);
      // Resilient fallback mailto link
      const fallbackSubject = encodeURIComponent(`[Project Inquiry] ${type} — ${name}`);
      const fallbackBody = encodeURIComponent(`Name: ${name}\nEmail: ${email}\nProject Type: ${type}\n\nProject Scope & Message:\n${message}\n\nSent via Nilma VA Studio`);
      const fallbackMailto = `mailto:nilmavadesign@gmail.com?subject=${fallbackSubject}&body=${fallbackBody}`;

      statusMsg.innerHTML = currentLang === 'pt'
        ? `<div style="background: rgba(255,95,86,0.1); border: 1px solid #ff5f56; border-radius: 6px; padding: 0.85rem; color: #ff9e99; line-height: 1.45; text-align: left;">
            <strong style="display:block; margin-bottom: 4px; color: #ff5f56;">Instabilidade momentânea de conexão.</strong>
            Não se preocupe: <a href="${fallbackMailto}" style="color:var(--accent-lime); text-decoration: underline; font-weight:600;">clique aqui para enviar via e-mail</a> diretamente para <em>nilmavadesign@gmail.com</em>.
          </div>`
        : `<div style="background: rgba(255,95,86,0.1); border: 1px solid #ff5f56; border-radius: 6px; padding: 0.85rem; color: #ff9e99; line-height: 1.45; text-align: left;">
            <strong style="display:block; margin-bottom: 4px; color: #ff5f56;">Connection timeout encountered.</strong>
            No problem: <a href="${fallbackMailto}" style="color:var(--accent-lime); text-decoration: underline; font-weight:600;">click here to send directly via email</a> to <em>nilmavadesign@gmail.com</em>.
          </div>`;
    } finally {
      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.style.opacity = '1';
        submitBtn.style.cursor = 'pointer';
      }
      if (submitBtnText) {
        submitBtnText.textContent = currentLang === 'pt'
          ? (translations.pt.form_submit_btn || 'Enviar Proposta de Projeto ⚡')
          : (translations.en.form_submit_btn || 'Send Project Inquiry ⚡');
      }
    }
  });
}


// ==========================================================================
// 6. TELEMETRY TIME & STUDIO CLOCK
// ==========================================================================
function initStudioClock() {
  const clockEl = document.getElementById('studioClock');
  if (!clockEl) return;

  function updateTime() {
    // Phuket / Thailand is UTC+7
    const now = new Date();
    const utc = now.getTime() + (now.getTimezoneOffset() * 60000);
    const phuketDate = new Date(utc + (3600000 * 7));
    
    const h = String(phuketDate.getHours()).padStart(2, '0');
    const m = String(phuketDate.getMinutes()).padStart(2, '0');
    const s = String(phuketDate.getSeconds()).padStart(2, '0');

    clockEl.textContent = `${h}:${m}:${s} [UTC+7]`;
  }

  updateTime();
  setInterval(updateTime, 1000);
}


// ==========================================================================
// 7. AMBIENT CURSOR GLOW & NAV SCROLL
// ==========================================================================
function initVisualPolish() {
  // Cursor glow
  const glow = document.querySelector('.cursor-glow');
  if (glow && window.matchMedia('(pointer: fine)').matches) {
    window.addEventListener('mousemove', (e) => {
      glow.style.left = `${e.clientX}px`;
      glow.style.top = `${e.clientY}px`;
    });
  }

  // Nav scroll styling
  const nav = document.querySelector('.site-nav');
  if (nav) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 40) {
        nav.classList.add('scrolled');
      } else {
        nav.classList.remove('scrolled');
      }
    });
  }

  // Mobile menu toggle
  const mobileToggle = document.getElementById('mobileToggle');
  const navLinks = document.querySelector('.nav-links');
  if (mobileToggle && navLinks) {
    mobileToggle.addEventListener('click', () => {
      navLinks.classList.toggle('mobile-open');
    });

    document.querySelectorAll('.nav-links a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('mobile-open');
      });
    });
  }
}


// ==========================================================================
// INITIALIZATION
// ==========================================================================
document.addEventListener('DOMContentLoaded', () => {
  // 1. Language preference check
  const savedLang = localStorage.getItem('nilma_lang') || 'en';
  setLanguage(savedLang);

  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      setLanguage(btn.dataset.lang);
    });
  });

  // 2. 3D WebGL / Canvas Centerpiece
  new FuturisticSculpture('heroCanvas');

  // 3. Components
  initExperienceSimulator();
  initPortfolio();
  initContactForm();
  initStudioClock();
  initVisualPolish();
});
