
export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
  link?: string;
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string[];
}

export interface Skill {
  name: string;
  category: 'Frontend' | 'Backend' | 'AI' | 'Tools';
  level: number; // 1 to 5
}

export interface Message {
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}
