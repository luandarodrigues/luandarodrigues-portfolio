export type LocaleCode = 'en' | 'pt-BR';
export type ClusterKey = 'health' | 'models' | 'ops';
export type PanelId = 'projects' | 'methodtab' | 'stack' | 'background';

export interface LinkItem {
  label: string;
  href: string;
  external?: boolean;
}

export interface MetricItem {
  value: string;
  label: string;
}

export interface BoxItem {
  label: string;
  title: string;
  text: string;
  cluster?: ClusterKey;
}

export interface ProjectMetaItem {
  label: string;
  title: string;
  text: string;
}

export interface ProjectItem {
  number: string;
  metric: string;
  title: string;
  summary: string;
  cluster: ClusterKey;
  meta: ProjectMetaItem[];
  metaLine: string;
  actions: LinkItem[];
}

export interface FeaturedStat {
  label: string;
  value: string;
  text: string;
}

export interface FeaturedArticle {
  label: string;
  title: string;
  text: string;
}

export interface HomeContent {
  lang: LocaleCode;
  title: string;
  description: string;
  alternateHrefLang: string;
  alternateHref: string;
  topNav: LinkItem[];
  languageSwitch: LinkItem;
  sidebar: {
    role: string;
    intro: string;
    graphLabel: string;
    links: LinkItem[];
  };
  hero: {
    eyebrow: string;
    title: {
      before: string;
      accent: string;
      after?: string;
    };
    copy: string;
    metrics: MetricItem[];
  };
  about: {
    eyebrow: string;
    title: string;
    accent: string;
    paragraphs: string[];
    cards: BoxItem[];
  };
  cloud: {
    eyebrow: string;
    title: string;
    copy: string;
    actions: {
      cluster: string;
      spread: string;
    };
    labels: Record<ClusterKey, string>;
    graphNodes: Record<ClusterKey, string[]>;
  };
  featured: {
    eyebrow: string;
    title: string;
    question: string;
    summary: string;
    stats: FeaturedStat[];
    toggle: {
      open: string;
      close: string;
    };
    detail: FeaturedArticle[];
    actions: LinkItem[];
  };
  tabs: {
    sectionEyebrow: string;
    title: string;
    accent: string;
    buttons: Array<{ id: PanelId; label: string }>;
    summaries: Record<PanelId, [string, string]>;
    method: BoxItem[];
    stack: BoxItem[];
    background: BoxItem[];
  };
  projects: ProjectItem[];
  contact: {
    eyebrow: string;
    title: string;
    accent: string;
    note: string;
    social: LinkItem[];
    form: {
      labels: {
        name: string;
        company: string;
        email: string;
        message: string;
      };
      placeholders: {
        name: string;
        company: string;
        email: string;
        message: string;
      };
      button: string;
      sending: string;
      sent: string;
      fallback: string;
    };
  };
}

