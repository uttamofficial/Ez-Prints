import React from 'react';
import { ShoppingCart, User } from 'lucide-react';
import { Link } from './Link';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-white z-50 shadow-lg border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo Section */}
          <Link
            href="/"
            className="text-2xl font-bold text-gray-900 hover:text-black transition-colors"
          >
            HostelPress
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/stationery"
              className="text-gray-700 hover:text-black text-lg transition-colors"
            >
              Stationery
            </Link>
            <Link
              href="/upload"
              className="text-gray-700 hover:text-black text-lg transition-colors"
            >
              Upload PDF
            </Link>
            <Link
              href="/contact"
              className="text-gray-700 hover:text-black text-lg transition-colors"
            >
              Contact Us
            </Link>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center space-x-4">
          <Link href='/login'>
          <button
              className="p-2 bg-black text-white rounded-full hover:bg-gray-900 transition duration-200"
              aria-label="User Profile"
            >
              <User className="w-6 h-6" />
            </button>
            </Link>
            
            <Link href="/cart">
              <button
                className="relative p-2 bg-black text-white rounded-full hover:bg-gray-900 transition duration-200"
                aria-label="Shopping Cart"
              >
                <ShoppingCart className="w-6 h-6" />
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-semibold rounded-full px-1.5 py-0.5">
                  3
                </span>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
