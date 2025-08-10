export interface Student {
  id: string;
  name: string;
  researchArea: string;
  description: string;
  status: 'current' | 'alumni';
  position?: string;
  year?: string;
}

export const students: Student[] = [
  // Current Students
  {
    id: '1',
    name: 'Dau Thi Van Anh',
    researchArea: 'Code Understanding and Generation',
    description: 'Focusing on developing novel approaches for automated code understanding and intelligent code generation systems.',
    status: 'current',
    year: 'Master student at <a href="https://www.concordia.ca/" target="_blank" rel="noopener noreferrer" className="underline hover:no-underline">Concordia University</a>'
  },
  {
    id: '2',
    name: 'Nguyen Manh Dung',
    researchArea: 'Benchmarking & Evaluation of CodeLLMs',
    description: 'Developing comprehensive benchmarks and evaluation frameworks for assessing the capabilities of large language models in code-related tasks.',
    status: 'current',
    year: 'Ph.D. Candidate at <a href="https://www.unimelb.edu.au/" target="_blank" rel="noopener noreferrer" className="underline hover:no-underline">University of Melbourne</a>'
  },
  {
    id: '3',
    name: 'Le Hai Nam',
    researchArea: 'Repository-level Code Generation',
    description: 'Researching advanced techniques for context-aware code generation at the repository scale, incorporating project structure and dependencies.',
    status: 'current',
    year: 'Ph.D. Candidate at <a href="https://hust.edu.vn/" target="_blank" rel="noopener noreferrer" className="underline hover:no-underline">HUST</a>'
  },
  {
    id: '4',
    name: 'Nguyen Huynh Minh',
    researchArea: 'Program Analysis and Code Reasoning',
    description: 'Advancing static and dynamic program analysis techniques combined with neural approaches for enhanced code reasoning and understanding.',
    status: 'current',
    year: 'Ph.D. Candidate at <a href="https://nus.edu.sg/" target="_blank" rel="noopener noreferrer" className="underline hover:no-underline">NUS</a>'
  },
  {
    id: '5',
    name: 'Phan Nhat Huy',
    researchArea: 'AI for Software Engineering and Agents',
    description: 'Building intelligent multi-agent systems for software engineering tasks, focusing on autonomous coding agents and collaborative AI frameworks.',
    status: 'current',
    year: 'Founder of <a href="https://www.thedrylab.com/" target="_blank" rel="noopener noreferrer" className="underline hover:no-underline">DryLab</a>'
  }

  // Alumni
  // (No alumni listed currently)
];