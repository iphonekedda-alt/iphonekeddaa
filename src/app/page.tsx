import type { Metadata } from 'next';
import HomePage from '@/components/landing/homepage';

export const metadata: Metadata = {
  title: 'iPhone Keddaa | Premium Mobile Repair & Refurbished Phones',
  description:
    'Premium mobile repair lab for iPhone and Android repairs, original part replacements, chip-level service, and certified refurbished phones.',
  openGraph: {
    title: 'iPhone Keddaa | Premium Mobile Repair & Refurbished Phones',
    description:
      'Book same-day repair, shop certified refurbished phones, and chat instantly on WhatsApp with iPhone Keddaa.',
    url: 'https://iphonekeddaa.com',
    siteName: 'iPhone Keddaa',
    images: [
      {
        url: '/icon.png',
        width: 103,
        height: 87,
        alt: 'iPhone Keddaa',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'iPhone Keddaa | Premium Mobile Repair & Refurbished Phones',
    description:
      'Premium mobile repair lab, same-day service, refurbished devices, and trusted support.',
    images: ['/icon.png'],
  },
};

export default function Page() {
  return <HomePage />;
}
