// Branding Colors
export const COLORS = {
  primary: '#0F172A',
  secondary: '#2563EB',
  accent: '#06B6D4',
  background: '#F8FAFC',
  white: '#FFFFFF',
  gradient: 'from-blue-600 to-cyan-500',
};

// Routes
export const ROUTES = {
  HOME: '/',
  COURSES: '/courses',
  ABOUT: '/about',
  FOUNDER: '/founder',
  WORKSHOPS: '/workshops',
  COLLABORATION: '/collaboration',
  BLOG: '/blog',
  CONTACT: '/contact',
};

// Contact Information
export const CONTACT_INFO = {
  phone: '+91 7676356131',
  email: 'deekshatechacademy@gmail.com',
  whatsapp: 'https://wa.me/917676356131',
  address: 'Bangalore, India',
};

// Academy Info
export const ACADEMY_INFO = {
  name: 'Deeksha Tech Academy',
  tagline: 'Learn. Build. Lead.',
  description: 'Master future skills with industry-focused training in Artificial Intelligence, Data Analytics, Python Programming, and more.',
  domain: 'Artificial Intelligence | Technology | Future Skills',
};

// Navigation Menu Items
export const NAV_ITEMS = [
  { label: 'Home', href: ROUTES.HOME },
  { label: 'Courses', href: ROUTES.COURSES },
  { label: 'About', href: ROUTES.ABOUT },
  { label: 'Founder', href: ROUTES.FOUNDER },
  // { label: 'Workshops', href: ROUTES.WORKSHOPS },
  // { label: 'Collaboration', href: ROUTES.COLLABORATION },
  // { label: 'Blog', href: ROUTES.BLOG },
  { label: 'Contact', href: ROUTES.CONTACT },
];

// Statistics
export const STATS = [
  { label: 'Students', value: 500, suffix: '+' },
  { label: 'Workshops', value: 20, suffix: '+' },
  { label: 'Projects', value: 100, suffix: '+' },
  { label: 'Success Rate', value: 95, suffix: '%' },
];

// Why Choose Us
export const WHY_CHOOSE_US = [
  {
    id: '1',
    title: 'Industry-Oriented Curriculum',
    description: 'Designed with industry experts and real-world requirements.',
    icon: 'Compass',
  },
  {
    id: '2',
    title: 'Hands-On Learning',
    description: 'Learn by doing with practical projects and live coding sessions.',
    icon: 'Code',
  },
  {
    id: '3',
    title: 'Live Projects',
    description: 'Work on real-world projects and build your portfolio.',
    icon: 'Rocket',
  },
  {
    id: '4',
    title: 'Internship Guidance',
    description: 'Get help landing internships at top tech companies.',
    icon: 'Briefcase',
  },
  {
    id: '5',
    title: 'Career Support',
    description: 'Resume building, interview prep, and career guidance.',
    icon: 'Target',
  },
  {
    id: '6',
    title: 'Mock Interviews',
    description: 'Practice with mock interviews from industry professionals.',
    icon: 'Users',
  },
  {
    id: '7',
    title: 'Certifications',
    description: 'Earn industry-recognized certifications on course completion.',
    icon: 'Award',
  },
  {
    id: '8',
    title: 'Affordable Fees',
    description: 'High-quality education at affordable prices with flexible payments.',
    icon: 'DollarSign',
  },
];

// Learning Methodology Steps
export const LEARNING_METHODOLOGY = [
  { step: 1, title: 'Concept Learning', description: 'Foundation building with core concepts' },
  { step: 2, title: 'Practical Sessions', description: 'Hands-on coding and implementation' },
  { step: 3, title: 'Assignments', description: 'Self-paced practice and reinforcement' },
  { step: 4, title: 'Mini Projects', description: 'Real-world application of concepts' },
  { step: 5, title: 'Industry Case Studies', description: 'Learn from actual industry examples' },
  { step: 6, title: 'Capstone Projects', description: 'Comprehensive project implementation' },
  { step: 7, title: 'Career Preparation', description: 'Interview prep and job readiness' },
];

// Student Benefits
export const STUDENT_BENEFITS = [
  {
    id: '1',
    title: 'Practical Skills',
    description: 'Learn in-demand skills directly applicable to real jobs.',
    icon: 'Zap',
  },
  {
    id: '2',
    title: 'Project Experience',
    description: 'Build real projects that showcase your capabilities.',
    icon: 'GitBranch',
  },
  {
    id: '3',
    title: 'Portfolio Development',
    description: 'Create an impressive portfolio while learning.',
    icon: 'Folder',
  },
  {
    id: '4',
    title: 'Industry Exposure',
    description: 'Network with industry professionals and mentors.',
    icon: 'Network',
  },
  {
    id: '5',
    title: 'Resume Building',
    description: 'Get help crafting a compelling resume.',
    icon: 'FileText',
  },
  {
    id: '6',
    title: 'Internship Guidance',
    description: 'Placement assistance and internship opportunities.',
    icon: 'CheckCircle',
  },
];

