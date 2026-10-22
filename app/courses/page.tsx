import type { Metadata } from 'next';
import { COURSES_DATA } from '@/constants/mock-data';
import Hero from '@/components/shared/hero';
import Section from '@/components/shared/section';
import CourseCard from '@/components/shared/course-card';

export const metadata: Metadata = {
  title: 'Courses | Deeksha Tech Academy',
  description: 'Explore our industry-focused courses in AI, Data Analytics, Python, and more.',
};

export default function CoursesPage() {
  return (
    <main>
      <Hero
        title="Explore Our Courses"
        subtitle="Learn from industry experts and transform your career"
        backgroundImage="/images/home-hero-banner.jpg"
      />

      <Section
        title="All Courses"
        subtitle="Choose the perfect course for your career goals"
        id="courses"
      >
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {COURSES_DATA.map((course, index) => (
            <CourseCard key={course.id} course={course} index={index} />
          ))}
        </div>
      </Section>

      {/* Course Comparison Section */}
      <Section
        title="Compare Courses"
        subtitle="Choose the right course based on your experience level"
        darkBg
        className="hidden"
      >
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-slate-700">
                <th className="px-4 py-3 text-white">Course</th>
                <th className="px-4 py-3 text-white">Duration</th>
                <th className="px-4 py-3 text-white">Level</th>
                <th className="px-4 py-3 text-white">Enrollment</th>
              </tr>
            </thead>
            <tbody>
              {COURSES_DATA.map((course) => (
                <tr key={course.id} className="border-b border-slate-700 hover:bg-slate-800">
                  <td className="px-4 py-3 text-slate-300">{course.title}</td>
                  <td className="px-4 py-3 text-slate-300">{course.duration}</td>
                  <td className="px-4 py-3 text-slate-300">{course.level}</td>
                  <td className="px-4 py-3 text-slate-300">{course.enrollmentCount}+</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>
    </main>
  );
}
