import { COURSES_DATA, WORKSHOPS_DATA, BLOG_POSTS_DATA, FAQS_DATA } from '@/constants/mock-data';
import { Course, Workshop, BlogPost, FAQ } from '@/types';

/**
 * Course Services
 */
export const courseService = {
  async getAllCourses(): Promise<Course[]> {
    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 500));
    return COURSES_DATA;
  },

  async getCourseById(id: string): Promise<Course | null> {
    await new Promise((resolve) => setTimeout(resolve, 300));
    return COURSES_DATA.find((course) => course.id === id) || null;
  },

  async getCourseBySlug(slug: string): Promise<Course | null> {
    await new Promise((resolve) => setTimeout(resolve, 300));
    return COURSES_DATA.find((course) => course.slug === slug) || null;
  },

  async searchCourses(query: string): Promise<Course[]> {
    await new Promise((resolve) => setTimeout(resolve, 300));
    const lowerQuery = query.toLowerCase();
    return COURSES_DATA.filter(
      (course) =>
        course.title.toLowerCase().includes(lowerQuery) ||
        course.description.toLowerCase().includes(lowerQuery) ||
        course.skills.some((skill) => skill.toLowerCase().includes(lowerQuery)),
    );
  },

  async getCoursesByLevel(level: string): Promise<Course[]> {
    await new Promise((resolve) => setTimeout(resolve, 300));
    return COURSES_DATA.filter((course) => course.level === level);
  },
};

/**
 * Workshop Services
 */
export const workshopService = {
  async getAllWorkshops(): Promise<Workshop[]> {
    await new Promise((resolve) => setTimeout(resolve, 500));
    return WORKSHOPS_DATA;
  },

  async getWorkshopById(id: string): Promise<Workshop | null> {
    await new Promise((resolve) => setTimeout(resolve, 300));
    return WORKSHOPS_DATA.find((workshop) => workshop.id === id) || null;
  },

  async getWorkshopsByCategory(category: string): Promise<Workshop[]> {
    await new Promise((resolve) => setTimeout(resolve, 300));
    return WORKSHOPS_DATA.filter((workshop) => workshop.category === category);
  },

  async registerWorkshop(workshopId: string, userEmail: string): Promise<{ success: boolean; message: string }> {
    await new Promise((resolve) => setTimeout(resolve, 500));
    // Simulate registration
    return {
      success: true,
      message: 'Successfully registered for the workshop',
    };
  },
};

/**
 * Blog Services
 */
export const blogService = {
  async getAllPosts(): Promise<BlogPost[]> {
    await new Promise((resolve) => setTimeout(resolve, 500));
    return BLOG_POSTS_DATA;
  },

  async getPostById(id: string): Promise<BlogPost | null> {
    await new Promise((resolve) => setTimeout(resolve, 300));
    return BLOG_POSTS_DATA.find((post) => post.id === id) || null;
  },

  async getPostBySlug(slug: string): Promise<BlogPost | null> {
    await new Promise((resolve) => setTimeout(resolve, 300));
    return BLOG_POSTS_DATA.find((post) => post.slug === slug) || null;
  },

  async getPostsByCategory(category: string): Promise<BlogPost[]> {
    await new Promise((resolve) => setTimeout(resolve, 300));
    return BLOG_POSTS_DATA.filter((post) => post.category === category);
  },

  async searchPosts(query: string): Promise<BlogPost[]> {
    await new Promise((resolve) => setTimeout(resolve, 300));
    const lowerQuery = query.toLowerCase();
    return BLOG_POSTS_DATA.filter(
      (post) =>
        post.title.toLowerCase().includes(lowerQuery) ||
        post.description.toLowerCase().includes(lowerQuery) ||
        post.content.toLowerCase().includes(lowerQuery),
    );
  },

  async getFeaturedPosts(): Promise<BlogPost[]> {
    await new Promise((resolve) => setTimeout(resolve, 300));
    return BLOG_POSTS_DATA.filter((post) => post.featured);
  },

  async getRelatedPosts(slug: string, limit = 3): Promise<BlogPost[]> {
    await new Promise((resolve) => setTimeout(resolve, 300));
    const post = BLOG_POSTS_DATA.find((p) => p.slug === slug);
    if (!post) return [];
    return BLOG_POSTS_DATA.filter(
      (p) => p.category === post.category && p.slug !== slug,
    ).slice(0, limit);
  },
};

/**
 * FAQ Services
 */
export const faqService = {
  async getAllFAQs(): Promise<FAQ[]> {
    await new Promise((resolve) => setTimeout(resolve, 500));
    return FAQS_DATA;
  },

  async getFAQsByCategory(category: string): Promise<FAQ[]> {
    await new Promise((resolve) => setTimeout(resolve, 300));
    return FAQS_DATA.filter((faq) => faq.category === category);
  },
};

/**
 * Contact Services
 */
export const contactService = {
  async submitContactForm(data: {
    name: string;
    email: string;
    phone: string;
    courseInterested: string;
    message: string;
  }): Promise<{ success: boolean; message: string }> {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    // In a real app, this would send an email
    console.log('Contact form submitted:', data);
    return {
      success: true,
      message: 'Thank you for contacting us. We will get back to you soon.',
    };
  },

  async submitCollaborationForm(data: any): Promise<{ success: boolean; message: string }> {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log('Collaboration form submitted:', data);
    return {
      success: true,
      message: 'Thank you for your interest. We will contact you shortly.',
    };
  },
};

/**
 * Enrollment Services
 */
export const enrollmentService = {
  async enrollCourse(
    courseId: string,
    userData: {
      name: string;
      email: string;
      phone: string;
    },
  ): Promise<{ success: boolean; message: string; enrollmentId: string }> {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    return {
      success: true,
      message: 'Successfully enrolled in the course',
      enrollmentId: `ENR-${Date.now()}`,
    };
  },

  async getEnrollmentStatus(enrollmentId: string): Promise<{
    status: string;
    progress: number;
    courseId: string;
  } | null> {
    await new Promise((resolve) => setTimeout(resolve, 300));
    return {
      status: 'active',
      progress: 35,
      courseId: '1',
    };
  },
};

/**
 * Newsletter Services
 */
export const newsletterService = {
  async subscribeToNewsletter(email: string): Promise<{ success: boolean; message: string }> {
    await new Promise((resolve) => setTimeout(resolve, 500));
    return {
      success: true,
      message: 'Successfully subscribed to our newsletter',
    };
  },
};
