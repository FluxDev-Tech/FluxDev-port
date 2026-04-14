import React from 'react';
import { 
  Atom, 
  FileJson, 
  Zap, 
  Wind, 
  Server, 
  Database, 
  Share2, 
  Activity, 
  PenTool, 
  Box, 
  GitBranch,
  Layers,
  Layout,
  Cpu,
  Smartphone,
  Database as DbIcon,
  Globe
} from 'lucide-react';

export const getSkillIcon = (name: string, size = 14) => {
  const iconMap: Record<string, React.ReactNode> = {
    'React': <Atom size={size} />,
    'TypeScript': <FileJson size={size} />,
    'Next.js': <Zap size={size} />,
    'Tailwind CSS': <Wind size={size} />,
    'Node.js': <Server size={size} />,
    'PostgreSQL': <Database size={size} />,
    'GraphQL': <Share2 size={size} />,
    'Framer Motion': <Activity size={size} />,
    'Figma': <PenTool size={size} />,
    'Docker': <Box size={size} />,
    'Git': <GitBranch size={size} />,
    'Vite': <Zap size={size} />,
    'D3.js': <Activity size={size} />,
    'Stripe': <Zap size={size} />,
    'Gemini API': <Cpu size={size} />,
    'React Native': <Smartphone size={size} />,
    'Firebase': <DbIcon size={size} />,
    'Expo': <Zap size={size} />,
    'Redux Toolkit': <Layers size={size} />,
    'Styled Components': <Layout size={size} />,
    'Prisma': <Database size={size} />
  };
  return iconMap[name] || <Globe size={size} />;
};
