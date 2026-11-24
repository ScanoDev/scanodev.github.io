// ============================================================
// ESTE ES EL ÚNICO ARCHIVO QUE NECESITAS EDITAR
// Cada texto tiene versión en inglés (en) y español (es).
// Cuidado con las comillas y las comas al final de cada línea.
// Si la página queda en blanco: F12 > Console te dice la línea del error.
// ============================================================

const PROFILE = {
  name: "Sebastián Cano Rincón",
  role: { en: "ML / AI Engineer", es: "Ingeniero de ML / IA" },
  location: "Medellín, CO",
  available: {
    en: "Open to ML and AI engineering roles",
    es: "Abierto a roles de ML e ingeniería de IA",
  },
  tagline: {
    en: "Systems Engineer building machine learning and AI systems, from the data to deployment.",
    es: "Ingeniero de Sistemas que construye sistemas de machine learning e IA, desde los datos hasta el despliegue.",
  },
  intro: {
    en: "Experience in time series forecasting, RAG, AI agents and data engineering on AWS and Azure. Focused on LLMs and computer vision.",
    es: "Experiencia en pronóstico de series de tiempo, RAG, agentes de IA e ingeniería de datos en AWS y Azure. Enfocado en LLMs y visión artificial.",
  },
  email: "sebastiancano21@hotmail.es",
  // Pon tu CV en la carpeta del repo con este nombre para que el botón funcione
  cv: "CV_SebastianCano.pdf",
  links: [
    { label: "LinkedIn", url: "https://www.linkedin.com/in/sebascano23" },
    { label: "GitHub", url: "https://github.com/ScanoDev" },
  ],
};

// Títulos de cada sección
const TEXTS = {
  experience: {
    title: { en: "Experience", es: "Experiencia" },
    sub: { en: "Where I have worked and what I did.", es: "Dónde he trabajado y qué hice." },
  },
  work: {
    title: { en: "Work projects", es: "Proyectos laborales" },
    sub: {
      en: "Projects built at companies. Some details are omitted for confidentiality.",
      es: "Proyectos construidos en empresas. Algunos detalles se omiten por confidencialidad.",
    },
  },
  projects: {
    title: { en: "Personal projects", es: "Proyectos personales" },
    sub: {
      en: "Projects I build to learn, experiment and solve real problems.",
      es: "Proyectos que construyo para aprender, experimentar y resolver problemas reales.",
    },
  },
  certs: {
    title: { en: "Certifications", es: "Certificaciones" },
    sub: {
      en: "Certificates and credentials, each with its verification link.",
      es: "Certificados y credenciales, cada uno con su enlace de verificación.",
    },
  },
  about: {
    title: { en: "About", es: "Sobre mí" },
    sub: { en: "", es: "" },
  },
  contact: {
    title: { en: "Contact", es: "Contacto" },
    sub: {
      en: "Open to roles in machine learning and AI engineering.",
      es: "Abierto a oportunidades en machine learning e ingeniería de IA.",
    },
  },
  top: { en: "Back to top", es: "Volver arriba" },
  open: { en: "View project", es: "Ver proyecto" },
  inProgress: { en: "In progress", es: "En proceso" },
  verify: { en: "Verify", es: "Verificar" },
  close: { en: "Close", es: "Cerrar" },
  downloadCv: { en: "Download CV", es: "Descargar CV" },
  present: { en: "Present", es: "Actual" },
};

