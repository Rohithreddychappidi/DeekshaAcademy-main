import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { COURSES_DATA } from '@/constants/mock-data';
import Hero from '@/components/shared/hero';
import Section from '@/components/shared/section';
import Accordion from '@/components/shared/accordion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Badge from '@/components/ui/badge';
import { CheckCircle, Users, Clock, Award, ArrowRight, Laptop, Sparkles, BookOpen, Layers } from 'lucide-react';
import { TechStackShowcase } from '@/components/shared/tech-stack-icons';

interface CoursePageProps {
  params: Promise<{ slug: string }>;
}

function getCourseBySlug(slug: string) {
  if (slug === 'vmware' || slug === 'ai-in-healthcare') {
    return COURSES_DATA.find((c) => c.slug === 'vmware-cloud-foundation');
  }
  return COURSES_DATA.find((c) => c.slug === slug);
}

export async function generateMetadata({ params }: CoursePageProps): Promise<Metadata> {
  const slug = (await params).slug;
  const course = getCourseBySlug(slug);

  if (!course) {
    return { title: 'Course Not Found' };
  }

  return {
    title: `${course.title} Course | Deeksha Tech Academy`,
    description: course.shortDescription,
    openGraph: {
      title: `${course.title} Course | Deeksha Tech Academy`,
      description: course.shortDescription,
    },
  };
}

export async function generateStaticParams() {
  const baseParams = COURSES_DATA.map((course) => ({
    slug: course.slug,
  }));
  return [
    ...baseParams,
    { slug: 'vmware' },
    { slug: 'ai-in-healthcare' },
  ];
}

