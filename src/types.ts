export interface Project {
  id: string;
  title: string;
  description: string;
  fullDescription?: string;
  image: string;
  gallery?: string[];
  technologies?: string[];
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
}

export interface Skill {
  name: string;
  icon: string;
  category: 'Frontend' | 'Backend' | 'Tools' | 'Design';
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string[];
}

export interface ChatMessage {
  role: 'user' | 'bot';
  content: string;
  timestamp: Date;
}