// ============================================================
// EXPERIENCIA (línea de tiempo)
// ============================================================
const EXPERIENCE = [
  {
    org: "ITSTK",
    place: "Medellín",
    dates: { en: "Jul 2026 – Oct 2026", es: "Jul 2026 – Oct 2026" },
    role: { en: "Consulting Engineer", es: "Ingeniero consultor" },
    bullets: {
      en: [
        "Designed an AI agent to find and qualify potential clients for the company.",
        "Integrated generative AI workflows into the ServiceNow platform for clients.",
      ],
      es: [
        "Diseñé un agente de IA para encontrar y calificar clientes potenciales para la empresa.",
        "Integré flujos de IA generativa en la plataforma ServiceNow para clientes.",
      ],
    },
    tags: ["Python", "OpenAI API", "ServiceNow", "Now Assist"],
  },
  {
    org: "ISAGEN S.A.",
    place: "Medellín",
    dates: { en: "Jan 2026 – Jul 2026", es: "Ene 2026 – Jul 2026" },
    role: { en: "Data Science Intern", es: "Practicante de ciencia de datos" },
    bullets: {
      en: [
        "Built predictive maintenance models for industrial assets with Prophet, LSTM, N-HiTS and SARIMAX for early anomaly detection.",
        "Designed and maintained Python ETL pipelines processing hourly Parquet data from Azure Blob Storage.",
        "Built an internal analytics portal in Power Pages with vibration analysis, anomaly detection and NLP modules.",
        "Built an end to end Power Apps app where analysts report anomalies, Power Automate routes them to plant teams and AI analyzes each report.",
        "Designed Power BI dashboards to monitor oil condition in industrial machines against alert and critical limits.",
        "Gave digital transformation and AI trainings and advisory at three power plants, helping teams automate their processes.",
      ],
      es: [
        "Construí modelos de mantenimiento predictivo para activos industriales con Prophet, LSTM, N-HiTS y SARIMAX para detectar anomalías a tiempo.",
        "Diseñé y mantuve pipelines ETL en Python que procesaban datos Parquet horarios desde Azure Blob Storage.",
        "Construí un portal analítico interno en Power Pages con módulos de análisis de vibraciones, detección de anomalías y NLP.",
        "Construí una app end to end en Power Apps donde los analistas reportan anomalías, Power Automate las envía a los equipos de planta y la IA analiza cada reporte.",
        "Diseñé tableros en Power BI para monitorear la condición de aceites de máquinas industriales frente a límites de alerta y críticos.",
        "Di capacitaciones y asesorías en transformación digital e IA en tres centrales, ayudando a los equipos a automatizar sus procesos.",
      ],
    },
    tags: ["Python", "Prophet", "LSTM", "N-HiTS", "Azure", "Power Platform", "Power BI"],
  },
  {
    org: "Universidad EAFIT",
    place: "Medellín",
    dates: { en: "Jan 2025 – Nov 2025", es: "Ene 2025 – Nov 2025" },
    role: { en: "Teaching Assistant", es: "Monitor académico" },
    bullets: {
      en: ["Supported students with Python during lectures and gave private tutoring sessions."],
      es: ["Apoyé a estudiantes con Python durante las clases y di tutorías personalizadas."],
    },
    tags: ["Python"],
  },
];

