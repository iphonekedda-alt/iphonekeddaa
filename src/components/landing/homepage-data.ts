import type { LucideIcon } from 'lucide-react';
import {
  ArrowRight,
  BatteryCharging,
  Camera,
  Cpu,
  Droplets,
  FileText,
  MapPin,
  MessageCircle,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Wrench,
  Wifi,
  Zap,
  WifiOff,
  Shield,
  CalendarDays,
  Search,
} from 'lucide-react';

export type HomepageService = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export type HomepageFeature = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export type HomepageProcessStep = {
  title: string;
  detail: string;
  icon: LucideIcon;
};

export type HomepagePricingCard = {
  title: string;
  price: string;
  detail: string;
  benefits: string[];
};

export type HomepageTestimonial = {
  quote: string;
  name: string;
  role: string;
};

export type HomepageFaq = {
  question: string;
  answer: string;
};

export const pageLinks = {
  primaryContact: 'https://wa.me/917877856752',
  phone: 'tel:+917877856752',
  email: 'iphonekedda@gmail.com',
  address: '4P7J+HHM, Akeda Chaud, Rajasthan 303701, India',
  maps: 'https://www.google.com/maps/place/Iphone+Kedda/@27.1139367,75.728897,17z/data=!3m1!4b1!4m6!3m5!1s0x396dab49c30e69d9:0x28dda82738df2ef3!8m2!3d27.1139367!4d75.7314773!16s%2Fg%2F11zc3bq1_m?authuser=1&entry=ttu&g_ep=EgoyMDI2MDYyOS4wIKXMDSoASAFQAw%3D%3D',
};

export const heroContent = {
  eyebrow: 'Fast & Reliable Repair',
  headline: 'Fast & Reliable Mobile Repair',
  description:
    'Premium device care for iPhone and Android with same-day service, original-grade parts, and expert technicians.',
  primaryCta: 'Book Repair',
  secondaryCta: 'Call Now',
  primaryHref: pageLinks.primaryContact,
  secondaryHref: pageLinks.phone,
};

export const services: HomepageService[] = [
  {
    title: 'Screen Replacement',
    description: 'Crystal-clear display repairs with factory-style finish.',
    icon: Smartphone,
  },
  {
    title: 'Battery Replacement',
    description: 'Fast battery swap with genuine cells and optimized charging.',
    icon: BatteryCharging,
  },
  {
    title: 'Charging Port Repair',
    description: 'Port cleanup and connector repalcement for reliable charging.',
    icon: Zap,
  },
  {
    title: 'Camera Repair',
    description: 'Restore sharp imaging with precise camera module service.',
    icon: Camera,
  },
  {
    title: 'Speaker Repair',
    description: 'Audio clarity restored for calls, media, and voice notes.',
    icon: Wifi,
  },
  {
    title: 'Water Damage Repair',
    description: 'Safe diagnostics and corrosion treatment for wet devices.',
    icon: Droplets,
  },
  {
    title: 'Software Issues',
    description: 'Smooth performance fixes, system updates, and diagnostics.',
    icon: Cpu,
  },
  {
    title: 'Data Recovery',
    description: 'Recover files, photos, and messages from troubled devices.',
    icon: FileText,
  },
];

export const features: HomepageFeature[] = [
  {
    title: 'Same Day Repair',
    description: 'Most repairs completed the same day for busy customers.',
    icon: ShieldCheck,
  },
  {
    title: 'Certified Technicians',
    description: 'Experienced repair experts trained on premium devices.',
    icon: Wrench,
  },
  {
    title: 'Genuine Parts',
    description: 'High-quality components sourced for lasting performance.',
    icon: Sparkles,
  },
  {
    title: 'Affordable Pricing',
    description: 'Transparent rates without hidden fees or surprise charges.',
    icon: Zap,
  },
  {
    title: 'Warranty Included',
    description: 'Work and parts covered by a clear service warranty.',
    icon: Shield,
  },
  {
    title: 'Free Diagnosis',
    description: 'No-cost diagnostics to identify the issue before repair.',
    icon: WifiOff,
  },
];

