import { Project, Skill, Experience } from './types';

export const PERSONAL_INFO = {
  name: "John Lawrence V. Martinez",
  title: "Full Stack Developer & UI Designer",
  bio: "I build high-performance, visually stunning digital experiences. With a focus on modern web technologies and user-centric design, I turn complex problems into elegant solutions.",
  email: "fluxdevtech@gmail.com",
  availability: "Available for new projects",
  education: {
    degree: "BS in Information Technology",
    institution: "Capiz State University",
    period: "2022 - 2026",
    status: "Incoming 3rd Year Student"
  },
  socials: {
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com",
    resume: "#"
  }
};

export const SKILLS: Skill[] = [
  { name: "React", icon: "react", category: "Frontend" },
  { name: "TypeScript", icon: "typescript", category: "Frontend" },
  { name: "Next.js", icon: "nextjs", category: "Frontend" },
  { name: "Tailwind CSS", icon: "tailwind", category: "Frontend" },
  { name: "Node.js", icon: "nodejs", category: "Backend" },
  { name: "PostgreSQL", icon: "postgresql", category: "Backend" },
  { name: "GraphQL", icon: "graphql", category: "Backend" },
  { name: "Framer Motion", icon: "motion", category: "Tools" },
  { name: "Figma", icon: "figma", category: "Design" },
  { name: "Docker", icon: "docker", category: "Tools" },
  { name: "Git", icon: "git", category: "Tools" },
  { name: "Vite", icon: "vite", category: "Tools" }
];

export const PROJECTS: Project[] = [
  {
    id: "1",
    title: "Quantum Dashboard",
    description: "A futuristic analytics platform with real-time data visualization and AI-driven insights.",
    fullDescription: "Quantum Dashboard is a cutting-edge analytics solution designed for high-performance data processing. It features real-time synchronization with multiple data sources, providing users with instant insights through interactive D3.js visualizations. The platform leverages AI to predict trends and identify anomalies before they impact business operations.",
    image: "https://picsum.photos/seed/quantum/800/1000",
    gallery: [
      "https://picsum.photos/seed/quantum1/1200/800",
      "https://picsum.photos/seed/quantum2/1200/800",
      "https://picsum.photos/seed/quantum3/1200/800"
    ],
    technologies: ["React", "TypeScript", "D3.js", "Tailwind CSS", "Node.js", "PostgreSQL"],
    tags: ["React", "D3.js", "Tailwind"],
    liveUrl: "#",
    githubUrl: "#"
  },
  {
    id: "2",
    title: "Nebula E-commerce",
    description: "A premium shopping experience with smooth transitions and a minimalist aesthetic.",
    fullDescription: "Nebula is a high-end e-commerce platform that redefines the online shopping experience. Built with Next.js for server-side rendering and SEO optimization, it offers lightning-fast page loads and seamless transitions. The minimalist design focuses on high-quality product imagery and intuitive navigation, supported by a robust Stripe integration for secure payments.",
    image: "https://picsum.photos/seed/nebula/800/600",
    gallery: [
      "https://picsum.photos/seed/nebula1/1200/800",
      "https://picsum.photos/seed/nebula2/1200/800",
      "https://picsum.photos/seed/nebula3/1200/800"
    ],
    technologies: ["Next.js", "TypeScript", "Stripe", "Framer Motion", "Tailwind CSS", "Prisma"],
    tags: ["Next.js", "Stripe", "Framer Motion"],
    liveUrl: "#",
    githubUrl: "#"
  },
  {
    id: "3",
    title: "Flux AI Chat",
    description: "An intelligent conversational interface with a focus on glassmorphism and fluid animations.",
    fullDescription: "Flux AI Chat is a demonstration of modern UI/UX principles applied to artificial intelligence. It utilizes the Gemini API to provide intelligent responses in a beautiful glassmorphic interface. The application features fluid animations powered by Framer Motion, creating a conversational experience that feels natural and responsive.",
    image: "https://picsum.photos/seed/aura/800/1200",
    gallery: [
      "https://picsum.photos/seed/flux1/1200/800",
      "https://picsum.photos/seed/flux2/1200/800",
      "https://picsum.photos/seed/flux3/1200/800"
    ],
    technologies: ["React", "Gemini API", "Framer Motion", "Tailwind CSS", "Vite"],
    tags: ["React", "Gemini API", "Tailwind"],
    liveUrl: "#",
    githubUrl: "#"
  },
  {
    id: "4",
    title: "Zenith Mobile App",
    description: "A cross-platform mobile application for productivity and focus, featuring a clean and distraction-free UI.",
    fullDescription: "Zenith is a mobile productivity suite designed to help users achieve deep focus. It combines task management, time tracking, and ambient soundscapes into a single, cohesive experience. The app uses Firebase for real-time data sync across devices and features a clean, distraction-free UI that adapts to the user's workflow.",
    image: "https://picsum.photos/seed/zenith/800/800",
    gallery: [
      "https://picsum.photos/seed/zenith1/1200/800",
      "https://picsum.photos/seed/zenith2/1200/800",
      "https://picsum.photos/seed/zenith3/1200/800"
    ],
    technologies: ["React Native", "Firebase", "Expo", "Redux Toolkit", "Styled Components"],
    tags: ["React Native", "Firebase", "Expo"],
    liveUrl: "#",
    githubUrl: "#"
  }
];

export const EXPERIENCES: Experience[] = [
  {
    company: "TechNova Solutions",
    role: "Senior Full Stack Developer",
    period: "2022 - Present",
    description: [
      "Led the development of a high-traffic SaaS platform using React and Node.js.",
      "Implemented advanced animation systems using Framer Motion to improve user engagement by 40%.",
      "Architected a scalable microservices backend with PostgreSQL and Redis."
    ]
  },
  {
    company: "Creative Pulse",
    role: "Frontend Developer",
    period: "2020 - 2022",
    description: [
      "Developed interactive marketing sites for Fortune 500 clients.",
      "Optimized web performance, reducing load times by 50% across key projects.",
      "Collaborated closely with designers to bridge the gap between Figma and code."
    ]
  }
];