// ============================================================
// PROYECTOS LABORALES (galería con imagen)
// image: ruta de la imagen en la carpeta img (las .svg son
//        ilustraciones; puedes cambiarlas por fotos .png o .jpg).
// ============================================================
const WORK = [
  {
    org: "ITSTK",
    year: "2026",
    image: "img/prospeccion.svg",
    title: { en: "B2B prospecting agent", es: "Agente de prospección B2B" },
    description: {
      en: "Agent that finds and qualifies business leads using the OpenAI API and Lusha, removes duplicates and syncs them to the ServiceNow CRM through OAuth 2.0.",
      es: "Agente que busca y califica prospectos de negocio con la API de OpenAI y Lusha, elimina duplicados y los sincroniza con el CRM de ServiceNow mediante OAuth 2.0.",
    },
    tags: ["Python", "OpenAI API", "Lusha", "Streamlit", "ServiceNow"],
  },
  {
    org: "ISAGEN",
    year: "2026",
    image: "img/isagen.svg",
    title: { en: "Vibration forecasting", es: "Pronóstico de vibraciones" },
    description: {
      en: "Short term vibration forecasting for electromechanical machines to support preventive maintenance. Tested SARIMAX, LSTM, N-HiTS and Prophet; extending training data from 60 to 180 days clearly improved results.",
      es: "Pronóstico de vibraciones a corto plazo en máquinas electromecánicas para mantenimiento preventivo. Probé SARIMAX, LSTM, N-HiTS y Prophet; ampliar los datos de entrenamiento de 60 a 180 días mejoró claramente los resultados.",
    },
    tags: ["Python", "Prophet", "LSTM", "N-HiTS", "Azure"],
  },
  {
    org: "ISAGEN",
    year: "2026",
    image: "img/etl.svg",
    title: { en: "Large scale ETL pipeline", es: "Pipeline ETL de datos masivos" },
    description: {
      en: "Built the full ETL process for large volumes of incoming data: extraction, cleaning and transformation with Pandas, and loading into Azure Blob Storage, ready for analytics and machine learning models.",
      es: "Construí todo el proceso ETL para grandes volúmenes de datos que llegaban: extracción, limpieza y transformación con Pandas, y carga en Azure Blob Storage, listos para analítica y modelos de machine learning.",
    },
    tags: ["Python", "Pandas", "Azure Blob Storage", "ETL"],
  },
  {
    org: "ISAGEN",
    year: "2026",
    image: "img/anomalias.svg",
    title: { en: "Anomaly reporting app with AI", es: "App de reporte de anomalías con IA" },
    description: {
      en: "End to end Power Apps app: analysts report anomalies seen in Grafana, Power Automate sends them automatically to the plant teams in charge, and AI analyzes each anomaly and gives a recommendation both sides can see.",
      es: "App end to end en Power Apps: los analistas reportan anomalías vistas en Grafana, Power Automate las envía automáticamente a los encargados en planta y la IA analiza cada anomalía con una recomendación que ambos pueden ver.",
    },
    tags: ["Power Apps", "Power Automate", "Dataverse", "Grafana", "GenAI"],
  },
  {
    org: "Power BI",
    year: "2026",
    image: "img/aceites.svg",
    title: { en: "Oil condition dashboard", es: "Tablero de condición de aceites" },
    description: {
      en: "Power BI dashboard to monitor oil condition in industrial machines: chemical elements and ISO 4406 cleanliness codes per plant, unit and sampling point, compared against alert and critical limits.",
      es: "Tablero en Power BI para monitorear la condición de aceites de máquinas industriales: elementos químicos y códigos de limpieza ISO 4406 por central, unidad y punto de muestreo, comparados con límites de alerta y críticos.",
    },
    tags: ["Power BI", "Power Query", "DAX", "Data modeling"],
  },
];

