'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Mail, MapPin, Phone, ShieldCheck, Sparkles, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  contactDetails,
  faqItems,
  features,
  footerLinks,
  heroContent,
  pageLinks,
  pricingCards,
  processSteps,
  services,
  socialLinks,
  testimonials,
} from '@/components/landing/homepage-data';

function SectionHeader({ eyebrow, title, description }: { eyebrow: string; title: string; description: string }) {
  return (
    <div className="space-y-4">
      <p className="text-sm uppercase tracking-[0.32em] text-slate-500 dark:text-slate-400">{eyebrow}</p>
      <h2 className="max-w-3xl text-3xl font-semibold tracking-[-0.03em] text-slate-950 dark:text-white sm:text-4xl">
        {title}
      </h2>
      <p className="max-w-2xl text-base leading-7 text-slate-600 dark:text-slate-300">{description}</p>
    </div>
  );
}

function InfoCard({ title, value }: { title: string; value: string }) {
  return (
    <div className="rounded-[1.75rem] border border-slate-200/70 bg-white/90 p-4 shadow-lg shadow-slate-500/5 backdrop-blur-xl dark:border-slate-700/70 dark:bg-slate-950/60">
      <p className="text-sm uppercase tracking-[0.32em] text-slate-500 dark:text-slate-400">{title}</p>
      <p className="mt-3 text-2xl font-semibold tracking-[-0.03em] text-slate-950 dark:text-white">{value}</p>
    </div>
  );
}

