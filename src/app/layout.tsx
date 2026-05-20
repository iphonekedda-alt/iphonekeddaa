import type { Metadata } from 'next';
import './globals.css';
import SiteNavbar from '@/components/landing/site-navbar';
import SiteFooter from '@/components/landing/site-footer';

export const metadata: Metadata = {
  metadataBase: new URL('https://iphonekeddaa.com'),
  title: {
    default: 'iPhone Keddaa | Premium Mobile Repair & Refurbished Phones',
    template: '%s | iPhone Keddaa',
  },
  description:
    'Luxury-grade mobile repair, original parts, expert technicians, and certified refurbished phones with warranty support.',
  keywords: [
    'iPhone repair',
    'mobile repair',
    'refurbished phones',
    'battery replacement',
    'display replacement',
    'phone shop',
  ],
  authors: [{ name: 'iPhone Keddaa' }],
  alternates: {
    canonical: '/',
  },
  icons: {
    icon: [{ url: '/icon.png', type: 'image/png', sizes: '103x87' }],
    shortcut: ['/favicon.ico'],
    apple: [{ url: '/icon.png', sizes: '103x87', type: 'image/png' }],
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://iphonekeddaa.com',
    siteName: 'iPhone Keddaa',
    title: 'iPhone Keddaa | Premium Mobile Repair & Refurbished Phones',
    description:
      'Book premium repairs, explore certified refurbished phones, and connect instantly on WhatsApp.',
    images: [{ url: '/icon.png', width: 103, height: 87, alt: 'iPhone Keddaa' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'iPhone Keddaa | Premium Mobile Repair & Refurbished Phones',
    description:
      'Premium mobile repair lab with same-day service, warranty support, and certified devices.',
    images: ['/icon.png'],
  },
};

const themeScript = `
(() => {
  const root = document.documentElement;
  const stored = localStorage.getItem('ik-theme');
  const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const theme = stored || (systemDark ? 'dark' : 'light');
  root.classList.toggle('dark', theme === 'dark');
  root.dataset.theme = theme;
})();
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body
        suppressHydrationWarning
        className="site-shell min-h-screen bg-background font-sans text-foreground"
      >
        <div className="app-noise" />
        <div className="app-grid" />
        <div className="relative flex min-h-screen flex-col overflow-x-clip">
          <SiteNavbar />
          <main className="flex-1">{children}</main>
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
