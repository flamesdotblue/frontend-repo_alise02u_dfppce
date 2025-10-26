import { Linkedin, Twitter, Instagram, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-md bg-[#0066FF] text-white grid place-items-center font-bold">T</div>
              <span className="font-semibold text-gray-900 text-lg">TechDine</span>
            </div>
            <p className="mt-3 text-sm text-gray-600">Empowering restaurants with technology</p>
            <div className="mt-4 flex items-center gap-3 text-gray-600">
              <a href="#" aria-label="LinkedIn" className="hover:text-gray-900"><Linkedin className="h-5 w-5" /></a>
              <a href="#" aria-label="Twitter" className="hover:text-gray-900"><Twitter className="h-5 w-5" /></a>
              <a href="#" aria-label="Instagram" className="hover:text-gray-900"><Instagram className="h-5 w-5" /></a>
            </div>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-gray-900">Products</h4>
            <ul className="mt-3 space-y-2 text-sm text-gray-600">
              <li><a href="#products" className="hover:text-gray-900">QR Ordering</a></li>
              <li><a href="#products" className="hover:text-gray-900">Digital Menu</a></li>
              <li><a href="#products" className="hover:text-gray-900">WhatsApp Bot</a></li>
              <li><a href="#products" className="hover:text-gray-900">Coming Soon</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-gray-900">Company</h4>
            <ul className="mt-3 space-y-2 text-sm text-gray-600">
              <li><a href="#about" className="hover:text-gray-900">About Us</a></li>
              <li><a href="#contact" className="hover:text-gray-900">Contact</a></li>
              <li><a href="#" className="hover:text-gray-900">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-gray-900">Terms of Service</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-gray-900">Contact</h4>
            <ul className="mt-3 space-y-2 text-sm text-gray-600">
              <li className="flex items-center gap-2"><Mail className="h-4 w-4" /> hello@techdine.in</li>
              <li className="flex items-center gap-2"><Phone className="h-4 w-4" /> +91-XXXXXXXXXX</li>
              <li className="flex items-center gap-2"><MapPin className="h-4 w-4" /> India</li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-200 pt-6 text-sm text-gray-500 flex flex-col sm:flex-row items-center justify-between">
          <p>© 2025 TechDine. All rights reserved.</p>
          <a href="#book-demo" className="mt-3 sm:mt-0 inline-flex items-center rounded-md bg-[#0066FF] px-4 py-2 text-sm font-semibold text-white shadow hover:opacity-90">Book Free Demo</a>
        </div>
      </div>
    </footer>
  );
}
