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
        isScrolled
          ? 'liquid-glass shadow-[0_10px_30px_-10px_rgba(15,23,42,0.08)]'
          : 'bg-white/85 backdrop-blur-xl border-b border-slate-100'
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group" onClick={closeMenu}>
            <div className="relative h-12 w-12 sm:h-14 sm:w-14 overflow-hidden rounded-2xl bg-white border border-slate-200/80 shadow-[0_4px_12px_rgba(0,0,0,0.05)] p-1.5 transition-all group-hover:scale-105 group-hover:shadow-[0_8px_20px_rgba(37,99,235,0.15)]">
              <Image
                src={logoImg}
                alt="Deeksha Tech Academy Logo"
                className="object-contain"
                fill
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-slate-900 text-lg sm:text-xl tracking-tight leading-tight group-hover:text-blue-600 transition-colors">
                Deeksha Tech Academy
              </span>
              <span className="text-[11px] font-semibold uppercase tracking-widest text-blue-600 hidden sm:inline">
                Learn. Build. Lead.
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-8 md:flex">
            <nav className="flex gap-8">
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`text-sm font-semibold transition-all relative py-1 ${
                    pathname === item.href
                      ? 'text-blue-600'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {item.label}
                  {pathname === item.href && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500" />
                  )}
                </Link>
              ))}
            </nav>

            {/* Desktop WhatsApp Action */}
            <a
              href="https://wa.me/917676356131?text=Hi%20Deeksha%20Tech%20Academy%2C%20I%20have%20an%20inquiry%20about%20your%20courses%20and%20batches."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp hidden lg:inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-bold"
            >
              <svg className="h-4 w-4 fill-current text-white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              <span>WhatsApp Us</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-100/80 p-2 text-slate-800 transition-colors hover:bg-slate-200/80 active:scale-95 md:hidden"
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
          <nav className="border-t border-slate-100 liquid-glass rounded-b-2xl py-5 px-4 shadow-2xl md:hidden animate-[fadeIn_0.2s_ease-out]">
            <div className="space-y-2">
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`flex items-center justify-between rounded-xl px-4 py-3 text-sm font-semibold transition-all ${
                    pathname === item.href
                      ? 'bg-blue-50 text-blue-600 font-bold'
                      : 'text-slate-700 hover:bg-slate-50 hover:text-slate-900'
                  }`}
                  onClick={closeMenu}
                >
                  <span>{item.label}</span>
                  {pathname === item.href && (
                    <span className="h-2 w-2 rounded-full bg-blue-600" />
                  )}
                </Link>
              ))}

              {/* Mobile WhatsApp Quick Action */}
              <div className="pt-3 border-t border-slate-100/80">
                <a
                  href="https://wa.me/917676356131?text=Hi%20Deeksha%20Tech%20Academy%2C%20I%20have%20an%20inquiry%20about%20your%20courses%20and%20batches."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-whatsapp flex items-center justify-center gap-2.5 rounded-xl py-3.5 px-4 text-sm font-bold shadow-lg"
                >
                  <svg className="h-5 w-5 fill-current text-white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  <span>Chat on WhatsApp</span>
                </a>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
