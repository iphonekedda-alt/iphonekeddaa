import type { Metadata } from 'next';
import HomePage from '@/components/landing/homepage';

export const metadata: Metadata = {
  title: 'Fast & Reliable Mobile Repair | iPhone Keddaa',
  description:
    'Premium mobile repair lab offering same-day service, genuine parts, certified technicians, and transparent pricing for iPhone and Android devices.',
  openGraph: {
    title: 'Fast & Reliable Mobile Repair | iPhone Keddaa',
    description:
      'Premium mobile repair lab offering same-day service, genuine parts, certified technicians, and transparent pricing for iPhone and Android devices.',
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
    title: 'Fast & Reliable Mobile Repair | iPhone Keddaa',
    description:
      'Premium mobile repair lab offering same-day service, genuine parts, certified technicians, and transparent pricing for iPhone and Android devices.',
    images: ['/icon.png'],
  },
};

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'iPhone Keddaa',
  image: ['https://iphonekeddaa.com/icon.png'],
  '@id': 'https://iphonekeddaa.com',
  url: 'https://iphonekeddaa.com',
  telephone: '+919999999999',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Premium Service Desk',
    addressLocality: 'City Center',
    addressRegion: 'Kerala',
    postalCode: '000000',
    addressCountry: 'IN',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 10.0,
    longitude: 76.0,
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      opens: '11:00',
      closes: '21:00',
    },
  ],
  sameAs: ['https://instagram.com/iphonekeddaa', 'https://wa.me/919999999999'],
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <HomePage />
    </>
  );
}
