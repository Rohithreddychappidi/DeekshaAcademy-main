'use client';

import React from 'react';

export interface TechItem {
  name: string;
  category: string;
  badgeColor: string;
  icon: React.ReactNode;
}

// Crisp Vector SVGs for Top Tech Stack
export function PythonIcon({ className = 'h-6 w-6' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M63.5 12c-27.4 0-25.7 11.9-25.7 11.9l.03 12.3h26.2v3.7H25.3S8 37.9 8 65.3c0 27.4 15.1 26.5 15.1 26.5h9v-12.7c0-14.7 12.2-14.3 12.2-14.3h26.1c11.9 0 11.9-11.6 11.9-11.6V23.9S84.6 12 63.5 12zm-14.2 8a4.2 4.2 0 110 8.4 4.2 4.2 0 010-8.4z"
        fill="#387EB8"
      />
      <path
        d="M64.5 116c27.4 0 25.7-11.9 25.7-11.9l-.03-12.3H64v-3.7h38.7s17.3 2 17.3-25.4c0-27.4-15.1-26.5-15.1-26.5h-9v12.7c0 14.7-12.2 14.3-12.2 14.3H50.6c-11.9 0-11.9 11.6-11.9 11.6v29.3s-2.3 11.9 25.8 11.9zm14.2-8a4.2 4.2 0 110-8.4 4.2 4.2 0 010 8.4z"
        fill="#FFE052"
      />
    </svg>
  );
}

export function TensorFlowIcon({ className = 'h-6 w-6' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M64 4L16 32v64l48 28 48-28V32L64 4z" fill="#FF6F00" opacity="0.15" />
      <path d="M64 4v120l48-28V32L64 4z" fill="#E65100" />
      <path d="M64 4L16 32v64l48 28V4z" fill="#FF8F00" />
      <path d="M64 36l32 18v36l-32-18V36z" fill="#FFA000" />
      <path d="M64 36L32 54v36l32-18V36z" fill="#FFB300" />
    </svg>
  );
}

export function PyTorchIcon({ className = 'h-6 w-6' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M86.5 28.5L75.3 17.3a40.7 40.7 0 1024 45.4l-11.3-4.5a28.7 28.7 0 11-1.5-30.7z"
        fill="#EE4C2C"
      />
      <circle cx="86.5" cy="28.5" r="7" fill="#EE4C2C" />
    </svg>
  );
}

export function ScikitLearnIcon({ className = 'h-6 w-6' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="48" cy="64" r="38" fill="#3499CD" opacity="0.9" />
      <circle cx="80" cy="64" r="38" fill="#F89939" opacity="0.9" />
      <path
        d="M64 40a38 38 0 00-16 24 38 38 0 0016 24 38 38 0 0016-24A38 38 0 0064 40z"
        fill="#2A7CA7"
      />
    </svg>
  );
}

export function VMwareIcon({ className = 'h-6 w-6' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="8" y="24" width="48" height="48" rx="8" fill="#0095D5" />
      <rect x="40" y="56" width="48" height="48" rx="8" fill="#717074" />
      <rect x="72" y="24" width="48" height="48" rx="8" fill="#0095D5" />
    </svg>
  );
}

export function CloudServerIcon({ className = 'h-6 w-6' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="8" rx="2" ry="2" className="text-cyan-400 stroke-cyan-400" />
      <rect x="2" y="14" width="20" height="8" rx="2" ry="2" className="text-blue-500 stroke-blue-500" />
      <line x1="6" y1="6" x2="6.01" y2="6" />
      <line x1="6" y1="18" x2="6.01" y2="18" />
    </svg>
  );
}

export function DatabaseIcon({ className = 'h-6 w-6' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <ellipse cx="12" cy="5" rx="9" ry="3" className="text-blue-400 stroke-blue-400" />
      <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" className="text-cyan-400 stroke-cyan-400" />
      <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" className="text-blue-500 stroke-blue-500" />
    </svg>
  );
}

