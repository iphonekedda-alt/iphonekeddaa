'use client';

import { MoonStar, SunMedium } from 'lucide-react';
import { useState } from 'react';

export default function ThemeToggle() {
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    if (typeof document === 'undefined') {
      return 'dark';
    }

    return document.documentElement.dataset.theme === 'light' ? 'light' : 'dark';
  });

  const toggleTheme = () => {
    const root = document.documentElement;
    const nextTheme = theme === 'dark' ? 'light' : 'dark';
    root.classList.toggle('dark', nextTheme === 'dark');
    root.dataset.theme = nextTheme;
    localStorage.setItem('ik-theme', nextTheme);
    setTheme(nextTheme);
  };

  const Icon = theme === 'dark' ? SunMedium : MoonStar;

  return (
    <button
      type="button"
      aria-label="Toggle theme"
      onClick={toggleTheme}
      className="magnetic-button inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/12 bg-white/8 text-foreground shadow-[0_12px_40px_rgba(0,0,0,0.18)] backdrop-blur-xl transition-all hover:border-neon/40 hover:bg-white/12"
    >
      <Icon className="h-4 w-4" />
    </button>
  );
}
