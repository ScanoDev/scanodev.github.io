// ============================================================
// ESTE ES EL ÚNICO ARCHIVO QUE NECESITAS EDITAR
// Cada texto tiene versión en inglés (en) y español (es).
// Cuidado con las comillas y las comas al final de cada línea.
// ============================================================

const PROFILE = {
  name: "Sebastián Cano Rincón",
  role: { en: "ML Engineer", es: "Ingeniero de ML" },
  tagline: {
    en: "Systems Engineer focused on Machine Learning",
    es: "Ingeniero de Sistemas enfocado en Machine Learning",
  },
  about: {
    en: "Systems Engineering student at Universidad EAFIT, graduating in December 2026. I build machine learning solutions with a focus on LLMs and computer vision, from the model to deployment.",
    es: "Estudiante de Ingeniería de Sistemas en la Universidad EAFIT, me gradúo en diciembre de 2026. Construyo soluciones de machine learning con foco en LLMs y visión artificial, desde el modelo hasta el despliegue.",
  },
  links: [
    { label: "Email", url: "mailto:sebastiancano21@hotmail.es" },
    { label: "LinkedIn", url: "https://www.linkedin.com/in/sebascano23" },
    { label: "GitHub", url: "https://github.com/ScanoDev" },
  ],
};

// Textos fijos de la página
const TEXTS = {
  langButton: { en: "Español", es: "English" },
  profTitle: { en: "Professional experience", es: "Experiencia profesional" },
  profSub: {
    en: "Work done at companies. Some details are omitted for confidentiality.",
    es: "Trabajo realizado en empresas. Algunos detalles se omiten por confidencialidad.",
  },
  persTitle: { en: "Personal projects", es: "Proyectos personales" },
  persSub: {
    en: "Projects I build to learn and experiment.",
    es: "Proyectos que construyo para aprender y experimentar.",
  },
  comingSoon: { en: "Coming soon", es: "Próximamente" },
};

// ============================================================
// PROYECTOS PROFESIONALES (galería)
// image: ruta de la imagen en la carpeta img. Si no existe,
//        se muestra el fondo con el texto de "label".
// ============================================================
const PROFESSIONAL = [
  {
    org: "ITSTK · 2026",
    image: "img/prospeccion.png",
    label: "AI AGENT",
    title: { en: "B2B prospecting agent", es: "Agente de prospección B2B" },
    description: {
      en: "Built an agent that finds and qualifies business leads using the OpenAI API and Lusha, removes duplicates and syncs them to the ServiceNow CRM through OAuth 2.0.",
      es: "Construí un agente que busca y califica prospectos de negocio con la API de OpenAI y Lusha, elimina duplicados y los sincroniza con el CRM de ServiceNow mediante OAuth 2.0.",
    },
    tags: ["Python", "OpenAI API", "Streamlit", "ServiceNow"],
  },
  {
    org: "ISAGEN · 2026",
    image: "img/isagen.png",
    label: "FORECASTING",
    title: { en: "Time series forecasting", es: "Pronóstico de series de tiempo" },
    description: {
      en: "Developed forecasting models for rotating equipment with Prophet, LSTM and N-HiTS, plus anomaly detection and ETL pipelines on Azure Blob Storage.",
      es: "Desarrollé modelos de pronóstico para equipos rotativos con Prophet, LSTM y N-HiTS, además de detección de anomalías y pipelines ETL en Azure Blob Storage.",
    },
    tags: ["Python", "Prophet", "LSTM", "N-HiTS", "Azure"],
  },
  {
    org: "ITSTK · 2026",
    image: "img/servicenow.png",
    label: "GENERATIVE AI",
    title: { en: "Generative AI in ServiceNow", es: "IA generativa en ServiceNow" },
    description: {
      en: "Participated in an MVP of Now Assist for Strategic Portfolio Management, defining user stories in Given/When/Then format for a client.",
      es: "Participé en un MVP de Now Assist para Strategic Portfolio Management, definiendo historias de usuario en formato Dado/Cuando/Entonces para un cliente.",
    },
    tags: ["ServiceNow", "Now Assist", "GenAI"],
  },
];

// ============================================================
// PROYECTOS PERSONALES
// comingSoon: true muestra la etiqueta "Próximamente".
// links: cuando subas el proyecto, agrega aquí el repo o la demo, así:
//   links: [{ label: "GitHub", url: "https://github.com/ScanoDev/orion" },
//           { label: "Demo", url: "https://huggingface.co/spaces/..." }],
// ============================================================
const PERSONAL = [
  {
    label: "LLM · RAG",
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
    label: "COMPUTER VISION",
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
    label: "REINFORCEMENT LEARNING",
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
    label: "LINEAR ALGEBRA",
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