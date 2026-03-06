"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="bg-white/95 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-2xl">📱</span>
          <span className="text-xl font-bold text-gray-900">
            Äly<span className="text-primary-600">puhelin</span>
          </span>
        </Link>
        <div className="hidden sm:flex items-center gap-6 text-sm">
          <Link href="/#gurut" className="text-gray-600 hover:text-primary-600 transition-colors">
            Gurut
          </Link>
          <Link href="/#miten-toimii" className="text-gray-600 hover:text-primary-600 transition-colors">
            Miten toimii
          </Link>
          <Link href="/#hinta" className="text-gray-600 hover:text-primary-600 transition-colors">
            Hinta
          </Link>
          <Link href="/vittuilupuhelin" className="text-gray-600 hover:text-primary-600 transition-colors">
            Vittuilupuhelin
          </Link>
          <a
            href="tel:0600411104"
            className="bg-primary-600 hover:bg-primary-700 text-white font-semibold px-4 py-2 rounded-lg transition-colors"
          >
            📞 Soita nyt
          </a>
        </div>
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="sm:hidden p-2 text-gray-600"
          aria-label="Valikko"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {mobileOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>
      {mobileOpen && (
        <div className="sm:hidden bg-white border-t border-gray-100 px-4 py-4 space-y-3">
          <Link href="/#gurut" onClick={() => setMobileOpen(false)} className="block text-gray-700 hover:text-primary-600">
            Gurut
          </Link>
          <Link href="/#miten-toimii" onClick={() => setMobileOpen(false)} className="block text-gray-700 hover:text-primary-600">
            Miten toimii
          </Link>
          <Link href="/#hinta" onClick={() => setMobileOpen(false)} className="block text-gray-700 hover:text-primary-600">
            Hinta
          </Link>
          <Link href="/vittuilupuhelin" onClick={() => setMobileOpen(false)} className="block text-gray-700 hover:text-primary-600">
            Vittuilupuhelin
          </Link>
          <a
            href="tel:0600411104"
            className="block bg-primary-600 text-white text-center font-semibold px-4 py-3 rounded-lg"
          >
            📞 0600 411 104
          </a>
        </div>
      )}
    </nav>
  );
}