// ============================================================
// PROYECTOS PERSONALES (galería; al hacer clic se abre el detalle)
// image: imagen de portada de la tarjeta.
// metrics, details, images: opcionales, se ven en el detalle.
// inProgress: true muestra la etiqueta "En proceso".
// links: [{ label: "GitHub", url: "..." }, { label: "Demo", url: "..." }]
// ============================================================
const PERSONAL = [
  {
    label: "LLM / RAG",
    year: "2026",
    image: "img/orion.svg",
    title: { en: "ORION", es: "ORION" },
    description: {
      en: "RAG assistant that answers questions about Universidad EAFIT using only its official website, citing the page behind every fact and refusing when the answer does not exist. Built as a replacement for the university's chatbot.",
      es: "Asistente RAG que responde preguntas sobre la Universidad EAFIT usando solo su sitio web oficial, cita la página de cada dato y se niega cuando la respuesta no existe. Construido como reemplazo del chatbot de la universidad.",
    },
    context: {
      en: "Integrated project, Universidad EAFIT. Team of 3.",
      es: "Proyecto integrado, Universidad EAFIT. Equipo de 3.",
    },
    metrics: [
      { value: "3,409", label: { en: "pages processed", es: "páginas procesadas" } },
      { value: "30,241", label: { en: "indexed chunks", es: "fragmentos indexados" } },
      { value: "100%", label: { en: "correct refusals (10/10)", es: "negativas correctas (10/10)" } },
      { value: "2.3 s", label: { en: "median latency", es: "latencia mediana" } },
    ],
    details: [
      {
        label: { en: "Data", es: "Datos" },
        text: {
          en: "Website scraped with Firecrawl and cleaned on an AWS medallion lakehouse: PySpark on Glue, Iceberg tables and Athena. 74% of 805K lines were menus and footers.",
          es: "Sitio extraído con Firecrawl y limpiado en un lakehouse medallion en AWS: PySpark en Glue, tablas Iceberg y Athena. El 74% de 805 mil líneas eran menús y pies de página.",
        },
      },
      {
        label: { en: "Retrieval", es: "Recuperación" },
        text: {
          en: "Hybrid search: Spanish BM25 plus Titan V2 embeddings in Chroma, fused with Reciprocal Rank Fusion, with multi-query and a program catalog.",
          es: "Búsqueda híbrida: BM25 en español más embeddings Titan V2 en Chroma, fusionados con Reciprocal Rank Fusion, con multiconsulta y catálogo de programas.",
        },
      },
      {
        label: { en: "Evaluation", es: "Evaluación" },
        text: {
          en: "Experiments in LangSmith over dev, paraphrased, coverage and blind test sets, measuring retrieval, faithfulness, abstention and latency.",
          es: "Experimentos en LangSmith sobre conjuntos de desarrollo, parafraseadas, cobertura y prueba ciega, midiendo recuperación, fidelidad, abstención y latencia.",
        },
      },
      {
        label: { en: "Deployment", es: "Despliegue" },
        text: {
          en: "Streamlit app in Docker on EC2, created with CloudFormation and a least privilege IAM role. Taken offline after the course to avoid costs.",
          es: "App en Streamlit dentro de Docker en EC2, creada con CloudFormation y un rol IAM de mínimo privilegio. Se apagó al terminar el curso para evitar costos.",
        },
      },
    ],
    images: [
      { image: "img/orion/chat.png", caption: { en: "Answer with cited sources", es: "Respuesta con fuentes citadas" } },
      { image: "img/orion/architecture.png", caption: { en: "Architecture on AWS", es: "Arquitectura en AWS" } },
      { image: "img/orion/results.png", caption: { en: "Retrieval mode comparison", es: "Comparación de modos de búsqueda" } },
    ],
    tags: ["Python", "LangChain", "LangSmith", "Amazon Bedrock", "PySpark", "AWS Glue", "Iceberg", "Athena", "Chroma", "Docker"],
    links: [
      { label: { en: "Video demo", es: "Video demo" }, url: "https://youtu.be/gfpiNKIYFkE" },
      { label: "GitHub", url: "https://github.com/ScanoDev/orion" },
    ],
  },
  {
    label: "Computer Vision",
    year: "",
    inProgress: true,
    image: "img/emotion.svg",
    title: { en: "Emotion recognition", es: "Reconocimiento de emociones" },
    description: {
      en: "Computer vision model that classifies facial emotions, trained on FER2013.",
      es: "Modelo de visión artificial que clasifica emociones faciales, entrenado con FER2013.",
    },
    tags: ["Python", "CNN", "FER2013"],
    links: [],
  },
  {
    label: "Reinforcement Learning",
    year: "2026",
    image: "img/dino.svg",
    title: { en: "Dino RL agent", es: "Agente RL para el dino" },
    description: {
      en: "An agent that teaches itself to play Chrome's dinosaur game with tabular Q-learning, on a game simulator I wrote from scratch in NumPy that runs thousands of games in seconds.",
      es: "Un agente que aprende solo a jugar el juego del dinosaurio de Chrome con Q-learning tabular, sobre un simulador del juego que escribí desde cero en NumPy y que corre miles de partidas en segundos.",
    },
    metrics: [
      { value: "88.24", label: { en: "obstacles per game (random: 0.36)", es: "obstáculos por partida (al azar: 0,36)" } },
      { value: "188/200", label: { en: "games with no crash", es: "partidas sin chocar" } },
      { value: "252", label: { en: "states in the Q-table", es: "estados en la tabla Q" } },
      { value: "~15 s", label: { en: "to train 3,000 games", es: "para entrenar 3.000 partidas" } },
    ],
    details: [
      {
        label: { en: "Environment", es: "Entorno" },
        text: {
          en: "Own simulator with jump physics, rising speed and three obstacles: small cactus, big cactus and a bird you can only dodge by ducking.",
          es: "Simulador propio con física de salto, velocidad creciente y tres obstáculos: cactus pequeño, cactus grande y un pájaro que solo se esquiva agachándose.",
        },
      },
      {
        label: { en: "State and rewards", es: "Estado y recompensas" },
        text: {
          en: "Distance to the next obstacle (21 bins) × speed (4) × obstacle type (3). +1 per obstacle cleared, −10 per crash, −0.01 per jump.",
          es: "Distancia al próximo obstáculo (21 tramos) × velocidad (4) × tipo de obstáculo (3). +1 por obstáculo superado, −10 por chocar, −0,01 por saltar.",
        },
      },
      {
        label: { en: "Key decision", es: "Decisión clave" },
        text: {
          en: "The agent only decides on the ground. A first version decided every frame, also mid air, and barely learned (1.3 obstacles per game), because good and bad jumps looked the same.",
          es: "El agente solo decide en el suelo. Una primera versión decidía en cada cuadro, también en el aire, y casi no aprendió (1,3 obstáculos por partida), porque los saltos buenos y malos se veían iguales.",
        },
      },
      {
        label: { en: "Evaluation", es: "Evaluación" },
        text: {
          en: "200 new games with another seed and no exploration. The 12 that fail end on a big cactus. Includes a terminal demo to watch the agent, a random agent or play yourself.",
          es: "200 partidas nuevas con otra semilla y sin exploración. Las 12 que fallan terminan en un cactus grande. Incluye una demo en la terminal para ver al agente, a uno al azar o jugar tú.",
        },
      },
    ],
    images: [
      { image: "img/dino-eval.svg", caption: { en: "Trained vs random agent", es: "Agente entrenado frente al azar" } },
      { image: "img/dino-curve.svg", caption: { en: "Learning curve", es: "Curva de aprendizaje" } },
    ],
    tags: ["Python", "NumPy", "Q-learning", "Reinforcement Learning", "Matplotlib"],
    links: [
      { label: "GitHub", url: "https://github.com/ScanoDev/DinoML" },
    ],
  },
  {
    label: "Linear Algebra",
    year: "",
    inProgress: true,
    image: "img/svd.svg",
    title: { en: "SVD image compression", es: "Compresión de imágenes con SVD" },
    description: {
      en: "Streamlit app that compresses images using singular value decomposition.",
      es: "App en Streamlit que comprime imágenes usando descomposición en valores singulares.",
    },
    tags: ["Python", "NumPy", "Streamlit"],
    links: [],
  },
];