export const processSteps: HomepageProcessStep[] = [
  {
    title: 'Book Service',
    detail: 'Choose your device and issue in just a few seconds.',
    icon: CalendarDays,
  },
  {
    title: 'Device Inspection',
    detail: 'We verify the issue and share a transparent estimate.',
    icon: Search,
  },
  {
    title: 'Repair',
    detail: 'Skilled technicians complete the work with premium parts.',
    icon: Wrench,
  },
  {
    title: 'Quality Testing',
    detail: 'Every device is tested before handoff or delivery.',
    icon: ShieldCheck,
  },
  {
    title: 'Delivery',
    detail: 'Quick handoff, pickup, or delivery when the repair is done.',
    icon: MapPin,
  },
];

export const brandNames = [
  'Apple',
  'Samsung',
  'OnePlus',
  'Xiaomi',
  'Vivo',
  'Oppo',
  'Realme',
  'Google Pixel',
];

export const pricingCards: HomepagePricingCard[] = [
  {
    title: 'Screen Repair',
    price: 'From ₹2,499',
    detail: 'OLED and glass replacements with color-accurate calibration.',
    benefits: ['Genuine or premium OEM glass', 'Fast same-day service', 'Warranty included'],
  },
  {
    title: 'Battery Replacement',
    price: 'From ₹1,299',
    detail: 'Battery swaps with health checks and optimized charging.',
    benefits: ['High-cycle cells', 'Power testing', 'Warranty coverage'],
  },
  {
    title: 'Charging Port',
    price: 'From ₹899',
    detail: 'Reliable connector repair for charging and data transfer.',
    benefits: ['Port cleaning', 'Connector replacement', 'Fast turnaround'],
  },
  {
    title: 'Camera Repair',
    price: 'From ₹1,499',
    detail: 'Restore camera quality with sensor and lens repairs.',
    benefits: ['Sharp imaging', 'Glass replacement', 'Diagnostics included'],
  },
];

export const testimonials: HomepageTestimonial[] = [
  {
    quote: 'Amazing service and fast turnaround. My phone looked brand new after the screen replacement.',
    name: 'Ayaan',
    role: 'iPhone 13 Owner',
  },
  {
    quote: 'They fixed my charging issue quickly and explained everything clearly. Highly recommended.',
    name: 'Maya',
    role: 'Galaxy S22 User',
  },
  {
    quote: 'Professional, friendly staff with excellent workmanship. My camera works perfectly again.',
    name: 'Riya',
    role: 'Pixel 7 Owner',
  },
];

export const faqItems: HomepageFaq[] = [
  {
    question: 'How long does a repair typically take?',
    answer: 'Most repairs are completed the same day, often within 1-2 hours depending on the issue and parts availability.',
  },
  {
    question: 'Do you use genuine parts?',
    answer: 'We use genuine or premium OEM-grade parts for all major repairs to ensure the best performance and reliability.',
  },
  {
    question: 'Is there a warranty on repairs?',
    answer: 'Yes, all qualifying repairs include warranty coverage on both work and replacement parts.',
  },
  {
    question: 'Can I book online or walk in?',
    answer: 'You can book online, call us, or visit our store directly. Appointments help us serve you faster.',
  },
];

export const contactDetails = {
  phone: pageLinks.phone,
  whatsapp: pageLinks.primaryContact,
  email: pageLinks.email,
  address: pageLinks.address,
  maps: pageLinks.maps,
  mapEmbedQuery: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3551.3451513804475!2d75.72889700928265!3d27.113936676429894!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396dab49c30e69d9%3A0x28dda82738df2ef3!2sIphone%20Kedda!5e0!3m2!1sen!2sin!4v1783077712633!5m2!1sen!2sin',
};

export const footerLinks = {
  quick: [
    { label: 'Services', href: '#services' },
    { label: 'Brands', href: '#brands' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Contact', href: '#contact' },
  ],
  services: [
    { label: 'Screen Repair', href: '#pricing' },
    { label: 'Battery Replacement', href: '#pricing' },
    { label: 'Camera Repair', href: '#pricing' },
    { label: 'Water Damage', href: '#services' },
  ],
};

export const socialLinks = [
  { label: 'WhatsApp', href: pageLinks.primaryContact },
  { label: 'Instagram', href: 'https://instagram.com/iphonekeddaa' },
];