export function BrainAIIcon({ className = 'h-6 w-6' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 4.44-5.04z" className="text-purple-400 stroke-purple-400" />
      <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-4.44-5.04z" className="text-cyan-400 stroke-cyan-400" />
    </svg>
  );
}

// Maps Course Slugs to Targeted Tech Stack Items
export function getCourseTechStack(slug: string): TechItem[] {
  switch (slug) {
    case 'machine-learning':
      return [
        { name: 'Python 3', category: 'Language', badgeColor: 'bg-blue-500/10 text-blue-400 border-blue-500/20', icon: <PythonIcon /> },
        { name: 'Scikit-Learn', category: 'ML Algorithms', badgeColor: 'bg-orange-500/10 text-orange-400 border-orange-500/20', icon: <ScikitLearnIcon /> },
        { name: 'NumPy & Pandas', category: 'Data Analysis', badgeColor: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/20', icon: <DatabaseIcon /> },
        { name: 'Matplotlib & Seaborn', category: 'Visualization', badgeColor: 'bg-teal-500/10 text-teal-400 border-teal-500/20', icon: <CloudServerIcon /> },
        { name: 'Streamlit', category: 'Deployment UI', badgeColor: 'bg-rose-500/10 text-rose-400 border-rose-500/20', icon: <BrainAIIcon /> },
        { name: 'Jupyter Labs', category: 'Interactive Dev', badgeColor: 'bg-amber-500/10 text-amber-400 border-amber-500/20', icon: <PythonIcon /> },
      ];
    case 'deep-learning':
      return [
        { name: 'PyTorch', category: 'Deep Architectures', badgeColor: 'bg-rose-500/10 text-rose-400 border-rose-500/20', icon: <PyTorchIcon /> },
        { name: 'TensorFlow', category: 'Neural Pipelines', badgeColor: 'bg-amber-500/10 text-amber-400 border-amber-500/20', icon: <TensorFlowIcon /> },
        { name: 'Python 3', category: 'Core Language', badgeColor: 'bg-blue-500/10 text-blue-400 border-blue-500/20', icon: <PythonIcon /> },
        { name: 'Keras API', category: 'Model Building', badgeColor: 'bg-red-500/10 text-red-400 border-red-500/20', icon: <TensorFlowIcon /> },
        { name: 'OpenCV & Vision', category: 'Computer Vision', badgeColor: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20', icon: <BrainAIIcon /> },
        { name: 'Google Colab GPU', category: 'Cloud Training', badgeColor: 'bg-yellow-500/10 text-yellow-400 border-yellow-500/20', icon: <CloudServerIcon /> },
      ];
    case 'vmware-cloud-foundation':
    case 'vmware':
      return [
        { name: 'VMware VCF', category: 'Private Cloud SDDC', badgeColor: 'bg-sky-500/10 text-sky-400 border-sky-500/20', icon: <VMwareIcon /> },
        { name: 'vSphere & ESXi', category: 'Compute Hypervisor', badgeColor: 'bg-blue-500/10 text-blue-400 border-blue-500/20', icon: <VMwareIcon /> },
        { name: 'vSAN Storage', category: 'Software Storage', badgeColor: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20', icon: <DatabaseIcon /> },
        { name: 'NSX Networking', category: 'Micro-segmentation', badgeColor: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/20', icon: <CloudServerIcon /> },
        { name: 'SDDC Manager', category: 'Lifecycle Automation', badgeColor: 'bg-purple-500/10 text-purple-400 border-purple-500/20', icon: <VMwareIcon /> },
        { name: 'Aria Operations', category: 'Monitoring & Health', badgeColor: 'bg-indigo-500/10 text-indigo-400 border-indigo-500/20', icon: <CloudServerIcon /> },
      ];
    case 'generative-ai':
      return [
        { name: 'OpenAI API & GPT', category: 'LLM Foundations', badgeColor: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20', icon: <BrainAIIcon /> },
        { name: 'LangChain', category: 'AI Orchestration', badgeColor: 'bg-teal-500/10 text-teal-400 border-teal-500/20', icon: <BrainAIIcon /> },
        { name: 'Vector DBs', category: 'Embeddings & RAG', badgeColor: 'bg-purple-500/10 text-purple-400 border-purple-500/20', icon: <DatabaseIcon /> },
        { name: 'Python 3', category: 'Core Language', badgeColor: 'bg-blue-500/10 text-blue-400 border-blue-500/20', icon: <PythonIcon /> },
        { name: 'HuggingFace', category: 'Open Models', badgeColor: 'bg-amber-500/10 text-amber-400 border-amber-500/20', icon: <BrainAIIcon /> },
        { name: 'Streamlit UI', category: 'AI Web Apps', badgeColor: 'bg-rose-500/10 text-rose-400 border-rose-500/20', icon: <CloudServerIcon /> },
      ];
    case 'data-analytics':
      return [
        { name: 'SQL & Relational DB', category: 'Query Engine', badgeColor: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/20', icon: <DatabaseIcon /> },
        { name: 'Pandas & NumPy', category: 'Data Wrangling', badgeColor: 'bg-blue-500/10 text-blue-400 border-blue-500/20', icon: <PythonIcon /> },
        { name: 'PowerBI & Tableau', category: 'BI Dashboards', badgeColor: 'bg-amber-500/10 text-amber-400 border-amber-500/20', icon: <CloudServerIcon /> },
        { name: 'Matplotlib & Seaborn', category: 'Statistical Viz', badgeColor: 'bg-teal-500/10 text-teal-400 border-teal-500/20', icon: <DatabaseIcon /> },
        { name: 'Python 3', category: 'Scripting', badgeColor: 'bg-blue-500/10 text-blue-400 border-blue-500/20', icon: <PythonIcon /> },
        { name: 'Excel Advanced', category: 'Spreadsheets', badgeColor: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20', icon: <CloudServerIcon /> },
      ];
    default:
      // python-programming and others
      return [
        { name: 'Python 3.12', category: 'Core Language', badgeColor: 'bg-blue-500/10 text-blue-400 border-blue-500/20', icon: <PythonIcon /> },
        { name: 'Flask & Web', category: 'Backend Framework', badgeColor: 'bg-teal-500/10 text-teal-400 border-teal-500/20', icon: <CloudServerIcon /> },
        { name: 'OOP & Architecture', category: 'Design Patterns', badgeColor: 'bg-purple-500/10 text-purple-400 border-purple-500/20', icon: <BrainAIIcon /> },
        { name: 'Data Structures', category: 'Algorithms', badgeColor: 'bg-amber-500/10 text-amber-400 border-amber-500/20', icon: <DatabaseIcon /> },
        { name: 'SQLite & DB', category: 'Persistence', badgeColor: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/20', icon: <DatabaseIcon /> },
        { name: 'Git & GitHub', category: 'Version Control', badgeColor: 'bg-rose-500/10 text-rose-400 border-rose-500/20', icon: <CloudServerIcon /> },
      ];
  }
}

export function TechStackShowcase({ slug }: { slug: string }) {
  const techStack = getCourseTechStack(slug);

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
      {techStack.map((tech) => (
        <div
          key={tech.name}
          className="group relative flex flex-col items-center justify-center rounded-2xl border border-white/10 bg-slate-900/65 p-4 text-center backdrop-blur-md transition-all duration-300 hover:border-cyan-500/40 hover:bg-slate-800/80 hover:-translate-y-1 hover:shadow-xl hover:shadow-cyan-500/10"
        >
          <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-slate-950/80 p-2.5 shadow-inner ring-1 ring-white/10 group-hover:scale-110 transition-transform">
            {tech.icon}
          </div>
          <span className="text-xs sm:text-sm font-bold text-white tracking-wide">{tech.name}</span>
          <span className={`mt-1.5 inline-block rounded-full border px-2 py-0.5 text-[10px] font-semibold ${tech.badgeColor}`}>
            {tech.category}
          </span>
        </div>
      ))}
    </div>
  );
}