// ============================================================
// CERTIFICACIONES
// logo: imagen del logo en certs/logos/. Si no existe, se muestran
//       las letras de "mark" (accent: true las pinta de rojo).
// url: enlace de verificación (déjalo vacío "" si no tiene).
// file: opcional, PDF del certificado dentro de la carpeta certs/
// ============================================================
const CERTS = [
  {
    mark: "C1",
    accent: true,
    logo: "certs/logos/britishcouncil.png",
    issuer: "British Council",
    title: { en: "Aptis General · English C1", es: "Aptis General · Inglés C1" },
    date: "",
    url: "https://credentials.britishcouncil.org/97114dd4-da8c-4b57-b2a4-50af63bdf5ea?key=bfbf4e7ea07260036ed0ceefca9f81a2c1c8289683c8ac1aa2456826f59d77b7",
  },
  {
    mark: "ML",
    logo: "certs/logos/deeplearningai.png",
    issuer: "DeepLearning.AI · Stanford Online",
    title: { en: "Advanced Learning Algorithms", es: "Advanced Learning Algorithms" },
    date: { en: "Apr 2026", es: "Abr 2026" },
    url: "https://learn.deeplearning.ai/certificates/b2804d01-69c3-4f1a-968c-38f65a0dad0a",
  },
  {
    mark: "ML",
    logo: "certs/logos/deeplearningai.png",
    issuer: "DeepLearning.AI",
    title: { en: "Supervised Machine Learning: Regression and Classification", es: "Supervised Machine Learning: Regression and Classification" },
    date: { en: "Jan 2026", es: "Ene 2026" },
    url: "https://www.deeplearning.ai/certificates/f0185c88-c266-4d3e-900c-98f0d17c6514",
  },
  {
    mark: "AWS",
    logo: "certs/logos/aws.svg",
    issuer: "AWS Training & Certification",
    title: { en: "Introduction to AWS Lambda", es: "Introduction to AWS Lambda" },
    date: { en: "Oct 2026", es: "Oct 2026" },
    url: "",
    file: "certs/aws-lambda.pdf",
  },
  {
    mark: "AWS",
    logo: "certs/logos/aws.svg",
    issuer: "AWS Training & Certification",
    title: { en: "Amazon Athena Getting Started", es: "Amazon Athena Getting Started" },
    date: { en: "Oct 2026", es: "Oct 2026" },
    url: "",
    file: "certs/aws-athena.pdf",
  },
];