export const homeContent: Record<'en' | 'pt', HomeContent> = {
  en: {
    lang: 'en',
    title: 'Luanda Rodrigues | Data Analyst',
    description: 'Portfolio of Luanda Rodrigues, a Brazilian data analyst focused on healthcare, BI, SQL, machine learning, hospital operations and decision intelligence.',
    alternateHrefLang: 'pt-BR',
    alternateHref: '/pt/',
    topNav: [
      { label: 'About', href: '#about' },
      { label: 'Projects', href: '#work' },
      { label: 'Graph', href: '#method' },
      { label: 'Contact', href: '#contact' },
    ],
    languageSwitch: { label: 'PT-BR', href: '/pt/' },
    sidebar: {
      role: 'Data Analyst',
      intro: 'Brazilian data analyst connecting healthcare operations, BI, machine learning and decision intelligence.',
      graphLabel: 'live note cloud',
      links: [
        { label: 'Email', href: 'mailto:luandarodrigues30@gmail.com' },
        { label: 'GitHub', href: 'https://github.com/luandarodrigues', external: true },
        { label: 'LinkedIn', href: 'https://www.linkedin.com/in/luanda-rodrigues', external: true },
        { label: 'Português', href: '/pt/' },
      ],
    },
    hero: {
      eyebrow: 'Data Analysis · Team Management · Health Operations',
      title: {
        before: 'Turning complex systems into ',
        accent: 'readable data.',
      },
      copy: 'I build analysis that connects hospital operations, public healthcare data, SQL, BI, machine learning, graphs and decision-focused communication.',
      metrics: [
        { value: '218 countries', label: 'WHO benchmark coverage inside the final country-year panel.' },
        { value: '47,714 facilities', label: 'Primary healthcare units mapped and audited at national scale.' },
        { value: '13,785 rows', label: 'Analytical observations rebuilt inside the flagship health case.' },
      ],
    },
    about: {
      eyebrow: 'About / Trajectory',
      title: 'Engineering, healthcare and data inside the same ',
      accent: 'system.',
      paragraphs: [
        'My trajectory connects Biomedical Engineering, Hospital Management, public-health operations, clinical pharmacy workflows, KPI monitoring, marketing technology and AI-assisted projects.',
        'I work with data as a way to read systems clearly: bottlenecks, service quality, operational pressure, decision risk and the trade-offs hidden inside complex routines.',
      ],
      cards: [
        { label: '01', title: 'Healthcare operations', text: 'Clinical pharmacy flows, public healthcare data and hospital routines with real operational impact.', cluster: 'health' },
        { label: '02', title: 'Decision intelligence', text: 'BI, KPI framing, analytical products and communication designed for practical action.', cluster: 'ops' },
        { label: '03', title: 'Technical stack', text: 'Python, SQL, Power BI, machine learning, graph analysis and NLP with a strong data-quality discipline.', cluster: 'models' },
        { label: '04', title: 'Brazilian context', text: 'Brazil-based professional available for remote work and open to relocation.', cluster: 'health' },
      ],
    },
    cloud: {
      eyebrow: 'Analytical Constellations',
      title: 'From dispersed signals to sharper decisions.',
      copy: 'The graph is the conceptual center of the portfolio: notes, methods and domains clustering around healthcare, models and operations instead of isolated projects.',
      actions: {
        cluster: 'View clusters',
        spread: 'Spread nodes',
      },
      labels: {
        health: 'Healthcare',
        models: 'Models & NLP',
        ops: 'BI & Operations',
      },
      graphNodes: {
        health: ['healthcare', 'public health', 'HC-UFU', 'EBSERH', 'clinical pharmacy', 'UBS', 'SUS', 'geodata'],
        models: ['machine learning', 'Scikit-learn', 'ROC-AUC', 'NLP', 'TF-IDF', 'reviews', 'risk'],
        ops: ['Power BI', 'SQL', 'dashboards', 'KPIs', 'ETL', 'Pandas', 'operations'],
      },
    },
    featured: {
      eyebrow: 'Featured case / Health analytics / Benchmark',
      title: 'Can public health data predict life expectancy differences?',
      question: 'WHO indicators explain life expectancy surprisingly well at country-year level, while the residuals still show where local context refuses to disappear.',
      summary: 'I rebuilt WHO public indicators into a country-year analytical panel, audited upstream quality, compared local model families and translated the outcome into a live report. The result is not only a strong benchmark, but a decision-intelligence case that keeps uncertainty visible instead of flattening everything into one score.',
      stats: [
        { label: 'Analytical rows', value: '13,785', text: 'Country-year observations rebuilt from WHO public indicators.' },
        { label: 'Coverage', value: '218', text: 'Countries and entities included in the final rebuilt panel.' },
        { label: 'Champion MAE', value: '0.110', text: 'TabPFN performance on the temporal holdout from 2015 onward.' },
        { label: 'Best local MAE', value: '0.243', text: 'Strongest fully trainable local benchmark inside the repository.' },
      ],
      toggle: {
        open: 'Open case',
        close: 'Close case',
      },
      detail: [
        { label: 'Question', title: 'What the case tested', text: 'The central question was whether WHO public-health indicators could explain observable life expectancy variation across countries without pretending the benchmark was the same thing as causality.' },
        { label: 'Build', title: 'How the system was assembled', text: 'The case combined WHO API ingestion, a rebuilt country-year panel, data-quality auditing, heavy local baselines, TabPFN comparison, residual analysis and a report layer designed for interpretation rather than spectacle.' },
        { label: 'Result', title: 'What emerged from the benchmark', text: 'Predictive performance stayed strong across model families. TabPFN led the final comparison, while Ridge remained a credible fully local benchmark on the same temporal split, which gave the result more analytical balance.' },
        { label: 'Decision value', title: 'Why this matters beyond the score', text: 'The project became useful because it leaves the residuals visible. Instead of selling certainty, it shows where public-health indicators travel well and where additional social or regional context still needs investigation.' },
      ],
      actions: [
        { label: 'Open live report', href: 'https://who-global-health-signals.vercel.app', external: true },
        { label: 'View repository', href: 'https://github.com/luandarodrigues/who-global-health-signals', external: true },
      ],
    },
    tabs: {
      sectionEyebrow: 'Selected work',
      title: 'Featured case first, followed by a wider archive of complementary ',
      accent: 'projects.',
      buttons: [
        { id: 'projects', label: 'Projects' },
        { id: 'methodtab', label: 'Method' },
        { id: 'stack', label: 'Stack' },
        { id: 'background', label: 'Background' },
      ],
      summaries: {
        projects: ['Projects', 'The WHO flagship case sits right above. These additional projects show how I work across healthcare, machine learning, SQL, graphs, NLP and decision-focused communication.'],
        methodtab: ['Method', 'A practical data workflow: frame the decision, audit the data, build the analytical layer, choose the method and communicate the limits.'],
        stack: ['Stack', 'Tools used across the projects: Python, SQL, Pandas, Power BI, Scikit-learn, NetworkX, NLP and dashboards.'],
        background: ['Background', 'The career layer behind the projects: healthcare, Biomedical Engineering, Hospital Management, EBSERH/HC-UFU and marketing technology.'],
      },
      method: [
        { label: '01', title: 'Frame the decision', text: 'Define the decision, users, metrics and risks before modeling anything.', cluster: 'health' },
        { label: '02', title: 'Audit the data', text: 'Check granularity, keys, duplicates, nulls, dates and business rules.', cluster: 'health' },
        { label: '03', title: 'Build the analytical layer', text: 'Turn raw data into tables, indicators, features and visual logic.', cluster: 'models' },
        { label: '04', title: 'Choose the method', text: 'Use BI, statistics, ML, NLP or graph methods according to the problem.', cluster: 'models' },
        { label: '05', title: 'Interpret the limits', text: 'Separate signal from noise and make uncertainty, bias and limits explicit.', cluster: 'ops' },
        { label: '06', title: 'Communicate for action', text: 'Deliver the analysis through narrative, README, dashboard or recommendation.', cluster: 'ops' },
      ],
      stack: [
        { label: 'Analysis', title: 'Python · Pandas · NumPy', text: 'Cleaning, exploration, missing values, features and consistency checks.' },
        { label: 'SQL & Data', title: 'SQL · joins · modeling', text: 'Analytical queries, CTEs, keys, granularity and dataset design.' },
        { label: 'BI', title: 'Power BI · Looker · KPIs', text: 'Dashboards, indicators, monitoring and decision metrics.' },
        { label: 'Machine Learning', title: 'Scikit-learn · ROC-AUC', text: 'Classification, validation, model comparison and interpretation.' },
        { label: 'Graphs & NLP', title: 'NetworkX · TF-IDF · reviews', text: 'Networks, relationships, recommendations and text mining.' },
        { label: 'Operations', title: 'Healthcare · logistics · experience', text: 'Flows, bottlenecks, delays, coverage and operational impact.' },
      ],
      background: [
        { label: 'Healthcare', title: 'Hospital operations', text: 'Clinical pharmacy flows, KPIs, public data and decision support.' },
        { label: 'Education', title: 'Biomedical Engineering + Hospital Management', text: 'Systems thinking, healthcare technology and analytical foundations.' },
        { label: 'Public sector', title: 'EBSERH · 5th place', text: 'Brazilian public-healthcare context and operational hospital perspective.' },
        { label: 'Digital', title: 'Marketing technology', text: 'Content, design, HTML email, scientific communication, automation and AI-assisted workflows.' },
      ],
    },
    projects: [
      {
        number: '01',
        metric: '47,714 facilities',
        title: 'Mapping Primary Healthcare Units in Brazil',
        summary: 'This project made visible where Brazil\'s primary healthcare registry is strong, where it breaks, and which territories need better coverage data. Using 47,714 registered facilities, I audited coordinate quality, missing information, regional distribution and spatial consistency to turn a raw public registry into a more reliable planning layer for healthcare coverage and territorial prioritization.',
        cluster: 'health',
        meta: [
          { label: 'Scope', title: 'Healthcare registry', text: 'Primary care units, location data, regional distribution and public infrastructure coverage.' },
          { label: 'Method', title: 'Geo + audit', text: 'Coordinate validation, null checks, regional aggregation and map interpretation.' },
          { label: 'Decision value', title: 'Coverage', text: 'Supports prioritization, registry correction and territorial planning.' },
        ],
        metaLine: 'Health Analytics · Geoanalysis · Data Quality · Public Health',
        actions: [
          { label: 'Open panel', href: 'https://luandarodrigues.github.io/luandarodrigues/dashboards/ubs-healthcare-mapping/', external: true },
          { label: 'Open repository', href: 'https://github.com/luandarodrigues/luandarodrigues/tree/main/projects/ubs-healthcare-mapping', external: true },
        ],
      },
      {
        number: '02',
        metric: 'Workforce planning layer',
        title: 'Workforce & Labor Market Intelligence',
        summary: 'This project turns fragmented workforce signals into a decision-ready view of retention pressure, labor-market tension and hiring risk. I structured internal people data with external context, KPI logic and interactive filters so the final product can help teams identify where cost, churn risk and talent scarcity converge instead of reading HR metrics in isolation.',
        cluster: 'ops',
        meta: [
          { label: 'Scope', title: 'Analytical product', text: 'People data, external context, retention pressure and a BI-ready semantic layer.' },
          { label: 'Method', title: 'DuckDB + SQL + filters', text: 'Modeled exports, KPI logic, risk framing and an interactive page inside the portfolio.' },
          { label: 'Decision value', title: 'Retention priority', text: 'Shows where risk, cost and labor pressure move together in a cleaner dashboard-style view.' },
        ],
        metaLine: 'People Analytics · BI Product · Dashboard Design · Workforce Planning',
        actions: [
          { label: 'Open panel', href: '/workforce-intelligence' },
          { label: 'Open repository', href: 'https://github.com/luandarodrigues/workforce-labor-market-intelligence-bi-suite', external: true },
        ],
      },
      {
        number: '03',
        metric: '918 observations',
        title: 'Heart Disease Risk Prediction',
        summary: 'This model shows how structured clinical variables can support earlier risk interpretation without pretending to automate diagnosis. With 918 observations and 11 predictors, I compared performance across the main validation metrics, framed the model as analytical support for triage, and made the limits explicit so the result stays useful, cautious and clinically interpretable.',
        cluster: 'models',
        meta: [
          { label: 'Scope', title: 'Clinical data', text: 'Age, symptoms, blood pressure, cholesterol, ECG, angina and ST slope.' },
          { label: 'Method', title: 'Responsible ML', text: 'Validation, ROC-AUC, F1-score, confusion matrix and interpretation.' },
          { label: 'Decision value', title: 'Triage', text: 'Supports prioritization with clinical caution and ethical limits.' },
        ],
        metaLine: 'Machine Learning · Clinical Risk · Scikit-learn · Responsible ML',
        actions: [
          { label: 'Open panel', href: 'https://luandarodrigues.github.io/heart-disease-risk-prediction/', external: true },
          { label: 'Open repository', href: 'https://github.com/luandarodrigues/luandarodrigues/tree/main/projects/heart-disease-risk-ml', external: true },
        ],
      },
      {
        number: '04',
        metric: '99,441 orders',
        title: 'Brazilian E-Commerce Delivery Experience',
        summary: 'This analysis reveals where logistics friction becomes customer dissatisfaction and which parts of the purchase journey most affect the final experience. Using 99,441 orders plus delivery, freight, seller and review data, I built an operational reading of delays, category behavior and payment patterns so the case supports action on service quality rather than only descriptive reporting.',
        cluster: 'ops',
        meta: [
          { label: 'Scope', title: 'Orders and reviews', text: 'Orders, items, sellers, payments, freight, reviews and delivery events.' },
          { label: 'Method', title: 'SQL + features', text: 'Joins, delay variables, review score, seller and category cuts, plus KPI framing.' },
          { label: 'Decision value', title: 'Experience', text: 'Shows where logistics friction affects customer satisfaction.' },
        ],
        metaLine: 'SQL · Logistics · Customer Experience · Operational Analytics',
        actions: [
          { label: 'Open panel', href: 'https://luandarodrigues.github.io/olist-delivery-experience-analytics/?v=4', external: true },
          { label: 'Open repository', href: 'https://github.com/luandarodrigues/luandarodrigues/tree/main/projects/olist-ecommerce-experience-analytics', external: true },
        ],
      },
      {
        number: '05',
        metric: '22,393 films',
        title: 'CineGraph Network Intelligence',
        summary: 'This project shows how graph structure and text signals can turn entertainment data into recommendation logic, discovery paths and cluster insight. I connected films, series, cast relationships and review language into a single analytical network, then used NetworkX and NLP techniques to expose collaboration patterns, thematic proximity and new ways to interpret recommendation behavior beyond simple metadata matching.',
        cluster: 'models',
        meta: [
          { label: 'Scope', title: 'Graph data', text: '22,393 films, 15,562 series, 58,393 people and review records.' },
          { label: 'Method', title: 'NetworkX + NLP', text: 'Graph modeling, collaboration links, TF-IDF and text-signal interpretation.' },
          { label: 'Decision value', title: 'Recommendation', text: 'Supports discovery, clustering and recommendation logic.' },
        ],
        metaLine: 'NetworkX · NLP · Graphs · Recommender Systems',
        actions: [
          { label: 'Open panel', href: 'https://cinegraph-network-intelligence-lcsr.streamlit.app/', external: true },
          { label: 'Open repository', href: 'https://github.com/luandarodrigues/luandarodrigues/tree/main/projects/cinegraph-network-intelligence', external: true },
        ],
      },
    ],
    contact: {
      eyebrow: 'Contact',
      title: 'Let\'s connect data, operations and ',
      accent: 'decisions.',
      note: 'Send a structured message directly from here. The form forwards it to my inbox.',
      social: [
        { label: 'GitHub', href: 'https://github.com/luandarodrigues', external: true },
        { label: 'LinkedIn', href: 'https://www.linkedin.com/in/luanda-rodrigues', external: true },
      ],
      form: {
        labels: {
          name: 'Name',
          company: 'Company',
          email: 'Email',
          message: 'Message',
        },
        placeholders: {
          name: 'Your name',
          company: 'Company or organization',
          email: 'you@email.com',
          message: 'What would you like to discuss?',
        },
        button: 'Send message',
        sending: 'Sending...',
        sent: 'Sent',
        fallback: 'Try email instead',
      },
    },
  },
  pt: {
    lang: 'pt-BR',
    title: 'Luanda Rodrigues | Analista de Dados',
    description: 'Portfólio de Luanda Rodrigues, analista de dados brasileira focada em saúde, BI, SQL, machine learning, operações hospitalares e inteligência para decisão.',
    alternateHrefLang: 'en',
    alternateHref: '/',
    topNav: [
      { label: 'Sobre', href: '#about' },
      { label: 'Projetos', href: '#work' },
      { label: 'Grafo', href: '#method' },
      { label: 'Contato', href: '#contact' },
    ],
    languageSwitch: { label: 'EN', href: '/' },
    sidebar: {
      role: 'Analista de Dados',
      intro: 'Analista de dados brasileira conectando operações em saúde, BI, machine learning e inteligência para decisão.',
      graphLabel: 'nuvem viva de notas',
      links: [
        { label: 'Email', href: 'mailto:luandarodrigues30@gmail.com' },
        { label: 'GitHub', href: 'https://github.com/luandarodrigues', external: true },
        { label: 'LinkedIn', href: 'https://www.linkedin.com/in/luanda-rodrigues', external: true },
        { label: 'English', href: '/' },
      ],
    },
    hero: {
      eyebrow: 'Data Analysis · Team Management · Health Operations',
      title: {
        before: 'Transformando sistemas complexos em ',
        accent: 'dados legíveis.',
      },
      copy: 'Construo análises que conectam operações hospitalares, dados públicos de saúde, SQL, BI, machine learning, grafos e comunicação para decisão.',
      metrics: [
        { value: '218 países', label: 'Cobertura do benchmark da OMS dentro do painel país-ano final.' },
        { value: '47.714 unidades', label: 'UBS mapeadas e auditadas em escala nacional.' },
        { value: '13.785 linhas', label: 'Observações analíticas reconstruídas no case principal de saúde.' },
      ],
    },
    about: {
      eyebrow: 'Sobre / Trajetória',
      title: 'Engenharia, saúde e dados no mesmo ',
      accent: 'sistema.',
      paragraphs: [
        'Minha trajetória conecta Engenharia Biomédica, Gestão Hospitalar, operações em saúde pública, fluxos de farmácia clínica, monitoramento de KPIs, marketing technology e projetos apoiados por IA.',
        'Trabalho com dados como forma de ler sistemas com clareza: gargalos, qualidade de serviço, pressão operacional, risco decisório e trade-offs escondidos em rotinas complexas.',
      ],
      cards: [
        { label: '01', title: 'Operações em saúde', text: 'Fluxos de farmácia clínica, dados públicos de saúde e rotinas hospitalares com impacto operacional real.', cluster: 'health' },
        { label: '02', title: 'Inteligência para decisão', text: 'BI, enquadramento de KPIs, produtos analíticos e comunicação desenhada para ação prática.', cluster: 'ops' },
        { label: '03', title: 'Stack técnica', text: 'Python, SQL, Power BI, machine learning, análise de grafos e NLP com forte disciplina de qualidade de dados.', cluster: 'models' },
        { label: '04', title: 'Contexto brasileiro', text: 'Profissional brasileira disponível para trabalho remoto e aberta à relocação.', cluster: 'health' },
      ],
    },
    cloud: {
      eyebrow: 'Constelações Analíticas',
      title: 'De sinais dispersos a decisões mais nítidas.',
      copy: 'O grafo é o centro conceitual do portfólio: notas, métodos e domínios agrupados em torno de saúde, modelos e operações, em vez de projetos isolados.',
      actions: {
        cluster: 'Ver clusters',
        spread: 'Espalhar nós',
      },
      labels: {
        health: 'Saúde',
        models: 'Modelos & NLP',
        ops: 'BI & Operações',
      },
      graphNodes: {
        health: ['saúde', 'saúde pública', 'HC-UFU', 'EBSERH', 'farmácia clínica', 'UBS', 'SUS', 'geodados'],
        models: ['machine learning', 'Scikit-learn', 'ROC-AUC', 'NLP', 'TF-IDF', 'reviews', 'risco'],
        ops: ['Power BI', 'SQL', 'dashboards', 'KPIs', 'ETL', 'Pandas', 'operações'],
      },
    },
    featured: {
      eyebrow: 'Case em destaque / Health analytics / Benchmark',
      title: 'Dados públicos de saúde conseguem prever diferenças de expectativa de vida?',
      question: 'Os indicadores da OMS explicam diferenças de expectativa de vida de forma surpreendentemente forte em nível país-ano, enquanto os resíduos ainda mostram onde o contexto local insiste em aparecer.',
      summary: 'Reconstruí indicadores públicos da OMS em um painel analítico país-ano, auditei a qualidade upstream, comparei famílias locais de modelos e transformei o resultado em um relatório ao vivo. O valor do projeto não está só na força do benchmark, mas em tratar a análise como inteligência para decisão, mantendo a incerteza visível em vez de escondê-la atrás de uma única métrica.',
      stats: [
        { label: 'Linhas analíticas', value: '13.785', text: 'Observações país-ano reconstruídas a partir de indicadores públicos da OMS.' },
        { label: 'Cobertura', value: '218', text: 'Países e entidades incluídos no painel final reconstruído.' },
        { label: 'MAE campeão', value: '0,110', text: 'Desempenho do TabPFN no holdout temporal a partir de 2015.' },
        { label: 'Melhor MAE local', value: '0,243', text: 'Melhor benchmark totalmente treinável dentro do próprio repositório.' },
      ],
      toggle: {
        open: 'Abrir case',
        close: 'Fechar case',
      },
      detail: [
        { label: 'Pergunta', title: 'O que o case testou', text: 'A pergunta central era se indicadores públicos de saúde da OMS conseguem explicar a variação observável de expectativa de vida entre países sem fingir que benchmark é a mesma coisa que causalidade.' },
        { label: 'Construção', title: 'Como o sistema foi montado', text: 'O case combinou ingestão via API da OMS, reconstrução do painel país-ano, auditoria de qualidade, baselines locais pesados, comparação com TabPFN, leitura de resíduos e uma camada de relatório desenhada para interpretação, não para espetáculo.' },
        { label: 'Resultado', title: 'O que emergiu do benchmark', text: 'O desempenho permaneceu forte em famílias diferentes de modelos. O TabPFN liderou o comparativo final, enquanto Ridge ficou como benchmark local totalmente reproduzível no mesmo corte temporal, o que dá mais equilíbrio à conclusão.' },
        { label: 'Valor decisório', title: 'Por que isso importa além do score', text: 'O projeto fica útil porque deixa os resíduos visíveis. Em vez de vender certeza, ele mostra onde indicadores públicos de saúde funcionam bem como sinal comparativo e onde ainda é preciso investigar contexto social, regional e institucional.' },
      ],
      actions: [
        { label: 'Abrir relatório ao vivo', href: 'https://who-global-health-signals.vercel.app', external: true },
        { label: 'Ver repositório', href: 'https://github.com/luandarodrigues/who-global-health-signals', external: true },
      ],
    },
    tabs: {
      sectionEyebrow: 'Trabalhos selecionados',
      title: 'Case principal primeiro, depois um arquivo ampliado de projetos ',
      accent: 'complementares.',
      buttons: [
        { id: 'projects', label: 'Projetos' },
        { id: 'methodtab', label: 'Método' },
        { id: 'stack', label: 'Stack' },
        { id: 'background', label: 'Background' },
      ],
      summaries: {
        projects: ['Projetos', 'O case principal da OMS está logo acima. Estes outros projetos mostram como eu trabalho com saúde, machine learning, SQL, grafos, NLP e comunicação orientada à decisão.'],
        methodtab: ['Método', 'Um fluxo prático de dados: enquadrar a decisão, auditar os dados, construir a camada analítica, escolher o método e comunicar os limites.'],
        stack: ['Stack', 'Ferramentas usadas ao longo dos projetos: Python, SQL, Pandas, Power BI, Scikit-learn, NetworkX, NLP e dashboards.'],
        background: ['Background', 'A camada de trajetória por trás dos projetos: saúde, Engenharia Biomédica, Gestão Hospitalar, EBSERH/HC-UFU e marketing technology.'],
      },
      method: [
        { label: '01', title: 'Enquadrar a decisão', text: 'Defino a decisão, os usuários, as métricas e os riscos antes de modelar qualquer coisa.', cluster: 'health' },
        { label: '02', title: 'Auditar os dados', text: 'Checo granularidade, chaves, duplicatas, nulos, datas e regras de negócio.', cluster: 'health' },
        { label: '03', title: 'Construir a camada analítica', text: 'Transformo dados brutos em tabelas, indicadores, features e lógica visual.', cluster: 'models' },
        { label: '04', title: 'Escolher o método', text: 'Uso BI, estatística, ML, NLP ou grafos de acordo com o problema.', cluster: 'models' },
        { label: '05', title: 'Interpretar os limites', text: 'Separo sinal de ruído e deixo incerteza, viés e limites explícitos.', cluster: 'ops' },
        { label: '06', title: 'Comunicar para ação', text: 'Entrego a análise em narrativa, README, dashboard ou recomendação.', cluster: 'ops' },
      ],
      stack: [
        { label: 'Análise', title: 'Python · Pandas · NumPy', text: 'Limpeza, exploração, valores ausentes, features e checagens de consistência.' },
        { label: 'SQL & Dados', title: 'SQL · joins · modelagem', text: 'Consultas analíticas, CTEs, chaves, granularidade e desenho de datasets.' },
        { label: 'BI', title: 'Power BI · Looker · KPIs', text: 'Dashboards, indicadores, monitoramento e métricas para decisão.' },
        { label: 'Machine Learning', title: 'Scikit-learn · ROC-AUC', text: 'Classificação, validação, comparação de modelos e interpretação.' },
        { label: 'Grafos & NLP', title: 'NetworkX · TF-IDF · reviews', text: 'Redes, relações, recomendações e mineração de texto.' },
        { label: 'Operações', title: 'Saúde · logística · experiência', text: 'Fluxos, gargalos, atrasos, cobertura e impacto operacional.' },
      ],
      background: [
        { label: 'Saúde', title: 'Operações hospitalares', text: 'Fluxos de farmácia clínica, KPIs, dados públicos e apoio à decisão.' },
        { label: 'Formação', title: 'Engenharia Biomédica + Gestão Hospitalar', text: 'Visão sistêmica, tecnologia em saúde e base analítica.' },
        { label: 'Setor público', title: 'EBSERH · 5º lugar', text: 'Contexto brasileiro de saúde pública e perspectiva hospitalar operacional.' },
        { label: 'Digital', title: 'Marketing technology', text: 'Conteúdo, design, HTML email, comunicação científica, automação e fluxos com IA.' },
      ],
    },
    projects: [
      {
        number: '01',
        metric: '47.714 unidades',
        title: 'Mapeamento de Unidades Básicas de Saúde no Brasil',
        summary: 'Este projeto deixa visível onde o cadastro da atenção primária no Brasil é consistente, onde ele falha e quais territórios precisam de melhor leitura de cobertura. Com 47.714 unidades registradas, auditei qualidade de coordenadas, campos ausentes, distribuição regional e consistência espacial para transformar um registro público bruto em uma camada mais confiável de planejamento territorial e apoio à decisão em saúde.',
        cluster: 'health',
        meta: [
          { label: 'Escopo', title: 'Cadastro em saúde', text: 'UBS, localização, distribuição regional e cobertura de infraestrutura pública.' },
          { label: 'Método', title: 'Geo + auditoria', text: 'Validação de coordenadas, checagem de nulos, agregação regional e leitura de mapas.' },
          { label: 'Valor decisório', title: 'Cobertura', text: 'Apoia priorização, correção cadastral e planejamento territorial.' },
        ],
        metaLine: 'Health Analytics · Geoanálise · Data Quality · Saúde pública',
        actions: [
          { label: 'Abrir painel', href: 'https://luandarodrigues.github.io/luandarodrigues/dashboards/ubs-healthcare-mapping/', external: true },
          { label: 'Abrir repositório', href: 'https://github.com/luandarodrigues/luandarodrigues/tree/main/projects/ubs-healthcare-mapping', external: true },
        ],
      },
      {
        number: '02',
        metric: 'Camada de workforce planning',
        title: 'Workforce & Labor Market Intelligence',
        summary: 'Este projeto transforma sinais dispersos de workforce em uma leitura acionável sobre pressão de retenção, tensão de mercado e risco de contratação. Estruturei dados internos de pessoas com contexto externo, lógica de KPI e filtros interativos para que o produto final ajude equipes a identificar onde custo, risco de saída e escassez de talento se concentram, em vez de ler métricas de RH de forma isolada.',
        cluster: 'ops',
        meta: [
          { label: 'Escopo', title: 'Produto analítico', text: 'Dados de pessoas, contexto externo, pressão de retenção e camada semântica pronta para BI.' },
          { label: 'Método', title: 'DuckDB + SQL + filtros', text: 'Exports modelados, lógica de KPI, enquadramento de risco e uma página interativa dentro do portfólio.' },
          { label: 'Valor decisório', title: 'Prioridade de retenção', text: 'Mostra onde risco, custo e pressão de mercado andam juntos em uma leitura mais limpa de painel.' },
        ],
        metaLine: 'People Analytics · BI Product · Dashboard Design · Workforce Planning',
        actions: [
          { label: 'Abrir painel', href: '/pt/workforce-intelligence' },
          { label: 'Abrir repositório', href: 'https://github.com/luandarodrigues/workforce-labor-market-intelligence-bi-suite', external: true },
        ],
      },
      {
        number: '03',
        metric: '918 observações',
        title: 'Predição de Risco de Doença Cardíaca',
        summary: 'Este modelo mostra como variáveis clínicas estruturadas podem apoiar interpretação precoce de risco sem fingir automatizar diagnóstico. Com 918 observações e 11 preditores, comparei desempenho nas principais métricas de validação, enquadrei o modelo como suporte analítico para triagem e deixei os limites explícitos para que o resultado permaneça útil, cauteloso e clinicamente interpretável.',
        cluster: 'models',
        meta: [
          { label: 'Escopo', title: 'Dados clínicos', text: 'Idade, sintomas, pressão arterial, colesterol, ECG, angina e inclinação de ST.' },
          { label: 'Método', title: 'ML responsável', text: 'Validação, ROC-AUC, F1-score, matriz de confusão e interpretação.' },
          { label: 'Valor decisório', title: 'Triagem', text: 'Apoia priorização com cautela clínica e limites éticos.' },
        ],
        metaLine: 'Machine Learning · Clinical Risk · Scikit-learn · Responsible ML',
        actions: [
          { label: 'Abrir painel', href: 'https://luandarodrigues.github.io/heart-disease-risk-prediction/', external: true },
          { label: 'Abrir repositório', href: 'https://github.com/luandarodrigues/luandarodrigues/tree/main/projects/heart-disease-risk-ml', external: true },
        ],
      },
      {
        number: '04',
        metric: '99.441 pedidos',
        title: 'Experiência de Entrega no E-Commerce Brasileiro',
        summary: 'Esta análise revela onde o atrito logístico se transforma em insatisfação do cliente e quais partes da jornada de compra mais afetam a experiência final. Com 99.441 pedidos e dados de entrega, frete, sellers e reviews, construí uma leitura operacional de atrasos, comportamento por categoria e padrões de pagamento para apoiar ação sobre qualidade de serviço, e não apenas reporte descritivo.',
        cluster: 'ops',
        meta: [
          { label: 'Escopo', title: 'Pedidos e reviews', text: 'Pedidos, itens, sellers, pagamentos, frete, reviews e eventos de entrega.' },
          { label: 'Método', title: 'SQL + features', text: 'Joins, variáveis de atraso, nota de review, cortes por seller e categoria, além de framing de KPI.' },
          { label: 'Valor decisório', title: 'Experiência', text: 'Mostra onde o atrito logístico afeta a satisfação do cliente.' },
        ],
        metaLine: 'SQL · Logística · Customer Experience · Operational Analytics',
        actions: [
          { label: 'Abrir painel', href: 'https://luandarodrigues.github.io/olist-delivery-experience-analytics/?v=4', external: true },
          { label: 'Abrir repositório', href: 'https://github.com/luandarodrigues/luandarodrigues/tree/main/projects/olist-ecommerce-experience-analytics', external: true },
        ],
      },
      {
        number: '05',
        metric: '22.393 filmes',
        title: 'CineGraph Network Intelligence',
        summary: 'Este projeto mostra como estrutura de grafo e sinais de texto podem transformar dados de entretenimento em lógica de recomendação, caminhos de descoberta e leitura de clusters. Conectei filmes, séries, relações de elenco e linguagem de reviews em uma única rede analítica, depois usei NetworkX e técnicas de NLP para expor padrões de colaboração, proximidade temática e novas formas de interpretar recomendação além do matching simples por metadados.',
        cluster: 'models',
        meta: [
          { label: 'Escopo', title: 'Dados em grafo', text: '22.393 filmes, 15.562 séries, 58.393 pessoas e registros de reviews.' },
          { label: 'Método', title: 'NetworkX + NLP', text: 'Modelagem de grafo, links de colaboração, TF-IDF e interpretação de sinais de texto.' },
          { label: 'Valor decisório', title: 'Recomendação', text: 'Apoia descoberta, clusterização e lógica de recomendação.' },
        ],
        metaLine: 'NetworkX · NLP · Graphs · Recommender Systems',
        actions: [
          { label: 'Abrir painel', href: 'https://cinegraph-network-intelligence-lcsr.streamlit.app/', external: true },
          { label: 'Abrir repositório', href: 'https://github.com/luandarodrigues/luandarodrigues/tree/main/projects/cinegraph-network-intelligence', external: true },
        ],
      },
    ],
    contact: {
      eyebrow: 'Contato',
      title: 'Vamos conectar dados, operações e ',
      accent: 'decisões.',
      note: 'Envie uma mensagem estruturada por aqui. O formulário encaminha direto para minha caixa de entrada.',
      social: [
        { label: 'GitHub', href: 'https://github.com/luandarodrigues', external: true },
        { label: 'LinkedIn', href: 'https://www.linkedin.com/in/luanda-rodrigues', external: true },
      ],
      form: {
        labels: {
          name: 'Nome',
          company: 'Empresa',
          email: 'Email',
          message: 'Mensagem',
        },
        placeholders: {
          name: 'Seu nome',
          company: 'Empresa ou organização',
          email: 'voce@email.com',
          message: 'O que você gostaria de conversar?',
        },
        button: 'Enviar mensagem',
        sending: 'Enviando...',
        sent: 'Enviado',
        fallback: 'Tentar por email',
      },
    },
  },
};
