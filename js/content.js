// ============================================================
// ESTE ES EL ÚNICO ARCHIVO QUE NECESITAS EDITAR
// Cada texto tiene versión en inglés (en) y español (es).
// Cuidado con las comillas y las comas al final de cada línea.
// Si la página queda en blanco: F12 > Console te dice la línea del error.
// ============================================================

const PROFILE = {
  name: "Sebastián Cano Rincón",
  role: { en: "ML Engineer", es: "Ingeniero de ML" },
  location: "Medellín, CO",
  tagline: {
    en: "Systems Engineer focused on Machine Learning.",
    es: "Ingeniero de Sistemas enfocado en Machine Learning.",
  },
  intro: {
    en: "I build machine learning solutions with a focus on LLMs and computer vision, from the model to deployment.",
    es: "Construyo soluciones de machine learning con foco en LLMs y visión artificial, desde el modelo hasta el despliegue.",
  },
  email: "sebastiancano21@hotmail.es",
  links: [
    { label: "LinkedIn", url: "https://www.linkedin.com/in/sebascano23" },
    { label: "GitHub", url: "https://github.com/ScanoDev" },
  ],
};

// ============================================================
// QUÉ SECCIÓN ABRE CADA REGIÓN DEL MAPA
// de = alemana, fr = francesa, it = italiana, rm = romanche
// Secciones posibles: experience, projects, about, contact
// ============================================================
const MAP_REGIONS = {
  de: "experience",
  fr: "projects",
  it: "about",
  rm: "contact",
};

// Textos fijos de la página
const TEXTS = {
  mapHint: {
    en: "Pick a region to explore. This site follows Swiss design, a tradition built on clarity and precision, the same values I bring to my work. The map is a nod to a country I deeply admire and where I hope to study someday.",
    es: "Elige una región para explorar. Esta página sigue el diseño suizo, una tradición basada en la claridad y la precisión, los mismos valores que busco en mi trabajo. El mapa es un guiño a un país que admiro mucho y donde espero estudiar algún día.",
  },
  experience: {
    title: { en: "Experience", es: "Experiencia" },
    sub: {
      en: "Work done at companies. Some details are omitted for confidentiality.",
      es: "Trabajo realizado en empresas. Algunos detalles se omiten por confidencialidad.",
    },
  },
  projects: {
    title: { en: "Projects", es: "Proyectos" },
    sub: {
      en: "Personal projects I build to learn and experiment.",
      es: "Proyectos personales que construyo para aprender y experimentar.",
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
  comingSoon: { en: "Coming soon", es: "Próximamente" },
  top: { en: "Back to top", es: "Volver arriba" },
};

// ============================================================
// EXPERIENCIA PROFESIONAL (galería con imagen)
// image: ruta de la imagen en la carpeta img. Si no existe,
//        se muestra un recuadro gris con el texto de "label".
// ============================================================
const PROFESSIONAL = [
  {
    org: "ITSTK",
    year: "2026",
    image: "img/prospeccion.png",
    label: "AI Agent",
    title: { en: "B2B prospecting agent", es: "Agente de prospección B2B" },
    description: {
      en: "Built an agent that finds and qualifies business leads using the OpenAI API and Lusha, removes duplicates and syncs them to the ServiceNow CRM through OAuth 2.0.",
      es: "Construí un agente que busca y califica prospectos de negocio con la API de OpenAI y Lusha, elimina duplicados y los sincroniza con el CRM de ServiceNow mediante OAuth 2.0.",
    },
    tags: ["Python", "OpenAI API", "Streamlit", "ServiceNow"],
  },
  {
    org: "ISAGEN",
    year: "2026",
    image: "img/isagen.png",
    label: "Forecasting",
    title: { en: "Time series forecasting", es: "Pronóstico de series de tiempo" },
    description: {
      en: "Developed forecasting models for rotating equipment with Prophet, LSTM and N-HiTS, plus anomaly detection and ETL pipelines on Azure Blob Storage.",
      es: "Desarrollé modelos de pronóstico para equipos rotativos con Prophet, LSTM y N-HiTS, además de detección de anomalías y pipelines ETL en Azure Blob Storage.",
    },
    tags: ["Python", "Prophet", "LSTM", "N-HiTS", "Azure"],
  },
  {
    org: "ITSTK",
    year: "2026",
    image: "img/servicenow.png",
    label: "Generative AI",
    title: { en: "Generative AI in ServiceNow", es: "IA generativa en ServiceNow" },
    description: {
      en: "Participated in an MVP of Now Assist for Strategic Portfolio Management, defining user stories in Given/When/Then format for a client.",
      es: "Participé en un MVP de Now Assist para Strategic Portfolio Management, definiendo historias de usuario en formato Dado/Cuando/Entonces para un cliente.",
    },
    tags: ["ServiceNow", "Now Assist", "GenAI"],
  },
];

// ============================================================
// PROYECTOS PERSONALES (lista numerada)
// comingSoon: true muestra la etiqueta "Próximamente".
// links: cuando subas el proyecto, agrega el repo o la demo, así:
//   links: [{ label: "GitHub", url: "https://github.com/ScanoDev/orion" },
//           { label: "Demo", url: "https://huggingface.co/spaces/..." }],
// ============================================================
const PERSONAL = [
  {
    label: "LLM / RAG",
    comingSoon: true,
    title: { en: "ORION", es: "ORION" },
    description: {
      en: "RAG chatbot that answers questions about Universidad EAFIT.",
      es: "Chatbot RAG que responde preguntas sobre la Universidad EAFIT.",
    },
    tags: ["Python", "LLMs", "RAG"],
    links: [],
  },
  {
    label: "Computer Vision",
    comingSoon: true,
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
    comingSoon: true,
    title: { en: "Dino RL agent", es: "Agente RL para el dino" },
    description: {
      en: "Agent that learns to play Chrome's dinosaur game with tabular Q-learning.",
      es: "Agente que aprende a jugar el juego del dinosaurio de Chrome con Q-learning tabular.",
    },
    tags: ["Python", "RL", "Q-learning"],
    links: [],
  },
  {
    label: "Linear Algebra",
    comingSoon: true,
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
// SOBRE MÍ
// ============================================================
const ABOUT = {
  text: {
    en: "I'm a Systems Engineering student at Universidad EAFIT, graduating in December 2026. I found my path in AI during a university project forecasting weather with transformers, and since then I've worked on forecasting, generative AI and agents. My goal is to use AI to make a real, positive difference in people's lives.",
    es: "Soy estudiante de Ingeniería de Sistemas en la Universidad EAFIT y me gradúo en diciembre de 2026. Descubrí mi camino en la IA en un proyecto universitario de pronóstico del clima con transformers, y desde entonces he trabajado en pronóstico, IA generativa y agentes. Mi meta es usar la IA para cambiar vidas para bien.",
  },
  facts: [
    {
      label: { en: "Education", es: "Formación" },
      value: { en: "Systems Engineering, Universidad EAFIT (2026)", es: "Ingeniería de Sistemas, Universidad EAFIT (2026)" },
    },
    {
      label: { en: "Focus", es: "Enfoque" },
      value: { en: "LLMs, computer vision, AI agents", es: "LLMs, visión artificial, agentes de IA" },
    },
    {
      label: { en: "Based in", es: "Ubicación" },
      value: { en: "Medellín, Colombia", es: "Medellín, Colombia" },
    },
    {
      label: { en: "Languages", es: "Idiomas" },
      value: { en: "Spanish (native), English", es: "Español (nativo), inglés" },
    },
  ],
};
