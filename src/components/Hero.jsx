import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-white via-white to-blue-50 pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-10 items-center py-16 sm:py-24">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-3xl sm:text-5xl font-extrabold tracking-tight text-gray-900"
            >
              Transform Your Restaurant with Smart Digital Solutions
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mt-4 text-base sm:text-lg text-gray-600"
            >
              All-in-one platform for QR ordering, digital menus, WhatsApp automation, and more. Built for Indian restaurants, cafes, and cloud kitchens.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-8 flex flex-col sm:flex-row gap-3"
            >
              <a
                href="#book-demo"
                className="inline-flex items-center justify-center rounded-md bg-[#0066FF] px-6 py-3 text-sm font-semibold text-white shadow-sm hover:opacity-90 transition"
              >
                Book Free Demo
              </a>
              <a
                href="#how-it-works"
                className="inline-flex items-center justify-center rounded-md border border-gray-300 px-6 py-3 text-sm font-semibold text-gray-900 bg-white hover:bg-gray-50"
              >
                See How It Works
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-8 flex items-center gap-3 text-sm text-gray-600"
            >
              <div className="flex -space-x-2">
                {[0, 1, 2].map((i) => (
                  <img
                    key={i}
                    src={`https://api.dicebear.com/7.x/initials/svg?seed=T${i}`}
                    alt="Avatar"
                    className="w-8 h-8 rounded-full border-2 border-white shadow"
                  />
                ))}
              </div>
              <span className="">Trusted by 50+ restaurants across India</span>
            </motion.div>

            <div className="mt-8 grid grid-cols-3 gap-3">
              {[
                { label: '99% Uptime' },
                { label: '15 Min Setup' },
                { label: '24/7 Support' },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-2 rounded-md border border-gray-200 bg-white px-3 py-2 shadow-sm">
                  <CheckCircle2 className="h-4 w-4 text-[#FF6B35]" />
                  <span className="text-xs font-medium text-gray-700">{item.label}</span>
                </div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="relative"
          >
            <div className="relative rounded-xl border bg-white p-4 shadow-xl">
              <div className="flex items-center gap-2 mb-4">
                <span className="w-3 h-3 rounded-full bg-red-400" />
                <span className="w-3 h-3 rounded-full bg-yellow-400" />
                <span className="w-3 h-3 rounded-full bg-green-400" />
              </div>
              <img
                src="https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=1600&auto=format&fit=crop"
                alt="Restaurant dashboard"
                className="w-full h-64 object-cover rounded-lg"
                loading="lazy"
              />
              <div className="mt-4 grid grid-cols-3 gap-3">
                <div className="rounded-lg bg-blue-50 text-blue-700 px-3 py-2 text-xs font-medium">Orders +30%</div>
                <div className="rounded-lg bg-orange-50 text-orange-700 px-3 py-2 text-xs font-medium">Wait-time -20%</div>
                <div className="rounded-lg bg-emerald-50 text-emerald-700 px-3 py-2 text-xs font-medium">CSAT 4.8/5</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
