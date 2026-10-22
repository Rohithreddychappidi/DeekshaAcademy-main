import type { Metadata } from 'next';
import Link from 'next/link';
import { BLOG_POSTS_DATA } from '@/constants/mock-data';
import { BLOG_CATEGORIES } from '@/constants';
import Hero from '@/components/shared/hero';
import Section from '@/components/shared/section';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import Badge from '@/components/ui/badge';
import { Calendar, User, Clock } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Blog | Deeksha Tech Academy',
  description: 'Read articles about AI, Data Analytics, Python, and career guidance from industry experts.',
};

export default function BlogPage() {
  const featuredPosts = BLOG_POSTS_DATA.filter((p) => p.featured);
  const otherPosts = BLOG_POSTS_DATA.filter((p) => !p.featured);

  return (
    <main>
      <Hero
        title="Our Blog"
        subtitle="Insights, tips, and guides from industry experts"
      />

      {/* Featured Posts */}
      {featuredPosts.length > 0 && (
        <Section title="Featured Articles">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {featuredPosts.map((post, idx) => (
              <Link href={`/blog/${post.slug}`} key={post.id}>
                <Card className="h-full transition-all hover:shadow-lg hover:border-blue-200">
                  <div className="relative h-48 bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center">
                    <span className="text-5xl font-bold text-white opacity-50">
                      {post.title.charAt(0)}
                    </span>
                  </div>
                  <CardHeader>
                    <div className="mb-2 flex items-center justify-between">
                      <Badge variant="default">{post.category}</Badge>
                      <span className="flex items-center gap-1 text-xs text-slate-600">
                        <Clock className="h-3 w-3" />
                        {post.readTime} min read
                      </span>
                    </div>
                    <h3 className="mb-2 text-xl font-bold text-slate-900">
                      {post.title}
                    </h3>
                    <p className="text-slate-600">{post.description}</p>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center gap-4 border-t border-slate-200 pt-4">
                      <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center font-bold text-blue-600">
                        {post.author.name.charAt(0)}
                      </div>
                      <div className="text-sm">
                        <p className="font-medium text-slate-900">{post.author.name}</p>
                        <div className="flex items-center gap-1 text-slate-600">
                          <Calendar className="h-3 w-3" />
                          {new Date(post.createdAt).toLocaleDateString()}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </Section>
      )}

      {/* Categories */}
      <Section title="Browse by Category" darkBg>
        <div className="flex flex-wrap justify-center gap-3">
          {BLOG_CATEGORIES.map((category) => (
            <button
              key={category}
              className="rounded-full border-2 border-cyan-500 bg-transparent px-6 py-2 font-semibold text-cyan-500 transition-all hover:bg-cyan-500 hover:text-white"
            >
              {category}
            </button>
          ))}
        </div>
      </Section>

      {/* All Posts */}
      <Section title="Latest Articles">
        <div className="space-y-6">
          {otherPosts.map((post) => (
            <Link href={`/blog/${post.slug}`} key={post.id}>
              <Card className="overflow-hidden transition-all hover:shadow-lg">
                <div className="grid grid-cols-1 gap-6 md:grid-cols-4">
                  <div className="h-48 md:h-auto bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center">
                    <span className="text-5xl font-bold text-white opacity-50">
                      {post.title.charAt(0)}
                    </span>
                  </div>
                  <CardContent className="col-span-3 pt-6">
                    <div className="mb-2 flex items-center gap-2 flex-wrap">
                      <Badge variant="default">{post.category}</Badge>
                      {post.tags.map((tag) => (
                        <Badge key={tag} variant="secondary" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <h3 className="mb-2 text-2xl font-bold text-slate-900">
                      {post.title}
                    </h3>
                    <p className="mb-4 text-slate-600">{post.description}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-2 text-sm text-slate-600">
                          <User className="h-4 w-4" />
                          {post.author.name}
                        </div>
                        <div className="flex items-center gap-2 text-sm text-slate-600">
                          <Calendar className="h-4 w-4" />
                          {new Date(post.createdAt).toLocaleDateString()}
                        </div>
                        <div className="flex items-center gap-2 text-sm text-slate-600">
                          <Clock className="h-4 w-4" />
                          {post.readTime} min read
                        </div>
                      </div>
                      <span className="text-blue-600 font-semibold">Read More →</span>
                    </div>
                  </CardContent>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </Section>

      {/* Newsletter */}
      <Section title="Subscribe to Our Newsletter" darkBg>
        <div className="mx-auto max-w-2xl rounded-lg bg-slate-800 p-8 border border-slate-700">
          <p className="mb-6 text-center text-lg text-slate-200">
            Get the latest articles and insights delivered to your inbox
          </p>
          <form className="flex flex-col gap-4 sm:flex-row">
            <input
              type="email"
              placeholder="your@email.com"
              className="flex-1 rounded-lg bg-slate-700 px-4 py-3 text-white placeholder-slate-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500"
              required
            />
            <button
              type="submit"
              className="rounded-lg bg-cyan-500 px-8 py-3 font-semibold text-white hover:bg-cyan-600 transition-colors"
            >
              Subscribe
            </button>
          </form>
          <p className="mt-4 text-center text-sm text-slate-400">
            No spam, just quality content. Unsubscribe anytime.
          </p>
        </div>
      </Section>
    </main>
  );
}
