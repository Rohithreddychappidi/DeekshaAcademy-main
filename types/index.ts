// Course Types
export interface Course {
  id: string;
  title: string;
  slug: string;
  description: string;
  shortDescription: string;
  duration: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  price: number;
  enrollmentCount: number;
  skills: string[];
  image: string;
  overview: string;
  curriculum: CurriculumModule[];
  learningOutcomes: string[];
  projects: Project[];
  careerOpportunities: string[];
  faqs: FAQ[];
  instructors: Instructor[];
  rating: number;
  reviews: number;
}

export interface CurriculumModule {
  id: string;
  title: string;
  duration: string;
  topics: string[];
  projects?: string[];
}

export interface Project {
  id: string;
  title: string;
  description: string;
  type: 'individual' | 'group';
  skills: string[];
  duration: string;
}

// Workshop Types
export interface Workshop {
  id: string;
  title: string;
  slug: string;
  description: string;
  category: 'AI' | 'GenAI' | 'DataAnalytics' | 'CareerGuidance' | 'FacultyDevelopment';
  date: string;
  time: string;
  duration: string;
  instructor: Instructor;
  capacity: number;
  registered: number;
  price: number;
  image: string;
  topics: string[];
  targetAudience: string[];
  learningOutcomes: string[];
}

// Instructor Types
export interface Instructor {
  id: string;
  name: string;
  title: string;
  image: string;
  bio: string;
  expertise: string[];
  linkedinUrl?: string;
  email?: string;
}

// Testimonial Types
export interface Testimonial {
  id: string;
  name: string;
  image: string;
  title: string;
  company: string;
  message: string;
  rating: number;
  course: string;
}

// Blog Types
export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  description: string;
  content: string;
  author: Author;
  category: 'AI' | 'GenAI' | 'Python' | 'DataAnalytics' | 'CareerGuidance';
  tags: string[];
  image: string;
  createdAt: string;
  updatedAt: string;
  readTime: number;
  featured: boolean;
}

export interface Author {
  id: string;
  name: string;
  image: string;
  bio: string;
  email: string;
}

// FAQ Types
export interface FAQ {
  id: string;
  question: string;
  answer: string;
  category?: string;
}

// Contact Form Types
export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  courseInterested: string;
  message: string;
}

// Collaboration Types
export interface CollaborationInquiry {
  institutionName: string;
  contactPerson: string;
  email: string;
  phone: string;
  institutionType: 'College' | 'University' | 'TrainingInstitute';
  partnershipModel: string;
  message: string;
}

// Stats Types
export interface Stat {
  label: string;
  value: number;
  suffix?: string;
}

// Student Benefits Type
export interface StudentBenefit {
  id: string;
  title: string;
  description: string;
  icon: string;
}
