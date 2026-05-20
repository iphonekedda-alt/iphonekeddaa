import Link from 'next/link';
import { Instagram, MapPinned, MessageCircle, PhoneCall } from 'lucide-react';

export default function SiteFooter() {
  return (
    <footer className="px-4 pb-28 pt-12 sm:px-6 lg:px-8 lg:pb-12">
      <div className="mx-auto max-w-7xl rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.03))] p-6 shadow-[0_24px_100px_rgba(0,0,0,0.22)] backdrop-blur-2xl sm:p-8 lg:p-10">
        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr_0.8fr_1fr]">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-[1.1rem] border border-white/12 bg-[radial-gradient(circle_at_top,rgba(115,235,255,0.32),rgba(10,12,18,0.88)_60%)]">
                <span className="font-display text-lg font-semibold tracking-[0.24em] text-white">IK</span>
              </div>
              <div>
                <p className="font-display text-lg font-semibold">iPhone Keddaa</p>
                <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Premium Repair Lab</p>
              </div>
            </div>
            <p className="max-w-md text-sm leading-7 text-muted-foreground">
              Certified repair workflows, original-grade parts, and premium refurbished devices designed for people who want fast service without compromise.
            </p>
            <div className="flex gap-3">
              <Link href="https://wa.me/919999999999" className="footer-pill">
                <MessageCircle className="h-4 w-4" />
                WhatsApp
              </Link>
              <Link href="https://instagram.com/iphonekeddaa" className="footer-pill">
                <Instagram className="h-4 w-4" />
                Instagram
              </Link>
            </div>
          </div>

          <div>
            <h3 className="footer-heading">Services</h3>
            <div className="footer-links">
              <Link href="#services">iPhone Repair</Link>
              <Link href="#services">Battery Replacement</Link>
              <Link href="#services">Display Replacement</Link>
              <Link href="#services">Water Damage Repair</Link>
            </div>
          </div>

          <div>
            <h3 className="footer-heading">Quick Links</h3>
            <div className="footer-links">
              <Link href="#devices">Refurbished Phones</Link>
              <Link href="#pricing">Repair Pricing</Link>
              <Link href="#reviews">Reviews</Link>
              <Link href="#contact">Contact</Link>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="footer-heading">Visit Store</h3>
            <div className="space-y-3 text-sm text-muted-foreground">
              <p>11:00 AM - 9:00 PM</p>
              <p>Premium Service Desk, City Center, Kerala</p>
              <div className="flex gap-3">
                <Link href="tel:+919999999999" className="footer-pill">
                  <PhoneCall className="h-4 w-4" />
                  Call
                </Link>
                <Link href="https://maps.google.com" className="footer-pill">
                  <MapPinned className="h-4 w-4" />
                  Maps
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-white/10 pt-6 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} iPhone Keddaa. All rights reserved.</p>
          <p>Luxury repair. Fast turnaround. Trust-first service.</p>
        </div>
      </div>
    </footer>
  );
}
