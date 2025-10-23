'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { usePathname } from 'next/navigation';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Über uns', href: '/about' },
  { name: 'Proof of Work', href: '/referenzen' },
  { name: 'Prinzipien', href: '/innenausbau-ratgeber-muenchen' },
  { name: 'Kontakt', href: '/kontakt' },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="bg-background/80 backdrop-blur-xl border-b border-border sticky top-0 z-50">
      <nav className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center bg-gradient-to-br from-emerald-500 to-emerald-700 rounded-lg shadow-lg">
              <svg className="w-6 h-6 sm:w-7 sm:h-7 text-white" viewBox="0 0 24 24" fill="currentColor">
                <path d="M2 3L8 21L10 15L14 21L16 15L20 21L22 3H20L16.5 15L14 9L11.5 15L8 9L5.5 15L2 3Z"/>
              </svg>
            </div>
            <span className="text-xl sm:text-2xl font-bold text-white">Werktraum</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`transition-colors duration-200 ${
                  pathname === item.href
                    ? 'text-emerald-400 font-medium'
                    : 'text-gray-300 hover:text-emerald-400'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-300 hover:text-emerald-400 hover:bg-gray-800 transition-colors duration-200"
            aria-expanded="false"
          >
            <span className="sr-only">Hauptmenü öffnen</span>
            {/* Hamburger Icon */}
            <svg
              className={`${isOpen ? 'hidden' : 'block'} h-6 w-6`}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
            {/* Close Icon */}
            <svg
              className={`${isOpen ? 'block' : 'hidden'} h-6 w-6`}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* Mobile Navigation Overlay */}
        <div className={`${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'} md:hidden fixed inset-0 z-50 transition-all duration-500 ease-out`}>
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/80 backdrop-blur-xl" onClick={() => setIsOpen(false)}></div>

          {/* Menu Content */}
          <div className={`${isOpen ? 'translate-y-0' : '-translate-y-full'} absolute top-0 left-0 right-0 bg-black/90 backdrop-blur-2xl border-b border-white/20 transition-transform duration-700 ease-out`}>
            <div className="container mx-auto px-4 py-8">

              {/* Logo in mobile menu */}
              <div className="flex items-center justify-between mb-12">
                <Link href="/" onClick={() => setIsOpen(false)} className="flex items-center space-x-2">
                  <div className="w-10 h-10 flex items-center justify-center bg-gradient-to-br from-emerald-500 to-emerald-700 rounded-lg shadow-lg">
                    <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M2 3L8 21L10 15L14 21L16 15L20 21L22 3H20L16.5 15L14 9L11.5 15L8 9L5.5 15L2 3Z"/>
                    </svg>
                  </div>
                  <span className="text-xl font-bold text-white">Werktraum</span>
                </Link>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 rounded-full bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 transition-colors duration-200"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Navigation Links */}
              <nav className="space-y-1">
                {navigation.map((item, index) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`block py-6 px-6 rounded-2xl text-2xl font-medium transition-all duration-300 hover:bg-white/20 hover:backdrop-blur-sm border border-transparent hover:border-white/30 ${
                      pathname === item.href
                        ? 'text-emerald-400 bg-white/20 backdrop-blur-sm border-white/30'
                        : 'text-white hover:text-white'
                    }`}
                    style={{
                      animationDelay: `${index * 100}ms`,
                      animation: isOpen ? 'slideInRight 0.6s ease-out forwards' : 'none'
                    }}
                    onClick={() => setIsOpen(false)}
                  >
                    <span className="flex items-center justify-between">
                      {item.name}
                      <svg className="w-5 h-5 opacity-60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                  </Link>
                ))}
              </nav>

              {/* Contact info at bottom */}
              <div className="mt-16 pt-8 border-t border-white/30">
                <div className="text-center">
                  <p className="text-white text-sm mb-2">Direkt kontaktieren</p>
                  <a
                    href="tel:016012489000"
                    className="text-emerald-400 text-lg font-medium hover:text-emerald-300 transition-colors duration-200"
                    onClick={() => setIsOpen(false)}
                  >
                    0160 12 48 900
                  </a>
                </div>
              </div>

            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}