import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { BLOG_POSTS_DATA } from '@/constants/mock-data';
import Section from '@/components/shared/section';
import { Card, CardContent } from '@/components/ui/card';
import Badge from '@/components/ui/badge';
import { Calendar, User, Clock, ArrowRight } from 'lucide-react';

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const slug = (await params).slug;
  const post = BLOG_POSTS_DATA.find((p) => p.slug === slug);

  if (!post) {
    return { title: 'Post Not Found' };
  }

  const postUrl = `https://deekshaacademy.com/blog/${post.slug}`;
  const postImage = 'https://deekshaacademy.com/images/home-hero-banner.jpg';

  return {
    title: `${post.title} | Deeksha Tech Academy Blog`,
    description: post.description,
    keywords: [
      ...post.tags,
      post.category,
      'Deeksha Tech Academy Blog',
      'Tech Upskilling Bangalore',
      'AI Tutorials',
    ],
    alternates: {
      canonical: postUrl,
    },
    openGraph: {
      title: `${post.title} | Deeksha Tech Academy Blog`,
      description: post.description,
      url: postUrl,
      type: 'article',
      images: [
        {
          url: postImage,
          width: 1200,
          height: 630,
          alt: `${post.title} - Deeksha Tech Academy Blog`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${post.title} | Deeksha Tech Academy Blog`,
      description: post.description,
      images: [postImage],
    },
  };
}

export async function generateStaticParams() {
  return BLOG_POSTS_DATA.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const slug = (await params).slug;
  const post = BLOG_POSTS_DATA.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  // Get related posts
  const relatedPosts = BLOG_POSTS_DATA.filter(
    (p) => p.category === post.category && p.slug !== post.slug,
  ).slice(0, 3);

  const blogPostSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "description": post.description,
    "image": "https://deekshaacademy.com/images/home-hero-banner.jpg",
    "datePublished": new Date(post.createdAt).toISOString(),
    "dateModified": new Date(post.updatedAt).toISOString(),
    "author": {
      "@type": "Person",
      "name": post.author.name,
      "url": "https://deekshaacademy.com"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Deeksha Tech Academy",
      "logo": {
        "@type": "ImageObject",
        "url": "https://deekshaacademy.com/apple-touch-icon.png"
      }
    },
    "articleBody": post.content,
    "keywords": post.tags.join(", "),
    "url": `https://deekshaacademy.com/blog/${post.slug}`
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://deekshaacademy.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Blog",
        "item": "https://deekshaacademy.com/blog"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": post.title,
        "item": `https://deekshaacademy.com/blog/${post.slug}`
      }
    ]
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {/* Header */}
      <section className="bg-gradient-to-b from-slate-900 to-slate-800 py-12 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="mb-4 flex items-center gap-2">
            <Badge variant="default">{post.category}</Badge>
            <span className="text-sm text-slate-400">{post.readTime} min read</span>
          </div>
          <h1 className="mb-6 text-4xl font-bold text-white sm:text-5xl">
            {post.title}
          </h1>
          <p className="mb-8 text-lg text-slate-300">{post.description}</p>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between border-t border-slate-700 pt-6">
            <div className="flex items-center gap-4">
              <div className="h-12 w-12 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold">
                {post.author.name.charAt(0)}
              </div>
              <div>
                <p className="font-semibold text-white">{post.author.name}</p>
                <p className="text-sm text-slate-400">{post.author.bio}</p>
              </div>
            </div>
            <div className="flex items-center gap-6 text-slate-400">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                {new Date(post.createdAt).toLocaleDateString()}
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                {post.readTime} min
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <Section>
        <div className="mx-auto max-w-3xl">
          {/* Featured Image */}
          <div className="mb-8 h-96 rounded-lg bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center">
            <span className="text-6xl font-bold text-white opacity-50">
              {post.title.charAt(0)}
            </span>
          </div>

          {/* Article Content */}
          <article className="prose prose-slate max-w-none">
            <div className="text-lg text-slate-600 leading-relaxed space-y-6">
              <p>{post.content}</p>
              
              <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded">
                <p className="font-semibold text-blue-900 mb-2">💡 Key Takeaway</p>
                <p className="text-blue-800">
                  This article provides valuable insights into {post.category.toLowerCase()}. 
                  Apply these learnings to your projects and career growth.
                </p>
              </div>

              <p>
                {post.content}
              </p>
            </div>
          </article>

          {/* Tags */}
          <div className="mt-12 border-t border-slate-200 pt-8">
            <p className="mb-4 font-semibold text-slate-900">Tags:</p>
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <Link href={`/blog?tag=${tag}`} key={tag}>
                  <Badge variant="secondary" className="cursor-pointer hover:bg-blue-200">
                    {tag}
                  </Badge>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <Section
          title="Related Articles"
          subtitle="You might also be interested in these posts"
          darkBg
        >
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {relatedPosts.map((relatedPost) => (
              <Link href={`/blog/${relatedPost.slug}`} key={relatedPost.id}>
                <Card className="h-full bg-slate-800 border-slate-700 transition-all hover:shadow-lg">
                  <div className="h-40 bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center">
                    <span className="text-4xl font-bold text-white opacity-50">
                      {relatedPost.title.charAt(0)}
                    </span>
                  </div>
                  <CardContent className="pt-6">
                    <Badge variant="default" className="mb-3">{relatedPost.category}</Badge>
                    <h3 className="mb-2 font-bold text-white line-clamp-2">
                      {relatedPost.title}
                    </h3>
                    <p className="mb-4 text-sm text-slate-400 line-clamp-2">
                      {relatedPost.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-slate-500">
                        {relatedPost.readTime} min read
                      </span>
                      <ArrowRight className="h-4 w-4 text-cyan-400" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </Section>
      )}

      {/* CTA */}
      <Section title="Ready to Learn More?" darkBg>
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-8 text-lg text-slate-300">
            Take the next step in your learning journey with our comprehensive courses.
          </p>
          <Link
            href="/courses"
            className="rounded-lg bg-cyan-500 px-10 py-4 font-bold text-white hover:bg-cyan-600 transition-colors inline-block"
          >
            Explore Courses
          </Link>
        </div>
      </Section>
    </main>
  );
}
