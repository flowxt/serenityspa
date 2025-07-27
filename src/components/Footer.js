"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <motion.footer
      className="bg-nude-700 text-nude-100 py-8"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="grid md:grid-cols-3 gap-6 mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
        >
          {/* Logo et description */}
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start mb-3">
              <div className="w-12 h-12 bg-gradient-to-br from-rose-300 to-rose-400 rounded-full flex items-center justify-center shadow-lg mr-3">
                <span className="text-white font-serif font-bold text-lg">
                  NS
                </span>
              </div>
              <div>
                <h3 className="text-xl font-serif font-semibold">
                  Serenity Spa
                </h3>
                <p className="text-nude-300 text-sm">Noémie Saddier</p>
              </div>
            </div>
            <p className="text-nude-300 text-sm mb-4">
              Votre espace privatif de bien-être à La Roche-sur-Foron
            </p>
            <a
              href="https://www.kalendes.com/site/serenityspanoemiesaddier/welcome"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-nude-600 text-white px-4 py-2 rounded-full text-xs font-medium hover:bg-nude-500 transition-colors"
            >
              Réserver
            </a>
          </div>

          {/* Horaires et Navigation */}
          <div className="text-center md:text-left">
            <h4 className="font-semibold mb-3 text-nude-200">Horaires</h4>
            <div className="space-y-1 text-sm text-nude-300 mb-4">
              <p>Lundi : 10h - 13h / 14h - 19h</p>
              <p>Mardi au vendredi : 9h - 13h / 14h - 19h</p>
              <p>Samedi : 9h - 13h / 14h - 17h30</p>
            </div>
            <div className="space-y-1 text-sm">
              <Link
                href="/"
                className="block text-nude-300 hover:text-nude-100 transition-colors"
              >
                Accueil
              </Link>
              <Link
                href="/soins"
                className="block text-nude-300 hover:text-nude-100 transition-colors"
              >
                Soins
              </Link>
            </div>
          </div>

          {/* Contact et Réseaux */}
          <div className="text-center md:text-left">
            <h4 className="font-semibold mb-3 text-nude-200">Contact</h4>
            <div className="space-y-2 text-sm text-nude-300 mb-4">
              <p>43 rue Perrine</p>
              <p>74800 La Roche-sur-Foron</p>
              <p>📞 04 50 25 68 67</p>
              <p>✉️ ns.serenityspa@gmail.com</p>
            </div>

            <div className="flex space-x-3 justify-center md:justify-start">
              <a
                href="https://www.facebook.com/p/Serenity-Spa-Noémie-Saddier-100078877596673/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 bg-nude-600 rounded-full flex items-center justify-center hover:bg-nude-500 transition-colors"
                aria-label="Facebook"
              >
                <svg
                  className="w-4 h-4 text-nude-100"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>

              <a
                href="https://www.instagram.com/serenityspa_noemiesaddier/profilecard/?igsh=ZWFoM3M5YXZ4OHdr"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 bg-nude-600 rounded-full flex items-center justify-center hover:bg-nude-500 transition-colors"
                aria-label="Instagram"
              >
                <svg
                  className="w-4 h-4 text-nude-100"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="text-center pt-4 border-t border-nude-600"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
        >
          <p className="text-nude-300 text-sm">
            Réservation en ligne ou par téléphone
          </p>
        </motion.div>
      </div>
    </motion.footer>
  );
}
