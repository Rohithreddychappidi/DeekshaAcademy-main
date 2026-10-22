'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Button from '@/components/ui/button';
import { NAV_ITEMS, CONTACT_INFO } from '@/constants';
import { useUIStore } from '@/store';
import logoImg from '@/assets/images/courses/logo.jpeg';

export default function Header() {
  const pathname = usePathname();
  const { isMenuOpen, toggleMenu, closeMenu } = useUIStore();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-300 ${
        isScrolled ? 'border-b border-slate-200 bg-white shadow-sm' : 'bg-white'
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group" onClick={closeMenu}>
            <div className="relative h-12 w-12 sm:h-14 sm:w-14 overflow-hidden rounded-xl bg-slate-50 border border-slate-200 shadow-sm p-1 transition-transform group-hover:scale-105">
              <Image
                src={logoImg}
                alt="Deeksha Tech Academy Logo"
                className="object-contain"
                fill
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-slate-900 text-lg sm:text-xl tracking-tight leading-tight">
                Deeksha Tech Academy
              </span>
              <span className="text-[11px] font-medium uppercase tracking-widest text-blue-600 hidden sm:inline">
                Learn. Build. Lead.
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden gap-8 md:flex">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className={`text-sm font-medium transition-colors ${
                  pathname === item.href
                    ? 'text-blue-600 border-b-2 border-blue-600'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* CTA Buttons */}
          {/* <div className="hidden gap-4 sm:flex">
            <Button variant="outline" size="sm">
              Sign In
            </Button>
            <Button size="sm">
              Enroll Now
            </Button>
          </div> */}

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="rounded-md p-2 md:hidden"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-slate-900" />
            ) : (
              <Menu className="h-6 w-6 text-slate-900" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="border-t border-slate-200 bg-white py-4 md:hidden">
            <div className="space-y-4">
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`block px-4 py-2 text-sm font-medium ${
                    pathname === item.href
                      ? 'bg-blue-50 text-blue-600'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                  onClick={closeMenu}
                >
                  {item.label}
                </Link>
              ))}
              <div className="border-t border-slate-200 px-4 py-4">
                <div className="mb-4 flex gap-2">
                  <Button variant="outline" size="sm" className="flex-1">
                    Sign In
                  </Button>
                  <Button size="sm" className="flex-1">
                    Enroll Now
                  </Button>
                </div>
                <p className="text-xs text-slate-600">
                  📞 {CONTACT_INFO.phone}
                </p>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