// Industry Projects
export const INDUSTRY_PROJECTS = [
  {
    id: '1',
    title: 'Private Cloud Deployment',
    description: 'Enterprise VCF environment with management domain, workload domain, compute, vSAN storage, and NSX networking.',
    technologies: ['VMware VCF', 'vSphere', 'vSAN', 'NSX'],
  },
  {
    id: '2',
    title: 'Data Analytics Dashboard',
    description: 'Interactive analytics dashboard for business intelligence.',
    technologies: ['Python', 'Analytics', 'Visualization'],
  },
  {
    id: '3',
    title: 'AI Chatbot',
    description: 'Intelligent chatbot powered by large language models.',
    technologies: ['GenAI', 'Python', 'NLP'],
  },
  {
    id: '4',
    title: 'Recommendation System',
    description: 'ML-based recommendation engine for personalization.',
    technologies: ['ML', 'Python', 'Data Science'],
  },
  {
    id: '5',
    title: 'Business Analytics Solution',
    description: 'Complete analytics platform for business insights.',
    technologies: ['Analytics', 'Python', 'SQL'],
  },
];

// Workshop Categories
export const WORKSHOP_CATEGORIES = [
  'Artificial Intelligence',
  'Generative AI',
  'Data Analytics',
  'Career Guidance',
  'Faculty Development Programs',
];

// Blog Categories
export const BLOG_CATEGORIES = [
  'AI',
  'Generative AI',
  'Python',
  'Data Analytics',
  'Career Guidance',
];

// Founder Info
export const FOUNDER_INFO = {
  name: 'Deeksha D',
  title: 'Founder & AI Educator',
  bio: `Deeksha D is an Artificial Intelligence and Data Science graduate with a strong passion for
technology, education, and skill development. She has practical experience in Data
Engineering, Data Analytics, Artificial Intelligence, and emerging technologies through
internships and project-based learning.
She has worked with industry organizations and gained exposure to real-world applications of
data science, analytics, and AI solutions. Her vision is to empower students and professionals
by providing industry-relevant education and practical learning opportunities that prepare
them for successful careers.`,
  email: 'deeksha@deekshaacademy.com',
  phone: '+91 7676356131',
  education: [
    'B.E in AI & DS',
  ],
  expertise: [
    'Artificial Intelligence',
    'Machine Learning',
    'Data Science',
    'Python Programming',
    'Cloud Infrastructure',
    'Education Technology',
  ],
  experience: [],
  image: '/images/founder.jpg',
  linkedinUrl: 'https://linkedin.com/in/deekshad',
};

// Collaboration Benefits
export const COLLABORATION_BENEFITS = [
  {
    id: '1',
    title: 'Upskilling Faculty',
    description: 'Train your faculty with latest AI and tech skills',
    icon: 'Users',
  },
  {
    id: '2',
    title: 'Student Workshops',
    description: 'Conduct engaging workshops for your students',
    icon: 'Zap',
  },
  {
    id: '3',
    title: 'Certification Programs',
    description: 'Industry-recognized certification courses',
    icon: 'Award',
  },
  {
    id: '4',
    title: 'Internship Opportunities',
    description: 'Connect students with internship opportunities',
    icon: 'Briefcase',
  },
  {
    id: '5',
    title: 'Research Collaboration',
    description: 'Collaborate on research and innovation projects',
    icon: 'Lightbulb',
  },
  {
    id: '6',
    title: 'Dedicated Support',
    description: 'Personalized support and consultation',
    icon: 'HeartHandshake',
  },
];

// Partnership Models
export const PARTNERSHIP_MODELS = [
  {
    title: 'Workshop Series',
    description: 'Regular workshops on trending topics',
    duration: '3-6 months',
    students: '50-100',
  },
  {
    title: 'Certification Program',
    description: 'Complete certification courses for students',
    duration: '2-4 months',
    students: '30-60',
  },
  {
    title: 'Faculty Development',
    description: 'Training programs for faculty members',
    duration: '1-3 months',
    students: '10-20',
  },
  {
    title: 'Full Collaboration',
    description: 'Comprehensive partnership with multiple programs',
    duration: '6-12 months',
    students: '100+',
  },
];
