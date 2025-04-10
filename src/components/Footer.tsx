import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white text-gray-700 shadow-lg border-t border-gray-200 py-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-10 border-b border-gray-300">
          {/* Logo and Description */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900">HostelPress</h3>
            <p className="mt-4 mr-12 text-sm text-gray-600">
            Making stationery and printing hassle-free with quick, reliable services designed especially for hostel students.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {['Stationery', 'Upload PDF', 'Contact Us', 'About Us'].map(item => (
                <li key={item}>
                  <a href="#" className="text-sm text-gray-700 hover:text-gray-900 transition">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Support</h3>
            <ul className="space-y-3">
              {['FAQ', 'Shipping', 'Returns', 'Payment Options'].map(item => (
                <li key={item}>
                  <a href="#" className="text-sm text-gray-700 hover:text-gray-900 transition">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Follow Us */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              {[{ Icon: Facebook, label: 'Facebook' }, { Icon: Twitter, label: 'Twitter' }, { Icon: Instagram, label: 'Instagram' }, { Icon: Linkedin, label: 'LinkedIn' }].map(({ Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  className="text-gray-500 hover:text-gray-900 transition"
                  aria-label={label}
                >
                  <Icon className="w-6 h-6" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 flex flex-col md:flex-row items-center justify-between">
          <p className="text-sm text-gray-600">&copy; {currentYear} HostelPress. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a
              href="#"
              className="text-sm text-gray-700 hover:text-gray-900 transition"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-sm text-gray-700 hover:text-gray-900 transition"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
