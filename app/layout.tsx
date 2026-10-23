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
    "Deep Learning Course",
    "Artificial Intelligence Training",
    "Generative AI Course",
    "Python Programming Course",
    "Data Analytics Course",
    "VMware Cloud Foundation Training",
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
    "Hands-on Coding Bootcamps",
  ],
  authors: [{ name: "Deeksha Tech Academy", url: "https://deekshaacademy.com" }],
  creator: "Deeksha Tech Academy",
  publisher: "Deeksha Tech Academy",
  robots: {
    index: true,
    follow: true,
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
  openGraph: {
    title: "Deeksha Tech Academy | Learn. Build. Lead.",
    description:
      "Industry-focused training in Machine Learning, Deep Learning, Generative AI, Python & VMware Cloud Foundation. Practical projects and placement assistance.",
    type: "website",
    url: "https://deekshaacademy.com",
    siteName: "Deeksha Tech Academy",
    locale: "en_IN",
    images: [
      {
        url: "/images/home-hero-banner.jpg",
        width: 1200,
        height: 630,
        alt: "Deeksha Tech Academy Tech Courses",
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
    "@type": "EducationalOrganization",
    "name": "Deeksha Tech Academy",
    "url": "https://deekshaacademy.com",
    "logo": "https://deekshaacademy.com/logo.png",
    "description": "Master AI, Data Analytics, Python & Future Skills. Industry-focused training with practical projects and career support.",
    "email": "deekshatechacademy@gmail.com",
    "telephone": "+91 7676356131",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Tech Hub",
      "addressLocality": "Bangalore",
      "addressRegion": "Karnataka",
      "postalCode": "560001",
      "addressCountry": "IN"
    },
    "sameAs": [
      "https://linkedin.com/company/deeksha-academy",
      "https://twitter.com/deeksha-academy"
    ],
    "founder": {
      "@type": "Person",
      "name": "Deeksha D",
      "url": "https://deekshaacademy.com/founder"
    }
  };

  return (
    <html
      lang="en"
      className={`${plusJakarta.variable} ${inter.variable} scroll-smooth`}
    >
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
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
