import type { Metadata } from 'next';
import { CONTACT_INFO } from '@/constants';
import Hero from '@/components/shared/hero';
import Section from '@/components/shared/section';
import ContactForm from '@/components/shared/contact-form';
import { Card, CardContent } from '@/components/ui/card';
import { Mail, Phone, MapPin, MessageCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Contact Us | Deeksha Tech Academy',
  description: 'Get in touch with Deeksha Tech Academy. Contact us for enrollments, inquiries, and partnerships.',
};

export default function ContactPage() {
  return (
    <main>
      <Hero
        title="Get In Touch"
        subtitle="We're here to help answer your questions"
      />

      <Section title="Contact Information">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-4">
          <Card>
            <CardContent className="pt-6 text-center">
              <div className="mb-4 flex justify-center">
                <div className="rounded-full bg-blue-100 p-4">
                  <Phone className="h-6 w-6 text-blue-600" />
                </div>
              </div>
              <h3 className="mb-2 font-semibold text-slate-900">Phone</h3>
              <a
                href={`tel:${CONTACT_INFO.phone}`}
                className="text-blue-600 hover:underline break-all"
              >
                {CONTACT_INFO.phone}
              </a>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6 text-center">
              <div className="mb-4 flex justify-center">
                <div className="rounded-full bg-blue-100 p-4">
                  <Mail className="h-6 w-6 text-blue-600" />
                </div>
              </div>
              <h3 className="mb-2 font-semibold text-slate-900">Email</h3>
              <a
                href={`mailto:${CONTACT_INFO.email}`}
                className="text-blue-600 hover:underline break-all text-sm"
              >
                {CONTACT_INFO.email}
              </a>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6 text-center">
              <div className="mb-4 flex justify-center">
                <div className="rounded-full bg-blue-100 p-4">
                  <MapPin className="h-6 w-6 text-blue-600" />
                </div>
              </div>
              <h3 className="mb-2 font-semibold text-slate-900">Location</h3>
              <p className="text-slate-600">{CONTACT_INFO.address}</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6 text-center">
              <div className="mb-4 flex justify-center">
                <div className="rounded-full bg-blue-100 p-4">
                  <MessageCircle className="h-6 w-6 text-blue-600" />
                </div>
              </div>
              <h3 className="mb-2 font-semibold text-slate-900">WhatsApp</h3>
              <a
                href={CONTACT_INFO.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                Chat With Us
              </a>
            </CardContent>
          </Card>
        </div>
      </Section>

      {/* Contact Form Section */}
      <Section title="Send us a Message" darkBg>
        <div className="mx-auto max-w-2xl">
          <ContactForm />
        </div>
      </Section>

      {/* Map Section */}
      <Section className="hidden" title="Find Us">
        <div className="rounded-lg overflow-hidden h-96 bg-slate-200">
          <iframe
            width="100%"
            height="100%"
            frameBorder="0"
            title="Deeksha Tech Academy Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.6765254343447!2d77.62408!3d13.0269!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae17f2e0e0e0e1%3A0x0!2sDeeksha%20Academy!5e0!3m2!1sen!2sin!4v1234567890"
            allowFullScreen
            loading="lazy"
          />
        </div>
      </Section>

      {/* FAQ Section */}
      <Section title="Quick Answers">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {[
            {
              q: 'What is the best time to contact you?',
              a: 'We are available Monday to Friday, 9 AM to 6 PM IST. Emergency inquiries can reach us via WhatsApp.',
            },
            {
              q: 'How long does it take to get a response?',
              a: 'We typically respond to inquiries within 24 hours during business days.',
            },
            {
              q: 'Can I schedule a 1-on-1 consultation?',
              a: 'Yes! Contact us and we\'ll schedule a free consultation with you.',
            },
            {
              q: 'Do you offer corporate training?',
              a: 'Yes, we offer customized training programs for organizations. Contact our team for details.',
            },
          ].map((item, idx) => (
            <Card key={idx}>
              <CardContent className="pt-6">
                <p className="mb-2 font-semibold text-slate-900">{item.q}</p>
                <p className="text-slate-600 text-sm">{item.a}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      {/* Response Time */}
      <Section className="hidden" title="Our Support Commitment" darkBg>
        <div className="mx-auto max-w-3xl rounded-lg bg-slate-800 p-8 border border-slate-700 text-center">
          <p className="mb-6 text-lg text-slate-200">
            We value your time and are committed to providing prompt support.
          </p>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {[
              { time: '< 2 hrs', label: 'Chat Response' },
              { time: '< 24 hrs', label: 'Email Response' },
              { time: '100%', label: 'Satisfaction' },
              { time: '7 days', label: 'Support Week' },
            ].map((stat, idx) => (
              <div key={idx}>
                <p className="text-2xl font-bold text-cyan-400">{stat.time}</p>
                <p className="text-sm text-slate-400">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>
    </main>
  );
}
