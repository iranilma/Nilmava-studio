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
    nav_showreel: "Showreel",
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

    // Section 03: Studio Showreel & Selected Work
    showreel_eyebrow: "THE STUDIO IN MOTION · 2026 REEL",
    showreel_heading: "Ideas. Systems. Experiences. Built to work.",
    showreel_subhead: "A closer look at the digital worlds, interactive tools and business systems taking shape inside Nilma VA Studio.",
    showreel_badge: "STUDIO REEL",
    showreel_scope_text: "15 Platforms · PWAs · Dashboards · Products",

    work_eyebrow: "PORTFOLIO & CASE STUDIES",
    work_heading: "Ideas designed, built and brought to life.",
    work_subhead: "A curated collection of proprietary platforms, client websites, interactive web apps, and digital product suites.",
    
    filter_all: "All Works (15)",
    filter_apps: "Web Apps & PWAs",
    filter_dashboards: "Dashboards & Systems",
    filter_products: "Digital Products",
    filter_educational: "Education & Coaching",
    filter_clients: "Client & Editorial",

    // Project 01: Nilma Business Dashboard
    badge_hub: "MULTI-BRAND OS · CENTRAL COMMAND",
    proj_hub_title: "Nilma Business Dashboard",
    proj_hub_type: "BUSINESS INTELLIGENCE / MULTI-BRAND OS",
    proj_hub_desc: "A unified central command dashboard organizing multi-brand operations across 6 workspaces, active projects, launch countdowns, revenue tracking and automated workflows.",
    btn_discuss_hub: "Discuss Custom Hub ↗",

    // Project 02: Phoenix Menopause Reset PWA
    badge_menopause: "PROGRESSIVE WEB APP",
    proj_menopause_title: "Phoenix Menopause Reset™",
    proj_menopause_type: "PROGRESSIVE WEB APP (PWA)",
    proj_menopause_desc: "Interactive 21-day guided PWA with reflection prompts, tracking and offline reader support.",

    // Project 03: 365 Days With Jesus (New 01)
    badge_jesus365: "DIGITAL DEVOTIONAL SUITE",
    proj_jesus365_title: "365 Days With Jesus",
    proj_jesus365_type: "DIGITAL PRODUCTS / EDUCATIONAL EXPERIENCES",
    proj_jesus365_desc: "A complete digital devotional experience designed to bring daily Scripture, reflection, prayer and faith-based encouragement into everyday life.",
    btn_inquire_edition: "Discuss Devotional Project ↗",

    // Project 04: Ciência da Papinha (New 02)
    badge_papinha: "EDUCATIONAL PLATFORM",
    proj_papinha_title: "Ciência da Papinha",
    proj_papinha_type: "EDUCATIONAL WEBSITES / DIGITAL PRODUCTS",
    proj_papinha_desc: "An educational digital experience focused on introducing solid foods to babies with scientific knowledge, practical guidance and a welcoming learning environment.",
    btn_inquire_platform: "Discuss EdTech Platform ↗",

    // Project 05: Nilma VA Real Estate (New 05 - Featured)
    badge_realestate_crm: "ENTERPRISE BI · CRM OPERATING SUITE",
    proj_realestate_crm_title: "Nilma VA Real Estate",
    proj_realestate_crm_type: "BUSINESS INTELLIGENCE / CRM / BUSINESS SYSTEMS",
    proj_realestate_crm_desc: "A business operating dashboard designed to organize real estate operations, including leads, buyers, sellers, properties, listings, financial performance and sales pipelines.",
    btn_request_crm: "Request Custom Business System ↗",

    // Project 06: Meu Portal Sagrado (New 03)
    badge_sagrado: "PERSONAL DIGITAL SANCTUARY",
    proj_sagrado_title: "Meu Portal Sagrado",
    proj_sagrado_type: "INTERACTIVE DASHBOARDS / PERSONAL DIGITAL SYSTEMS",
    proj_sagrado_desc: "A personal digital sanctuary bringing together daily practices, guided reflections, journaling, study resources and progress tracking.",
    btn_inquire_sanctuary: "Discuss Personal Dashboard ↗",

    // Project 07: Phoenix Menopause Reset Dashboard (New 07)
    badge_phoenix_reset_dash: "21-DAY GUIDED DASHBOARD",
    proj_phoenix_reset_dash_title: "Phoenix Menopause Reset Dashboard",
    proj_phoenix_reset_dash_type: "PROGRESSIVE WEB APPLICATIONS / DIGITAL WELLNESS",
    proj_phoenix_reset_dash_desc: "An interactive 21-day guided experience designed around three phases: Reset, Rebuild and Rise.",
    btn_inquire_pwa_system: "Discuss Wellness PWA ↗",

    // Project 08: Thai Quest (New 08 - Featured)
    badge_thaiquest: "EDTECH APPLICATION · LANGUAGE LEARNING",
    proj_thaiquest_title: "Thai Quest",
    proj_thaiquest_type: "EDUCATIONAL APPLICATIONS / LANGUAGE LEARNING",
    proj_thaiquest_desc: "An interactive Thai-language learning application designed around practical lessons, Thai script, romanization, daily learning and progress tracking.",
    btn_inquire_edtech: "Discuss EdTech Application ↗",

    // Project 09: Phoenix Menopause Method™ (New 06)
    badge_phoenix_method: "COACHING PLATFORM",
    proj_phoenix_method_title: "Phoenix Menopause Method™",
    proj_phoenix_method_type: "COACHING PLATFORMS / BRAND EXPERIENCES",
    proj_phoenix_method_desc: "A premium coaching website presenting a personalized six-week private coaching experience for women navigating menopause.",
    btn_inquire_coaching: "Inquire Coaching Site ↗",

    // Project 02: The Harmonious Home™
    badge_harmonious: "FENG SHUI DASHBOARD · INTERACTIVE PDF",
    proj_harmonious_title: "The Harmonious Home™",
    proj_harmonious_type: "INTERACTIVE DASHBOARDS / DIGITAL PUBLICATION SUITES",
    proj_harmonious_desc: "A comprehensive Feng Shui sanctuary dashboard featuring the 7-Day Home Harmony Journey, interactive fillable PDF workbooks, Bagua energy atlas, and habit streak tracking.",
    btn_inquire_storefront: "Discuss PDF Dashboard ↗",

    // Project 10: Nilma Phuket (New 04)
    badge_phuket: "EDITORIAL PLATFORM",
    proj_phuket_title: "Nilma Phuket",
    proj_phuket_type: "BRAND WEBSITES / LIFESTYLE PUBLISHING",
    proj_phuket_desc: "A lifestyle editorial platform combining fitness, travel and everyday life in Phuket, with a distinctive tropical visual identity.",
    btn_inquire_editorial: "Discuss Editorial Site ↗",

    // Project 11: Spicy & Wild™
    badge_spicywild: "ADULT FETISH DIGITAL BOUTIQUE",
    proj_spicywild_title: "Spicy & Wild™",
    proj_spicywild_type: "DIGITAL PRODUCTS / PRIVATE MEMBERS BOUTIQUE",
    proj_spicywild_desc: "A private digital salon creating high-design workbooks, provocative card decks, intimacy rituals, and somatic educational guides for sovereign, consenting adults.",
    btn_inquire_boutique: "Inquire Digital Boutique ↗",

    // Project 12: Little Moments Kids Boutique
    badge_boutique: "KIDS DIGITAL PRINTABLES · E-COMMERCE",
    proj_boutique_title: "Little Moments Kids Boutique",
    proj_boutique_type: "EDUCATIONAL DIGITAL PRODUCTS / KIDS STORE",
    proj_boutique_desc: "Educational, creative and fun digital printables to support children's development, featuring learning resources, activity books, daily routines and Christian kids printables.",
    btn_inquire_kids_store: "Discuss Kids Storefront ↗",

    // Project 13: CM Top Estate
    badge_cm_topestate: "LUXURY REAL ESTATE PORTAL",
    proj_realestate_title: "CM Top Estate",
    proj_realestate_type: "INTERNATIONAL REAL ESTATE WEBSITE",
    proj_realestate_desc: "International real estate website with property filtering and inquiry workflows.",

    // Project 14: Ocean View Treasure
    badge_ocean_view: "HOSPITALITY WEB PLATFORM",
    proj_resort_title: "Ocean View Treasure",
    proj_resort_type: "BOUTIQUE BEACHFRONT RESORT",
    proj_resort_desc: "Boutique beachfront resort website with room galleries and direct reservation pathways.",

    // Project 15: Digital Clarity Check
    badge_clarity: "INTERACTIVE ASSESSMENT TOOL",
    proj_clarity_title: "Digital Clarity Check",
    proj_clarity_type: "INTERACTIVE ASSESSMENT TOOL",
    proj_clarity_desc: "Interactive digital maturity assessment with a personalized action roadmap.",
    btn_launch_assessment: "Launch Assessment ↗",
    btn_launch_live: "Launch Live Experience ↗",
    btn_view_details: "Explore Architecture",

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
    nav_showreel: "Showreel",
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

    // Section 03: Studio Showreel & Selected Work
    showreel_eyebrow: "O ESTÚDIO EM MOVIMENTO · REEL 2026",
    showreel_heading: "Ideias. Sistemas. Experiências. Construídos para funcionar.",
    showreel_subhead: "Um olhar detalhado sobre os mundos digitais, ferramentas interativas e sistemas operacionais criados no Nilma VA Studio.",
    showreel_badge: "REEL DO ESTÚDIO",
    showreel_scope_text: "15 Plataformas · PWAs · Dashboards · Produtos",

    work_eyebrow: "PORTFÓLIO & ESTUDOS DE CASO",
    work_heading: "Ideias concebidas, construídas e trazidas à vida.",
    work_subhead: "Uma seleção de plataformas proprietárias, sites de clientes, aplicações web interativas e suítes de produtos digitais.",
    
    filter_all: "Todos os Trabalhos (15)",
    filter_apps: "Web Apps & PWAs",
    filter_dashboards: "Painéis & Sistemas",
    filter_products: "Produtos Digitais",
    filter_educational: "Educação & Mentoria",
    filter_clients: "Clientes & Editorial",

    // Project 01: Nilma Business Dashboard
    badge_hub: "OS MULTI-MARCAS · COMANDO CENTRAL",
    proj_hub_title: "Nilma Business Dashboard",
    proj_hub_type: "BUSINESS INTELLIGENCE / OS MULTI-MARCAS",
    proj_hub_desc: "Painel de comando central unificado organizando operações multi-marcas em 6 workspaces, projetos ativos, lançamentos, métricas financeiras e automações.",
    btn_discuss_hub: "Solicitar Hub Sob Medida ↗",

    // Project 02: Phoenix Menopause Reset PWA
    badge_menopause: "APLICAÇÃO WEB PROGRESSIVA (PWA)",
    proj_menopause_title: "Phoenix Menopause Reset™",
    proj_menopause_type: "APLICAÇÃO WEB PROGRESSIVA (PWA)",
    proj_menopause_desc: "PWA interativo com jornada guiada de 21 dias, registros diários de reflexão, acompanhamento e suporte a leitura offline.",

    // Project 03: 365 Days With Jesus (New 01)
    badge_jesus365: "SUÍTE DEVOCIONAL DIGITAL",
    proj_jesus365_title: "365 Days With Jesus",
    proj_jesus365_type: "PRODUTOS DIGITAIS / EXPERIÊNCIAS EDUCATIVAS",
    proj_jesus365_desc: "Uma experiência devocional digital completa, projetada para trazer passagens bíblicas diárias, reflexão, oração e encorajamento para o dia a dia.",
    btn_inquire_edition: "Conversar Sobre Projeto Devocional ↗",

    // Project 04: Ciência da Papinha (New 02)
    badge_papinha: "PLATAFORMA EDUCATIVA",
    proj_papinha_title: "Ciência da Papinha",
    proj_papinha_type: "WEBSITES EDUCATIVOS / PRODUTOS DIGITAIS",
    proj_papinha_desc: "Uma experiência digital educativa focada na introdução alimentar de bebês com base científica, orientações práticas e um ambiente de aprendizado acolhedor.",
    btn_inquire_platform: "Conversar Sobre Plataforma EdTech ↗",

    // Project 05: Nilma VA Real Estate (New 05 - Featured)
    badge_realestate_crm: "ENTERPRISE BI · SISTEMA OPERACIONAL & CRM",
    proj_realestate_crm_title: "Nilma VA Real Estate",
    proj_realestate_crm_type: "BUSINESS INTELLIGENCE / CRM / SISTEMAS DE GESTÃO",
    proj_realestate_crm_desc: "Um painel operacional de negócios projetado para organizar operações imobiliárias, incluindo leads, compradores, vendedores, propriedades, portfólio, desempenho financeiro e funis de vendas.",
    btn_request_crm: "Solicitar Sistema Sob Medida ↗",

    // Project 06: Meu Portal Sagrado (New 03)
    badge_sagrado: "SANTUÁRIO DIGITAL PESSOAL",
    proj_sagrado_title: "Meu Portal Sagrado",
    proj_sagrado_type: "DASHBOARDS INTERATIVOS / SISTEMAS PESSOAIS",
    proj_sagrado_desc: "Um santuário digital pessoal que reúne práticas diárias, reflexões guiadas, diário pessoal, biblioteca de estudos e acompanhamento de evolução.",
    btn_inquire_sanctuary: "Conversar Sobre Dashboard Pessoal ↗",

    // Project 07: Phoenix Menopause Reset Dashboard (New 07)
    badge_phoenix_reset_dash: "PAINEL GUIADO DE 21 DIAS",
    proj_phoenix_reset_dash_title: "Phoenix Menopause Reset Dashboard",
    proj_phoenix_reset_dash_type: "PROGRESSIVE WEB APPS / BEM-ESTAR DIGITAL",
    proj_phoenix_reset_dash_desc: "Uma experiência guiada interativa de 21 dias estruturada em três fases transformadoras: Reset, Rebuild e Rise.",
    btn_inquire_pwa_system: "Conversar Sobre PWA de Bem-Estar ↗",

    // Project 08: Thai Quest (New 08 - Featured)
    badge_thaiquest: "APLICAÇÃO EDTECH · APRENDIZADO DE TAILANDÊS",
    proj_thaiquest_title: "Thai Quest",
    proj_thaiquest_type: "APLICAÇÕES EDUCATIVAS / APRENDIZADO DE IDIOMAS",
    proj_thaiquest_desc: "Uma aplicação interativa para aprendizado da língua tailandesa com lições práticas, escrita tailandesa, romanização, rotina diária e métricas de progresso.",
    btn_inquire_edtech: "Conversar Sobre Aplicação de Idiomas ↗",

    // Project 09: Phoenix Menopause Method™ (New 06)
    badge_phoenix_method: "PLATAFORMA DE MENTORIA",
    proj_phoenix_method_title: "Phoenix Menopause Method™",
    proj_phoenix_method_type: "PLATAFORMAS DE MENTORIA / EXPERIÊNCIAS DE MARCA",
    proj_phoenix_method_desc: "Um website de mentoria premium apresentando uma experiência personalizada de seis semanas para mulheres durante a transição da menopausa.",
    btn_inquire_coaching: "Consultar Mentoria & Plataforma ↗",

    // Project 10: The Harmonious Home™
    badge_harmonious: "DASHBOARD FENG SHUI · PDF INTERATIVO",
    proj_harmonious_title: "The Harmonious Home™",
    proj_harmonious_type: "DASHBOARDS INTERATIVOS / PUBLICAÇÕES DIGITAIS",
    proj_harmonious_desc: "Dashboard de santuário Feng Shui com a Jornada de 7 Dias para Harmonia no Lar, cadernos de exercícios interativos em PDF preenchível, atlas de energia Bagua e acompanhamento de hábitos.",
    btn_inquire_storefront: "Conversar Sobre Dashboard PDF ↗",

    // Project 11: Nilma Phuket (New 04)
    badge_phuket: "PLATAFORMA EDITORIAL",
    proj_phuket_title: "Nilma Phuket",
    proj_phuket_type: "SITES DE MARCA / PUBLICAÇÃO EDITORIAL",
    proj_phuket_desc: "Uma plataforma editorial de lifestyle que une fitness, viagens e vida cotidiana em Phuket, com uma identidade visual tropical marcante.",
    btn_inquire_editorial: "Conversar Sobre Site Editorial ↗",

    // Project 12: Spicy & Wild™
    badge_spicywild: "BOUTIQUE DIGITAL ADULTA / FETISH",
    proj_spicywild_title: "Spicy & Wild™",
    proj_spicywild_type: "PRODUTOS DIGITAIS / SALÃO EXCLUSIVO DE MEMBROS",
    proj_spicywild_desc: "Um salão digital privado com workbooks de alto padrão visual, decks provocativos de cartas, rituais de intimidade e guias somáticos educativos para adultos conscientes e soberanos.",
    btn_inquire_boutique: "Consultar Boutique Digital ↗",

    // Project 13: Little Moments Kids Boutique
    badge_boutique: "IMPRIMÍVEIS INFANTIS · E-COMMERCE",
    proj_boutique_title: "Little Moments Kids Boutique",
    proj_boutique_type: "PRODUTOS DIGITAIS EDUCATIVOS / LOJA INFANTIL",
    proj_boutique_desc: "Recursos digitais imprimíveis educativos, criativos e divertidos para o desenvolvimento infantil, com materiais de alfabetização, rotinas, planners e imprimíveis cristãos.",
    btn_inquire_kids_store: "Consultar Loja Infantil ↗",

    // Project 14: CM Top Estate
    badge_cm_topestate: "PORTAL IMOBILIÁRIO DE LUXO",
    proj_realestate_title: "CM Top Estate",
    proj_realestate_type: "PORTAL IMOBILIÁRIO INTERNACIONAL",
    proj_realestate_desc: "Website imobiliário internacional com filtros avançados de busca de propriedades e captação de clientes.",

    // Project 15: Ocean View Treasure
    badge_ocean_view: "PLATAFORMA DE HOSPITALIDADE",
    proj_resort_title: "Ocean View Treasure",
    proj_resort_type: "RESORT BOUTIQUE BEIRA-MAR",
    proj_resort_desc: "Website para resort boutique à beira-mar com galerias de acomodações e fluxos diretos para reservas.",

    // Project 16: Digital Clarity Check (Interactive Diagnostic)
    badge_clarity: "FERRAMENTA DE DIAGNÓSTICO INTERATIVO",
    proj_clarity_title: "Digital Clarity Check",
    proj_clarity_type: "FERRAMENTA DE DIAGNÓSTICO INTERATIVO",
    proj_clarity_desc: "Diagnóstico interativo de maturidade digital com cálculo em tempo real e plano de ação personalizado.",
    btn_launch_assessment: "Iniciar Diagnóstico ↗",
    btn_launch_live: "Acessar Experiência ↗",
    btn_view_details: "Explorar Arquitetura",

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
    title: "Nilma Business Dashboard",
    badge: "BUSINESS INTELLIGENCE / MULTI-BRAND OS",
    desc_en: "A unified central command dashboard organizing multi-brand operations across 6 workspaces, active projects, launch countdowns, revenue tracking, and automated workflows.",
    desc_pt: "Painel de comando central unificado organizando operações multi-marcas em 6 workspaces, projetos ativos, contagens regressivas de lançamento, controle de receita e fluxos automatizados.",
    tech: ["Business Intelligence", "Multi-Brand OS", "Workspace Command", "Launch Tracking", "Automated Workflows", "Revenue Telemetry"],
    action_label: "Discuss Custom Dashboard",
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
  jesus365: {
    title: "365 Days With Jesus",
    badge: "DIGITAL DEVOTIONAL SUITE",
    desc_en: "A complete digital devotional experience designed to bring daily Scripture, reflection, prayer and faith-based encouragement into everyday life. Features high-resolution printable PDF editions, daily reflection tracking, and an interactive digital reader.",
    desc_pt: "Uma experiência devocional digital completa, projetada para trazer passagens bíblicas diárias, reflexão, oração e encorajamento para a rotina diária. Inclui edições em PDF de alta qualidade, registro de reflexões e leitor interativo.",
    tech: ["Digital Publishing", "PDF Engine", "Responsive Web", "Stripe Checkout", "Daily Devotional"],
    action_label: "Inquire Devotional Edition",
    action_url: "#contact"
  },
  papinha: {
    title: "Ciência da Papinha",
    badge: "EDUCATIONAL PLATFORM",
    desc_en: "An educational digital experience focused on introducing solid foods to babies with scientific knowledge, practical guidance and a welcoming learning environment. Features course modules, pediatric nutrition guides, and a mobile-friendly learning portal.",
    desc_pt: "Uma experiência digital educativa focada na introdução alimentar de bebês com fundamentação científica, orientações práticas e ambiente acolhedor. Inclui módulos de curso, guias nutricionais e portal responsivo.",
    tech: ["Educational Platform", "Course Experience", "Nutrition Guides", "Responsive Mobile UI", "Video Delivery"],
    action_label: "Discuss EdTech Platform",
    action_url: "#contact"
  },
  realestate_crm: {
    title: "Nilma VA Real Estate",
    badge: "BUSINESS INTELLIGENCE / CRM / BUSINESS SYSTEMS",
    desc_en: "A business operating dashboard designed to organize real estate operations, including leads, buyers, sellers, properties, listings, financial performance and sales pipelines. Provides real-time pipeline visibility, transaction forecasting, and automated client touchpoints.",
    desc_pt: "Um painel operacional de negócios projetado para organizar operações imobiliárias, incluindo leads, compradores, vendedores, propriedades, portfólio, desempenho financeiro e funis de vendas com visibilidade em tempo real.",
    tech: ["Business Intelligence", "Real Estate CRM", "Listing Management", "Sales Pipeline", "Financial Analytics", "Automated Workflow"],
    action_label: "Request Custom Business System",
    action_url: "#contact"
  },
  sagrado: {
    title: "Meu Portal Sagrado",
    badge: "INTERACTIVE DASHBOARDS / PERSONAL DIGITAL SYSTEMS",
    desc_en: "A personal digital sanctuary bringing together daily practices, guided reflections, journaling, study resources and progress tracking. Engineered for mindful daily routines, reflection archives, and offline habit persistence.",
    desc_pt: "Um santuário digital pessoal que reúne práticas diárias, reflexões guiadas, diário pessoal, biblioteca de estudos e acompanhamento de evolução pessoal com armazenamento offline confiável.",
    tech: ["Personal Sanctuary", "Daily Reflections", "Journaling Engine", "Study Library", "Habit Tracking", "PWA Architecture"],
    action_label: "Inquire Sanctuary App",
    action_url: "#contact"
  },
  phoenix_reset_dash: {
    title: "Phoenix Menopause Reset Dashboard",
    badge: "PROGRESSIVE WEB APPLICATIONS / DIGITAL WELLNESS",
    desc_en: "An interactive 21-day guided experience designed around three transformative phases: Reset, Rebuild and Rise. Features interactive daily prompts, activity logs, progress tracking, and mobile-first offline capability.",
    desc_pt: "Uma experiência guiada interativa de 21 dias estruturada em três fases transformadoras: Reset, Rebuild e Rise. Conta com questionários diários interativos, registro de atividades e funcionamento offline.",
    tech: ["Interactive Dashboard", "3-Phase Framework", "Guided Activities", "Progress Tracking", "Mobile PWA", "Local Storage"],
    action_label: "Launch Live PWA ↗",
    action_url: "https://phoenix21days-menopause-reset.lovable.app/"
  },
  thaiquest: {
    title: "Thai Quest",
    badge: "EDUCATIONAL APPLICATIONS / LANGUAGE LEARNING",
    desc_en: "An interactive Thai-language learning application designed around practical lessons, Thai script, romanization, daily learning and progress tracking. Bridges tonal pronunciation, character recognition drills, and conversational travel scenarios.",
    desc_pt: "Uma aplicação interativa para aprendizado da língua tailandesa com lições práticas, escrita tailandesa, romanização, rotina diária e métricas de progresso voltada a viajantes e residentes.",
    tech: ["Learning Dashboard", "Interactive Lessons", "Thai Script Engine", "Romanization", "Progress Tracking", "Mobile Interface"],
    action_label: "Discuss EdTech Application",
    action_url: "#contact"
  },
  phoenix_method: {
    title: "Phoenix Menopause Method™",
    badge: "COACHING PLATFORMS / BRAND EXPERIENCES",
    desc_en: "A premium coaching website presenting a personalized six-week private coaching experience for women navigating menopause. Features compassionate brand positioning, program syllabus breakdown, and private application intake pathways.",
    desc_pt: "Um website de mentoria premium apresentando uma experiência personalizada de seis semanas para mulheres durante a transição da menopausa com posicionamento de marca exclusivo e funil de qualificação.",
    tech: ["Brand Experience", "Coaching Landing Page", "Program Presentation", "Application Journey", "Intake Funnel"],
    action_label: "Inquire Coaching Site",
    action_url: "#contact"
  },
  harmonious: {
    title: "The Harmonious Home™",
    badge: "INTERACTIVE DASHBOARDS / DIGITAL PUBLICATION SUITES",
    desc_en: "A comprehensive Feng Shui sanctuary dashboard featuring the 7-Day Home Harmony Journey, interactive fillable PDF workbooks, Bagua energy atlas, and daily ritual habit tracking.",
    desc_pt: "Dashboard de santuário Feng Shui com a Jornada de 7 Dias para Harmonia no Lar, cadernos de exercícios interativos em PDF preenchível, atlas de energia Bagua e acompanhamento de hábitos.",
    tech: ["Feng Shui Dashboard", "Fillable PDF Engine", "7-Day Reset Journey", "Bagua Energy Atlas", "Interactive Navigation", "Streak Tracking"],
    action_label: "Discuss PDF Dashboard",
    action_url: "#contact"
  },
  phuket: {
    title: "Nilma Phuket",
    badge: "BRAND WEBSITES / LIFESTYLE PUBLISHING",
    desc_en: "A lifestyle editorial platform combining fitness, travel and everyday life in Phuket, with a distinctive tropical visual identity. Features high-impact photography layouts, fitness diaries, and island lifestyle journals.",
    desc_pt: "Uma plataforma editorial de lifestyle que une fitness, viagens e vida cotidiana em Phuket, com uma identidade visual tropical marcante, ensaios fotográficos e crônicas da ilha.",
    tech: ["Editorial Website", "Lifestyle Storytelling", "Fitness & Travel", "Tropical UI", "Responsive Design", "Fast CDN"],
    action_label: "Discuss Editorial Site",
    action_url: "#contact"
  },
  spicywild: {
    title: "Spicy & Wild™",
    badge: "DIGITAL PRODUCTS / PRIVATE MEMBERS BOUTIQUE",
    desc_en: "A private digital salon creating high-design workbooks, provocative card decks, intimacy rituals, and somatic educational guides for sovereign, consenting adults. Built with 100% discreet billing pathways and instantaneous digital fulfillment.",
    desc_pt: "Um salão digital privado com workbooks de alto padrão visual, decks provocativos de cartas, rituais de intimidade e guias somáticos educativos para adultos conscientes e soberanos, com faturamento discreto e entrega instantânea.",
    tech: ["Digital Publishing", "Private Members Salon", "Discreet Checkout", "Instant PDF Delivery", "Mobile-Optimized Vault"],
    action_label: "Inquire Digital Boutique",
    action_url: "#contact"
  },
  boutique: {
    title: "Little Moments Kids Boutique",
    badge: "EDUCATIONAL DIGITAL PRODUCTS / KIDS STORE",
    desc_en: "Educational, creative and fun digital printables to support children's development, featuring learning resources, activity books, daily routines and planners, and Christian kids printables with instant home printing.",
    desc_pt: "Recursos digitais imprimíveis educativos, criativos e divertidos para o desenvolvimento infantil, com materiais de alfabetização, cadernos de atividades, rotinas e planejadores familiares, e imprimíveis cristãos.",
    tech: ["E-Commerce Storefront", "Printable PDF Suite", "Instant Download Delivery", "Mobile Responsive UI", "Collection Filtering"],
    action_label: "Discuss Kids Storefront",
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
  },
  clarity: {
    title: "Digital Clarity Check",
    badge: "INTERACTIVE ASSESSMENT TOOL",
    desc_en: "A proprietary web assessment tool that audits a business's digital maturity in under 3 minutes, generating an actionable, tailored optimization roadmap.",
    desc_pt: "Ferramenta proprietária de diagnóstico web que audita a maturidade digital de empresas em menos de 3 minutos, gerando um plano de ação personalizado.",
    tech: ["JavaScript Engine", "Dynamic Scoring", "Tailwind UI"],
    action_label: "Run Free Assessment ↗",
    action_url: "digital-clarity-check.html"
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

  // Enable opening modal by clicking on card media
  document.querySelectorAll('.project-card').forEach(card => {
    const modalBtn = card.querySelector('.open-modal-btn');
    if (!modalBtn) return;
    const mediaWrap = card.querySelector('.project-media-wrap');
    if (mediaWrap) {
      mediaWrap.style.cursor = 'pointer';
      mediaWrap.addEventListener('click', (e) => {
        if (!e.target.closest('button, a')) {
          modalBtn.click();
        }
      });
    }
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
      access_key: "c6327061-3b64-4170-a680-bfc155bc47ee",
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
              Nilma recebeu sua mensagem e responderá em até 24–48 horas.
            </div>`
          : `<div style="background: rgba(185,255,57,0.08); border: 1px solid var(--accent-lime); border-radius: 6px; padding: 0.85rem; color: var(--accent-lime); line-height: 1.45; text-align: left;">
              <strong style="display:block; margin-bottom: 4px; font-size: 0.95rem;">✓ Inquiry Transmitted Successfully!</strong>
              Nilma has received your project details and will review your scope within 24–48 hours.
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
          ? (i18n.pt.form_submit_btn || 'Enviar Proposta de Projeto ⚡')
          : (i18n.en.form_submit_btn || 'Send Project Inquiry ⚡');
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
// STUDIO CINEMATIC SHOWREEL ENGINE
// ==========================================================================
function initShowreel() {
  const video = document.getElementById('studioShowreel');
  const frame = document.getElementById('showreelCinemaFrame');
  const playOverlay = document.getElementById('showreelPlayOverlay');
  const playBtn = document.getElementById('reelPlayBtn');
  const audioBtn = document.getElementById('reelAudioBtn');
  const fullscreenBtn = document.getElementById('reelFullscreenBtn');
  const scrubberTrack = document.getElementById('reelScrubberTrack');
  const scrubberProgress = document.getElementById('reelScrubberProgress');
  const scrubberThumb = document.getElementById('reelScrubberThumb');
  const currentTimeEl = document.getElementById('reelCurrentTime');
  const durationEl = document.getElementById('reelDuration');
  const wrapper = document.querySelector('.showreel-video-wrapper');

  if (!video) return;

  let isUserPaused = false;
  let isScrubbing = false;

  function formatTime(seconds) {
    if (isNaN(seconds) || seconds < 0) return '00:00';
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
  }

  function updatePlayState(isPlaying) {
    if (isPlaying) {
      if (playOverlay) playOverlay.classList.add('is-hidden');
      if (wrapper) wrapper.classList.add('is-playing');
      if (playBtn) {
        const iconPlay = playBtn.querySelector('.icon-play');
        const iconPause = playBtn.querySelector('.icon-pause');
        if (iconPlay) iconPlay.style.display = 'none';
        if (iconPause) iconPause.style.display = 'block';
      }
    } else {
      if (playOverlay) playOverlay.classList.remove('is-hidden');
      if (wrapper) wrapper.classList.remove('is-playing');
      if (playBtn) {
        const iconPlay = playBtn.querySelector('.icon-play');
        const iconPause = playBtn.querySelector('.icon-pause');
        if (iconPlay) iconPlay.style.display = 'block';
        if (iconPause) iconPause.style.display = 'none';
      }
    }
  }

  function togglePlay() {
    if (video.paused || video.ended) {
      isUserPaused = false;
      video.play().then(() => {
        updatePlayState(true);
      }).catch(err => {
        console.warn('Playback prevented:', err);
      });
    } else {
      isUserPaused = true;
      video.pause();
      updatePlayState(false);
    }
  }

  if (playOverlay) playOverlay.addEventListener('click', togglePlay);
  if (playBtn) playBtn.addEventListener('click', togglePlay);
  video.addEventListener('click', togglePlay);

  video.addEventListener('play', () => updatePlayState(true));
  video.addEventListener('pause', () => updatePlayState(false));

  video.addEventListener('loadedmetadata', () => {
    if (durationEl) durationEl.textContent = formatTime(video.duration);
  });

  video.addEventListener('timeupdate', () => {
    if (isScrubbing) return;
    const current = video.currentTime;
    const duration = video.duration || 15;
    if (currentTimeEl) currentTimeEl.textContent = formatTime(current);
    if (durationEl && (!durationEl.textContent || durationEl.textContent === '00:15')) {
      durationEl.textContent = formatTime(duration);
    }
    const percent = (current / duration) * 100;
    if (scrubberProgress) scrubberProgress.style.width = `${percent}%`;
    if (scrubberThumb) scrubberThumb.style.left = `${percent}%`;
  });

  function seekTo(e) {
    if (!scrubberTrack) return;
    const rect = scrubberTrack.getBoundingClientRect();
    const pos = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
    const targetTime = pos * (video.duration || 15);
    video.currentTime = targetTime;
    if (scrubberProgress) scrubberProgress.style.width = `${pos * 100}%`;
    if (scrubberThumb) scrubberThumb.style.left = `${pos * 100}%`;
    if (currentTimeEl) currentTimeEl.textContent = formatTime(targetTime);
  }

  if (scrubberTrack) {
    scrubberTrack.addEventListener('click', seekTo);

    scrubberTrack.addEventListener('mousedown', (e) => {
      isScrubbing = true;
      seekTo(e);
      const onMouseMove = (moveEvent) => {
        seekTo(moveEvent);
      };
      const onMouseUp = () => {
        isScrubbing = false;
        window.removeEventListener('mousemove', onMouseMove);
        window.removeEventListener('mouseup', onMouseUp);
      };
      window.addEventListener('mousemove', onMouseMove);
      window.addEventListener('mouseup', onMouseUp);
    });

    scrubberTrack.addEventListener('touchstart', (e) => {
      isScrubbing = true;
      if (e.touches && e.touches[0]) seekTo(e.touches[0]);
    }, { passive: true });

    scrubberTrack.addEventListener('touchmove', (e) => {
      if (isScrubbing && e.touches && e.touches[0]) {
        seekTo(e.touches[0]);
      }
    }, { passive: true });

    scrubberTrack.addEventListener('touchend', () => {
      isScrubbing = false;
    });
  }

  if (audioBtn) {
    audioBtn.addEventListener('click', () => {
      video.muted = !video.muted;
      const iconMuted = audioBtn.querySelector('.icon-muted');
      const iconUnmuted = audioBtn.querySelector('.icon-unmuted');
      if (video.muted) {
        if (iconMuted) iconMuted.style.display = 'block';
        if (iconUnmuted) iconUnmuted.style.display = 'none';
        audioBtn.setAttribute('aria-label', currentLang === 'pt' ? 'Ativar som' : 'Unmute audio');
      } else {
        if (iconMuted) iconMuted.style.display = 'none';
        if (iconUnmuted) iconUnmuted.style.display = 'block';
        audioBtn.setAttribute('aria-label', currentLang === 'pt' ? 'Silenciar som' : 'Mute audio');
      }
    });
  }

  if (fullscreenBtn && frame) {
    fullscreenBtn.addEventListener('click', () => {
      if (!document.fullscreenElement) {
        if (frame.requestFullscreen) {
          frame.requestFullscreen();
        } else if (frame.webkitRequestFullscreen) {
          frame.webkitRequestFullscreen();
        }
      } else {
        if (document.exitFullscreen) {
          document.exitFullscreen();
        }
      }
    });
  }

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (!prefersReducedMotion && 'IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && entry.intersectionRatio >= 0.35) {
          if (!isUserPaused && video.paused) {
            video.muted = true;
            video.play().then(() => {
              updatePlayState(true);
            }).catch(() => {});
          }
        } else if (!entry.isIntersecting || entry.intersectionRatio < 0.15) {
          if (!video.paused) {
            video.pause();
            updatePlayState(false);
          }
        }
      });
    }, {
      threshold: [0.15, 0.35, 0.7]
    });

    observer.observe(frame || video);
  }
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
  initShowreel();
  initExperienceSimulator();
  initPortfolio();
  initContactForm();
  initStudioClock();
  initVisualPolish();
});
