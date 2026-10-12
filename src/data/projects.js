import transformerVisualizerImage from '../assets/projects/transformer-visualizer.jpg';
import paceplanImage from '../assets/projects/paceplan.jpg';
import aiaiImage from '../assets/projects/aiai.jpg';
import codesensaiImage from '../assets/projects/codesensai.jpg';

// Shown by default. `image`, `link`, `github`, `tags` and `date` are all optional.
export const featuredProjects = [
  {
    id: "transformer-visualizer",
    image: transformerVisualizerImage,
    title: "Transformer Visualizer",
    description: "Led a 5-person GDSC team building an interactive explorer of GPT-2 and BLOOM-560M internals: tokenization → embeddings → QKV → attention → MLP → output, across 12 layers in English, French and Chinese.",
    link: "https://transformer-visualizer-eight.vercel.app",
    github: "https://github.com/gdgutm/Transformer-Visualizer",
    tags: ["Next.js", "FastAPI", "TransformerLens"],
    date: "2026"
  },
  {
    id: "paceplan",
    image: paceplanImage,
    title: "PacePlan",
    description: "AI-powered semester planner that schedules a student's term from their deadlines, courses and commitments, using research-backed study methods.",
    link: "https://paceplan.net",
    tags: ["React", "TypeScript", "FastAPI", "MongoDB", "Firebase"],
    date: "2026"
  },
  {
    id: "aiai",
    image: aiaiImage,
    title: "AIAI",
    description: "Multi-agent AutoML system that turns natural-language requests into end-to-end training pipelines, with a finite-state-machine orchestrator managing ingestion → training → evaluation. 80% average accuracy across vision and NLP tasks; 90%+ less manual ML setup.",
    github: "https://github.com/FriedricNietzsche/AutoML",
    tags: ["PyTorch", "scikit-learn", "FastAPI", "Redis", "LangChain", "Socket.io"],
    date: "2026"
  },
  // {
  //   id: "bitarco",
  //   image: "https://i.ibb.co/rmJGNVF/Screenshot-64.png",
  //   title: "Bitarco Produce Website",
  //   description: "Professional business website for Bitarco Produce, a wholesale food distribution company. Features modern design, responsive layout, and optimized user experience for B2B clients.",
  //   link: "https://www.bitarcoproduce.com/",
  //   github: "",
  //   tags: ["Web Development", "Business Website", "Responsive Design"],
  //   date: "2024"
  // },
];

// Shown after "View All Projects"
export const olderProjects = [
  {
    id: "souq",
    image: "https://i.ibb.co/p6Lv3srs/Screenshot-2025-09-19-at-1-23-06-AM.png",
    title: "Souq",
    description: "React marketplace built solo in two days for a company's live event. Google Sheets served as the live source of truth so organizers could edit inventory mid-event, with API quota limits, latency and concurrent updates handled. Used by 100+ attendees.",
    // Intentionally shown without links
    // link: "https://souq-marketplace.web.app/",
    // github: "https://github.com/AnousAlma/souq",
    tags: ["JavaScript", "React", "Google Sheets API"],
    date: "Mar 2025"
  },
  {
    id: "codesensai",
    image: codesensaiImage,
    title: "CodeSensAI",
    description: "Built an AI-driven coding interview simulator that generates timed coding challenges and provides automated feedback on solution correctness and runtime efficiency.",
    link: "https://hackthevalley-8b71c.web.app/",
    github: "https://github.com/bilalhabbab/codesensai",
    tags: ["Python", "JavaScript", "React", "OpenAI API", "Piston API", "Firebase", "ChakraUI"],
    date: "Oct 2024"
  },
  {
    id: "ucl-draw",
    image: "https://i.ibb.co/qFPndXK/Screenshot-34.png",
    title: "UCL Draw Simulator",
    description: "Web application that simulates the UEFA Champions League Round of 16 Knockouts draw. Uses advanced algorithms to pick possible draws, randomize them, and display realistic results.",
    link: "https://ucl-draw-simulator.netlify.app/",
    // github: "https://github.com/AnousAlma/ucl-draw-simulator",
    tags: ["JavaScript", "HTML5", "CSS3", "Algorithm"],
    date: "2023"
  },
  {
    id: "stackhacks",
    image: "https://i.ibb.co/9HG5S7t/Screenshot-32.png",
    title: "Stack Hacks Website",
    description: "The web application built for the Stack Hacks hackathon. Contains information about the event, judges, and registration. Built with modern React practices and responsive design.",
    link: "https://stack-hacks.web.app/",
    github: "https://github.com/AnousAlma/stack-hack-website",
    tags: ["React", "Firebase", "CSS3", "Responsive"],
    date: "Feb 2024"
  },
];