export default function HomePage() {
  const [form, setForm] = useState({ name: '', phone: '', device: '', message: '' });

  const [faqFilter, setFaqFilter] = useState('');

  const filteredFaqs = useMemo(
    () => faqItems.filter((item) => item.question.toLowerCase().includes(faqFilter.toLowerCase())),
    [faqFilter]
  );

  const handleChange = (field: keyof typeof form, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <div className="overflow-hidden">
      <section className="relative overflow-hidden bg-slate-50 pb-16 pt-16 dark:bg-[#050816] lg:pb-24">
        <div className="absolute inset-x-0 top-0 h-96 bg-gradient-to-b from-blue-600/20 via-transparent to-transparent" />
        <div className="mx-auto flex max-w-7xl flex-col gap-12 px-4 sm:px-6 lg:px-8 lg:flex-row lg:items-center lg:justify-between">
          <div className="z-10 max-w-2xl space-y-8">
            <p className="inline-flex rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700 dark:bg-blue-900/40 dark:text-blue-200">
              Fast & Reliable Service
            </p>
            <h1 className="text-4xl font-semibold tracking-[-0.04em] text-slate-950 dark:text-white sm:text-5xl lg:text-6xl">
              Fast & Reliable Mobile Repair
            </h1>
            <p className="max-w-xl text-lg leading-8 text-slate-600 dark:text-slate-300">
              Premium mobile repair for iPhone and Android with same-day service, genuine parts, and expert care you can trust.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Button
                asChild
                className="rounded-full bg-blue-600 px-6 py-3 text-white shadow-lg shadow-blue-600/20 hover:bg-blue-700"
              >
                <Link href={heroContent.primaryHref}>
                  {heroContent.primaryCta} <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="rounded-full px-6 py-3 text-blue-700 hover:bg-blue-50 dark:border-slate-600 dark:text-blue-200 dark:hover:bg-slate-800"
              >
                <Link href={heroContent.secondaryHref}>
                  <Phone className="h-4 w-4" /> {heroContent.secondaryCta}
                </Link>
              </Button>
            </div>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
              <InfoCard title="Trusted Repair" value="4.9/5" />
              <InfoCard title="Warranty" value="6 months" />
              <InfoCard title="Satisfaction" value="100%" />
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="relative mx-auto w-full max-w-xl"
          >
            <div className="relative overflow-hidden rounded-[2.5rem] border border-white/90 bg-white/90 p-4 shadow-[0_40px_120px_rgba(15,23,42,0.12)] backdrop-blur-xl dark:border-slate-700/80 dark:bg-slate-950/80 sm:p-6">
              <div className="absolute -right-14 top-10 h-24 w-24 rounded-full bg-blue-500/10 blur-3xl" />
              <div className="absolute -bottom-10 left-8 h-32 w-32 rounded-full bg-blue-600/10 blur-3xl" />
              <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950 p-2 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.06)]">
                <Image
                  src="/img.jpeg"
                  alt="Premium iPhone repair"
                  width={720}
                  height={860}                  loading="eager"                  className="h-full w-full rounded-[1.5rem] object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="services" className="mx-auto max-w-7xl px-4 pb-16 pt-16 sm:px-6 lg:px-8 lg:pb-24">
        <SectionHeader
          eyebrow="Services"
          title="Repair services designed for every issue."
          description="From screen replacements to data recovery, our premium repair lab is built for speed, quality, and trust."
        />

        <div className="mt-12 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {services.map((service) => (
            <motion.article
              key={service.title}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.25 }}
              className="group overflow-hidden rounded-[2rem] border border-slate-200/70 bg-white/90 p-6 shadow-lg shadow-slate-500/5 backdrop-blur-xl dark:border-slate-700/70 dark:bg-slate-950/60"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-3xl bg-blue-600/10 text-blue-600 dark:bg-blue-500/10 dark:text-blue-300">
                <service.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-6 text-xl font-semibold text-slate-950 dark:text-white">{service.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">{service.description}</p>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8 lg:pb-24">
        <div className="grid gap-12 xl:grid-cols-[1.05fr_0.95fr] xl:items-center">
          <div className="rounded-[2rem] border border-slate-200/70 bg-white/90 p-8 shadow-[0_28px_80px_rgba(15,23,42,0.08)] backdrop-blur-xl dark:border-slate-700/70 dark:bg-slate-950/60">
            <SectionHeader
              eyebrow="Why Choose Us"
              title="Premium care, delivered with confidence."
              description="We pair modern repair workflows with transparent pricing and friendly support so every customer feels secure and valued."
            />
            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {features.map((feature) => (
                <div key={feature.title} className="rounded-[1.75rem] border border-slate-200/70 bg-slate-50 p-5 dark:border-slate-700/70 dark:bg-slate-900/80">
                  <div className="flex h-12 w-12 items-center justify-center rounded-3xl bg-blue-600/10 text-blue-600 dark:bg-blue-500/10 dark:text-blue-300">
                    <feature.icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-5 text-lg font-semibold text-slate-950 dark:text-white">{feature.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <InfoCard title="Repairs Completed" value="12K+" />
            <InfoCard title="Verified Technicians" value="100%" />
            <InfoCard title="Customer Rating" value="4.9/5" />
            <InfoCard title="Response Time" value="< 5 min" />
          </div>
        </div>
      </section>

      <section id="process" className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8 lg:pb-24">
        <SectionHeader
          eyebrow="Repair Process"
          title="A clear process from first call to finished repair."
          description="We keep every step transparent so you know exactly what to expect, from booking to delivery."
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-5">
          {processSteps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="rounded-[2rem] border border-slate-200/70 bg-white/90 p-6 text-center shadow-lg shadow-slate-500/5 backdrop-blur-xl dark:border-slate-700/70 dark:bg-slate-950/60"
            >
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-3xl bg-blue-600/10 text-blue-600 dark:bg-blue-500/10 dark:text-blue-300">
                <step.icon className="h-6 w-6" />
              </div>
              <p className="mt-5 text-sm uppercase tracking-[0.32em] text-slate-500 dark:text-slate-400">Step {index + 1}</p>
              <h3 className="mt-3 text-xl font-semibold text-slate-950 dark:text-white">{step.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">{step.detail}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section id="brands" className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8 lg:pb-24">
        <SectionHeader
          eyebrow="Brands We Repair"
          title="Trusted repairs for all leading phone brands."
          description="We support Apple, Samsung, Google, OnePlus, Xiaomi, and more with care designed for premium devices."
        />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {['Apple', 'Samsung', 'OnePlus', 'Xiaomi', 'Vivo', 'Oppo', 'Realme', 'Google Pixel'].map((brand) => (
            <div key={brand} className="rounded-[2rem] border border-slate-200/70 bg-white/90 p-6 text-center shadow-lg shadow-slate-500/5 backdrop-blur-xl dark:border-slate-700/70 dark:bg-slate-950/60">
              <p className="text-sm uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400">Brand</p>
              <p className="mt-4 text-xl font-semibold text-slate-950 dark:text-white">{brand}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="pricing" className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8 lg:pb-24">
        <SectionHeader
          eyebrow="Pricing"
          title="Simple pricing that matches the service quality."
          description="Transparent repair pricing so you can choose the service that fits your device and urgency."
        />
        <div className="mt-12 grid gap-6 lg:grid-cols-4">
          {pricingCards.map((card) => (
            <motion.article
              key={card.title}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.25 }}
              className="rounded-[2rem] border border-slate-200/70 bg-white/90 p-6 shadow-lg shadow-slate-500/5 backdrop-blur-xl dark:border-slate-700/70 dark:bg-slate-950/60"
            >
              <p className="text-sm uppercase tracking-[0.32em] text-slate-500 dark:text-slate-400">{card.title}</p>
              <p className="mt-4 text-4xl font-semibold tracking-[-0.04em] text-slate-950 dark:text-white">{card.price}</p>
              <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-300">{card.detail}</p>
              <ul className="mt-6 space-y-3 text-sm text-slate-600 dark:text-slate-300">
                {card.benefits.map((benefit) => (
                  <li key={benefit} className="flex items-center gap-3">
                    <ShieldCheck className="h-4 w-4 text-blue-600" />
                    {benefit}
                  </li>
                ))}
              </ul>
              <Button
                asChild
                className="mt-8 w-full rounded-full bg-blue-600 px-5 py-3 text-white shadow-lg shadow-blue-600/20 hover:bg-blue-700"
              >
                <Link href={pageLinks.primaryContact}>
                  Book Now
                </Link>
              </Button>
            </motion.article>
          ))}
        </div>
      </section>

      <section id="reviews" className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8 lg:pb-24">
        <SectionHeader
          eyebrow="Customer Reviews"
          title="Trusted by customers for fast, premium repairs."
          description="Real feedback from people who chose us for their valuable devices."
        />
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.article
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="rounded-[2rem] border border-slate-200/70 bg-white/90 p-6 shadow-lg shadow-slate-500/5 backdrop-blur-xl dark:border-slate-700/70 dark:bg-slate-950/60"
            >
              <p className="text-lg leading-8 text-slate-700 dark:text-slate-200">“{testimonial.quote}”</p>
              <div className="mt-6 border-t border-slate-200/70 pt-5 text-sm text-slate-500 dark:border-slate-700/70 dark:text-slate-400">
                <p className="font-semibold text-slate-950 dark:text-white">{testimonial.name}</p>
                <p>{testimonial.role}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      <section id="faq" className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8 lg:pb-24">
        <SectionHeader
          eyebrow="FAQ"
          title="Frequently asked questions about our repair services."
          description="Quick answers for your most common repair and warranty questions."
        />
        <div className="mt-10 space-y-4">
          <div className="flex flex-col gap-3 rounded-[2rem] border border-slate-200/70 bg-white/90 p-4 shadow-lg shadow-slate-500/5 backdrop-blur-xl dark:border-slate-700/70 dark:bg-slate-950/60 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm text-slate-600 dark:text-slate-300">Search FAQs</p>
            <Input
              className="max-w-sm rounded-full border-slate-200/70 bg-slate-100/80 px-5 py-3 dark:border-slate-700/70 dark:bg-slate-900/80"
              placeholder="Search a question"
              value={faqFilter}
              onChange={(event) => setFaqFilter(event.target.value)}
            />
          </div>
          {filteredFaqs.map((faq) => (
            <details key={faq.question} className="group rounded-[2rem] border border-slate-200/70 bg-white/90 p-5 shadow-lg shadow-slate-500/5 backdrop-blur-xl transition-all dark:border-slate-700/70 dark:bg-slate-950/60">
              <summary className="flex cursor-pointer items-center justify-between gap-4 text-lg font-semibold text-slate-950 dark:text-white">
                {faq.question}
                <ArrowRight className="h-5 w-5 rotate-90 text-blue-600 transition-transform duration-200 group-open:-rotate-90" />
              </summary>
              <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-300">{faq.answer}</p>
            </details>
          ))}
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-7xl px-4 pb-24 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_0.85fr]">
          <div className="rounded-[2rem] border border-slate-200/70 bg-white/95 p-8 shadow-[0_40px_120px_rgba(15,23,42,0.08)] backdrop-blur-xl dark:border-slate-700/70 dark:bg-slate-950/80">
            <SectionHeader
              eyebrow="Contact"
              title="Get your device repaired with premium care."
              description="Book service, chat on WhatsApp, or visit us in store. We make it easy to start your repair."
            />
            <div className="mt-8 grid gap-4 text-sm text-slate-700 dark:text-slate-300">
              <div className="flex items-start gap-3 rounded-[1.75rem] border border-slate-200/70 bg-slate-50 p-4 dark:border-slate-700/70 dark:bg-slate-900/80">
                <Phone className="h-5 w-5 text-blue-600" />
                <div>
                  <p className="font-semibold text-slate-950 dark:text-white">Phone</p>
                  <Link href={contactDetails.phone} className="text-blue-600 hover:underline">
                    {contactDetails.phone}
                  </Link>
                </div>
              </div>
              <div className="flex items-start gap-3 rounded-[1.75rem] border border-slate-200/70 bg-slate-50 p-4 dark:border-slate-700/70 dark:bg-slate-900/80">
                <MessageCircle className="h-5 w-5 text-green-500" />
                <div>
                  <p className="font-semibold text-slate-950 dark:text-white">WhatsApp</p>
                  <Link href={contactDetails.whatsapp} className="text-blue-600 hover:underline">
                    Chat now
                  </Link>
                </div>
              </div>
              <div className="flex items-start gap-3 rounded-[1.75rem] border border-slate-200/70 bg-slate-50 p-4 dark:border-slate-700/70 dark:bg-slate-900/80">
                <Mail className="h-5 w-5 text-slate-500" />
                <div>
                  <p className="font-semibold text-slate-950 dark:text-white">Email</p>
                  <Link href={contactDetails.email} className="text-blue-600 hover:underline">
                    {contactDetails.email}
                  </Link>
                </div>
              </div>
              <div className="flex items-start gap-3 rounded-[1.75rem] border border-slate-200/70 bg-slate-50 p-4 dark:border-slate-700/70 dark:bg-slate-900/80">
                <MapPin className="h-5 w-5 text-blue-600" />
                <div>
                  <p className="font-semibold text-slate-950 dark:text-white">Address</p>
                  <p>{contactDetails.address}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="rounded-[2rem] border border-slate-200/70 bg-white/95 p-8 shadow-[0_40px_120px_rgba(15,23,42,0.08)] backdrop-blur-xl dark:border-slate-700/70 dark:bg-slate-950/80">
              <h3 className="text-xl font-semibold text-slate-950 dark:text-white">Book Repair</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">Fill in your details and we’ll reach out quickly to confirm your booking.</p>
              <form onSubmit={handleSubmit} className="mt-8 space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <Input
                    value={form.name}
                    onChange={(event) => handleChange('name', event.target.value)}
                    placeholder="Name"
                    aria-label="Name"
                  />
                  <Input
                    value={form.phone}
                    onChange={(event) => handleChange('phone', event.target.value)}
                    placeholder="Phone"
                    aria-label="Phone"
                  />
                </div>
                <Input
                  value={form.device}
                  onChange={(event) => handleChange('device', event.target.value)}
                  placeholder="Device model"
                  aria-label="Device model"
                />
                <Input
                  value={form.message}
                  onChange={(event) => handleChange('message', event.target.value)}
                  placeholder="Message"
                  aria-label="Message"
                />
                <Button type="submit" className="w-full rounded-full bg-blue-600 px-6 py-3 text-white hover:bg-blue-700">
                  Submit Request
                </Button>
              </form>
            </div>
            <div className="overflow-hidden rounded-[2rem] border border-slate-200/70 bg-slate-50 shadow-lg shadow-slate-500/5 dark:border-slate-700/70 dark:bg-slate-950/80">
              <iframe
                title="Store location"
                src={contactDetails.mapEmbedQuery}
                className="h-72 w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
