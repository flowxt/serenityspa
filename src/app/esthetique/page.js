"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import CustomDropdown from "../../components/CustomDropdown";

export default function Esthetique() {
  const [activeFilter, setActiveFilter] = useState("tous");

  // Données des soins esthétiques organisées par catégorie
  const soinsData = {
    mains: [
      {
        id: 1,
        name: "Manucure",
        duration: "45 min",
        price: "30€",
        description: "Limage, travail complet des cuticules",
        category: "mains",
        type: "classique",
      },
      {
        id: 2,
        name: "Mains de Velours",
        duration: "1h",
        price: "50€",
        durationWithSemiPermanent: "1h30 avec semi-permanent",
        priceWithSemiPermanent: "85€",
        description:
          "Soin complet : Manucure, gommage et masque beurre de karité",
        details: "",
        category: "mains",
        type: "premium",
        featured: true,
      },

      {
        id: 4,
        name: "Vernis Semi-Permanent + Manucure",
        duration: "1h",
        price: "45€",
        description:
          "Manucure complète avec pose de vernis semi-permanent. French uniquement avec Laurie sur demande",
        category: "mains",
        type: "complet",
      },
      {
        id: 5,
        name: "Dépose et Repose Vernis Semi-Permanent",
        duration: "1h30",
        price: "55€",
        description:
          "Retrait de l'ancien vernis et application du nouveau. French uniquement avec Laurie sur demande",
        category: "mains",
        type: "entretien",
      },
      {
        id: 6,
        name: "Dépose Seule + Limage",
        duration: "30 min",
        price: "20€",
        description: "Retrait du vernis semi-permanent et limage des ongles",
        category: "mains",
        type: "entretien",
      },
      {
        id: 7,
        name: "Dépose + Manucure",
        duration: "1h",
        price: "38€",
        description: "Retrait du vernis et manucure complète",
        category: "mains",
        type: "entretien",
      },
    ],
    pieds: [
      {
        id: 8,
        name: "Pédicure",
        duration: "45 min",
        price: "30€",
        description: "Limage, travail complet des cuticules",
        category: "pieds",
        type: "classique",
      },
      {
        id: 9,
        name: "Pieds Enchanteurs",
        duration: "1h15",
        price: "70€",
        durationWithSemiPermanent: "1h45 avec semi-permanent",
        priceWithSemiPermanent: "105€",
        description:
          "Bain de pied, pédicure, callosités avec patchs Yumifeet et masque beurre de karité",
        details: "",
        category: "pieds",
        type: "premium",
        featured: true,
      },
      {
        id: 10,
        name: 'Soin YumiFeet "De si jolis Pieds"',
        duration: "30 min",
        price: "40€",
        description:
          "Technique révolutionnaire aux acides de fruits pour retrouver des pieds de bébé",
        category: "pieds",
        type: "specialiste",
        brand: "YumiFeet",
      },
      {
        id: 11,
        name: "Vernis Semi-Permanent + Pédicure",
        duration: "1h15",
        price: "45€",
        description:
          "Pédicure complète avec pose de vernis semi-permanent. French uniquement avec Laurie sur demande",
        category: "pieds",
        type: "complet",
      },
      {
        id: 12,
        name: "Dépose et Repose Vernis Semi-Permanent",
        duration: "1h45",
        price: "55€",
        description:
          "Retrait de l'ancien vernis et application du nouveau. French uniquement avec Laurie sur demande",
        category: "pieds",
        type: "entretien",
      },
      {
        id: 13,
        name: "Dépose + Pédicure",
        duration: "1h",
        price: "38€",
        description: "Retrait du vernis et pédicure complète",
        category: "pieds",
        type: "entretien",
      },
    ],
    teintures: [
      {
        id: 14,
        name: "Teinture Sourcils",
        duration: "15 min",
        price: "14€",
        description: "Pour des sourcils parfaitement définis",
        category: "teintures",
        zone: "sourcils",
      },
      {
        id: 15,
        name: "Teinture Cils",
        duration: "20 min",
        price: "19€",
        description: "Teinture pour un regard intensifié et naturel",
        category: "teintures",
        zone: "cils",
      },
      {
        id: 16,
        name: "Teinture Sourcils + Cils",
        duration: "30 min",
        price: "30€",
        description: "Formule complète pour un regard parfaitement sublimé",
        category: "teintures",
        zone: "complet",
        featured: true,
      },
      {
        id: 17,
        name: "Option Épilation Sourcils",
        duration: "10 min",
        price: "8€",
        description: "Épilation des sourcils en complément de la teinture",
        category: "teintures",
        zone: "sourcils",
        type: "option",
      },
    ],
    epilationsFemmes: [
      {
        id: 18,
        name: "Sourcils (Création)",
        duration: "20 min",
        price: "14€",
        description: "",
        category: "epilationsFemmes",
        zone: "visage",
      },
      {
        id: 19,
        name: "Sourcils (Entretien)",
        duration: "15 min",
        price: "10€",
        description: "",
        category: "epilationsFemmes",
        zone: "visage",
      },
      {
        id: 20,
        name: "Nez ou Oreilles",
        duration: "10 min",
        price: "7€",
        description: "",
        category: "epilationsFemmes",
        zone: "visage",
      },
      {
        id: 21,
        name: "Lèvres",
        duration: "10 min",
        price: "9€",
        description: "",
        category: "epilationsFemmes",
        zone: "visage",
      },
      {
        id: 22,
        name: "Menton",
        duration: "10 min",
        price: "8€",
        description: "",
        category: "epilationsFemmes",
        zone: "visage",
      },
      {
        id: 23,
        name: "Sourcils + Lèvre",
        duration: "25 min",
        price: "17€",
        description: "",
        category: "epilationsFemmes",
        zone: "visage",
        type: "combo",
      },
      {
        id: 24,
        name: "Sourcils + Lèvre + Menton",
        duration: "35 min",
        price: "23€",
        description: "",
        category: "epilationsFemmes",
        zone: "visage",
        type: "combo",
      },
      {
        id: 25,
        name: "Visage Complet",
        duration: "45 min",
        price: "25€",
        description: "",
        category: "epilationsFemmes",
        zone: "visage",
        type: "complet",
        featured: true,
      },
      {
        id: 26,
        name: "Aisselles",
        duration: "15 min",
        price: "14€",
        description: "",
        category: "epilationsFemmes",
        zone: "corps",
      },
      {
        id: 27,
        name: "Bras",
        duration: "30 min",
        price: "21€",
        description: "",
        category: "epilationsFemmes",
        zone: "corps",
      },
      {
        id: 28,
        name: "Maillot Simple",
        duration: "20 min",
        price: "14€",
        description: "",
        category: "epilationsFemmes",
        zone: "intime",
      },
      {
        id: 29,
        name: "Maillot Échancré",
        duration: "25 min",
        price: "20€",
        description: "",
        category: "epilationsFemmes",
        zone: "intime",
      },
      {
        id: 30,
        name: "Maillot Semi-Intégral",
        duration: "30 min",
        price: "25€",
        description: "",
        category: "epilationsFemmes",
        zone: "intime",
      },
      {
        id: 31,
        name: "Maillot Intégral",
        duration: "35 min",
        price: "30€",
        description: "",
        category: "epilationsFemmes",
        zone: "intime",
      },
      {
        id: 32,
        name: "Interfessier",
        duration: "10 min",
        price: "10€",
        description: "",
        category: "epilationsFemmes",
        zone: "intime",
      },
      {
        id: 33,
        name: "Fesses",
        duration: "15 min",
        price: "14€",
        description: "",
        category: "epilationsFemmes",
        zone: "corps",
      },
      {
        id: 34,
        name: "1/2 Jambes",
        duration: "25 min",
        price: "19€",
        description: "",
        category: "epilationsFemmes",
        zone: "jambes",
      },
      {
        id: 35,
        name: "3/4 Jambes",
        duration: "35 min",
        price: "24€",
        description: "",
        category: "epilationsFemmes",
        zone: "jambes",
      },
      {
        id: 36,
        name: "Cuisses",
        duration: "30 min",
        price: "22€",
        description: "",
        category: "epilationsFemmes",
        zone: "jambes",
      },
      {
        id: 37,
        name: "Jambes Complètes",
        duration: "45 min",
        price: "30€",
        description: "",
        category: "epilationsFemmes",
        zone: "jambes",
      },
      {
        id: 38,
        name: "Bas du Ventre / Bas du Dos",
        duration: "10 min",
        price: "7€",
        description: "",
        category: "epilationsFemmes",
        zone: "corps",
      },
    ],
    forfaits: [
      {
        id: 39,
        name: "Aisselles + 1/2 Jambes + Maillot Simple",
        duration: "1h",
        price: "42€",
        description: "",
        category: "forfaits",
        zones: ["aisselles", "jambes", "maillot"],
        featured: true,
      },
      {
        id: 40,
        name: "Aisselles + 1/2 Jambes + Maillot Échancré",
        duration: "1h10",
        price: "48€",
        description: "",
        category: "forfaits",
        zones: ["aisselles", "jambes", "maillot"],
      },
      {
        id: 41,
        name: "Aisselles + 1/2 Jambes + Maillot Semi-Intégral",
        duration: "1h15",
        price: "53€",
        description: "",
        category: "forfaits",
        zones: ["aisselles", "jambes", "maillot"],
      },
      {
        id: 42,
        name: "Aisselles + 1/2 Jambes + Maillot Intégral",
        duration: "1h20",
        price: "58€",
        description: "",
        category: "forfaits",
        zones: ["aisselles", "jambes", "maillot"],
      },
      {
        id: 43,
        name: "Aisselles + Jambes Complètes + Maillot Simple",
        duration: "1h15",
        price: "53€",
        description: "",
        category: "forfaits",
        zones: ["aisselles", "jambes", "maillot"],
        featured: true,
      },
      {
        id: 44,
        name: "Aisselles + Jambes Complètes + Maillot Échancré",
        duration: "1h25",
        price: "59€",
        description: "",
        category: "forfaits",
        zones: ["aisselles", "jambes", "maillot"],
      },
      {
        id: 45,
        name: "Aisselles + Jambes Complètes + Maillot Semi-Intégral",
        duration: "1h30",
        price: "64€",
        description: "",
        category: "forfaits",
        zones: ["aisselles", "jambes", "maillot"],
      },
      {
        id: 46,
        name: "Aisselles + Jambes Complètes + Maillot Intégral",
        duration: "1h35",
        price: "69€",
        description: "",
        category: "forfaits",
        zones: ["aisselles", "jambes", "maillot"],
        featured: true,
      },
    ],
    epilationsHommes: [
      {
        id: 47,
        name: "Sourcils",
        duration: "15 min",
        price: "10€",
        description: "",
        category: "epilationsHommes",
        zone: "visage",
      },
      {
        id: 48,
        name: "Nez ou Oreilles",
        duration: "10 min",
        price: "7€",
        description: "",
        category: "epilationsHommes",
        zone: "visage",
      },
      {
        id: 49,
        name: "Aisselles",
        duration: "20 min",
        price: "15€",
        description: "",
        category: "epilationsHommes",
        zone: "corps",
      },
      {
        id: 50,
        name: "Épaules",
        duration: "25 min",
        price: "15€",
        description: "",
        category: "epilationsHommes",
        zone: "corps",
      },
      {
        id: 51,
        name: "Torse",
        duration: "35 min",
        price: "25€",
        description: "",
        category: "epilationsHommes",
        zone: "corps",
        featured: true,
      },
      {
        id: 52,
        name: "Bas du Dos",
        duration: "15 min",
        price: "10€",
        description: "",
        category: "epilationsHommes",
        zone: "dos",
      },
      {
        id: 53,
        name: "Dos Complet",
        duration: "40 min",
        price: "25€",
        description: "",
        category: "epilationsHommes",
        zone: "dos",
        featured: true,
      },
      {
        id: 54,
        name: "1/2 Jambes",
        duration: "30 min",
        price: "24€",
        description: "",
        category: "epilationsHommes",
        zone: "jambes",
      },
      {
        id: 55,
        name: "Jambes Complètes",
        duration: "50 min",
        price: "35€",
        description: "",
        category: "epilationsHommes",
        zone: "jambes",
        featured: true,
      },
    ],
  };

  // Filtres disponibles
  const filters = [
    { id: "tous", name: "Tous les soins", icon: "💅" },
    { id: "mains", name: "Soins des Mains", icon: "👐" },
    { id: "pieds", name: "Soins des Pieds", icon: "🦶" },
    { id: "teintures", name: "Teintures Cils & Sourcils", icon: "👁️" },
    { id: "epilationsFemmes", name: "Épilations Femmes", icon: "♀️" },
    { id: "forfaits", name: "Forfaits Épilation", icon: "📦" },
    { id: "epilationsHommes", name: "Épilations Hommes", icon: "♂️" },
  ];

  // Fonction pour filtrer les soins
  const getFilteredSoins = () => {
    if (activeFilter === "tous") {
      return Object.values(soinsData).flat();
    }
    return soinsData[activeFilter] || [];
  };

  const filteredSoins = getFilteredSoins();

  return (
    <div className="min-h-screen bg-nude-50">
      <Navigation />

      {/* Header Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-nude-100 to-nude-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-serif font-bold text-nude-800 mb-6 leading-tight">
              Soins Esthétiques
            </h1>
            <p className="text-xl md:text-2xl text-nude-600 max-w-4xl mx-auto leading-relaxed">
              Sublimez votre beauté avec nos soins esthétiques professionnels,
              des mains aux pieds en passant par l&apos;épilation
            </p>
          </div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="py-4 md:py-8 bg-white shadow-sm sticky top-20 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Version mobile - Custom Dropdown */}
          <div className="block md:hidden">
            <CustomDropdown
              options={filters.map((filter) => ({
                value: filter.id,
                label: `${filter.icon} ${filter.name} ${
                  activeFilter === filter.id ? `(${filteredSoins.length})` : ""
                }`,
              }))}
              value={activeFilter}
              onChange={setActiveFilter}
              placeholder="Choisir une catégorie"
            />
          </div>

          {/* Version desktop - Boutons */}
          <div className="hidden md:flex flex-wrap justify-center gap-3">
            {filters.map((filter) => (
              <motion.button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-6 py-3 rounded-full font-medium text-sm transition-all duration-300 flex items-center gap-2 ${
                  activeFilter === filter.id
                    ? "bg-nude-600 text-white shadow-lg"
                    : "bg-nude-100 text-nude-700 hover:bg-nude-200"
                }`}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.2 }}
              >
                <span>{filter.icon}</span>
                <span>{filter.name}</span>
                {activeFilter === filter.id && (
                  <span className="bg-white text-nude-600 text-xs px-2 py-1 rounded-full font-semibold">
                    {filteredSoins.length}
                  </span>
                )}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Soins Cards Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredSoins.map((soin) => (
              <motion.div
                key={soin.id}
                className={`bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col h-full ${
                  soin.featured ? "ring-2 ring-nude-400 ring-opacity-50" : ""
                }`}
                whileHover={{ y: -5, scale: 1.02 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
              >
                {/* Contenu de la carte */}
                <div className="p-6 flex flex-col flex-grow">
                  {/* En-tête avec badges */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {soin.featured && (
                      <span className="bg-nude-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                        ⭐ Populaire
                      </span>
                    )}
                    {soin.brand && (
                      <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-semibold">
                        🏷️ {soin.brand}
                      </span>
                    )}
                    {soin.type === "premium" && (
                      <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                        ✨ Premium
                      </span>
                    )}
                    {soin.type === "combo" && (
                      <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-xs font-semibold">
                        🎯 Combo
                      </span>
                    )}
                    {soin.type === "option" && (
                      <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-semibold">
                        ➕ Option
                      </span>
                    )}
                  </div>

                  {/* Titre */}
                  <h3 className="text-xl font-serif font-semibold text-nude-800 leading-tight mb-3">
                    {soin.name}
                  </h3>

                  {/* Description - zone flexible */}
                  <div className="flex-grow">
                    {soin.description && (
                      <p className="text-nude-600 leading-relaxed mb-4">
                        {soin.description}
                      </p>
                    )}

                    {soin.details && (
                      <div className="bg-nude-50 rounded-xl p-4 mb-4">
                        <p className="text-sm text-nude-600 italic">
                          {soin.details}
                        </p>
                      </div>
                    )}

                    {soin.zones && (
                      <div className="flex flex-wrap gap-1 mb-4">
                        {soin.zones.map((zone, index) => (
                          <span
                            key={index}
                            className="bg-nude-100 text-nude-700 px-2 py-1 rounded text-xs"
                          >
                            {zone}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Footer avec prix et durée - toujours en bas */}
                  <div className="mt-auto pt-4 border-t border-nude-100">
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <div className="text-nude-500 text-sm font-medium">
                          {soin.duration}
                        </div>
                        <div className="text-2xl font-bold text-nude-600">
                          {soin.price}
                        </div>
                      </div>
                      {soin.durationWithSemiPermanent &&
                        soin.priceWithSemiPermanent && (
                          <div className="flex justify-between items-center">
                            <div className="text-nude-500 text-sm font-medium">
                              {soin.durationWithSemiPermanent}
                            </div>
                            <div className="text-2xl font-bold text-nude-600">
                              {soin.priceWithSemiPermanent}
                            </div>
                          </div>
                        )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section Info Cire */}
      <section className="py-16 bg-nude-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Nos techniques */}
            <motion.div
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
              whileHover={{ scale: 1.02, y: -3 }}
              transition={{ duration: 0.2 }}
            >
              <h3 className="text-2xl font-serif font-semibold text-nude-700 mb-6">
                Nos Techniques & Produits
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <span className="text-nude-400">🌿</span>
                  <div>
                    <h4 className="font-semibold text-nude-700 mb-1">
                      Cire Traditionnelle
                    </h4>
                    <p className="text-sm text-nude-600">
                      Cire douce adaptée aux peaux sensibles pour un résultat
                      optimal.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-nude-400">💅</span>
                  <div>
                    <h4 className="font-semibold text-nude-700 mb-1">
                      Vernis Semi-Permanent
                    </h4>
                    <p className="text-sm text-nude-600">
                      Tenue jusqu&apos;à 3 semaines avec des couleurs
                      éclatantes.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-nude-400">🦶</span>
                  <div>
                    <h4 className="font-semibold text-nude-700 mb-1">
                      YumiFeet
                    </h4>
                    <p className="text-sm text-nude-600">
                      Technique révolutionnaire pour des pieds parfaitement
                      lisses.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-nude-400">👁️</span>
                  <div>
                    <h4 className="font-semibold text-nude-700 mb-1">
                      Teintures Professionnelles
                    </h4>
                    <p className="text-sm text-nude-600">
                      Produits de qualité pour un regard naturellement
                      intensifié.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Conseils et info */}
            <motion.div
              className="bg-nude-600 text-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
              whileHover={{ scale: 1.02, y: -3 }}
              transition={{ duration: 0.2 }}
            >
              <h3 className="text-2xl font-serif font-semibold mb-6">
                Conseils & Informations
              </h3>
              <div className="space-y-4 text-sm opacity-90">
                <div className="flex items-start space-x-3">
                  <span className="text-nude-200">⏰</span>
                  <div>
                    <h4 className="font-semibold mb-1">Rendez-vous</h4>
                    <p>
                      Nous recommandons de prendre rendez-vous à l&apos;avance
                      pour garantir votre créneau.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-nude-200">🌱</span>
                  <div>
                    <h4 className="font-semibold mb-1">Préparation</h4>
                    <p>
                      Pour l&apos;épilation, évitez l&apos;exposition au soleil
                      48h avant et après le soin.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-nude-200">💎</span>
                  <div>
                    <h4 className="font-semibold mb-1">Qualité</h4>
                    <p>
                      Tous nos soins sont réalisés avec des produits
                      professionnels de haute qualité.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-nude-200">✨</span>
                  <div>
                    <h4 className="font-semibold mb-1">Forfaits Avantageux</h4>
                    <p>
                      Découvrez nos forfaits épilation pour un excellent rapport
                      qualité-prix.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Call to action */}
      <section className="py-16 bg-gradient-to-r from-nude-400 to-nude-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-serif font-semibold text-white mb-6">
              Prête pour sublimer votre beauté ?
            </h2>
            <p className="text-xl text-white opacity-90 mb-8">
              Réservez dès maintenant votre soin esthétique et laissez nos
              expertes prendre soin de vous.
            </p>
            <motion.a
              href="https://www.kalendes.com/site/serenityspanoemiesaddier/welcome"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-nude-800 px-8 py-4 rounded-full font-semibold text-lg hover:bg-nude-50 transition-colors shadow-xl inline-block"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2 }}
            >
              Réserver maintenant
            </motion.a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
