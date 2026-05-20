'use client';

import Link from 'next/link';
import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  BadgeCheck,
  BatteryCharging,
  Bot,
  BrainCircuit,
  Check,
  ChevronDown,
  CircuitBoard,
  Clock3,
  Cpu,
  Droplets,
  Fingerprint,
  Gem,
  MapPinned,
  MessageCircle,
  Mic,
  Search,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Star,
  Store,
  Truck,
  WalletCards,
  Wrench,
  Zap,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';

const trustBadges = ['Same Day Repair', 'Original Parts', 'Warranty Support', 'Expert Technicians'];

const services = [
  { title: 'iPhone Repair', description: 'Precision diagnostics and premium component swaps for every generation.', icon: Smartphone },
  { title: 'Android Repair', description: 'Flagship to budget devices handled with board-level expertise.', icon: Cpu },
  { title: 'Display Replacement', description: 'OLED, combo, and touch layer replacement with true-color calibration.', icon: Sparkles },
  { title: 'Battery Replacement', description: 'High-health batteries installed with optimized power testing.', icon: BatteryCharging },
  { title: 'Chip-Level Repair', description: 'Microsoldering for no power, reboot loop, and motherboard faults.', icon: CircuitBoard },
  { title: 'Water Damage Repair', description: 'Deep cleaning, corrosion treatment, and data-safe restoration.', icon: Droplets },
  { title: 'Face ID / Touch Repair', description: 'Secure biometric repair handled with careful sensor alignment.', icon: Fingerprint },
  { title: 'Back Glass Change', description: 'Laser-assisted finish restoration for cracked premium panels.', icon: Gem },
  { title: 'Charging Issue Repair', description: 'Dock, flex, IC, and charging-path troubleshooting with fast turnaround.', icon: Zap },
  { title: 'Speaker / Mic Repair', description: 'Crystal-clear audio restoration for calls, reels, and voice notes.', icon: Mic },
];

const products = [
  { name: 'iPhone 15 Pro', condition: 'Like New', battery: '97%', storage: '128GB / 256GB', price: '₹92,900', type: 'iphone' },
  { name: 'iPhone 14', condition: 'Top Pick', battery: '94%', storage: '128GB', price: '₹54,900', type: 'iphone' },
  { name: 'Galaxy S24', condition: 'Certified', battery: '96%', storage: '256GB', price: '₹51,500', type: 'android' },
  { name: 'Pixel 8', condition: 'Like New', battery: '95%', storage: '128GB', price: '₹42,900', type: 'android' },
  { name: 'iPhone 13 Mini', condition: 'Popular', battery: '91%', storage: '128GB', price: '₹38,900', type: 'iphone' },
];

const counters = [
  { label: 'Repairs completed', value: '12K+' },
  { label: 'Average turnaround', value: '90 min' },
  { label: 'Warranty backed jobs', value: '100%' },
  { label: 'Customer satisfaction', value: '4.9/5' },
];

const processSteps = [
  { title: 'Book Repair', detail: 'Choose your issue, model, and preferred slot in under a minute.', icon: WalletCards },
  { title: 'Device Pickup', detail: 'Store drop-off or pickup arranged based on your location and urgency.', icon: Truck },
  { title: 'Diagnosis', detail: 'Transparent inspection with exact issue confirmation before work starts.', icon: BrainCircuit },
  { title: 'Repair', detail: 'Board-level or modular repair completed with premium-grade components.', icon: Wrench },
  { title: 'Quality Check', detail: 'Charging, display, camera, signal, and stress tests before handover.', icon: ShieldCheck },
  { title: 'Delivery', detail: 'Pick up in-store or get safe return delivery with support after service.', icon: Store },
];

const testimonials = [
  { name: 'Ameen', role: 'iPhone 14 Pro repair', quote: 'Display quality looked factory-fresh and the phone was ready the same day. The store experience felt premium from start to finish.' },
  { name: 'Hiba', role: 'Battery replacement', quote: 'They explained battery health, cycle count, and warranty clearly. Super smooth and trustworthy.' },
  { name: 'Niyas', role: 'Refurbished iPhone 13', quote: 'Bought a certified device for my sister. Clean finish, solid battery health, and the box experience felt luxe.' },
  { name: 'Farah', role: 'Water damage rescue', quote: 'Thought I lost everything. They revived the phone and protected my data. Massive relief.' },
];

