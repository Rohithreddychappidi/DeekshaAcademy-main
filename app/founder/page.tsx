import type { Metadata } from 'next';
import Image from 'next/image';
import { FOUNDER_INFO } from '@/constants';
import Hero from '@/components/shared/hero';
import Section from '@/components/shared/section';
import { Card, CardContent } from '@/components/ui/card';
import Badge from '@/components/ui/badge';
import founderImg from '@/assets/images/founder.jpeg';

export const metadata: Metadata = {
  title: 'Founder | Deeksha Tech Academy',
  description: 'Meet Deeksha D, founder of Deeksha Tech Academy and AI education expert.',
};

export default function FounderPage() {
  return (
    <main>
      <Hero
        title="Meet Our Founder"
        subtitle="Deeksha D - AI Educator & Innovation Leader"
      />

      {/* Founder Bio */}
      <Section>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 items-center">
          <div>
            <div className="relative rounded-lg overflow-hidden aspect-[4/5] w-full bg-slate-100">
              <Image
                src={founderImg}
                alt="Deeksha D"
                fill
                className="object-contain object-center bg-white"
              />
            </div>
          </div>
          <div>
            <h2 className="mb-2 text-4xl font-bold text-slate-900">{FOUNDER_INFO.name}</h2>
            <p className="mb-6 text-xl text-blue-600 font-semibold">{FOUNDER_INFO.title}</p>
            <p className="mb-6 text-lg text-slate-600 leading-relaxed">
              {FOUNDER_INFO.bio}
            </p>
            <div className="mb-6 hidden">
              <h3 className="mb-3 font-semibold text-slate-900">Quick Facts</h3>
              <ul className="space-y-2 text-slate-600">
                {FOUNDER_INFO.experience.map((fact, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-blue-600" />
                    {fact}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Section>

      {/* Education */}
      <Section title="Education" darkBg>
        <div
          className={
            FOUNDER_INFO.education.length === 1
              ? 'flex justify-center'
              : 'grid grid-cols-1 gap-4 md:grid-cols-2'
          }
        >
          {FOUNDER_INFO.education.map((edu, idx) => (
            <Card key={idx} className="w-full max-w-xl bg-slate-800 border-slate-700">
              <CardContent className="pt-6">
                <p className="text-white font-semibold">{edu}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      {/* Expertise */}
      <Section title="Areas of Expertise">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {FOUNDER_INFO.expertise.map((skill, idx) => (
            <Card key={idx}>
              <CardContent className="pt-6">
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-blue-600" />
                  <p className="font-semibold text-slate-900">{skill}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      {/* Mission Statement */}
      <Section title="My Mission" darkBg>
        <div className="mx-auto max-w-3xl rounded-lg bg-slate-800 p-8 border border-slate-700">
          <p className="text-lg text-slate-200 leading-relaxed">
            &quot;I founded Deeksha Tech Academy with a simple belief: quality AI and tech education should
            be accessible to everyone. My mission is to empower the next generation of innovators
            and leaders by providing industry-focused training, mentorship, and real-world
            experience. I believe that with the right education and support, anyone can succeed
            in the tech industry.&quot;
          </p>
        </div>
      </Section>

      {/* Vision for Students */}
      <Section title="My Vision for Our Students">
        <div className="space-y-6">
          {[
            {
              title: 'Skill Development',
              description: 'Develop in-demand skills that make you immediately employable',
            },
            {
              title: 'Confidence Building',
              description: 'Build confidence to tackle real-world problems and challenges',
            },
            {
              title: 'Network Creation',
              description: 'Create meaningful connections with peers, mentors, and industry leaders',
            },
            {
              title: 'Career Growth',
              description: 'Accelerate your career growth with the right guidance and opportunities',
            },
          ].map((item, idx) => (
            <div key={idx} className="rounded-lg border border-slate-200 p-6">
              <h3 className="mb-2 text-xl font-bold text-slate-900">{item.title}</h3>
              <p className="text-slate-600">{item.description}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Connect */}
      <Section className="hidden" title="Connect With Me" darkBg>
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-8 text-lg text-slate-300">
            I'm always happy to hear from students, professionals, and partners.
            Feel free to reach out!
          </p>
          <div className="flex hidden flex-col gap-4 sm:flex-row sm:justify-center">
            <a
              href={FOUNDER_INFO.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700 transition-colors inline-block"
            >
              Connect on LinkedIn
            </a>
            <a
              href={`mailto:${FOUNDER_INFO.email || 'deeksha@deekshaacademy.com'}`}
              className="rounded-lg border border-slate-600 px-6 py-3 font-semibold text-white hover:bg-slate-700 transition-colors inline-block"
            >
              Send Email
            </a>
          </div>
        </div>
      </Section>
    </main>
  );
}
