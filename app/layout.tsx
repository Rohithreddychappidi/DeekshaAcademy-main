import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import FloatingWhatsApp from "@/components/shared/floating-whatsapp";
import SiteIntroLoader from "@/components/shared/site-intro-loader";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://deekshaacademy.com"),
  title: {
    default: "Deeksha Tech Academy | Learn. Build. Lead.",
    template: "%s | Deeksha Tech Academy",
  },
  description:
    "Master Machine Learning, Deep Learning, Generative AI, Python Programming, Data Analytics, and VMware Cloud Foundation. Hands-on projects, expert mentorship, and career support.",
  keywords: [
    "Deeksha Tech Academy",
    "Machine Learning Course",
    "Machine Learning Training in Bangalore",
    "Deep Learning Course",
    "Artificial Intelligence Training",
    "Generative AI Course",
    "Generative AI Certification",
    "Python Programming Course",
    "Python Bootcamp Bangalore",
    "Data Analytics Course",
    "VMware Cloud Foundation Training",
    "VMware Certification Course",
    "VCF Certification",
    "vSphere Administration",
    "vSAN and NSX",
    "Neural Networks Training",
    "TensorFlow and PyTorch",
    "Supervised and Unsupervised Learning",
    "Computer Vision Course",
    "Tech Upskilling Bangalore",
    "Online Instructor-Led Tech Courses",
    "Software Career Transition",
    "Best IT Training Institute Bangalore",
    "Hands-on Coding Bootcamps",
  ],
  authors: [{ name: "Deeksha Tech Academy", url: "https://deekshaacademy.com" }],
  creator: "Deeksha Tech Academy",
  publisher: "Deeksha Tech Academy",
  category: "technology",
  classification: "Education & IT Career Training",
  formatDetection: {
    telephone: false,
    address: false,
    email: false,
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://deekshaacademy.com",
  },
  verification: {
    google: "NMnamc9uciXqe0EMfrDPrV1hFlRk6ORZDqVL2-qoPX4",
  },
  openGraph: {
    title: "Deeksha Tech Academy | Learn. Build. Lead.",
    description:
      "Master Machine Learning, Deep Learning, Generative AI, Python & VMware Cloud Foundation. Practical projects, expert mentorship, and job placement assistance.",
    type: "website",
    url: "https://deekshaacademy.com",
    siteName: "Deeksha Tech Academy",
    locale: "en_IN",
    images: [
      {
        url: "/images/home-hero-banner.jpg",
        width: 1200,
        height: 630,
        alt: "Deeksha Tech Academy - Premier AI & Tech Upskilling",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Deeksha Tech Academy | Learn. Build. Lead.",
    description:
      "Master Machine Learning, Deep Learning, Generative AI, Python & Cloud Infrastructure with industry projects and career mentoring.",
    images: ["/images/home-hero-banner.jpg"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.png", type: "image/png", sizes: "32x32" },
      { url: "/favicon-32x32.png", type: "image/png", sizes: "32x32" },
      { url: "/favicon-16x16.png", type: "image/png", sizes: "16x16" },
      { url: "/icon-192.png", type: "image/png", sizes: "192x192" },
      { url: "/icon-512.png", type: "image/png", sizes: "512x512" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": ["EducationalOrganization", "LocalBusiness"],
    "name": "Deeksha Tech Academy",
    "alternateName": "Deeksha Academy",
    "url": "https://deekshaacademy.com",
    "logo": "https://deekshaacademy.com/apple-touch-icon.png",
    "image": "https://deekshaacademy.com/images/home-hero-banner.jpg",
    "description": "Master AI, Machine Learning, Deep Learning, Data Analytics, Python & VMware Cloud Foundation. Industry-focused live training with practical projects and career placement support.",
    "email": "deekshatechacademy@gmail.com",
    "telephone": "+91 7676356131",
    "priceRange": "₹₹",
    "currenciesAccepted": "INR",
    "paymentAccepted": "Cash, Credit Card, Debit Card, UPI, Net Banking",
    "openingHours": "Mo-Sa 09:00-19:00",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Tech Hub, Electronic City / Outer Ring Road",
      "addressLocality": "Bangalore",
      "addressRegion": "Karnataka",
      "postalCode": "560001",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "12.9716",
      "longitude": "77.5946"
    },
    "areaServed": [
      { "@type": "Country", "name": "India" },
      { "@type": "AdministrativeArea", "name": "Karnataka" },
      { "@type": "City", "name": "Bangalore" },
      { "@type": "Place", "name": "Worldwide (Online)" }
    ],
    "sameAs": [
      "https://linkedin.com/company/deeksha-academy",
      "https://twitter.com/deeksha-academy"
    ],
    "founder": {
      "@type": "Person",
      "name": "Deeksha D",
      "jobTitle": "Founder & AI/Cloud Specialist",
      "url": "https://deekshaacademy.com/founder"
    }
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Deeksha Tech Academy",
    "url": "https://deekshaacademy.com",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://deekshaacademy.com/courses?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  return (
    <html
      lang="en"
      className={`${plusJakarta.variable} ${inter.variable} scroll-smooth`}
    >
      <head>
        {/* Google Site Verification */}
        <meta
          name="google-site-verification"
          content="NMnamc9uciXqe0EMfrDPrV1hFlRk6ORZDqVL2-qoPX4"
        />

        {/* Global Search Engine & Indexing Directives */}
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="googlebot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta name="bingbot" content="index, follow, max-snippet:-1, max-image-preview:large" />
        <meta name="rating" content="General" />
        <meta name="revisit-after" content="2 days" />
        <meta name="distribution" content="Global" />
        <meta name="target" content="all" />

        {/* Geo / Regional Targeting for India & Bangalore Tech Sector */}
        <meta name="geo.region" content="IN-KA" />
        <meta name="geo.placename" content="Bangalore, Karnataka, India" />
        <meta name="geo.position" content="12.9716;77.5946" />
        <meta name="ICBM" content="12.9716, 77.5946" />

        {/* Browser & Device Theme */}
        <meta name="theme-color" content="#002359" />
        <meta name="msapplication-TileColor" content="#002359" />

        {/* Favicons & Manifest */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />

        {/* Structured Data (Schema.org) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-white font-sans antialiased">
        <SiteIntroLoader />
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
