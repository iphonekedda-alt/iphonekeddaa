'use client';

import Image from 'next/image';
import Link from 'next/link';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, MessageCircle, PhoneCall, Search, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import ThemeToggle from '@/components/landing/theme-toggle';

const navItems = [
  { label: 'Services', href: '#services' },
  { label: 'Process', href: '#process' },
  { label: 'Brands', href: '#brands' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'Contact', href: '#contact' },
];

export default function SiteNavbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50 px-4 py-4 backdrop-blur-xl">
      <div
        className={`mx-auto flex max-w-7xl items-center justify-between gap-3 rounded-[1.75rem] border px-4 py-3 transition-all duration-500 sm:px-5 ${
          scrolled
            ? 'border-slate-200/70 bg-white/85 shadow-[0_24px_80px_rgba(15,23,42,0.08)] dark:border-slate-700/70 dark:bg-slate-950/90'
            : 'border-white/10 bg-white/40 dark:bg-slate-950/40'
        }`}
      >
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center overflow-hidden rounded-[0.7rem] border border-slate-200/70 bg-white/80 shadow-lg shadow-blue-600/10 dark:border-slate-700/70 dark:bg-slate-900/80">
            <Image src="/icon.png" alt="iPhone Keddaa logo" width={44} height={44} className="h-full w-full object-contain" />
          </div>
          <div>
            <p className="text-sm font-semibold text-slate-950 dark:text-white">iPhone Keddaa</p>
            <p className="text-[0.65rem] uppercase tracking-[0.32em] text-slate-500 dark:text-slate-400">Repair Lab</p>
          </div>
        </Link>

        <nav className="hidden items-center gap-6 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-sm font-medium text-slate-700 transition-colors hover:text-blue-700 dark:text-slate-200 dark:hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Link
            href="tel:+919999999999"
            className="inline-flex h-11 items-center gap-2 rounded-full border border-slate-200/80 bg-slate-50 px-4 text-sm text-slate-700 transition hover:bg-slate-100 dark:border-slate-700/70 dark:bg-slate-900 dark:text-slate-200"
          >
            <PhoneCall className="h-4 w-4" />
            Call
          </Link>
          <Link
            href="https://wa.me/919999999999"
            className="inline-flex h-11 items-center gap-2 rounded-full bg-blue-600 px-4 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 hover:bg-blue-700"
          >
            <MessageCircle className="h-4 w-4" />
            WhatsApp
          </Link>
          <ThemeToggle />
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200/70 bg-white/80 text-slate-700 shadow-sm dark:border-slate-700/70 dark:bg-slate-950/80 dark:text-slate-100"
            aria-label="Toggle menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            className="mx-auto mt-3 max-w-7xl rounded-[1.75rem] border border-slate-200/70 bg-white/95 p-4 shadow-[0_24px_80px_rgba(15,23,42,0.12)] backdrop-blur-xl dark:border-slate-700/70 dark:bg-slate-950/90 lg:hidden"
          >
            <div className="mb-4 flex items-center gap-2 rounded-[1.1rem] border border-slate-200/70 bg-slate-100 px-4 py-3 text-sm text-slate-700 dark:border-slate-700/70 dark:bg-slate-900/80 dark:text-slate-200">
              <Search className="h-4 w-4" />
              Search devices and services
            </div>
            <nav className="flex flex-col gap-2">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="rounded-[1rem] px-4 py-3 text-sm font-medium text-slate-900 transition-colors hover:bg-slate-100 dark:text-slate-100 dark:hover:bg-slate-900"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
            <div className="mt-4 grid grid-cols-2 gap-3">
              <Link
                href="tel:+919999999999"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-200/70 bg-slate-50 px-4 py-3 text-sm text-slate-700 dark:border-slate-700/70 dark:bg-slate-900/80 dark:text-slate-200"
              >
                <PhoneCall className="h-4 w-4" />
                Call
              </Link>
              <Link
                href="https://wa.me/919999999999"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-blue-600 px-4 py-3 text-sm font-semibold text-white"
              >
                <MessageCircle className="h-4 w-4" />
                WhatsApp
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
