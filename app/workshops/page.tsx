import type { Metadata } from 'next';
import { WORKSHOPS_DATA } from '@/constants/mock-data';
import { WORKSHOP_CATEGORIES } from '@/constants';
import Hero from '@/components/shared/hero';
import Section from '@/components/shared/section';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Badge from '@/components/ui/badge';
import { Calendar, Clock, Users } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Workshops | Deeksha Tech Academy',
  description: 'Join our workshops on AI, Data Analytics, Generative AI, and more.',
};

export default function WorkshopsPage() {
  return (
    <main>
      <Hero
        title="Workshops & Training Sessions"
        subtitle="Learn from experts through interactive workshops"
        primaryCTA={{
          label: 'Register Now',
          href: '#workshops',
        }}
      />

      {/* Categories */}
      <Section
        title="Workshop Categories"
        subtitle="Choose your area of interest"
      >
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {WORKSHOP_CATEGORIES.map((category) => (
            <button
              key={category}
              className="rounded-lg border-2 border-blue-600 bg-white px-4 py-3 font-semibold text-blue-600 transition-all hover:bg-blue-600 hover:text-white"
            >
              {category}
            </button>
          ))}
        </div>
      </Section>

      {/* Workshops List */}
      <Section title="Upcoming Workshops" id="workshops" darkBg>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {WORKSHOPS_DATA.map((workshop) => (
            <Card key={workshop.id} className="flex flex-col bg-slate-800 border-slate-700 h-full">
              <div className="h-48 bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center">
                <span className="text-4xl font-bold text-white opacity-50">
                  {workshop.title.charAt(0)}
                </span>
              </div>
              <CardHeader>
                <div className="mb-2 flex items-start justify-between">
                  <CardTitle className="text-white">{workshop.title}</CardTitle>
                  <Badge variant="default">{workshop.category}</Badge>
                </div>
                <p className="text-sm text-slate-400">{workshop.description}</p>
              </CardHeader>
              <CardContent className="flex-1 space-y-4">
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2 text-slate-300">
                    <Calendar className="h-4 w-4 text-cyan-400" />
                    {workshop.date} at {workshop.time}
                  </div>
                  <div className="flex items-center gap-2 text-slate-300">
                    <Clock className="h-4 w-4 text-cyan-400" />
                    Duration: {workshop.duration}
                  </div>
                  <div className="flex items-center gap-2 text-slate-300">
                    <Users className="h-4 w-4 text-cyan-400" />
                    {workshop.registered}/{workshop.capacity} registered
                  </div>
                </div>

                <div className="border-t border-slate-700 pt-4">
                  <p className="mb-3 text-sm font-medium text-white">Topics Covered:</p>
                  <div className="flex flex-wrap gap-2">
                    {workshop.topics.map((topic) => (
                      <Badge key={topic} variant="secondary" className="text-xs">
                        {topic}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="border-t border-slate-700 pt-4">
                  <p className="mb-2 text-sm text-slate-300">For: {workshop.targetAudience.join(', ')}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold text-cyan-400">₹{workshop.price}</span>
                    <button className="rounded-lg bg-cyan-500 px-4 py-2 font-semibold text-white hover:bg-cyan-600 transition-colors">
                      Register
                    </button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      {/* Workshop Benefits */}
      <Section
        title="Why Join Our Workshops?"
        subtitle="Get value beyond the training"
      >
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {[
            { icon: '👨‍🏫', title: 'Expert Trainers', description: 'Learn from industry experts' },
            { icon: '🤝', title: 'Networking', description: 'Connect with professionals' },
            { icon: '📜', title: 'Certificate', description: 'Get recognized certificate' },
            { icon: '💼', title: 'Job Ready', description: 'Practical, job-relevant skills' },
          ].map((benefit, idx) => (
            <Card key={idx}>
              <CardContent className="pt-6 text-center">
                <p className="mb-3 text-4xl">{benefit.icon}</p>
                <h3 className="mb-2 font-semibold text-slate-900">{benefit.title}</h3>
                <p className="text-sm text-slate-600">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      {/* FAQ */}
      <Section title="Workshop FAQs" darkBg>
        <div className="mx-auto max-w-3xl space-y-4">
          {[
            {
              q: 'Do I need any prerequisite knowledge?',
              a: 'Most workshops are designed for beginners, but some require basic knowledge. Check individual workshop details.',
            },
            {
              q: 'Will I get a certificate?',
              a: 'Yes, all workshop participants receive a certificate of completion.',
            },
            {
              q: 'Can I access workshop recordings?',
              a: 'Yes, we provide recording access for registered participants.',
            },
            {
              q: 'What if I have questions during the workshop?',
              a: 'There will be dedicated Q&A sessions. You can also reach out to our support team.',
            },
          ].map((faq, idx) => (
            <Card key={idx} className="bg-slate-800 border-slate-700">
              <CardContent className="pt-6">
                <p className="mb-2 font-semibold text-white">{faq.q}</p>
                <p className="text-slate-400">{faq.a}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <Section title="Don't Miss Out">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-6 text-lg text-slate-600">
            Workshops fill up quickly. Register now to secure your spot!
          </p>
          <button className="rounded-lg bg-gradient-to-r from-blue-600 to-cyan-500 px-10 py-4 text-lg font-bold text-white hover:shadow-lg transition-all">
            Browse All Workshops
          </button>
        </div>
      </Section>
    </main>
  );
}