// ============================================================
// SOBRE MÍ
// ============================================================
const ABOUT = {
  text: {
    en: "I'm a Systems Engineering student at Universidad EAFIT, graduating in December 2026, with an emphasis in Data Science and Analytics. I found my path in AI during a university project forecasting weather with transformers, and since then I've worked on forecasting, generative AI, agents and RAG. My goal is to use AI to make a real, positive difference in people's lives.",
    es: "Soy estudiante de Ingeniería de Sistemas en la Universidad EAFIT, con énfasis en Ciencia de Datos y Analítica, y me gradúo en diciembre de 2026. Descubrí mi camino en la IA en un proyecto universitario de pronóstico del clima con transformers, y desde entonces he trabajado en pronóstico, IA generativa, agentes y RAG. Mi meta es usar la IA para cambiar vidas para bien.",
  },
  swiss: {
    en: "This site follows Swiss design, a tradition built on clarity and precision, the same values I bring to my work. It is also a nod to Switzerland, a country I deeply admire and where I hope to study someday.",
    es: "Esta página sigue el diseño suizo, una tradición basada en la claridad y la precisión, los mismos valores que busco en mi trabajo. También es un guiño a Suiza, un país que admiro mucho y donde espero estudiar algún día.",
  },
  facts: [
    {
      label: { en: "Education", es: "Formación" },
      value: {
        en: "B.S. Systems Engineering, Universidad EAFIT (2022 – 2026)",
        es: "Ingeniería de Sistemas, Universidad EAFIT (2022 – 2026)",
      },
    },
    {
      label: { en: "Research & groups", es: "Investigación y grupos" },
      value: {
        en: "Competitive Programming group (C++, 1.5 years). SIMPRO research group (1 year).",
        es: "Semillero de Programación Competitiva (C++, 1,5 años). Grupo de investigación SIMPRO (1 año).",
      },
    },
    {
      label: { en: "Languages", es: "Idiomas" },
      value: { en: "Spanish (native), English (C1), French (A2)", es: "Español (nativo), inglés (C1), francés (A2)" },
    },
  ],
  // HABILIDADES: agrega, quita o cambia elementos de cada lista.
  tools: [
    {
      label: { en: "Languages", es: "Lenguajes" },
      items: ["Python", "SQL", "C++"],
    },
    {
      label: { en: "ML / AI", es: "ML / IA" },
      items: ["PyTorch", "Hugging Face", "Prophet", "LSTM", "N-HiTS", "NumPy", "Pandas"],
    },
    {
      label: { en: "LLMs & agents", es: "LLMs y agentes" },
      items: ["LangChain", "LangGraph", "LangSmith", "RAG", "OpenAI API", "Amazon Bedrock"],
    },
    {
      label: { en: "Data & cloud", es: "Datos y nube" },
      items: ["AWS (S3, Glue, Athena, EC2)", "PySpark", "Iceberg", "Azure", "PostgreSQL", "Firecrawl"],
    },
    {
      label: { en: "Apps & tools", es: "Apps y herramientas" },
      items: ["FastAPI", "Streamlit", "Docker", "Git", "ServiceNow", "Power Platform", "Power BI", "Grafana"],
    },
  ],
};
