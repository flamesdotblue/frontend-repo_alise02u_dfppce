import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  QrCode,
  List,
  MessageCircle,
  Shield,
  Clock,
  Headphones,
  Cloud,
  RefreshCcw,
  Plug,
  Star,
  ChevronDown,
} from 'lucide-react';

const Section = ({ id, title, subtitle, children }) => (
  <section id={id} className="py-16 sm:py-24">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl">
        {title && <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">{title}</h2>}
        {subtitle && <p className="mt-3 text-gray-600">{subtitle}</p>}
      </div>
      <div className="mt-10">{children}</div>
    </div>
  </section>
);

export default function LandingSections() {
  return (
    <div>
      {/* Problems Section */}
      <Section
        id="problems"
        title="Running a restaurant is hard. We make it easier."
      >
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              title: 'Manual Orders',
              desc: 'Tired of managing orders manually?',
            },
            {
              title: 'No Online Presence',
              desc: 'Missing out on online customers?',
            },
            {
              title: 'Operational Chaos',
              desc: 'Struggling with daily operations?',
            },
          ].map((c) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md transition"
            >
              <h3 className="text-lg font-semibold text-gray-900">{c.title}</h3>
              <p className="mt-2 text-gray-600">{c.desc}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Products */}
      <Section
        id="products"
        title="Everything Your Business Needs in One Platform"
      >
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              icon: QrCode,
              title: 'QR Code Ordering System',
              points: [
                'Contactless menu access',
                'Direct table ordering',
                'Instant kitchen notifications',
                'Zero commission fees',
              ],
            },
            {
              icon: List,
              title: 'Digital Menu Management',
              points: [
                'Update menu in real-time',
                'Multi-language support',
                'Rich media (images/videos)',
                'Category management',
              ],
            },
            {
              icon: MessageCircle,
              title: 'WhatsApp Business Bot',
              points: [
                'Automated customer replies',
                'Order management via WhatsApp',
                'Booking confirmations',
                'Customer engagement',
              ],
            },
          ].map((p) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative rounded-xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md transition"
            >
              <div className="flex items-center gap-3">
                <p.icon className="h-6 w-6 text-[#0066FF]" />
                <h3 className="text-lg font-semibold text-gray-900">{p.title}</h3>
              </div>
              <ul className="mt-4 space-y-2">
                {p.points.map((pt) => (
                  <li key={pt} className="text-sm text-gray-600 list-disc list-inside">
                    {pt}
                  </li>
                ))}
              </ul>
              {p.title === 'WhatsApp Business Bot' && (
                <span className="absolute -top-3 right-4 inline-block rounded-full bg-orange-100 text-orange-700 text-[11px] font-semibold px-2 py-1">Popular</span>
              )}
            </motion.div>
          ))}
        </div>
        <div className="mt-6 flex flex-wrap gap-3 text-sm">
          {['Inventory Management', 'Billing System', 'Analytics Dashboard'].map((t) => (
            <span key={t} className="inline-flex items-center rounded-full bg-gray-100 text-gray-700 px-3 py-1">
              Coming Soon • {t}
            </span>
          ))}
        </div>
      </Section>

      {/* Features Grid */}
      <Section id="features" title="Why Choose TechDine?">
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { icon: Clock, title: 'Quick Setup', desc: 'Go live in under 15 minutes' },
            { icon: Shield, title: 'Zero Commission', desc: 'No hidden fees or order commissions' },
            { icon: Cloud, title: 'Cloud-Based', desc: 'Access from anywhere, anytime' },
            { icon: Headphones, title: '24/7 Support', desc: 'Dedicated support team in India' },
            { icon: RefreshCcw, title: 'Regular Updates', desc: 'New features every month' },
            { icon: Plug, title: 'Easy Integration', desc: 'Works with existing systems' },
          ].map((f) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md transition"
            >
              <div className="flex items-center gap-3">
                <f.icon className="h-6 w-6 text-[#0066FF]" />
                <h3 className="text-lg font-semibold text-gray-900">{f.title}</h3>
              </div>
              <p className="mt-2 text-gray-600">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* How It Works */}
      <Section id="how-it-works" title="Get Started in 3 Simple Steps">
        <ol className="relative border-l border-gray-200 pl-6 space-y-8">
          {[
            { title: 'Sign Up', desc: 'Create your account in 2 minutes' },
            { title: 'Setup', desc: 'Configure your menu and preferences' },
            { title: 'Go Live', desc: 'Start accepting orders immediately' },
          ].map((s, idx) => (
            <li key={s.title} className="">
              <span className="absolute -left-[9px] mt-1 h-4 w-4 rounded-full bg-[#0066FF]" />
              <h4 className="text-base font-semibold text-gray-900">{idx + 1}. {s.title}</h4>
              <p className="text-gray-600 text-sm mt-1">{s.desc}</p>
            </li>
          ))}
        </ol>
        <div className="mt-8">
          <a href="#book-demo" className="inline-flex items-center rounded-md bg-[#0066FF] px-5 py-3 text-sm font-semibold text-white shadow hover:opacity-90">Start Your Free Demo</a>
        </div>
      </Section>

      {/* Pricing */}
      <Section id="pricing" title="Simple, Transparent Pricing" subtitle="Choose the plan that fits your business size">
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              name: 'Starter',
              price: '₹999',
              period: '/month',
              features: ['QR Code Ordering', 'Digital Menu', 'Up to 50 orders/day', 'Basic Support'],
              cta: 'Select Plan',
              highlight: false,
            },
            {
              name: 'Professional',
              price: '₹2,499',
              period: '/month',
              features: ['Everything in Starter', 'WhatsApp Bot', 'Unlimited Orders', 'Priority Support', 'Analytics Dashboard'],
              cta: 'Select Plan',
              highlight: true,
            },
            {
              name: 'Enterprise',
              price: 'Custom',
              period: ' Pricing',
              features: ['Everything in Professional', 'Custom Integrations', 'Dedicated Account Manager', 'Multi-location Support', 'API Access'],
              cta: 'Contact Sales',
              highlight: false,
            },
          ].map((card) => (
            <div
              key={card.name}
              className={`relative rounded-2xl border p-6 bg-white shadow-sm hover:shadow-md transition ${card.highlight ? 'border-[#0066FF]' : 'border-gray-200'}`}
            >
              {card.highlight && (
                <span className="absolute -top-3 right-4 inline-block rounded-full bg-blue-100 text-blue-700 text-[11px] font-semibold px-2 py-1">Popular</span>
              )}
              <h3 className="text-xl font-semibold text-gray-900">{card.name}</h3>
              <div className="mt-3 flex items-baseline gap-1">
                <span className="text-3xl font-extrabold text-gray-900">{card.price}</span>
                <span className="text-gray-600">{card.period}</span>
              </div>
              <ul className="mt-4 space-y-2">
                {card.features.map((f) => (
                  <li key={f} className="text-sm text-gray-700 flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#FF6B35] inline-block" />
                    {f}
                  </li>
                ))}
              </ul>
              <a href="#book-demo" className={`mt-6 inline-flex items-center justify-center w-full rounded-md px-4 py-2 text-sm font-semibold shadow ${card.highlight ? 'bg-[#0066FF] text-white' : 'bg-white border border-gray-300 text-gray-900 hover:bg-gray-50'}`}>
                {card.cta}
              </a>
              <p className="mt-3 text-xs text-gray-500">All plans include free setup and training</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Social Proof */}
      <Section id="testimonials" title="Loved by Restaurant Owners Across India">
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              name: 'Rajesh Kumar',
              role: 'Owner, Cafe Delight',
              location: 'Mumbai',
              quote:
                'TechDine transformed how we take orders. Our table turnover increased by 30% and customers love the QR ordering system!',
            },
            {
              name: 'Anita Sharma',
              role: 'Manager, Spice Hub',
              location: 'Delhi',
              quote:
                'The digital menu and WhatsApp bot saved us hours every day. Setup was super quick and the team is very supportive.',
            },
            {
              name: 'Vikram Singh',
              role: 'Owner, Tandoori Treats',
              location: 'Bengaluru',
              quote:
                'Simple pricing, powerful features. We went live in a day and started getting online orders immediately.',
            },
          ].map((t, idx) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm"
            >
              <div className="flex items-center gap-3">
                <img
                  src={`https://api.dicebear.com/7.x/initials/svg?seed=${encodeURIComponent(t.name)}`}
                  alt={t.name}
                  className="w-10 h-10 rounded-full border"
                />
                <div>
                  <p className="text-sm font-semibold text-gray-900">{t.name}</p>
                  <p className="text-xs text-gray-600">{t.role} • {t.location}</p>
                </div>
              </div>
              <p className="mt-3 text-gray-700 text-sm">“{t.quote}”</p>
              <div className="mt-3 flex items-center gap-0.5 text-[#FF6B35]">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Stats */}
      <Section id="stats">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { label: 'Restaurants', value: '50+' },
            { label: 'Orders Processed', value: '10,000+' },
            { label: 'Uptime', value: '99.9%' },
            { label: 'Support', value: '24/7' },
          ].map((s) => (
            <div key={s.label} className="rounded-xl border border-gray-200 bg-white p-6 text-center shadow-sm">
              <div className="text-3xl font-extrabold text-gray-900">{s.value}</div>
              <div className="text-sm text-gray-600">{s.label}</div>
            </div>
          ))}
        </div>
      </Section>

      {/* FAQ */}
      <FAQ />

      {/* Final CTA */}
      <FinalCTA />

      {/* About anchor to satisfy nav */}
      <section id="about" className="py-1" aria-hidden />
    </div>
  );
}

