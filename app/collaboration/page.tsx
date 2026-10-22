import type { Metadata } from 'next';
import { COLLABORATION_BENEFITS, PARTNERSHIP_MODELS } from '@/constants';
import Hero from '@/components/shared/hero';
import Section from '@/components/shared/section';
import FeatureCards from '@/components/shared/feature-cards';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Badge from '@/components/ui/badge';
import { CheckCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Collaboration | Deeksha Tech Academy',
  description: 'Partner with Deeksha Tech Academy for student workshops, internships, and training programs.',
};

export default function CollaborationPage() {
  return (
    <main>
      <Hero
        title="Partner With Deeksha Tech Academy"
        subtitle="Enhance your institution's training and placement outcomes"
        primaryCTA={{
          label: 'Get In Touch',
          href: '#contact',
        }}
      />

      {/* Target Institutions */}
      <Section title="Who Should Partner With Us?">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {[
            {
              title: 'Engineering Colleges',
              description: 'Upskill students with industry-relevant AI and data science training',
              icon: '🎓',
            },
            {
              title: 'Universities',
              description: 'Offer cutting-edge curriculum and faculty development programs',
              icon: '📚',
            },
            {
              title: 'Training Institutes',
              description: 'Partner for specialized workshops and certification programs',
              icon: '🏢',
            },
          ].map((institution, idx) => (
            <Card key={idx}>
              <CardContent className="pt-6 text-center">
                <p className="mb-4 text-4xl">{institution.icon}</p>
                <h3 className="mb-2 font-bold text-slate-900">{institution.title}</h3>
                <p className="text-slate-600 text-sm">{institution.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      {/* Benefits */}
      <Section title="Partnership Benefits" darkBg>
        <FeatureCards features={COLLABORATION_BENEFITS} />
      </Section>

      {/* Partnership Models */}
      <Section title="Partnership Models">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {PARTNERSHIP_MODELS.map((model, idx) => (
            <Card key={idx}>
              <CardHeader>
                <CardTitle className="text-lg">{model.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-slate-600">{model.description}</p>
                <div className="space-y-2 border-t border-slate-200 pt-4">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-medium text-slate-900">Duration:</span>
                    <Badge variant="secondary">{model.duration}</Badge>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-medium text-slate-900">Students:</span>
                    <Badge variant="secondary">{model.students}</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      {/* Workshop Models */}
      <Section title="Workshop Models" darkBg>
        <div className="space-y-6">
          {[
            {
              title: 'One-Time Workshops',
              description: 'Single day or multi-day workshops on specific topics',
              features: ['Expert-led sessions', 'Q&A interactions', 'Certificates', 'Follow-up support'],
            },
            {
              title: 'Regular Workshop Series',
              description: 'Monthly or quarterly workshops throughout the year',
              features: ['Customizable topics', 'Industry exposure', 'Networking', 'Skill building'],
            },
            {
              title: 'Integrated Curriculum',
              description: 'Full curriculum integration for 1-2 semester courses',
              features: ['Complete curriculum', 'Faculty training', 'Lab setup', 'Industry mentorship'],
            },
          ].map((model, idx) => (
            <Card key={idx} className="bg-slate-800 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white">{model.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-slate-300">{model.description}</p>
                <div className="space-y-2">
                  {model.features.map((feature, fidx) => (
                    <div key={fidx} className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-cyan-400 flex-shrink-0" />
                      <span className="text-slate-300">{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      {/* Success Stories */}
      <Section title="Success Stories">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {[
            {
              institution: 'ABC Engineering College',
              students: 150,
              outcome: 'Improved placement rates by 40%',
              feedback: 'Deeksha Tech Academy workshops transformed our curriculum',
            },
            {
              institution: 'XYZ University',
              students: 200,
              outcome: '95% student satisfaction',
              feedback: 'Professional training with practical industry exposure',
            },
          ].map((story, idx) => (
            <Card key={idx}>
              <CardContent className="pt-6">
                <h3 className="mb-2 font-bold text-slate-900">{story.institution}</h3>
                <div className="space-y-2 mb-4 text-sm">
                  <p className="text-slate-600">Students Trained: {story.students}+</p>
                  <p className="font-semibold text-blue-600">{story.outcome}</p>
                </div>
                <p className="italic text-slate-600">
                  &quot;{story.feedback}&quot;
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      {/* Collaboration Process */}
      <Section title="How It Works" darkBg>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-5">
          {[
            { step: 1, title: 'Inquiry', description: 'Contact us with your needs' },
            { step: 2, title: 'Discussion', description: 'Discuss partnership models' },
            { step: 3, title: 'Planning', description: 'Customize the program' },
            { step: 4, title: 'Implementation', description: 'Launch the partnership' },
            { step: 5, title: 'Success', description: 'Achieve great outcomes' },
          ].map((item) => (
            <div key={item.step} className="text-center">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-cyan-500 text-white font-bold mx-auto">
                {item.step}
              </div>
              <h3 className="mb-2 font-semibold text-white">{item.title}</h3>
              <p className="text-sm text-slate-400">{item.description}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* FAQ */}
      <Section title="Collaboration FAQs">
        <div className="space-y-4 mx-auto max-w-3xl">
          {[
            {
              q: 'What is the minimum commitment?',
              a: 'You can start with a single workshop and scale up based on outcomes. No long-term contracts required.',
            },
            {
              q: 'Can we customize the curriculum?',
              a: 'Absolutely! We work with institutions to tailor programs to their specific needs and student levels.',
            },
            {
              q: 'What support do you provide?',
              a: 'We provide complete support including curriculum, instructors, materials, assessments, and student feedback reports.',
            },
            {
              q: 'How are costs structured?',
              a: 'Costs depend on the model chosen (workshops, certification, full curriculum). We offer flexible pricing based on scale.',
            },
            {
              q: 'Do you provide faculty training?',
              a: 'Yes, faculty development is a core part of our partnership. We train your faculty on the latest tools and methodologies.',
            },
          ].map((faq, idx) => (
            <Card key={idx}>
              <CardContent className="pt-6">
                <p className="mb-2 font-semibold text-slate-900">{faq.q}</p>
                <p className="text-slate-600 text-sm">{faq.a}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <Section title="Ready to Partner?" darkBg id="contact">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-8 text-lg text-slate-300">
            Let's work together to enhance your institution's training outcomes and student success.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <a
              href="/contact"
              className="rounded-lg bg-cyan-500 px-8 py-3 font-semibold text-white hover:bg-cyan-600 transition-colors inline-block"
            >
              Contact Us
            </a>
            <a
              href="tel:+917676356131"
              className="rounded-lg border border-cyan-500 px-8 py-3 font-semibold text-cyan-500 hover:bg-cyan-500 hover:text-white transition-colors inline-block"
            >
              Call Us
            </a>
          </div>
        </div>
      </Section>
    </main>
  );
}
