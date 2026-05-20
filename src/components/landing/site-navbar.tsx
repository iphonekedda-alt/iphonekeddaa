'use client';

import Link from 'next/link';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, MessageCircle, PhoneCall, Search, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import ThemeToggle from '@/components/landing/theme-toggle';

const navItems = [
  { label: 'Services', href: '#services' },
  { label: 'Refurbished', href: '#devices' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'Contact', href: '#contact' },
];

export default function SiteNavbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50 px-3 pt-3 sm:px-4">
      <div
        className={`mx-auto flex max-w-7xl items-center justify-between rounded-[1.6rem] border px-4 py-3 transition-all duration-500 sm:px-5 ${
          scrolled
            ? 'border-white/12 bg-background/70 shadow-[0_24px_80px_rgba(0,0,0,0.22)] backdrop-blur-2xl'
            : 'border-white/8 bg-background/40 backdrop-blur-xl'
        }`}
      >
        <Link href="/" className="flex items-center gap-3">
          <div className="relative flex h-11 w-11 items-center justify-center overflow-hidden rounded-[1.1rem] border border-white/12 bg-[radial-gradient(circle_at_top,rgba(115,235,255,0.32),rgba(10,12,18,0.88)_60%)] shadow-[0_10px_40px_rgba(80,220,255,0.2)]">
            <div className="absolute inset-[1px] rounded-[1rem] bg-[linear-gradient(180deg,rgba(255,255,255,0.22),rgba(255,255,255,0.02))]" />
            <span className="relative font-display text-lg font-semibold tracking-[0.24em] text-white">
              IK
            </span>
          </div>
          <div>
            <p className="font-display text-[0.95rem] font-semibold tracking-[0.18em] text-foreground">
              iPhone Keddaa
            </p>
            <p className="text-[0.62rem] uppercase tracking-[0.32em] text-muted-foreground">
              Repair Lab
            </p>
          </div>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <button
            type="button"
            className="inline-flex h-11 items-center gap-2 rounded-full border border-white/12 bg-white/6 px-4 text-sm text-muted-foreground backdrop-blur-xl"
          >
            <Search className="h-4 w-4" />
            Search model
          </button>
          <ThemeToggle />
          <Link
            href="https://wa.me/919999999999"
            className="magnetic-button inline-flex h-11 items-center gap-2 rounded-full bg-foreground px-5 text-sm font-semibold text-background transition-transform hover:-translate-y-0.5"
          >
            <MessageCircle className="h-4 w-4" />
            WhatsApp
          </Link>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/12 bg-white/8 backdrop-blur-xl"
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
            className="mx-auto mt-3 max-w-7xl rounded-[1.75rem] border border-white/10 bg-background/88 p-4 shadow-[0_24px_80px_rgba(0,0,0,0.3)] backdrop-blur-2xl lg:hidden"
          >
            <div className="mb-4 flex items-center gap-2 rounded-[1.1rem] border border-white/10 bg-white/6 px-4 py-3 text-sm text-muted-foreground">
              <Search className="h-4 w-4" />
              Search iPhone 13, S24, Pixel 8...
            </div>
            <nav className="flex flex-col gap-2">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="rounded-[1rem] px-4 py-3 text-sm font-medium text-foreground transition-colors hover:bg-white/8"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
            <div className="mt-4 grid grid-cols-2 gap-3">
              <Link
                href="tel:+919999999999"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/12 bg-white/8 px-4 py-3 text-sm font-medium"
              >
                <PhoneCall className="h-4 w-4" />
                Call
              </Link>
              <Link
                href="https://wa.me/919999999999"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-foreground px-4 py-3 text-sm font-semibold text-background"
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
