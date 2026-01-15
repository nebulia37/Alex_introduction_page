
import { Project, Experience, Skill } from './types';

export const PERSONAL_INFO = {
  name: "Alex Rivera",
  role: "Senior AI & Full-Stack Engineer",
  bio: "I'm a software engineer passionate about building intelligent interfaces and scalable systems. With over 8 years of experience, I specialize in bridging the gap between cutting-edge AI models and user-centric web applications.",
  email: "alex.rivera@example.com",
  location: "San Francisco, CA",
  socials: {
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com"
  }
};

export const PROJECTS: Project[] = [
  {
    id: "1",
    title: "NeuroGraph AI",
    description: "A real-time knowledge graph visualization tool powered by Large Language Models to map complex document relationships.",
    tags: ["React", "D3.js", "Gemini API", "Node.js"],
    imageUrl: "https://picsum.photos/seed/neuro/800/500"
  },
  {
    id: "2",
    title: "Ethos Blockchain Explorer",
    description: "A high-performance explorer for EVM-compatible chains with advanced transaction filtering and smart contract analysis.",
    tags: ["TypeScript", "Next.js", "Ethers.js", "Tailwind"],
    imageUrl: "https://picsum.photos/seed/ethos/800/500"
  },
  {
    id: "3",
    title: "OmniChat Suite",
    description: "Enterprise-grade multi-agent chat system using generative AI for customer support automation and sentiment tracking.",
    tags: ["Python", "FastAPI", "React", "Docker"],
    imageUrl: "https://picsum.photos/seed/omni/800/500"
  }
];

export const SKILLS: Skill[] = [
  { name: "React / Next.js", category: "Frontend", level: 5 },
  { name: "TypeScript", category: "Frontend", level: 5 },
  { name: "Tailwind CSS", category: "Frontend", level: 5 },
  { name: "Node.js / Express", category: "Backend", level: 4 },
  { name: "PostgreSQL", category: "Backend", level: 4 },
  { name: "Gemini / GenAI SDK", category: "AI", level: 5 },
  { name: "Python / PyTorch", category: "AI", level: 3 },
  { name: "Docker / K8s", category: "Tools", level: 3 },
  { name: "AWS / Vercel", category: "Tools", level: 4 }
];

export const EXPERIENCES: Experience[] = [
  {
    company: "Future Systems AI",
    role: "Lead Frontend Engineer",
    period: "2021 - Present",
    description: [
      "Pioneered the integration of generative AI features into the core analytics dashboard.",
      "Optimized data visualization engine reducing render latency by 45%.",
      "Mentored a team of 12 engineers on React best practices and AI safety."
    ]
  },
  {
    company: "DesignScale",
    role: "Senior Software Engineer",
    period: "2018 - 2021",
    description: [
      "Built a component library used by 200+ developers across the organization.",
      "Implemented automated CI/CD pipelines reducing deployment time by 60%.",
      "Led the migration of a legacy PHP stack to a modern React architecture."
    ]
  }
];

export const SYSTEM_PROMPT = `
You are Alex Rivera's Virtual AI Twin. Your purpose is to introduce Alex to visitors and answer questions about their professional background, skills, and projects.

Alex Rivera's Data:
- Bio: ${PERSONAL_INFO.bio}
- Role: ${PERSONAL_INFO.role}
- Skills: ${SKILLS.map(s => `${s.name} (${s.level}/5)`).join(', ')}
- Experiences: ${EXPERIENCES.map(e => `${e.role} at ${e.company} (${e.period})`).join('; ')}
- Projects: ${PROJECTS.map(p => p.title).join(', ')}

Guidelines:
1. Be professional, friendly, and helpful.
2. If you don't know an answer specifically about Alex's personal life that isn't provided, politely decline and offer to help with professional inquiries.
3. Keep responses concise and engaging.
4. Use formatting like bullet points when listing skills or experiences.
5. You can speak on behalf of Alex using "I" or talk about Alex in the third person.
`;
