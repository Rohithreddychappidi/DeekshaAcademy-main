'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Star, Users, Clock, Sparkles, ArrowRight } from 'lucide-react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import Badge from '@/components/ui/badge';
import { Course } from '@/types';
import pythonImg from '@/assets/images/courses/python.webp';
import analyticsImg from '@/assets/images/courses/data_science.webp';
import genaiImg from '@/assets/images/courses/genAi.webp';
import vmwareImg from '@/assets/images/courses/vmware.webp';
import mlImg from '@/assets/images/courses/machine-learning.webp';
import dlImg from '@/assets/images/courses/deep-learning.webp';

interface CourseCardProps {
  course: Course;
  index?: number;
}

export default function CourseCard({ course, index = 0 }: CourseCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Link href={`/courses/${course.slug}`}>
        <Card className="group h-full overflow-hidden liquid-glass-card rounded-2xl border border-white/80 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_40px_rgba(15,23,42,0.12)]">
          <div className="relative h-48 w-full overflow-hidden bg-slate-200">
            {(() => {
              const ASSET_MAP: Record<string, any> = {
                'python-programming': pythonImg,
                'data-analytics': analyticsImg,
                'generative-ai': genaiImg,
                'ai-in-healthcare': vmwareImg,
                'vmware-cloud-foundation': vmwareImg,
                'vmware': vmwareImg,
                'machine-learning': mlImg,
                'deep-learning': dlImg,
              };
              const assetSrc = ASSET_MAP[course.slug];
              if (assetSrc) {
                return (
                  <Image
                    src={assetSrc}
                    alt={course.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover object-top transition-transform group-hover:scale-105"
                  />
                );
              }
              if (course.image) {
                return (
                  <Image
                    src={course.image}
                    alt={course.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover object-top transition-transform group-hover:scale-105"
                  />
                );
              }
              return (
              <div className="relative overflow-hidden bg-gradient-to-r from-sky-600 via-cyan-500 to-teal-400 px-6 py-6">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.35),_transparent_25%),radial-gradient(circle_at_bottom_right,_rgba(255,255,255,0.2),_transparent_20%)] opacity-90" />
                <div className="relative flex items-start justify-between gap-4">
                  <div>
                    <span className="inline-flex rounded-full bg-white/15 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-white shadow-sm backdrop-blur">
                      {course.level}
                    </span>
                    <p className="mt-4 max-w-xs text-sm text-white/90">
                      Practical projects, mentorship, and career-ready skills.
                    </p>
                  </div>
                  <div className="rounded-full border border-white/30 bg-white/10 p-3 text-white shadow-lg shadow-slate-900/10">
                    <Sparkles className="h-6 w-6" />
                  </div>
                </div>
              </div>
              );
            })()}
            {/* Level Badge */}
            <div className="absolute right-3 top-3">
              <Badge variant="secondary">{course.level}</Badge>
            </div>
          </div>

          <CardHeader className="pt-6">
            <h3 className="mb-2 text-2xl font-semibold text-slate-900 group-hover:text-blue-600">
              {course.title}
            </h3>
            <p className="text-sm text-slate-600">{course.shortDescription}</p>
          </CardHeader>

          <CardContent className="space-y-4 pt-4">
            {/* Duration and Enrollment */}
            {/* <div className="flex items-center justify-between text-sm">
              <div className="flex items-center gap-2 text-slate-600">
                <Clock className="h-4 w-4" />
                {course.duration}
              </div>
              <div className="flex items-center gap-2 text-slate-600">
                <Users className="h-4 w-4" />
                {course.enrollmentCount}
              </div>
            </div> */}

            {/* Skills */}
            <div className="flex flex-wrap gap-2">
              {course.skills.slice(0, 3).map((skill) => (
                <Badge key={skill} variant="default" className="text-xs">
                  {skill}
                </Badge>
              ))}
              {course.skills.length > 3 && (
                <Badge variant="default" className="text-xs">
                  +{course.skills.length - 3} more
                </Badge>
              )}
            </div>

            {/* Action Buttons: Explore & WhatsApp */}
            <div className="pt-3 grid grid-cols-2 gap-2 sm:gap-2.5 border-t border-slate-100">
              <div className="flex min-h-[44px] items-center justify-center gap-1.5 rounded-xl bg-slate-900/90 text-white backdrop-blur-md px-3 py-2.5 text-xs sm:text-sm font-semibold shadow-sm transition-all group-hover:bg-blue-600 hover:shadow-md">
                <span>Explore</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </div>
              <button
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  const message = encodeURIComponent(
                    `Hi Deeksha Tech Academy, I am interested in the ${course.title} course. Please share curriculum and batch details.`
                  );
                  window.open(`https://wa.me/917676356131?text=${message}`, '_blank', 'noopener,noreferrer');
                }}
                className="btn-whatsapp flex min-h-[44px] items-center justify-center gap-1.5 rounded-xl px-3 py-2.5 text-xs sm:text-sm font-bold text-white shadow-md cursor-pointer"
              >
                <svg className="h-4 w-4 fill-white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                <span>WhatsApp</span>
              </button>
            </div>

            {/* Rating */}
            {/* <div className="flex items-center gap-2 border-t border-slate-200 pt-4">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-4 w-4 ${
                      i < Math.floor(course.rating)
                        ? 'fill-yellow-400 text-yellow-400'
                        : 'text-slate-300'
                    }`}
                  />
                ))}
              </div>
              <span className="text-sm font-medium text-slate-900">
                {course.rating}
              </span>
              <span className="text-xs text-slate-600">
                ({course.reviews} reviews)
              </span>
            </div> */}

            {/* Price and CTA */}
            {/* <div className="flex items-center justify-between border-t border-slate-200 pt-4">
              <div>
                <p className="text-2xl font-bold text-blue-600">
                  ₹{course.price.toLocaleString()}
                </p>
                <p className="text-xs text-slate-600">One-time payment</p>
              </div>
              <button className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-blue-700">
                Enroll Now
              </button>
            </div> */}
          </CardContent>
        </Card>
      </Link>
    </motion.div>
  );
}