export default async function CoursePage({ params }: CoursePageProps) {
  const slug = (await params).slug;
  const course = getCourseBySlug(slug);

  if (!course) {
    notFound();
  }

  const courseSchema = {
    "@context": "https://schema.org",
    "@type": "Course",
    "name": course.title,
    "description": course.description,
    "url": `https://deekshaacademy.com/courses/${course.slug}`,
    "image": `https://deekshaacademy.com/images/courses/${course.slug}.jpg`,
    "educationLevel": course.level,
    "instructor": {
      "@type": "Person",
      "name": course.instructors?.[0]?.name || "Deeksha Tech Academy"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": course.rating || 4.8,
      "ratingCount": course.reviews || 100
    },
    "offers": {
      "@type": "Offer",
      "price": course.price,
      "priceCurrency": "INR",
      "availability": "https://schema.org/InStock"
    },
    "duration": `PT${course.duration.split(' ')[0]}W`
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": course.faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  const whatsappMessage = encodeURIComponent(
    `Hi Deeksha Tech Academy, I am interested in enrolling in the ${course.title} course. Please provide syllabus, batch timings, and fee details.`
  );

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(courseSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero Section */}
      <Hero
        title={course.title}
        subtitle={course.shortDescription}
        primaryCTA={{
          label: 'Chat on WhatsApp',
          href: `https://wa.me/917676356131?text=${whatsappMessage}`,
        }}
        secondaryCTA={{
          label: 'View Curriculum',
          href: '#curriculum',
        }}
      />

      {/* Course Highlights & Key Metrics */}
      <section className="relative -mt-12 z-20 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
          <div className="rounded-2xl border border-slate-800 bg-slate-900/90 p-5 shadow-xl backdrop-blur-md transition-all hover:border-slate-700 hover:shadow-cyan-500/5">
            <div className="flex items-center gap-3">
              <div className="rounded-xl bg-blue-500/10 p-3 text-blue-400">
                <Clock className="h-6 w-6" />
              </div>
              <div>
                <p className="text-xs font-medium uppercase tracking-wider text-slate-400">Duration</p>
                <p className="text-lg font-bold text-white">{course.duration}</p>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900/90 p-5 shadow-xl backdrop-blur-md transition-all hover:border-slate-700 hover:shadow-cyan-500/5">
            <div className="flex items-center gap-3">
              <div className="rounded-xl bg-cyan-500/10 p-3 text-cyan-400">
                <Laptop className="h-6 w-6" />
              </div>
              <div>
                <p className="text-xs font-medium uppercase tracking-wider text-slate-400">Learning Mode</p>
                <p className="text-lg font-bold text-white">Live Online + Labs</p>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900/90 p-5 shadow-xl backdrop-blur-md transition-all hover:border-slate-700 hover:shadow-cyan-500/5">
            <div className="flex items-center gap-3">
              <div className="rounded-xl bg-emerald-500/10 p-3 text-emerald-400">
                <Layers className="h-6 w-6" />
              </div>
              <div>
                <p className="text-xs font-medium uppercase tracking-wider text-slate-400">Hands-on Work</p>
                <p className="text-lg font-bold text-white">{course.projects.length} Real Projects</p>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900/90 p-5 shadow-xl backdrop-blur-md transition-all hover:border-slate-700 hover:shadow-cyan-500/5">
            <div className="flex items-center gap-3">
              <div className="rounded-xl bg-purple-500/10 p-3 text-purple-400">
                <Award className="h-6 w-6" />
              </div>
              <div>
                <p className="text-xs font-medium uppercase tracking-wider text-slate-400">Credential</p>
                <p className="text-lg font-bold text-white">Verified Certificate</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack & Design SVGs Showcase */}
      <Section
        title="Technologies & Tools You'll Master"
        subtitle="Hands-on experience with production tools and frameworks utilized by modern tech enterprises"
        darkBg
      >
        <TechStackShowcase slug={course.slug} />
      </Section>

      {/* Course Overview */}
      <Section
        title="About The Course"
        subtitle="Practical curriculum engineered to take you from foundational principles to deployment-ready expertise"
      >
        <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 sm:p-8 backdrop-blur-sm">
          <p className="text-base sm:text-lg leading-relaxed text-slate-300">
            {course.overview || course.description}
          </p>
        </div>
      </Section>

      {/* Skills */}
      <Section title="Core Competencies & Skills" darkBg>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {course.skills.map((skill) => (
            <div
              key={skill}
              className="group flex items-center gap-3.5 rounded-xl border border-slate-800 bg-slate-900/70 p-4 transition-all hover:border-cyan-500/40 hover:bg-slate-800/80 hover:shadow-md hover:shadow-cyan-500/5"
            >
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-cyan-500/10 text-cyan-400 group-hover:scale-110 transition-transform">
                <CheckCircle className="h-5 w-5" />
              </div>
              <span className="text-sm font-semibold text-white tracking-wide">{skill}</span>
            </div>
          ))}
        </div>
      </Section>

      {/* Curriculum */}
      <Section title="Course Curriculum & Syllabus" id="curriculum">
        <div className="space-y-4">
          {course.curriculum.map((module, index) => (
            <div
              key={module.id}
              className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 transition-all hover:border-slate-700 hover:bg-slate-900/90"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-800 pb-4 mb-4">
                <div className="flex items-center gap-3">
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-r from-blue-600 to-cyan-500 text-xs font-bold text-white shadow-sm">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <h3 className="text-lg font-bold text-white tracking-tight">
                    {module.title}
                  </h3>
                </div>
                <span className="inline-flex items-center self-start sm:self-auto rounded-full bg-slate-800 px-3 py-1 text-xs font-medium text-cyan-300 border border-slate-700">
                  <Clock className="h-3 w-3 mr-1.5" />
                  {module.duration}
                </span>
              </div>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
                {module.topics.map((topic, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-sm text-slate-300">
                    <CheckCircle className="h-4 w-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                    <span>{topic}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      {/* Learning Outcomes */}
      <Section title="What You Will Be Able To Build" darkBg>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {course.learningOutcomes.map((outcome, idx) => (
            <div
              key={idx}
              className="flex items-start gap-3.5 rounded-xl border border-slate-800 bg-slate-900/50 p-4"
            >
              <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-400 flex-shrink-0 mt-0.5">
                <Sparkles className="h-4 w-4" />
              </div>
              <span className="text-sm font-medium leading-relaxed text-slate-200">{outcome}</span>
            </div>
          ))}
        </div>
      </Section>

      {/* Projects */}
      <Section title="Enterprise Real-World Projects">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {course.projects.map((project, idx) => (
            <div
              key={project.id}
              className="flex flex-col justify-between rounded-2xl border border-slate-800 bg-slate-900/70 p-6 shadow-md transition-all hover:border-slate-700 hover:shadow-lg hover:shadow-cyan-500/5"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-cyan-400">
                    Project {idx + 1}
                  </span>
                  <span className="rounded-full bg-slate-800 px-2.5 py-0.5 text-[11px] font-medium text-slate-300 border border-slate-700">
                    {project.duration}
                  </span>
                </div>
                <h4 className="text-base font-bold text-white mb-2">{project.title}</h4>
                <p className="text-sm text-slate-300 mb-4 leading-relaxed">{project.description}</p>
              </div>
              <div>
                <div className="flex flex-wrap gap-1.5 pt-3 border-t border-slate-800/80">
                  {project.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-md bg-slate-800/80 px-2 py-0.5 text-[11px] font-medium text-slate-300 border border-slate-700/60"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Career Opportunities */}
      <Section title="Career Paths & In-Demand Roles" darkBg>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {course.careerOpportunities.map((opportunity, idx) => (
            <div
              key={idx}
              className="flex items-center justify-between rounded-xl border border-slate-800 bg-slate-900/60 p-4 transition-all hover:border-slate-700 hover:bg-slate-800/80"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-blue-500/10 text-cyan-400">
                  <ArrowRight className="h-4 w-4" />
                </div>
                <span className="text-sm font-semibold text-white">{opportunity}</span>
              </div>
              <span className="text-[10px] font-semibold uppercase tracking-wider text-cyan-400 bg-cyan-500/10 px-2 py-0.5 rounded-full border border-cyan-500/20">
                Hiring
              </span>
            </div>
          ))}
        </div>
      </Section>

      {/* FAQs */}
      <Section title="Frequently Asked Questions">
        <div className="mx-auto max-w-3xl">
          <Accordion items={course.faqs} />
        </div>
      </Section>

      {/* Bottom Enrollment / WhatsApp Banner */}
      <section className="relative overflow-hidden py-16 bg-gradient-to-b from-slate-900 to-slate-950 border-t border-slate-800" id="enrollment">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-emerald-400 mb-6">
            <Sparkles className="h-3.5 w-3.5" />
            <span>Admissions & Batch Guidance</span>
          </div>

          <h2 className="text-3xl font-extrabold text-white sm:text-4xl tracking-tight mb-4">
            Ready to Master {course.title}?
          </h2>

          <p className="text-base sm:text-lg text-slate-300 mb-8 leading-relaxed">
            Have questions about upcoming batches, syllabus deep-dives, or prerequisites? Chat directly with our technical mentors and admissions coordinators on WhatsApp.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={`https://wa.me/917676356131?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 rounded-xl bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-500 px-8 py-4 text-base font-bold text-white shadow-xl shadow-emerald-600/30 transition-all hover:scale-105 hover:shadow-emerald-500/50 hover:border-emerald-300"
            >
              <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              <span>Chat on WhatsApp</span>
            </a>

            <Link
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl border border-slate-700 bg-slate-800/80 px-8 py-4 text-base font-semibold text-slate-200 transition-all hover:bg-slate-700 hover:text-white"
            >
              <span>Contact Admissions</span>
            </Link>
          </div>

          <p className="mt-6 text-xs text-slate-400">
            ⚡ Quick Response · Flexible Weekday/Weekend Batches · Certificate Included
          </p>
        </div>
      </section>
    </main>
  );
}
