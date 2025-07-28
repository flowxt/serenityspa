"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";

export default function Contact() {
  const [formData, setFormData] = useState({
    nom: "",
    email: "",
    telephone: "",
    sujet: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logique d'envoi du formulaire à implémenter
    console.log("Formulaire envoyé:", formData);
  };

  const sujets = [
    "Réservation spa privatif",
    "Information sur les soins",
    "Tarifs et forfaits",
    "Bon cadeau",
    "Autre demande",
  ];

  return (
    <div className="min-h-screen bg-nude-50">
      <Navigation />

      {/* Header Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-nude-100 to-nude-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.h1
              className="text-5xl md:text-6xl font-serif font-bold text-nude-800 mb-6 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              Contactez-nous
            </motion.h1>
            <motion.p
              className="text-xl md:text-2xl text-nude-600 max-w-4xl mx-auto leading-relaxed mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            >
              Une question ? Un besoin particulier ? Notre équipe est là pour
              vous accompagner dans votre quête de bien-être
            </motion.p>

            <motion.div
              className="flex flex-wrap justify-center gap-6 text-sm"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            >
              <div className="flex items-center space-x-2 bg-white/80 px-4 py-2 rounded-full">
                <span className="text-nude-500">📞</span>
                <span className="text-nude-700">Réponse rapide</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/80 px-4 py-2 rounded-full">
                <span className="text-nude-500">💝</span>
                <span className="text-nude-700">Conseils personnalisés</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/80 px-4 py-2 rounded-full">
                <span className="text-nude-500">🌿</span>
                <span className="text-nude-700">À votre écoute</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Formulaire de contact */}
            <motion.div
              className="bg-white rounded-3xl p-8 shadow-xl"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            >
              <div className="mb-8">
                <h2 className="text-3xl font-serif font-semibold text-nude-700 mb-4">
                  Écrivez-nous
                </h2>
                <p className="text-nude-600 leading-relaxed">
                  Partagez-nous vos attentes, nous vous répondrons avec plaisir
                  pour créer ensemble votre moment de détente idéal.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="nom"
                      className="block text-sm font-semibold text-nude-700 mb-2"
                    >
                      Nom complet *
                    </label>
                    <input
                      type="text"
                      id="nom"
                      name="nom"
                      value={formData.nom}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-nude-200 rounded-xl focus:ring-2 focus:ring-nude-400 focus:border-transparent transition-all duration-300"
                      placeholder="Votre nom et prénom"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="telephone"
                      className="block text-sm font-semibold text-nude-700 mb-2"
                    >
                      Téléphone
                    </label>
                    <input
                      type="tel"
                      id="telephone"
                      name="telephone"
                      value={formData.telephone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-nude-200 rounded-xl focus:ring-2 focus:ring-nude-400 focus:border-transparent transition-all duration-300"
                      placeholder="06 12 34 56 78"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold text-nude-700 mb-2"
                  >
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-nude-200 rounded-xl focus:ring-2 focus:ring-nude-400 focus:border-transparent transition-all duration-300"
                    placeholder="votre.email@exemple.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="sujet"
                    className="block text-sm font-semibold text-nude-700 mb-2"
                  >
                    Sujet de votre demande
                  </label>
                  <select
                    id="sujet"
                    name="sujet"
                    value={formData.sujet}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-nude-200 rounded-xl focus:ring-2 focus:ring-nude-400 focus:border-transparent transition-all duration-300"
                  >
                    <option value="">Sélectionnez un sujet</option>
                    {sujets.map((sujet, index) => (
                      <option key={index} value={sujet}>
                        {sujet}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-semibold text-nude-700 mb-2"
                  >
                    Votre message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-nude-200 rounded-xl focus:ring-2 focus:ring-nude-400 focus:border-transparent transition-all duration-300 resize-none"
                    placeholder="Décrivez-nous votre demande, vos attentes, ou posez-nous vos questions. Nous sommes là pour vous aider à vivre la meilleure expérience possible..."
                  />
                </div>

                <motion.button
                  type="submit"
                  className="w-full btn-spa text-white py-4 px-8 rounded-xl font-semibold text-lg shadow-xl"
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.2 }}
                >
                  Envoyer mon message ✨
                </motion.button>
              </form>
            </motion.div>

            {/* Informations de contact */}
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
            >
              {/* Coordonnées */}
              <div className="bg-gradient-to-br from-nude-400 to-nude-600 rounded-3xl p-8 text-white">
                <h3 className="text-2xl font-serif font-semibold mb-6">
                  Nos coordonnées
                </h3>

                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-white/20 rounded-full p-3 mt-1">
                      <svg
                        className="w-6 h-6"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Adresse</h4>
                      <p className="opacity-90">
                        43 rue Perrine
                        <br />
                        74800 La Roche-sur-Foron
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-white/20 rounded-full p-3 mt-1">
                      <svg
                        className="w-6 h-6"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Téléphone</h4>
                      <p className="opacity-90">04 50 25 68 67</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-white/20 rounded-full p-3 mt-1">
                      <svg
                        className="w-6 h-6"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Email</h4>
                      <p className="opacity-90">ns.serenityspa@gmail.com</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Horaires */}
              <div className="bg-white rounded-3xl p-8 shadow-lg">
                <h3 className="text-2xl font-serif font-semibold text-nude-700 mb-6">
                  Nos horaires d&apos;ouverture
                </h3>

                <div className="space-y-4">
                  <div className="flex justify-between items-center py-2 border-b border-nude-100">
                    <span className="font-medium text-nude-700">Lundi</span>
                    <span className="text-nude-600">10h - 13h / 14h - 19h</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-nude-100">
                    <span className="font-medium text-nude-700">
                      Mardi au Vendredi
                    </span>
                    <span className="text-nude-600">9h - 13h / 14h - 19h</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-nude-100">
                    <span className="font-medium text-nude-700">Samedi</span>
                    <span className="text-nude-600">
                      9h - 13h / 14h - 17h30
                    </span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="font-medium text-nude-700">Dimanche</span>
                    <span className="text-red-500 font-medium">Fermé</span>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-nude-50 rounded-xl">
                  <p className="text-sm text-nude-600 text-center">
                    <span className="font-semibold">💡 Conseil :</span> Pour le
                    spa privatif, nous recommandons de réserver à l&apos;avance
                    pour garantir votre créneau préféré.
                  </p>
                </div>
              </div>

              {/* Accès rapide */}
              <div className="bg-white rounded-3xl p-8 shadow-lg">
                <h3 className="text-2xl font-serif font-semibold text-nude-700 mb-6">
                  Accès rapide
                </h3>

                <div className="space-y-4">
                  <motion.a
                    href="https://www.kalendes.com/site/serenityspanoemiesaddier/welcome"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-4 bg-nude-50 rounded-xl hover:bg-nude-100 transition-colors group"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="flex items-center space-x-3">
                      <span className="text-2xl">📅</span>
                      <span className="font-medium text-nude-700">
                        Réserver en ligne
                      </span>
                    </div>
                    <svg
                      className="w-5 h-5 text-nude-400 group-hover:text-nude-600 transition-colors"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </motion.a>

                  <motion.a
                    href="tel:0450256867"
                    className="flex items-center justify-between p-4 bg-nude-50 rounded-xl hover:bg-nude-100 transition-colors group"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="flex items-center space-x-3">
                      <span className="text-2xl">📞</span>
                      <span className="font-medium text-nude-700">
                        Appeler directement
                      </span>
                    </div>
                    <svg
                      className="w-5 h-5 text-nude-400 group-hover:text-nude-600 transition-colors"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section Plan/Localisation */}
      <section className="py-16 bg-nude-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1, ease: "easeOut" }}
          >
            <h2 className="text-3xl md:text-4xl font-serif font-semibold text-nude-700 mb-6">
              Comment nous trouver
            </h2>
            <p className="text-xl text-nude-600 max-w-3xl mx-auto">
              Situé au cœur de La Roche-sur-Foron, notre spa vous accueille dans
              un cadre paisible et facilement accessible.
            </p>
          </motion.div>

          <motion.div
            className="bg-white rounded-3xl p-8 shadow-xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2, ease: "easeOut" }}
          >
            <div className="aspect-video rounded-2xl overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2775.8634147441553!2d6.309228576584996!3d46.06593347110843!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478c64f234567891%3A0x123456789abcdef0!2s43%20Rue%20Perrine%2C%2074800%20La%20Roche-sur-Foron!5e0!3m2!1sfr!2sfr!4v1234567890123!5m2!1sfr!2sfr"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localisation Serenity Spa"
                className="rounded-2xl"
              />
            </div>

            <div className="mt-6 grid md:grid-cols-3 gap-6">
              <div className="text-center p-4">
                <div className="bg-nude-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
                  <span className="text-2xl">🚗</span>
                </div>
                <h4 className="font-semibold text-nude-700 mb-2">Parking</h4>
                <p className="text-sm text-nude-600">
                  Places disponibles à proximité
                </p>
              </div>

              <div className="text-center p-4">
                <div className="bg-nude-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
                  <span className="text-2xl">🚌</span>
                </div>
                <h4 className="font-semibold text-nude-700 mb-2">Transports</h4>
                <p className="text-sm text-nude-600">
                  Arrêts de bus à 2 min à pied
                </p>
              </div>

              <div className="text-center p-4">
                <div className="bg-nude-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
                  <span className="text-2xl">🏪</span>
                </div>
                <h4 className="font-semibold text-nude-700 mb-2">
                  Centre-ville
                </h4>
                <p className="text-sm text-nude-600">
                  En plein cœur de La Roche
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