function FAQ() {
  const faqs = [
    { q: 'How long does setup take?', a: 'Most restaurants go live in under 15 minutes with our guided onboarding.' },
    { q: 'Do I need technical knowledge?', a: 'No. TechDine is designed to be simple and intuitive. Our team helps you all the way.' },
    { q: 'What if I already use another system?', a: 'We integrate with existing systems and can import your data to ensure a smooth transition.' },
    { q: 'Can I customize the menu?', a: 'Yes. Update items, prices, photos, categories, and languages in real-time.' },
    { q: 'Is there a free trial?', a: 'Yes. Book a free demo and we’ll activate a trial for your outlet.' },
    { q: 'What payment methods do you accept?', a: 'UPI, cards, net banking, and invoicing for Enterprise.' },
    { q: 'Can I cancel anytime?', a: 'Absolutely. There are no long-term contracts.' },
  ];
  const [open, setOpen] = useState(0);

  return (
    <Section id="faq" title="Frequently Asked Questions">
      <div className="space-y-3">
        {faqs.map((item, idx) => (
          <div key={item.q} className="rounded-xl border border-gray-200 bg-white">
            <button
              className="w-full flex items-center justify-between px-4 py-3 text-left"
              onClick={() => setOpen(open === idx ? -1 : idx)}
              aria-expanded={open === idx}
            >
              <span className="font-medium text-gray-900">{item.q}</span>
              <ChevronDown className={`h-5 w-5 transition-transform ${open === idx ? 'rotate-180' : ''}`} />
            </button>
            {open === idx && (
              <div className="px-4 pb-4 text-sm text-gray-600">{item.a}</div>
            )}
          </div>
        ))}
      </div>
    </Section>
  );
}

