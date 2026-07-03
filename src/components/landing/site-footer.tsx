import Link from 'next/link';
import { Instagram, MapPin, MessageCircle, PhoneCall, Twitter } from 'lucide-react';
import { footerLinks, socialLinks } from '@/components/landing/homepage-data';

export default function SiteFooter() {
  return (
    <footer className="px-4 pb-16 pt-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl rounded-[2rem] border border-slate-200/70 bg-white/90 p-8 shadow-[0_40px_120px_rgba(15,23,42,0.08)] backdrop-blur-xl dark:border-slate-700/70 dark:bg-slate-950/80 sm:p-10">
        <div className="grid gap-10 lg:grid-cols-[1.3fr_0.85fr_0.85fr_1.1fr]">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-[1.1rem] bg-blue-600 text-white shadow-lg shadow-blue-600/20">
                IK
              </div>
              <div>
                <p className="text-sm font-semibold text-slate-950 dark:text-white">iPhone Keddaa</p>
                <p className="text-[0.65rem] uppercase tracking-[0.32em] text-slate-500 dark:text-slate-400">Premium Repair Lab</p>
              </div>
            </div>
            <p className="max-w-sm text-sm leading-7 text-slate-600 dark:text-slate-300">
              Luxury mobile repair and trusted refurbished devices with transparent pricing, expert technicians, and fast service.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="https://wa.me/919999999999" className="inline-flex items-center gap-2 rounded-full border border-slate-200/70 bg-slate-50 px-4 py-3 text-sm text-slate-700 transition hover:bg-slate-100 dark:border-slate-700/70 dark:bg-slate-900/80 dark:text-slate-200">
                <MessageCircle className="h-4 w-4" />
                WhatsApp
              </Link>
              <Link href="https://instagram.com/iphonekeddaa" className="inline-flex items-center gap-2 rounded-full border border-slate-200/70 bg-slate-50 px-4 py-3 text-sm text-slate-700 transition hover:bg-slate-100 dark:border-slate-700/70 dark:bg-slate-900/80 dark:text-slate-200">
                <Instagram className="h-4 w-4" />
                Instagram
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.32em] text-slate-500 dark:text-slate-400">Quick Links</h3>
            <div className="mt-4 space-y-3 text-sm text-slate-600 dark:text-slate-300">
              {footerLinks.quick.map((link) => (
                <Link key={link.label} href={link.href} className="block hover:text-blue-700 dark:hover:text-white">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.32em] text-slate-500 dark:text-slate-400">Services</h3>
            <div className="mt-4 space-y-3 text-sm text-slate-600 dark:text-slate-300">
              {footerLinks.services.map((link) => (
                <Link key={link.label} href={link.href} className="block hover:text-blue-700 dark:hover:text-white">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.32em] text-slate-500 dark:text-slate-400">Location</h3>
            <div className="mt-4 space-y-3 text-sm text-slate-600 dark:text-slate-300">
              <p>11:00 AM - 9:00 PM</p>
              <p>Premium Service Desk, City Center, Kerala</p>
              <div className="flex flex-wrap gap-3 pt-2">
                <Link href="tel:+919999999999" className="footer-pill inline-flex items-center gap-2 rounded-full border border-slate-200/70 bg-slate-50 px-4 py-3 text-sm dark:border-slate-700/70 dark:bg-slate-900/80">
                  <PhoneCall className="h-4 w-4" />
                  Call
                </Link>
                <Link href="https://maps.google.com" className="footer-pill inline-flex items-center gap-2 rounded-full border border-slate-200/70 bg-slate-50 px-4 py-3 text-sm dark:border-slate-700/70 dark:bg-slate-900/80">
                  <MapPin className="h-4 w-4" />
                  Maps
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-4 border-t border-slate-200/70 pt-6 text-sm text-slate-500 dark:border-slate-700/70 dark:text-slate-400 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} iPhone Keddaa. All rights reserved.</p>
          <div className="flex gap-3">
            {socialLinks.map((social) => (
              <Link key={social.label} href={social.href} className="inline-flex items-center gap-2 rounded-full border border-slate-200/70 bg-slate-50 px-4 py-3 text-sm text-slate-700 dark:border-slate-700/70 dark:bg-slate-900/80 dark:text-slate-200">
                {social.label === 'WhatsApp' ? <MessageCircle className="h-4 w-4" /> : <Instagram className="h-4 w-4" />}
                {social.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
