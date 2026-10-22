'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import Button from '@/components/ui/button';
import Input from '@/components/ui/input';
import { contactService } from '@/services';
import { useNotificationStore } from '@/store';

const contactFormSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  phone: z.string().min(10, 'Phone must be at least 10 characters'),
  courseInterested: z.string().min(1, 'Please select a course'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

export default function ContactForm() {
  const [isLoading, setIsLoading] = useState(false);
  const { addNotification } = useNotificationStore();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsLoading(true);
    try {
      const result = await contactService.submitContactForm(data);
      if (result.success) {
        addNotification(result.message, 'success');
        reset();
      }
    } catch (error) {
      addNotification('Failed to send message. Please try again.', 'error');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-slate-900 mb-2">
          Full Name *
        </label>
        <Input
          {...register('name')}
          placeholder="Your name"
          className={errors.name ? 'border-red-500' : ''}
        />
        {errors.name && (
          <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium text-slate-900 mb-2">
          Email *
        </label>
        <Input
          {...register('email')}
          type="email"
          placeholder="your@email.com"
          className={errors.email ? 'border-red-500' : ''}
        />
        {errors.email && (
          <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium text-slate-900 mb-2">
          Phone *
        </label>
        <Input
          {...register('phone')}
          placeholder="Your phone number"
          className={errors.phone ? 'border-red-500' : ''}
        />
        {errors.phone && (
          <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium text-slate-900 mb-2">
          Course Interested *
        </label>
        <select
          {...register('courseInterested')}
          className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
        >
          <option value="">Select a course</option>
          <option value="Python Programming">Python Programming</option>
          <option value="Data Analytics">Data Analytics</option>
          <option value="Generative AI">Generative AI</option>
          <option value="VMware Cloud Foundation (VCF)">VMware Cloud Foundation (VCF)</option>
          <option value="Machine Learning">Machine Learning</option>
          <option value="Deep Learning">Deep Learning</option>
        </select>
        {errors.courseInterested && (
          <p className="mt-1 text-sm text-red-600">
            {errors.courseInterested.message}
          </p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium text-slate-900 mb-2">
          Message *
        </label>
        <textarea
          {...register('message')}
          placeholder="Your message"
          rows={5}
          className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
        />
        {errors.message && (
          <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>
        )}
      </div>

      <Button
        type="submit"
        disabled={isLoading}
        className="w-full"
      >
        {isLoading ? 'Sending...' : 'Send Message'}
      </Button>
    </form>
  );
}