function FinalCTA() {
  function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const payload = Object.fromEntries(formData.entries());
    // Log to console to simulate submission
    console.log('Demo request submitted:', payload);
    alert('Thanks! We\'ll contact you shortly.');
    e.currentTarget.reset();
  }

  return (
    <Section id="book-demo" title="Ready to Transform Your Restaurant?" subtitle="Join 50+ restaurants already using TechDine">
      <div className="grid md:grid-cols-2 gap-8">
        <div className="rounded-2xl bg-gradient-to-br from-[#0066FF]/10 via-white to-[#FF6B35]/10 p-6 border border-blue-100">
          <h4 className="text-lg font-semibold text-gray-900">Book Free Demo</h4>
          <p className="text-sm text-gray-600 mt-1">Tell us a bit about your business and we\'ll schedule a walkthrough.</p>
          <form onSubmit={handleSubmit} className="mt-4 space-y-3" id="contact">
            <div>
              <label className="block text-sm font-medium text-gray-700">Name</label>
              <input name="name" required className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#0066FF]" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-sm font-medium text-gray-700">Phone</label>
                <input name="phone" required className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#0066FF]" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Email</label>
                <input type="email" name="email" className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#0066FF]" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Business Name</label>
              <input name="business" className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#0066FF]" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Preferred Date/Time</label>
              <input type="datetime-local" name="datetime" className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#0066FF]" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Business Type</label>
              <select name="type" className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#0066FF]">
                <option>Restaurant</option>
                <option>Cafe</option>
                <option>Cloud Kitchen</option>
                <option>Bakery</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Message</label>
              <textarea name="message" rows={3} className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#0066FF]" />
            </div>
            <div className="flex items-center gap-3">
              <button type="submit" className="inline-flex items-center rounded-md bg-[#0066FF] px-5 py-2.5 text-sm font-semibold text-white shadow hover:opacity-90">Book Free Demo</button>
              <a href="https://wa.me/919999999999" target="_blank" rel="noreferrer" className="inline-flex items-center rounded-md border border-gray-300 px-5 py-2.5 text-sm font-semibold text-gray-900 bg-white hover:bg-gray-50">
                WhatsApp Us
              </a>
            </div>
          </form>
        </div>
        <div className="rounded-2xl border border-gray-200 p-6 bg-white">
          <h4 className="text-lg font-semibold text-gray-900">Contact Us</h4>
          <ul className="mt-4 space-y-2 text-sm text-gray-700">
            <li>Email: hello@techdine.in</li>
            <li>Phone: +91-XXXXXXXXXX</li>
            <li>Address: India</li>
          </ul>
          <div className="mt-6 aspect-video w-full rounded-lg bg-gray-100 grid place-items-center text-gray-500 text-sm">
            Google Map
          </div>
        </div>
      </div>
    </Section>
  );
}
