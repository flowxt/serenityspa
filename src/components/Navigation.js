"use client";

import Image from "next/image";
import { useState } from "react";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: "Accueil", href: "#accueil" },
    { name: "Soins", href: "#soins" },
    { name: "Esthétique", href: "#esthetique" },
    { name: "Avis", href: "#avis" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 w-full bg-nude-50/95 backdrop-blur-sm z-50 border-b border-nude-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center">
            <Image
              src="/image/logo.jpeg"
              alt="Serenity Spa Logo"
              width={60}
              height={60}
              className="shadow-lg"
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-nude-700 hover:text-nude-500 transition-colors duration-300 font-medium"
                >
                  {item.name}
                </a>
              ))}
              <a
                href="https://www.kalendes.com/site/serenityspanoemiesaddier/welcome"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-spa text-white px-6 py-2 rounded-full font-medium shadow-lg inline-block"
              >
                Réserver
              </a>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-nude-700 hover:text-nude-500 p-2"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-nude-50 border-t border-nude-200">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-2 text-nude-700 hover:text-nude-500 transition-colors duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <a
                href="https://www.kalendes.com/site/serenityspanoemiesaddier/welcome"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-spa text-white px-6 py-2 rounded-full font-medium shadow-lg w-full mt-4 inline-block text-center"
              >
                Réserver
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
