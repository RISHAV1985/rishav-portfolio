export interface Project {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  techStack: string[];
  github: string;
  demo: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "AI Voting System",
    subtitle: "Fingerprint Authentication using Machine Learning",
    description:
      "Developed a secure biometric voting system using fingerprint authentication and K-Nearest Neighbors (KNN). The system verifies voters in real time, reduces fraudulent voting, and ensures secure election management.",
    image: "/projects/voting.jpg",
    techStack: [
      "Python",
      "KNN",
      "OpenCV",
      "SQLite",
      "NumPy"
    ],
    github: "https://github.com/RISHAV1985",
    demo: "#",
    featured: true,
  },

  {
    id: 2,
    title: "Face Mask Recognition",
    subtitle: "Computer Vision & Deep Learning",
    description:
      "Built an AI-based face mask detection system capable of identifying whether a person is wearing a face mask in real time using OpenCV and TensorFlow.",
    image: "/projects/mask.jpg",
    techStack: [
      "Python",
      "TensorFlow",
      "OpenCV",
      "Keras",
      "NumPy"
    ],
    github: "https://github.com/RISHAV1985",
    demo: "#",
    featured: true,
  },

  {
    id: 3,
    title: "Developer Portfolio",
    subtitle: "Modern Portfolio Website",
    description:
      "Designed and developed a responsive developer portfolio using Next.js, TypeScript, Tailwind CSS, and Framer Motion with smooth animations and a recruiter-focused UI.",
    image: "/projects/portfolio.png",
    techStack: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion"
    ],
    github: "https://github.com/RISHAV1985/rishav-portfolio",
    demo: "#",
    featured: true,
  },

  {
    id: 4,
    title: "Smart Agriculture Research",
    subtitle: "AI • IoT • Robotics",
    description:
      "Published a research chapter exploring AI, IoT, and Robotics for sustainable agriculture with intelligent irrigation, crop monitoring, and precision farming techniques.",
    image: "/projects/research.png",
    techStack: [
      "Artificial Intelligence",
      "IoT",
      "Machine Learning",
      "Research"
    ],
    github: "#",
    demo: "#",
    featured: true,
  },

  {
    id: 5,
    title: "Enterprise Backend APIs",
    subtitle: "Java Spring Boot Microservices",
    description:
      "Designed and developed 100+ enterprise-grade REST APIs using Java, Spring Boot, and MySQL while optimizing SQL queries and improving backend performance in a large-scale enterprise environment.",
    image: "/projects/backend.jpg",
    techStack: [
      "Java",
      "Spring Boot",
      "REST APIs",
      "MySQL",
      "Git"
    ],
    github: "#",
    demo: "#",
    featured: true,
  },
  {
  id: 6,
  title: "AI Resume Analyzer",
  subtitle: "LLM + NLP",
  description:
    "Currently building an AI-powered resume analyzer that extracts skills, compares resumes with job descriptions, and provides personalized recommendations using NLP techniques.",
  image: "/projects/resume-ai.png",
  techStack: [
    "Python",
    "FastAPI",
    "NLP",
    "LLM",
    "React"
  ],
  github: "https://github.com/RISHAV1985",
  demo: "#",
  featured: false,
},
];