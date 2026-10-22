'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Mail, Phone, MapPin, Heart, Share2 } from 'lucide-react';
import { NAV_ITEMS, CONTACT_INFO, ACADEMY_INFO } from '@/constants';
import logoImg from '@/assets/images/courses/logo.jpeg';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200 bg-slate-50">
      {/* Newsletter Section */}
      <div className="border-b hidden border-slate-200 bg-gradient-to-r from-blue-600 to-cyan-500 py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="mb-4 text-2xl font-bold text-white">
              Subscribe to Our Newsletter
            </h3>
            <p className="mb-6 text-blue-100">
              Get updates on new courses, workshops, and career tips delivered to your inbox.
            </p>
            <form className="mx-auto flex max-w-md gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 rounded-lg px-4 py-2 text-sm"
                required
              />
              <button
                type="submit"
                className="rounded-lg bg-white px-6 py-2 font-medium text-blue-600 transition-colors hover:bg-blue-50"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          {/* Academy Info */}
          <div>
            <h4 className="mb-4 flex items-center gap-2 font-bold text-slate-900">
              <div className="relative h-8 w-8 overflow-hidden rounded-lg bg-slate-100">
                <Image src={logoImg} alt="Deeksha Tech Academy" fill className="object-contain" />
              </div>
              {ACADEMY_INFO.name}
            </h4>
            <p className="mb-4 text-sm text-slate-600">{ACADEMY_INFO.description}</p>
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2 text-slate-600">
                <Phone className="h-4 w-4" />
                <a href={`tel:${CONTACT_INFO.phone}`} className="hover:text-blue-600">
                  {CONTACT_INFO.phone}
                </a>
              </div>
              <div className="flex items-center gap-2 text-slate-600">
                <Mail className="h-4 w-4" />
                <a href={`mailto:${CONTACT_INFO.email}`} className="hover:text-blue-600">
                  {CONTACT_INFO.email}
                </a>
              </div>
              <div className="flex items-center gap-2 text-slate-600">
                <MapPin className="h-4 w-4" />
                {CONTACT_INFO.address}
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4 font-semibold text-slate-900">Quick Links</h4>
            <ul className="space-y-2">
              {NAV_ITEMS.slice(0, 4).map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-sm text-slate-600 hover:text-blue-600 transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* More Links */}
          <div>
            <h4 className="mb-4 font-semibold text-slate-900">More</h4>
            <ul className="space-y-2">
              {NAV_ITEMS.slice(4).map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-sm text-slate-600 hover:text-blue-600 transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              {/* <li>
                <Link href="#privacy" className="text-sm text-slate-600 hover:text-blue-600 transition-colors">
                  Privacy Policy
                </Link>
              </li> */}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="mb-4 font-semibold text-slate-900">Follow Us</h4>
            <div className="flex gap-4">
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-200 text-slate-600 transition-colors hover:bg-blue-600 hover:text-white"
                aria-label="Contact"
              >
                <Mail className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-200 text-slate-600 transition-colors hover:bg-blue-600 hover:text-white"
                aria-label="Share"
              >
                <Share2 className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-200 text-slate-600 transition-colors hover:bg-blue-600 hover:text-white"
                aria-label="Like"
              >
                <Heart className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-6 text-center text-sm text-slate-600 sm:px-6 lg:px-8">
          <p>
            &copy; {currentYear} {ACADEMY_INFO.name}. All rights reserved. | Made with ❤️ for
            future innovators
          </p>
        </div>
      </div>
    </footer>
  );
}
