import type { Metadata } from 'next';
import {
  STATS,
  WHY_CHOOSE_US,
  LEARNING_METHODOLOGY,
  STUDENT_BENEFITS,
  INDUSTRY_PROJECTS,
} from '@/constants';
import {
  COURSES_DATA as FEATURED_COURSES,
  TESTIMONIALS_DATA,
  FAQS_DATA,
} from '@/constants/mock-data';
import Hero from '@/components/shared/hero';
import Section from '@/components/shared/section';
import Stats from '@/components/shared/stats';
import FeatureCards from '@/components/shared/feature-cards';
import CourseCard from '@/components/shared/course-card';
import Accordion from '@/components/shared/accordion';
import { Briefcase, Award } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Deeksha Tech Academy | Learn. Build. Lead.',
  description:
    'Master AI, Data Analytics, Python & Future Skills. Industry-focused training with practical projects and career support.',
  openGraph: {
    title: 'Deeksha Tech Academy | Learn. Build. Lead.',
    description:
      'Master AI, Data Analytics, Python & Future Skills. Industry-focused training with practical projects and career support.',
    url: 'https://deekshaacademy.com',
    type: 'website',
  },
};

export default function Home() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": FAQS_DATA.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      {/* Hero Section */}
      <Hero
        title="Master Future Skills with Industry-Focused Training"
        subtitle="Learn Machine Learning, Deep Learning, Generative AI, Data Analytics, Python Programming, and Cloud Virtualization"
        description="Practical projects, live mentoring, and career support to transform your career"
        backgroundImage="/images/home-hero-banner.jpg"
        primaryCTA={{
          label: 'Explore Courses',
          href: '/courses',
        }}
        secondaryCTA={{
          label: 'WhatsApp Consultation',
          href: 'https://wa.me/917676356131?text=Hi%20Deeksha%20Tech%20Academy%2C%20I%20would%20like%20to%20know%20more%20about%20your%20courses%20and%20batches.',
        }}
      />

      {/* Statistics Section */}
      {/* <Stats stats={STATS} title="Our Impact" /> */}

      {/* Why Choose Us Section */}
      <Section
        title="Why Choose Deeksha Tech Academy?"
        subtitle="Everything you need to succeed in your tech career"
      >
        <FeatureCards features={WHY_CHOOSE_US} />
      </Section>

      {/* Featured Courses Section */}
      <Section
        title="Featured Courses"
        subtitle="Start learning from industry experts today"
        darkBg
      >
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURED_COURSES.map((course, index) => (
            <CourseCard key={course.id} course={course} index={index} />
          ))}
        </div>
      </Section>

      {/* Learning Methodology Timeline */}
      <Section
        title="Our Learning Methodology"
        subtitle="A structured approach to learning and mastery"
      >
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-7">
          {LEARNING_METHODOLOGY.map((step) => (
            <div key={step.step} className="relative">
              <div className="flex flex-col items-center">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-cyan-500 text-white font-bold text-xl">
                  {step.step}
                </div>
                <h4 className="mb-2 text-center font-semibold text-slate-900">
                  {step.title}
                </h4>
                <p className="text-center text-sm text-slate-600">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Student Benefits Section */}
      <Section
        title="Student Benefits"
        subtitle="What you'll gain from our courses"
        darkBg
      >
        <FeatureCards features={STUDENT_BENEFITS} />
      </Section>

      {/* Internship & Placements Section */}
      <Section
        title="Internship & Placements"
        subtitle="Industry internships and placement support to kickstart your career"
      >
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="rounded-lg border border-slate-200 p-6 hover:shadow-lg transition-shadow">
            <div className="mb-4 flex items-center gap-3">
              <div className="rounded-full bg-blue-50 p-3">
                <Briefcase className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900">Internship Program</h3>
            </div>
            <p className="text-slate-600">Hands-on internships with partner companies, real project experience, mentorship, and performance reviews to prepare you for the job market.</p>
            <p className="mt-4 text-sm text-slate-500">Duration: 6–12 weeks · Stipend and certificate based on employer</p>
          </div>

          <div className="rounded-lg border border-slate-200 p-6 hover:shadow-lg transition-shadow">
            <div className="mb-4 flex items-center gap-3">
              <div className="rounded-full bg-blue-50 p-3">
                <Award className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900">Placements</h3>
            </div>
            <p className="text-slate-600">Dedicated placement support including resume reviews, interview prep, and recruiter introductions to help you land full-time roles.</p>
            <p className="mt-4 text-sm text-slate-500">Placement assistance, mock interviews, and alumni network opportunities.</p>
          </div>
        </div>
      </Section>

      {/* Industry Projects Section */}
      <Section
        title="Industry Projects You'll Build"
        subtitle="Work on real-world projects that companies are using"
      >
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {INDUSTRY_PROJECTS.map((project) => (
            <div
              key={project.id}
              className="rounded-lg border border-slate-200 p-6 hover:shadow-lg transition-shadow"
            >
              <h3 className="mb-2 font-semibold text-slate-900">
                {project.title}
              </h3>
              <p className="mb-4 text-slate-600">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-700"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Testimonials Section */}
      <Section
        title="Student Testimonials"
        subtitle="Hear from our successful students"
        darkBg
        className="hidden"
      >
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {TESTIMONIALS_DATA.map((testimonial) => (
            <div
              key={testimonial.id}
              className="rounded-lg border border-slate-700 bg-slate-800 p-6"
            >
              <div className="mb-4 flex items-center gap-4">
                <div className="h-12 w-12 rounded-full bg-gradient-to-br from-blue-400 to-cyan-400 flex items-center justify-center text-white font-bold">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-semibold text-white">{testimonial.name}</h4>
                  <p className="text-sm text-slate-400">{testimonial.title} at {testimonial.company}</p>
                </div>
              </div>
              <p className="mb-4 text-slate-300">&quot;{testimonial.message}&quot;</p>
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <span
                    key={i}
                    className={`text-lg ${
                      i < testimonial.rating ? '⭐' : '☆'
                    }`}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* College Collaboration Section */}
      <Section
        title="College Collaboration"
        subtitle="Partner with us to enhance your students' skills"
        className="hidden"
      >
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-8 grid grid-cols-2 gap-4 md:grid-cols-4">
            {['Workshops', 'Internships', 'Certifications', 'Faculty Training'].map((item) => (
              <div key={item} className="rounded-lg bg-blue-50 p-4">
                <p className="font-semibold text-slate-900">{item}</p>
              </div>
            ))}
          </div>
          <button className="rounded-lg bg-gradient-to-r from-blue-600 to-cyan-500 px-8 py-3 font-semibold text-white hover:shadow-lg transition-all">
            Partner With Us
          </button>
        </div>
      </Section>

      {/* FAQ Section */}
      <Section
        title="Frequently Asked Questions"
        subtitle="Get answers to common questions"
        darkBg
      >
        <div className="mx-auto max-w-3xl">
          <Accordion items={FAQS_DATA} />
        </div>
      </Section>

      {/* Final CTA Section */}
      <Section
      className="hidden"
        title="Start Your AI Career Today"
        subtitle="Join 500+ students who have transformed their careers"
      >
        <div className="text-center">
          <button className="rounded-lg bg-gradient-to-r from-blue-600 to-cyan-500 px-10 py-4 text-lg font-bold text-white hover:shadow-lg transition-all inline-block">
            Enroll Now
          </button>
          <p className="mt-4 text-slate-600">
            🎁 Limited time: Get 20% off on all courses with code DEEKSHA20
          </p>
        </div>
      </Section>
    </main>
  );
}