const faqs = [
  'How long does repair take?',
  'Do you use original parts?',
  'Is there warranty?',
  'Do you repair water damaged phones?',
  'Do you provide pickup service?',
  'Can I sell my old phone?',
];

const faqAnswers: Record<string, string> = {
  'How long does repair take?':
    'Common jobs like display and battery replacement are usually completed the same day, often within 60 to 120 minutes after diagnosis.',
  'Do you use original parts?':
    'We prioritize original or original-grade parts based on device model and availability, and we explain the exact part category before confirming the repair.',
  'Is there warranty?':
    'Yes. Eligible repairs and refurbished devices include warranty support with clear coverage details shared at billing time.',
  'Do you repair water damaged phones?':
    'Yes. We handle liquid damage with internal cleaning, corrosion treatment, and board-level diagnosis aimed at saving both device and data.',
  'Do you provide pickup service?':
    'Yes. Pickup and delivery can be arranged based on serviceability area and job type.',
  'Can I sell my old phone?':
    'Yes. Bring your device for quick evaluation, instant quote, and upgrade options toward a refurbished or newer phone.',
};

function SectionEyebrow({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/6 px-3 py-1 text-[0.7rem] uppercase tracking-[0.3em] text-muted-foreground">
      <span className="h-1.5 w-1.5 rounded-full bg-neon shadow-[0_0_16px_var(--neon)]" />
      {children}
    </span>
  );
}

