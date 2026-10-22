import type { Metadata } from 'next';
import { FOUNDER_INFO } from '@/constants';
import Hero from '@/components/shared/hero';
import Section from '@/components/shared/section';
import { Card, CardContent } from '@/components/ui/card';
import { Award, Briefcase, BookOpen } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About Deeksha Tech Academy',
  description: 'Learn about Deeksha Tech Academy, our mission, and our commitment to quality education.',
};

export default function AboutPage() {
  return (
    <main>
      <Hero
        title="About Deeksha Tech Academy"
        subtitle="Transforming careers through cutting-edge AI and tech education"
      />

      {/* Mission & Vision */}
      <Section title="Our Story">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <div>
            <h3 className="mb-4 text-2xl font-bold text-slate-900">Our Mission</h3>
            <p className="text-slate-600 leading-relaxed">
              To democratize access to high-quality AI and tech education, empowering students
              and professionals to build future-ready careers. We believe everyone deserves
              access to industry-standard training regardless of their background.
            </p>
          </div>
          <div>
            <h3 className="mb-4 text-2xl font-bold text-slate-900">Our Vision</h3>
            <p className="text-slate-600 leading-relaxed">
              To become the leading platform for AI and tech education in India, known for
              practical training, industry collaboration, and exceptional student outcomes.
              We aspire to create a community of innovators and leaders.
            </p>
          </div>
        </div>
      </Section>

      {/* Values */}
      <Section title="Our Values" darkBg>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {[
            { icon: '🎯', title: 'Excellence', description: 'We pursue excellence in every aspect of our training' },
            { icon: '💡', title: 'Innovation', description: 'We stay at the forefront of tech education trends' },
            { icon: '🤝', title: 'Community', description: 'We believe in learning together and lifting each other' },
          ].map((value, idx) => (
            <Card key={idx} className="bg-slate-800 border-slate-700">
              <CardContent className="pt-6 text-center">
                <p className="mb-4 text-4xl">{value.icon}</p>
                <h3 className="mb-2 font-bold text-white">{value.title}</h3>
                <p className="text-slate-400">{value.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      {/* Training Methodology */}
      <Section title="Our Training Methodology">
        <div className="space-y-6">
          {[
            {
              title: 'Concept Learning',
              description: 'Start with strong fundamentals taught by industry experts',
            },
            {
              title: 'Practical Implementation',
              description: 'Apply concepts through hands-on coding and projects',
            },
            {
              title: 'Real-World Projects',
              description: 'Build projects that solve actual industry problems',
            },
            {
              title: 'Career Preparation',
              description: 'Get interview prep, resume building, and job guidance',
            },
          ].map((item, idx) => (
            <div key={idx} className="flex gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100 text-blue-600 font-bold flex-shrink-0">
                {idx + 1}
              </div>
              <div>
                <h3 className="font-semibold text-slate-900">{item.title}</h3>
                <p className="text-slate-600">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Student Success */}
      <Section className="hidden" title="Student Success Stories" darkBg>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {[
            {
              name: 'Rahul Kumar',
              role: 'Software Developer',
              company: 'Tech Startup',
              quote: 'Deeksha Tech Academy gave me the skills to transition into my dream role',
            },
            {
              name: 'Priya Singh',
              role: 'Data Analyst',
              company: 'Fortune 500',
              quote: 'The practical projects helped me build a strong portfolio',
            },
            {
              name: 'Amit Patel',
              role: 'AI Engineer',
              company: 'Tech Lab',
              quote: 'The mentorship and guidance were invaluable in my career growth',
            },
          ].map((story, idx) => (
            <Card key={idx} className="bg-slate-800 border-slate-700">
              <CardContent className="pt-6">
                <p className="mb-4 text-slate-300 italic">&quot;{story.quote}&quot;</p>
                <p className="font-semibold text-white">{story.name}</p>
                <p className="text-sm text-slate-400">
                  {story.role} at {story.company}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      {/* Timeline */}
      <Section title="Our Journey" className="hidden">
        <div className="space-y-8">
          {[
            { year: '2024', milestone: 'Founded Deeksha Tech Academy' },
            { year: '2024', milestone: '500+ Students Enrolled' },
            { year: '2024', milestone: '20+ Successful Workshops' },
            { year: '2024', milestone: 'Partnering with Colleges' },
          ].map((item, idx) => (
            <div key={idx} className="flex gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-cyan-500 text-white font-bold flex-shrink-0">
                {item.year}
              </div>
              <div className="flex items-center">
                <p className="text-lg font-semibold text-slate-900">{item.milestone}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>
    </main>
  );
}