function PhoneMockup({ highlight = 'left' }: { highlight?: 'left' | 'right' }) {
  return (
    <motion.div
      animate={{ y: [0, -10, 0] }}
      transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      className={`relative h-[240px] w-[148px] rounded-[2rem] border border-white/12 bg-[linear-gradient(180deg,rgba(255,255,255,0.14),rgba(255,255,255,0.02))] p-2 shadow-[0_30px_100px_rgba(0,0,0,0.35)] sm:h-[280px] sm:w-[170px] sm:rounded-[2.25rem] ${
        highlight === 'left' ? 'rotate-[-5deg] sm:rotate-[-8deg]' : 'rotate-[7deg] sm:rotate-[10deg]'
      }`}
    >
      <div className="absolute inset-0 rounded-[2rem] bg-[radial-gradient(circle_at_top,rgba(90,240,255,0.24),transparent_38%),radial-gradient(circle_at_bottom,rgba(95,255,170,0.18),transparent_28%)] sm:rounded-[2.25rem]" />
      <div className="relative h-full rounded-[1.7rem] border border-white/8 bg-[linear-gradient(180deg,rgba(6,8,12,0.92),rgba(22,26,35,0.98))] p-3 sm:rounded-[1.9rem] sm:p-4">
        <div className="mx-auto h-5 w-16 rounded-full bg-black/60 sm:h-6 sm:w-20" />
        <div className="mt-5 rounded-[1.3rem] border border-white/8 bg-white/6 p-3 backdrop-blur-xl sm:mt-6 sm:rounded-[1.5rem] sm:p-4">
          <div className="flex items-center justify-between text-[0.65rem] uppercase tracking-[0.24em] text-white/70">
            <span>Repair status</span>
            <span>Live</span>
          </div>
          <div className="mt-5 space-y-3">
            <div className="h-2 rounded-full bg-white/10">
              <div className="h-2 w-3/4 rounded-full bg-[linear-gradient(90deg,var(--neon),#ffffff)]" />
            </div>
            <div className="rounded-2xl border border-white/8 bg-white/8 p-3">
              <p className="text-xs text-white/60">Device</p>
              <p className="mt-1 font-display text-base text-white">iPhone 14 Pro</p>
              <p className="mt-3 text-xs text-white/60">Status</p>
              <p className="mt-1 text-sm text-white">Final quality checks underway</p>
            </div>
          </div>
        </div>
        <div className="mt-3 grid grid-cols-2 gap-2 sm:mt-4 sm:gap-3">
          <div className="rounded-[1.1rem] border border-white/8 bg-white/6 p-2.5 sm:rounded-[1.25rem] sm:p-3">
            <p className="text-[0.65rem] text-white/60">Battery</p>
            <p className="mt-1 text-lg font-semibold text-white">97%</p>
          </div>
          <div className="rounded-[1.1rem] border border-white/8 bg-white/6 p-2.5 sm:rounded-[1.25rem] sm:p-3">
            <p className="text-[0.65rem] text-white/60">Warranty</p>
            <p className="mt-1 text-lg font-semibold text-white">120 days</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function BeforeAfterSlider() {
  const [position, setPosition] = useState(55);

  return (
    <div className="rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.03))] p-4 shadow-[0_24px_100px_rgba(0,0,0,0.2)] backdrop-blur-2xl">
      <div className="relative overflow-hidden rounded-[1.5rem] border border-white/10">
        <div className="grid h-[300px] sm:h-[460px]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,80,80,0.22),transparent_35%),linear-gradient(135deg,#1c1f27,#08090d)]">
            <div className="absolute left-4 top-4 rounded-full border border-red-400/20 bg-red-400/12 px-3 py-1 text-[0.65rem] uppercase tracking-[0.24em] text-red-100 sm:left-8 sm:top-8 sm:text-xs">
              Before
            </div>
            <div className="absolute inset-4 rounded-[1.4rem] border border-dashed border-red-300/30 sm:inset-8 sm:rounded-[1.75rem]" />
            <div className="absolute left-[18%] top-[22%] h-[50%] w-[54%] rounded-[2rem] border border-white/8 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.02))] shadow-[0_18px_60px_rgba(0,0,0,0.35)] sm:rounded-[2.5rem]">
              <div className="absolute inset-[10px] rounded-[2rem] bg-[linear-gradient(180deg,#0b0f15,#10161d)]" />
              <div className="absolute inset-[22px] rounded-[1.6rem] bg-[linear-gradient(180deg,rgba(255,255,255,0.02),rgba(255,255,255,0.02)),radial-gradient(circle_at_38%_44%,rgba(255,60,60,0.88),transparent_10%),radial-gradient(circle_at_62%_58%,rgba(255,255,255,0.25),transparent_12%)] opacity-90" />
            </div>
          </div>

          <div
            className="absolute inset-0 overflow-hidden"
            style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(97,255,177,0.25),transparent_35%),linear-gradient(135deg,#141922,#050608)]">
              <div className="absolute right-4 top-4 rounded-full border border-emerald-300/20 bg-emerald-300/12 px-3 py-1 text-[0.65rem] uppercase tracking-[0.24em] text-emerald-50 sm:right-8 sm:top-8 sm:text-xs">
                After
              </div>
              <div className="absolute inset-4 rounded-[1.4rem] border border-white/10 sm:inset-8 sm:rounded-[1.75rem]" />
              <div className="absolute left-[18%] top-[22%] h-[50%] w-[54%] rounded-[2rem] border border-white/12 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.03))] shadow-[0_18px_60px_rgba(0,0,0,0.35)] sm:rounded-[2.5rem]">
                <div className="absolute inset-[10px] rounded-[2rem] bg-[linear-gradient(180deg,#0b0f15,#111820)]" />
                <div className="absolute inset-[22px] rounded-[1.6rem] bg-[radial-gradient(circle_at_top,rgba(90,240,255,0.18),transparent_38%),linear-gradient(180deg,#061018,#0f1b26)]" />
              </div>
            </div>
          </div>

          <div className="pointer-events-none absolute inset-y-0 z-10 w-px bg-white/80 shadow-[0_0_30px_rgba(255,255,255,0.9)]" style={{ left: `${position}%` }} />
          <div className="pointer-events-none absolute left-[calc(var(--slider-left)-16px)] top-1/2 z-10 h-8 w-8 -translate-y-1/2 rounded-full border border-white/20 bg-background/80 backdrop-blur-xl sm:left-[calc(var(--slider-left)-18px)] sm:h-10 sm:w-10" style={{ ['--slider-left' as string]: `${position}%` }} />
        </div>
        <input
          aria-label="Before after comparison"
          type="range"
          min={0}
          max={100}
          value={position}
          onChange={(event) => setPosition(Number(event.target.value))}
          className="absolute inset-x-4 bottom-4 z-20 h-10 appearance-none bg-transparent"
        />
      </div>
    </div>
  );
}

export default function HomePage() {
  const [productFilter, setProductFilter] = useState<'all' | 'iphone' | 'android'>('all');
  const [search, setSearch] = useState('');

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const byType = productFilter === 'all' || product.type === productFilter;
      const bySearch = `${product.name} ${product.storage}`.toLowerCase().includes(search.toLowerCase());
      return byType && bySearch;
    });
  }, [productFilter, search]);

  return (
    <div className="relative">
      <div className="absolute inset-x-0 top-0 h-[820px] bg-[radial-gradient(circle_at_top,rgba(96,235,255,0.18),transparent_30%),radial-gradient(circle_at_85%_10%,rgba(112,255,176,0.12),transparent_24%)]" />

      <section className="relative mx-auto flex w-full max-w-7xl flex-col gap-10 px-4 pb-16 pt-10 sm:px-6 sm:pt-14 lg:px-8 lg:pb-24 lg:pt-16">
        <div className="grid items-center gap-10 lg:min-h-[700px] lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] lg:gap-16 xl:min-h-[760px]">
          <div className="relative z-10 space-y-8 lg:max-w-[580px] lg:py-10">
            <SectionEyebrow>Apple-grade service, street-smart speed</SectionEyebrow>
            <div className="space-y-5">
              <motion.h1
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                className="max-w-[11ch] text-balance font-display text-5xl font-semibold leading-[0.95] tracking-[-0.05em] text-foreground sm:text-6xl lg:max-w-none lg:text-[4.7rem] xl:text-[5.25rem]"
              >
                Premium Mobile Repair & Refurbished Phones
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="max-w-xl text-base leading-7 text-muted-foreground sm:text-lg"
              >
                Display replacement, battery change, chip-level repair, original combos & certified pre-owned devices.
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="flex flex-col gap-3 sm:flex-row"
            >
              <Dialog>
                <DialogTrigger asChild>
                  <Button className="magnetic-button h-13 rounded-full px-6 text-sm font-semibold sm:h-12">
                    Book Repair
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-xl rounded-[1.75rem] border-white/12 bg-background/95 p-0 backdrop-blur-2xl">
                  <div className="rounded-[1.75rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.03))] p-6">
                    <DialogHeader className="space-y-3 text-left">
                      <DialogTitle className="font-display text-3xl">Book a premium repair</DialogTitle>
                      <DialogDescription className="text-sm leading-6">
                        Share your device, issue, and preferred time. We’ll confirm the slot on WhatsApp in minutes.
                      </DialogDescription>
                    </DialogHeader>
                    <div className="mt-6 grid gap-4 sm:grid-cols-2">
                      <Input className="form-input" placeholder="Your name" />
                      <Input className="form-input" placeholder="Phone number" />
                      <Input className="form-input" placeholder="Device model" />
                      <Input className="form-input" placeholder="Issue type" />
                      <Input className="form-input sm:col-span-2" placeholder="Preferred date and time" />
                    </div>
                    <div className="mt-5 flex flex-col gap-3 sm:flex-row">
                      <Button className="h-12 flex-1 rounded-full">Confirm Booking</Button>
                      <Link
                        href="https://wa.me/919999999999"
                        className="inline-flex h-12 flex-1 items-center justify-center rounded-full border border-white/12 bg-white/8 text-sm font-medium"
                      >
                        Continue on WhatsApp
                      </Link>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>

              <Link
                href="https://wa.me/919999999999"
                className="magnetic-button inline-flex h-13 items-center justify-center gap-2 rounded-full border border-white/12 bg-white/7 px-6 text-sm font-medium backdrop-blur-xl sm:h-12"
              >
                <MessageCircle className="h-4 w-4 text-neon" />
                Chat on WhatsApp
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="grid gap-3 sm:grid-cols-2"
            >
              {trustBadges.map((badge) => (
                <div key={badge} className="glass-tile flex items-center gap-3 px-4 py-3">
                  <BadgeCheck className="h-4 w-4 text-neon" />
                  <span className="text-sm text-foreground/90">{badge}</span>
                </div>
              ))}
            </motion.div>
          </div>

          <div className="relative flex min-h-[500px] items-center justify-center sm:min-h-[560px] lg:min-h-[700px] lg:justify-end xl:min-h-[760px]">
            <div className="absolute left-1/2 top-[38%] h-56 w-56 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(115,235,255,0.28),transparent_58%)] blur-2xl sm:top-1/2 sm:h-72 sm:w-72 lg:left-[52%] lg:top-[42%] lg:h-[21rem] lg:w-[21rem]" />
            <div className="absolute inset-x-0 top-10 bottom-0 rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.02))] backdrop-blur-2xl lg:left-auto lg:right-0 lg:top-6 lg:h-[640px] lg:w-[620px] xl:w-[680px]">
              <div className="absolute inset-0 rounded-[2rem] bg-[linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(180deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:36px_36px] opacity-40 sm:bg-[size:42px_42px]" />
            </div>
            <div className="relative z-10 flex items-center justify-center gap-3 pt-6 sm:gap-8 sm:pt-0 lg:w-[620px] lg:justify-center lg:gap-6 xl:w-[680px] xl:gap-10">
              <PhoneMockup highlight="left" />
              <div className="-mt-16 hidden sm:block lg:-mt-24">
                <PhoneMockup highlight="right" />
              </div>
            </div>
            <div className="absolute inset-x-4 bottom-4 z-20 rounded-[1.35rem] border border-white/10 bg-background/84 p-4 shadow-[0_20px_80px_rgba(0,0,0,0.22)] backdrop-blur-2xl sm:inset-x-auto sm:bottom-6 sm:right-4 sm:w-[220px] sm:rounded-[1.5rem] lg:bottom-24 lg:right-4 lg:w-[280px] xl:right-8">
              <div className="flex items-center justify-between">
                <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Repair queue</p>
                <Clock3 className="h-4 w-4 text-neon" />
              </div>
              <div className="mt-4 grid gap-2 sm:space-y-3">
                {['Display replacement', 'Battery upgrade', 'Chip-level diagnosis'].map((item, index) => (
                  <div key={item} className="flex items-center justify-between rounded-2xl border border-white/8 bg-white/6 px-3 py-2 text-sm">
                    <span>{item}</span>
                    <span className="text-xs text-muted-foreground">0{index + 1}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="absolute bottom-2 left-1/2 hidden -translate-x-1/2 gap-4 lg:flex xl:bottom-8">
              {[
                { label: 'Battery', value: '97%' },
                { label: 'Warranty', value: '120 days' },
              ].map((item, index) => (
                <div
                  key={item.label}
                  className={`glass-tile min-w-[138px] rotate-[-8deg] px-4 py-4 shadow-[0_18px_50px_rgba(0,0,0,0.2)] ${
                    index === 1 ? 'translate-y-6 rotate-[8deg]' : ''
                  }`}
                >
                  <p className="text-xs uppercase tracking-[0.24em] text-muted-foreground">{item.label}</p>
                  <p className="mt-2 font-display text-3xl tracking-[-0.04em] text-foreground">{item.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid gap-4 rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.02))] p-4 shadow-[0_24px_100px_rgba(0,0,0,0.2)] backdrop-blur-2xl sm:grid-cols-3 sm:p-5">
          <div className="glass-tile flex items-center gap-3 px-4 py-4">
            <Search className="h-4 w-4 text-neon" />
            <input
              className="w-full bg-transparent text-sm outline-none placeholder:text-muted-foreground"
              placeholder="Search by phone model or issue"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
            />
          </div>
          <div className="glass-tile flex items-center gap-3 px-4 py-4">
            <ShieldCheck className="h-4 w-4 text-neon" />
            <span className="text-sm text-muted-foreground">Certified repairs with warranty-backed support</span>
          </div>
          <div className="glass-tile flex items-center justify-between gap-3 px-4 py-4">
            <div>
              <p className="text-xs uppercase tracking-[0.24em] text-muted-foreground">Instant help</p>
              <p className="mt-1 text-sm">Live repair status and pre-booking support</p>
            </div>
            <Bot className="h-5 w-5 text-neon" />
          </div>
        </div>
      </section>

      <section id="services" className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="mb-8 flex flex-col gap-4 sm:mb-10 sm:flex-row sm:items-end sm:justify-between">
          <div className="space-y-4">
            <SectionEyebrow>Services</SectionEyebrow>
            <h2 className="font-display text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">Expert repairs, designed like a flagship product.</h2>
            <p className="max-w-2xl text-base leading-7 text-muted-foreground">
              Every card below is a real high-intent service lane, optimized for quick scan, quick trust, and quick action on mobile.
            </p>
          </div>
          <Link href="https://wa.me/919999999999" className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
            Need a custom quote <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.article
                key={service.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, delay: index * 0.03 }}
                className="service-card group"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="service-icon">
                    <Icon className="h-5 w-5" />
                  </div>
                  <span className="text-xs uppercase tracking-[0.24em] text-muted-foreground">0{index + 1}</span>
                </div>
                <div className="mt-6">
                  <h3 className="font-display text-2xl tracking-[-0.03em]">{service.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-muted-foreground">{service.description}</p>
                </div>
                <div className="mt-6">
                  <Link href="https://wa.me/919999999999" className="inline-flex items-center gap-2 text-sm font-medium text-foreground">
                    Book this service
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </motion.article>
            );
          })}
        </div>
      </section>

      <section id="pricing" className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid gap-5 lg:grid-cols-3">
          {[
            { title: 'Screen & Combo', price: 'From ₹2,499', detail: 'Original-grade display replacements with post-fit calibration.' },
            { title: 'Battery & Charging', price: 'From ₹1,299', detail: 'Fast battery replacement and charging-path diagnostics.' },
            { title: 'Advanced Board Repair', price: 'Quote after diagnosis', detail: 'Microsoldering and chip-level recovery for complex faults.' },
          ].map((item) => (
            <div key={item.title} className="price-card">
              <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">{item.title}</p>
              <h3 className="mt-4 font-display text-4xl tracking-[-0.04em]">{item.price}</h3>
              <p className="mt-3 text-sm leading-7 text-muted-foreground">{item.detail}</p>
              <div className="mt-6 flex items-center gap-2 text-sm text-foreground">
                <Check className="h-4 w-4 text-neon" />
                Transparent estimate before repair
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="devices" className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr]">
          <div className="space-y-4">
            <SectionEyebrow>Refurbished Phones</SectionEyebrow>
            <h2 className="font-display text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">Certified devices with flagship presentation.</h2>
            <p className="text-base leading-7 text-muted-foreground">
              Explore showroom-style cards with battery health, storage, EMI-ready pricing, and handpicked inventory for trust-first conversions.
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              {(['all', 'iphone', 'android'] as const).map((filter) => (
                <button
                  key={filter}
                  type="button"
                  onClick={() => setProductFilter(filter)}
                  className={`rounded-full px-4 py-2 text-sm capitalize transition-all ${
                    productFilter === filter
                      ? 'bg-foreground text-background'
                      : 'border border-white/12 bg-white/8 text-muted-foreground'
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <div className="glass-tile flex items-center gap-3 px-4 py-3">
              <Search className="h-4 w-4 text-neon" />
              <input
                className="min-w-0 flex-1 bg-transparent text-sm outline-none placeholder:text-muted-foreground"
                placeholder="Search refurbished models"
                value={search}
                onChange={(event) => setSearch(event.target.value)}
              />
            </div>
            <div className="no-scrollbar flex snap-x gap-4 overflow-x-auto pb-2">
              {filteredProducts.map((product) => (
                <motion.article
                  key={product.name}
                  whileHover={{ rotateX: 4, rotateY: -6, y: -6 }}
                  transition={{ duration: 0.25 }}
                  className="product-card min-w-[260px] snap-start sm:min-w-[320px]"
                >
                  <div className="rounded-[1.7rem] border border-white/10 bg-[radial-gradient(circle_at_top,rgba(110,237,255,0.18),transparent_30%),linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.02))] p-5">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <span className="inline-flex rounded-full border border-emerald-300/20 bg-emerald-300/12 px-3 py-1 text-[0.65rem] uppercase tracking-[0.24em] text-emerald-50">
                          {product.condition}
                        </span>
                        <h3 className="mt-4 font-display text-3xl tracking-[-0.04em]">{product.name}</h3>
                      </div>
                      <div className="rounded-2xl border border-white/10 bg-black/30 px-3 py-2 text-right text-xs uppercase tracking-[0.2em] text-white/70">
                        EMI
                        <div className="mt-1 text-sm font-semibold text-white">Available</div>
                      </div>
                    </div>
                    <div className="my-6 h-[220px] rounded-[1.7rem] border border-white/10 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.12),transparent_30%),linear-gradient(180deg,#090c12,#151c24)] p-5">
                      <div className="mx-auto h-full w-[46%] rounded-[2.2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.1),rgba(255,255,255,0.02))] p-2 shadow-[0_24px_50px_rgba(0,0,0,0.26)]">
                        <div className="h-full rounded-[1.8rem] bg-[radial-gradient(circle_at_top,rgba(100,243,255,0.18),transparent_30%),linear-gradient(180deg,#061018,#0d141d)]" />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 gap-3 text-sm sm:grid-cols-3">
                      <div className="rounded-2xl border border-white/10 bg-white/6 p-3">
                        <p className="text-xs text-muted-foreground">Battery</p>
                        <p className="mt-1 font-semibold">{product.battery}</p>
                      </div>
                      <div className="rounded-2xl border border-white/10 bg-white/6 p-3">
                        <p className="text-xs text-muted-foreground">Storage</p>
                        <p className="mt-1 font-semibold">{product.storage}</p>
                      </div>
                      <div className="rounded-2xl border border-white/10 bg-white/6 p-3">
                        <p className="text-xs text-muted-foreground">Warranty</p>
                        <p className="mt-1 font-semibold">6 mo</p>
                      </div>
                    </div>
                    <div className="mt-5 flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between">
                      <p className="font-display text-3xl tracking-[-0.04em]">{product.price}</p>
                      <Link href="https://wa.me/919999999999" className="inline-flex items-center gap-2 rounded-full bg-foreground px-4 py-2 text-sm font-semibold text-background">
                        Buy now
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="space-y-4">
            <SectionEyebrow>Why Choose Us</SectionEyebrow>
            <h2 className="font-display text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">Premium enough to impress, transparent enough to trust.</h2>
            <p className="text-base leading-7 text-muted-foreground">
              Built around genuine parts, data safety, clear communication, and repeatable workmanship. No mystery counters. No rushed handovers.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              'Genuine Parts',
              'Skilled Technicians',
              'Fast Service',
              'Affordable Pricing',
              'Data Safety',
              'Warranty',
            ].map((item) => (
              <div key={item} className="glass-tile flex items-center gap-3 px-4 py-4">
                <ShieldCheck className="h-4 w-4 text-neon" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {counters.map((counter, index) => (
            <motion.div
              key={counter.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="counter-card"
            >
              <p className="font-display text-4xl tracking-[-0.05em]">{counter.value}</p>
              <p className="mt-2 text-sm text-muted-foreground">{counter.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="mb-8 space-y-4">
          <SectionEyebrow>Repair Process</SectionEyebrow>
          <h2 className="font-display text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">A six-step flow that feels premium from booking to delivery.</h2>
        </div>
        <div className="grid gap-4 lg:grid-cols-6">
          {processSteps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={step.title} className="relative">
                <div className="timeline-card h-full">
                  <div className="timeline-dot">
                    <Icon className="h-4 w-4" />
                  </div>
                  <p className="mt-6 text-xs uppercase tracking-[0.24em] text-muted-foreground">Step {index + 1}</p>
                  <h3 className="mt-3 font-display text-2xl tracking-[-0.03em]">{step.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-muted-foreground">{step.detail}</p>
                </div>
                {index < processSteps.length - 1 && (
                  <div className="timeline-line hidden lg:block" />
                )}
              </div>
            );
          })}
        </div>
      </section>

      <section id="reviews" className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="mb-8 space-y-4">
          <SectionEyebrow>Customer Reviews</SectionEyebrow>
          <h2 className="font-display text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">Trust built through repair quality and clean communication.</h2>
        </div>
        <div className="overflow-hidden">
          <motion.div
            animate={{ x: ['0%', '-50%'] }}
            transition={{ duration: 22, repeat: Infinity, ease: 'linear' }}
            className="flex w-[260%] gap-4 sm:w-[200%]"
          >
            {[...testimonials, ...testimonials].map((item, index) => (
              <article key={`${item.name}-${index}`} className="testimonial-card w-[calc(50%-0.5rem)] max-w-sm flex-none sm:w-full sm:flex-1">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/12 bg-white/8 font-display text-lg">
                    {item.name.charAt(0)}
                  </div>
                  <div>
                    <h3 className="font-medium">{item.name}</h3>
                    <p className="text-sm text-muted-foreground">{item.role}</p>
                  </div>
                </div>
                <div className="mt-5 flex gap-1">
                  {Array.from({ length: 5 }).map((_, star) => (
                    <Star key={star} className="h-4 w-4 fill-[var(--neon)] text-neon" />
                  ))}
                </div>
                <p className="mt-5 text-sm leading-7 text-muted-foreground">{item.quote}</p>
                <div className="mt-6 rounded-[1.25rem] border border-white/10 bg-white/6 p-3 text-sm text-foreground">
                  Video review preview available
                </div>
              </article>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="mb-8 space-y-4">
          <SectionEyebrow>Before / After</SectionEyebrow>
          <h2 className="font-display text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">Interactive repair comparisons that make the result feel obvious.</h2>
        </div>
        <BeforeAfterSlider />
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid gap-8 lg:grid-cols-[0.82fr_1.18fr]">
          <div className="space-y-4">
            <SectionEyebrow>FAQ</SectionEyebrow>
            <h2 className="font-display text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">Clear answers before the customer even asks on chat.</h2>
            <p className="text-base leading-7 text-muted-foreground">
              Fast trust comes from removing uncertainty. These are the questions your buyers and repair customers care about first.
            </p>
          </div>
          <div className="space-y-3">
            {faqs.map((faq) => (
              <details key={faq} className="faq-item group">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4">
                  <span className="font-medium">{faq}</span>
                  <ChevronDown className="h-4 w-4 transition-transform group-open:rotate-180" />
                </summary>
                <p className="mt-4 text-sm leading-7 text-muted-foreground">{faqAnswers[faq]}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="space-y-4 rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.03))] p-6 shadow-[0_24px_100px_rgba(0,0,0,0.2)] backdrop-blur-2xl">
            <SectionEyebrow>Contact</SectionEyebrow>
            <h2 className="font-display text-4xl font-semibold tracking-[-0.04em]">Visit, message, or book in one tap.</h2>
            <p className="text-base leading-7 text-muted-foreground">
              Built for high-conversion mobile traffic with WhatsApp-first actions, map access, and a contact form for serious leads.
            </p>
            <div className="grid gap-3 pt-2">
              <Link href="https://wa.me/919999999999" className="contact-action">
                <MessageCircle className="h-4 w-4 text-neon" />
                WhatsApp now
              </Link>
              <Link href="tel:+919999999999" className="contact-action">
                <Smartphone className="h-4 w-4 text-neon" />
                Call the lab
              </Link>
              <Link href="https://instagram.com/iphonekeddaa" className="contact-action">
                <Sparkles className="h-4 w-4 text-neon" />
                View Instagram
              </Link>
              <Link href="https://maps.google.com" className="contact-action">
                <MapPinned className="h-4 w-4 text-neon" />
                Open shop location
              </Link>
            </div>
            <div className="grid gap-3 pt-2 sm:grid-cols-2">
              <div className="glass-tile px-4 py-4">
                <p className="text-xs uppercase tracking-[0.24em] text-muted-foreground">Working hours</p>
                <p className="mt-2 text-sm">Mon - Sun</p>
                <p className="text-sm text-muted-foreground">11:00 AM - 9:00 PM</p>
              </div>
              <div className="glass-tile px-4 py-4">
                <p className="text-xs uppercase tracking-[0.24em] text-muted-foreground">Store address</p>
                <p className="mt-2 text-sm">City Center, Kerala</p>
                <p className="text-sm text-muted-foreground">Near premium gadget lane</p>
              </div>
            </div>
          </div>

          <div className="grid gap-6">
            <div className="rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.03))] p-6 shadow-[0_24px_100px_rgba(0,0,0,0.2)] backdrop-blur-2xl">
              <div className="grid gap-4 sm:grid-cols-2">
                <Input className="form-input" placeholder="Your name" />
                <Input className="form-input" placeholder="Phone / WhatsApp" />
                <Input className="form-input sm:col-span-2" placeholder="Device model or device to sell" />
                <Input className="form-input sm:col-span-2" placeholder="What do you need help with?" />
              </div>
              <Button className="mt-5 h-12 rounded-full px-6">Send enquiry</Button>
            </div>
            <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-background/80 shadow-[0_24px_100px_rgba(0,0,0,0.2)] backdrop-blur-2xl">
              <iframe
                title="Shop location"
                src="https://www.google.com/maps?q=Kerala&z=14&output=embed"
                className="h-[280px] w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>

      <div className="fixed bottom-4 left-1/2 z-50 flex w-[calc(100%-1.5rem)] max-w-md -translate-x-1/2 items-center justify-between gap-1 rounded-full border border-white/12 bg-background/82 px-2 py-2.5 shadow-[0_20px_60px_rgba(0,0,0,0.34)] backdrop-blur-2xl lg:hidden">
        <Link href="#services" className="dock-link">Services</Link>
        <Link href="https://wa.me/919999999999" className="dock-link dock-link-primary">WhatsApp</Link>
        <Link href="#devices" className="dock-link">Buy Phones</Link>
      </div>

      <Link
        href="https://wa.me/919999999999"
        className="fixed bottom-24 right-4 z-40 hidden h-14 w-14 items-center justify-center rounded-full bg-[linear-gradient(135deg,var(--neon),#0f1217)] text-background shadow-[0_20px_50px_rgba(96,235,255,0.35)] sm:flex"
      >
        <MessageCircle className="h-5 w-5" />
      </Link>
    </div>
  );
}
