"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";

export default function Soins() {
  const [activeFilter, setActiveFilter] = useState("tous");

  // Données des soins organisées par catégorie
  const soinsData = {
    gommages: [
      {
        id: 1,
        name: "Gommage Corps",
        duration: "45 min",
        price: "50€",
        description:
          "Exfoliation du corps suivi d'une hydration pour une peau lisse et veloutée.",
        details:
          "Senteurs : Vanille, mangue, fleur de cerisier, agrumes, amyris/patchouli, feuilles vertes",
        category: "gommages",
        image: "/image/gommage.jpg",
      },
      {
        id: 2,
        name: "Enveloppement au Beurre de Karité",
        duration: "30 min",
        price: "50€",
        description:
          "Nutrition intense du corps pour une peau douce et nourrie.",
        details:
          "Senteur : Vanille, mangue, fleur de cerisier, agrumes, amyris/patchouli, feuilles vertes",
        category: "gommages",
        image: "/image/enveloppement.jpg",
      },
    ],
    signatures: [
      {
        id: 3,
        name: "Massage Visage et Cuir Chevelu",
        duration: "30 min",
        price: "50€",
        description:
          "Libérez votre visage de ses tensions pour un lâcher prise immédiat.",
        category: "signatures",
        image: "/image/massage-visage.jpg",
      },
      {
        id: 4,
        name: "Délice Dos, Nuque, Épaules",
        duration: "30 min",
        price: "50€",
        description: "Lâcher prise des tensions du haut du corps",
        category: "signatures",
        image: "/image/massage-dos.jpg",
      },
      {
        id: 5,
        name: "Massage Signature Serenity",
        duration: "30 min à 1h30",
        price: "50€ - 110€",
        description: "Massage sur mesure selon vos besoins et vos envies.",
        details:
          "30 min arrière du corps 50€ | 45 min arrière du corps 65€ | 1h 80€ | 1h15 95€ | 1h30 110€",
        category: "signatures",
        featured: true,
        image: "/image/massage-signature.jpg",
      },
      {
        id: 6,
        name: "Massage Future Maman",
        duration: "1h15",
        price: "95€",
        description:
          "Massage spécifique doux pour un moment de détente de la future maman.",
        details:
          "À partir du 4e mois jusqu'au 8e mois. (Position PLS et sur le dos)",
        category: "signatures",
        special: "future-maman",
        image: "/image/massage-future-maman.jpg",
      },
      {
        id: 7,
        name: "Massage Future Maman - Avant du Corps",
        duration: "30 min",
        price: "50€",
        description: "Massage doux spécialement adapté aux futures mamans.",
        category: "signatures",
        special: "future-maman",
        image: "/image/massage-future-maman.jpg",
      },
    ],
    mondes: [
      {
        id: 8,
        name: "Massage Lomi Lomi",
        duration: "1h",
        price: "85€",
        description:
          "Massage d'inspiration hawaïenne, enveloppant et cocooning reliant le corps, le cœur et l'âme.",
        details: "Procure une déconnexion totale (massage protocolé)",
        category: "mondes",
        origin: "Hawaï",
        image: "/image/massage-lomi-lomi.jpg",
      },
      {
        id: 9,
        name: "Massage Balinais",
        duration: "1h",
        price: "85€",
        description:
          "Massage ancestral issu des cultures indiennes, indonésiennes et chinoises.",
        details:
          "À la fois doux et tonique, relaxant et énergétique. Permet de retrouver une harmonie totale entre le corps et l'esprit.",
        category: "mondes",
        origin: "Bali",
        image: "/image/massage-balinais.jpg",
      },
      {
        id: 10,
        name: "Massage Signature à la Bougie",
        duration: "1h / 1h15",
        price: "85€ / 95€",
        description:
          "Le plus cocooning et nourrissant des massages pour un véritable moment de détente.",
        category: "mondes",
        featured: true,
        image: "/image/massage-bougie.jpg",
      },
      {
        id: 11,
        name: "Massage Suédois",
        duration: "1h15",
        price: "95€",
        description:
          "Massage type sportif, lent et appuyé pour un relâchement profond des muscles.",
        category: "mondes",
        origin: "Suède",
        image: "/image/massage-suedois.jpg",
      },
      {
        id: 12,
        name: "Massages aux Pierres Chaudes",
        duration: "1h15",
        price: "105€",
        description:
          "Associant les mains de la praticienne et les pierres volcaniques.",
        details: "Ce massage procure une relaxation intense",
        category: "mondes",
        featured: true,
        image: "/image/massage-pierre-chaude.jpeg",
      },
    ],
    enfants: [
      {
        id: 13,
        name: "Soin Visage Enfant et Ado",
        duration: "30 min",
        price: "45€",
        description: "Gel nettoyant, massage visage, masque, crème.",
        category: "enfants",
        ageRange: "Enfants et Ados",
        image: "/image/soin-enfant.jpeg",
      },
      {
        id: 14,
        name: "Massage Enfant",
        duration: "30 min",
        price: "45€",
        description: "Massage du corps (jambes, dos, bras, tête)",
        category: "enfants",
        ageRange: "6 à 10 ans",
        image: "/image/massage-enfant.jpg",
      },
      {
        id: 15,
        name: "Massage Ado",
        duration: "30 min / 45 min",
        price: "45€ / 60€",
        description: "Massage du corps entier ou arrière-corps",
        category: "enfants",
        ageRange: "À partir de 11 ans",
        image: "/image/massage-ado.jpg",
      },
    ],
    famille: [
      {
        id: 16,
        name: "Duo Complice Massage Parent / Enfant",
        duration: "30 min",
        price: "95€",
        description:
          "Moment de complicité et de détente partagé entre parent et enfant.",
        category: "famille",
        type: "duo",
        image: "/image/soin-parent-enfant.jpeg",
      },
      {
        id: 17,
        name: "Duo Complice Massage Parent / Ado",
        duration: "30 min / 45 min",
        price: "95€ / 125€",
        description:
          "Expérience de bien-être partagée entre parent et adolescent.",
        category: "famille",
        type: "duo",
        image: "/image/duo-parent-ado.jpg",
      },
      {
        id: 18,
        name: "Duo Complice Visage et Corps",
        duration: "1h",
        price: "190€",
        description: "30min de massage et 30 min de soin visage",
        category: "famille",
        type: "duo",
        featured: true,
        image: "/image/duo-visage-corps.jpg",
      },
    ],
    evasions: [
      {
        id: 19,
        name: "Rituel Délassant Dos",
        duration: "45 min / 1h",
        price: "55€ / 65€",
        description:
          "Gommage, enveloppement et massage du dos pour une détente absolue.",
        details:
          "Possibilité de rajouter vapeur + retrait des points noirs. Senteurs au choix : Vanille, mangue, fleur de cerisier, Amyris/patchouli, Agrumes",
        category: "evasions",
        brand: "MySpa",
        image: "/image/rituel-dos.jpg",
      },
      {
        id: 20,
        name: "Evasion Douceur",
        duration: "1h",
        price: "90€",
        description: "Gommage au choix et son enveloppement.",
        details:
          "Senteurs au choix : Vanille, mangue, fleur de cerisier, Amyris/patchouli, Agrumes",
        category: "evasions",
        brand: "MySpa",
        image: "/image/evasion-douceur.jpg",
      },
      {
        id: 21,
        name: "Evasion Cocooning",
        duration: "1h / 1h30",
        price: "90€ / 120€",
        description: "Gommage au choix et massage Signature.",
        details:
          "Gommage au choix, massage Signature 30min / 1h. Senteurs au choix : Vanille, mangue, fleur de cerisier, Amyris/patchouli, Agrumes",
        category: "evasions",
        brand: "MySpa",
        featured: true,
        image: "/image/evasion-cocooning.jpg",
      },
      {
        id: 22,
        name: "Evasion Sérénité",
        duration: "1h30 / 2h",
        price: "110€ / 135€",
        description: "Massage signature et soin du visage MySpa.",
        details:
          "Massage signature 30min / 1h, soin du visage MySpa. Senteurs au choix : Vanille, mangue, fleur de cerisier, Amyris/patchouli, Agrumes",
        category: "evasions",
        brand: "MySpa",
        image: "/image/evasion-serenite.jpg",
      },
      {
        id: 23,
        name: "Evasion Signature MySpa",
        duration: "1h30 / 2h",
        price: "135€ / 165€",
        description:
          "Gommage, enveloppement et massage Signature pour un moment d'exception.",
        details:
          "Gommage au choix et enveloppement, massage Signature 30min/1h. Senteurs au choix : Vanille, mangue, fleur de cerisier, Amyris/patchouli, Agrumes",
        category: "evasions",
        brand: "MySpa",
        featured: true,
        image: "/image/evasion-signature.jpg",
      },
      {
        id: 24,
        name: "Evasion Délicate",
        duration: "2h / 2h30",
        price: "135€ / 165€",
        description: "Rituel complet alliant gommage, massage et soin visage.",
        details:
          "Gommage au choix, massage Signature 30min / 1h, soin du visage MySpa. Senteurs au choix : Vanille, mangue, fleur de cerisier, Amyris/patchouli, Agrumes",
        category: "evasions",
        brand: "MySpa",
        image: "/image/evasion-delicate.jpg",
      },
      {
        id: 25,
        name: "Evasion Prestige",
        duration: "2h30 / 3h",
        price: "198€ / 225€",
        description:
          "Le rituel ultime MySpa pour une expérience de bien-être complète.",
        details:
          "Gommage au choix, enveloppement, massage 30min/1h, soin du visage MySpa. Senteurs au choix : Vanille, mangue, fleur de cerisier, Amyris/patchouli, Agrumes",
        category: "evasions",
        brand: "MySpa",
        featured: true,
        image: "/image/evasion-prestige.jpg",
      },
    ],
  };

  // Filtres disponibles
  const filters = [
    { id: "tous", name: "Tous les soins", icon: "🌿" },
    { id: "gommages", name: "Gommages & Enveloppements", icon: "🧴" },
    { id: "signatures", name: "Massages Signatures", icon: "💆‍♀️" },
    { id: "mondes", name: "Massages du Monde", icon: "🌍" },
    { id: "evasions", name: "Evasions sur-mesure MySpa", icon: "🌸" },
    { id: "enfants", name: "Enfants & Ados", icon: "👶" },
    { id: "famille", name: "Soins Duo Famille", icon: "👨‍👩‍👧‍👦" },
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
              Nos Soins
            </h1>
            <p className="text-xl md:text-2xl text-nude-600 max-w-4xl mx-auto leading-relaxed">
              Découvrez notre gamme complète de soins et massages conçus pour
              votre bien-être et votre détente
            </p>
          </div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="py-8 bg-white shadow-sm sticky top-20 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-3">
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
                    {soin.brand === "MySpa" && (
                      <span className="bg-gradient-to-r from-rose-400 to-pink-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                        🌸 MySpa
                      </span>
                    )}
                    {soin.origin && (
                      <span className="bg-nude-100 text-nude-700 px-3 py-1 rounded-full text-xs font-semibold">
                        🌍 {soin.origin}
                      </span>
                    )}
                    {soin.ageRange && (
                      <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-semibold">
                        👶 {soin.ageRange}
                      </span>
                    )}
                    {soin.type === "duo" && (
                      <span className="bg-pink-100 text-pink-700 px-3 py-1 rounded-full text-xs font-semibold">
                        👨‍👩‍👧‍👦 Duo
                      </span>
                    )}
                    {soin.brand === "Yumi Beauty" && (
                      <span className="bg-gradient-to-r from-blue-400 to-purple-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                        💎 Yumi Beauty
                      </span>
                    )}
                    {soin.type === "technique" && (
                      <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-semibold">
                        🔬 Technique
                      </span>
                    )}
                    {soin.type === "traditionnel" && (
                      <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-xs font-semibold">
                        🌺 Traditionnel
                      </span>
                    )}
                    {soin.type === "cure" && (
                      <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-xs font-semibold">
                        📋 Cure
                      </span>
                    )}
                    {soin.technology === "HydraFace" && (
                      <span className="bg-cyan-100 text-cyan-700 px-3 py-1 rounded-full text-xs font-semibold">
                        💧 HydraFace
                      </span>
                    )}
                  </div>

                  {/* Titre */}
                  <h3 className="text-xl font-serif font-semibold text-nude-800 leading-tight mb-3">
                    {soin.name}
                  </h3>

                  {/* Description - zone flexible */}
                  <div className="flex-grow">
                    <p className="text-nude-600 leading-relaxed mb-4">
                      {soin.description}
                    </p>

                    {soin.details && (
                      <div className="bg-nude-50 rounded-xl p-4 mb-4">
                        <p className="text-sm text-nude-600 italic">
                          {soin.details}
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Footer avec prix et durée - toujours en bas */}
                  <div className="mt-auto pt-4 border-t border-nude-100">
                    <div className="flex justify-between items-center">
                      <div className="text-nude-500 text-sm font-medium">
                        {soin.duration}
                      </div>
                      <div className="text-2xl font-bold text-nude-600">
                        {soin.price}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Informations importantes */}
      <section className="py-16 bg-nude-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Options et abonnements */}
            <motion.div
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
              whileHover={{ scale: 1.02, y: -3 }}
              transition={{ duration: 0.2 }}
            >
              <h3 className="text-2xl font-serif font-semibold text-nude-700 mb-6">
                Options & Abonnements
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center p-4 bg-nude-50 rounded-xl">
                  <span className="font-medium text-nude-700">
                    Option SPA privatif 1h30
                  </span>
                  <span className="text-nude-600 font-semibold">+55€</span>
                </div>
                <div className="border-t border-nude-200 pt-4">
                  <h4 className="font-semibold text-nude-700 mb-3">
                    Abonnements Massages Serenity
                  </h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>5 massages 30 min</span>
                      <span className="font-semibold">220€</span>
                    </div>
                    <div className="flex justify-between">
                      <span>5 massages 1h</span>
                      <span className="font-semibold">360€</span>
                    </div>
                    <div className="flex justify-between">
                      <span>5 massages 1h30</span>
                      <span className="font-semibold">495€</span>
                    </div>
                    <p className="text-xs text-nude-500 mt-2">Valable 6 mois</p>
                  </div>
                </div>
                <div className="border-t border-nude-200 pt-4 mt-4">
                  <h4 className="font-semibold text-nude-700 mb-3">
                    Option Évasions MySpa
                  </h4>
                  <div className="flex justify-between items-center p-3 bg-gradient-to-r from-rose-50 to-pink-50 rounded-xl">
                    <span className="font-medium text-nude-700">
                      Option SPA privatif 1h30 - 1 pers
                    </span>
                    <span className="text-nude-600 font-semibold">+55€</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Informations importantes */}
            <motion.div
              className="bg-nude-600 text-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
              whileHover={{ scale: 1.02, y: -3 }}
              transition={{ duration: 0.2 }}
            >
              <h3 className="text-2xl font-serif font-semibold mb-6">
                Informations Importantes
              </h3>
              <div className="space-y-4 text-sm opacity-90">
                <div className="flex items-start space-x-3">
                  <span className="text-nude-200">💆‍♀️</span>
                  <p>
                    Les massages signatures et du monde peuvent se faire en duo
                    sur demande.
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-nude-200">🌿</span>
                  <p>
                    Les massages pratiqués sont des massages de détente et de
                    bien-être.
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-nude-200">⚕️</span>
                  <p>
                    Il n&apos;y a aucun but thérapeutique, médical ou sexuel.
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-nude-200">🤱</span>
                  <p>Massage Future Maman : du 4e au 8e mois de grossesse.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section Soins Visage d'Exception */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-light text-nude-700 mb-6">
              Soins Visage d&apos;Exception
            </h2>
            <p className="text-xl text-nude-600 max-w-4xl mx-auto leading-relaxed">
              Découvrez nos deux univers de soins visage : les rituels
              traditionnels MySpa pour un voyage sensoriel, et la technologie
              HydraFace by Yumi Beauty pour des résultats visibles immédiatement
            </p>
          </div>

          {/* Soins Traditionnels MySpa */}
          <div className="mb-16">
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-gradient-to-r from-rose-400 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">🌸</span>
              </div>
              <h3 className="text-3xl font-serif font-semibold text-nude-700 mb-4">
                Soins Traditionnels MySpa
              </h3>
              <p className="text-lg text-nude-600 max-w-2xl mx-auto">
                Découvrez les soins traditionnels de MySpa où chaque univers
                vous emmène en voyage à travers le monde
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {/* Rituel Lift Yeux */}
              <motion.div
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
                whileHover={{ y: -3, scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <div className="flex flex-wrap gap-2 mb-3">
                  <span className="bg-gradient-to-r from-rose-400 to-pink-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                    🌸 MySpa
                  </span>
                  <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-xs font-semibold">
                    🌺 Traditionnel
                  </span>
                </div>
                <h4 className="text-lg font-serif font-semibold text-nude-800 mb-2">
                  Rituel Lift Yeux
                </h4>
                <p className="text-nude-600 text-sm mb-3">
                  Soin ciblé contour des yeux pour retrouver un regard reposé et
                  lumineux.
                </p>
                <p className="text-nude-500 text-xs mb-4">
                  Ce soin peut s&apos;intégrer dans un autre soin visage MySpa
                  (12€)
                </p>
                <div className="flex justify-between items-center border-t border-nude-100 pt-3">
                  <span className="text-nude-500 text-sm">30 min</span>
                  <span className="text-xl font-bold text-nude-600">40€</span>
                </div>
              </motion.div>

              {/* Rituel Express Oxygénant */}
              <motion.div
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 ring-2 ring-nude-400 ring-opacity-50"
                whileHover={{ y: -3, scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <div className="flex flex-wrap gap-2 mb-3">
                  <span className="bg-nude-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                    ⭐ Populaire
                  </span>
                  <span className="bg-gradient-to-r from-rose-400 to-pink-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                    🌸 MySpa
                  </span>
                  <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-xs font-semibold">
                    🌺 Traditionnel
                  </span>
                </div>
                <h4 className="text-lg font-serif font-semibold text-nude-800 mb-2">
                  Rituel Express Oxygénant
                </h4>
                <p className="text-nude-600 text-sm mb-3">
                  Ce soin express adapté à tous, laissera votre peau hydratée et
                  oxygénée.
                </p>
                <p className="text-nude-500 text-xs mb-4">
                  Nettoyage, gommage, masque, crème. Avec option LED thérapie:
                  90€
                </p>
                <div className="flex justify-between items-center border-t border-nude-100 pt-3">
                  <span className="text-nude-500 text-sm">30 min</span>
                  <span className="text-xl font-bold text-nude-600">50€</span>
                </div>
              </motion.div>

              {/* Rituel Visage au choix */}
              <motion.div
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 ring-2 ring-nude-400 ring-opacity-50"
                whileHover={{ y: -3, scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <div className="flex flex-wrap gap-2 mb-3">
                  <span className="bg-nude-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                    ⭐ Populaire
                  </span>
                  <span className="bg-gradient-to-r from-rose-400 to-pink-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                    🌸 MySpa
                  </span>
                </div>
                <h4 className="text-lg font-serif font-semibold text-nude-800 mb-2">
                  Rituel Visage au Choix
                </h4>
                <p className="text-nude-600 text-sm mb-3">
                  Voyage sensoriel avec trois univers au choix selon votre type
                  de peau.
                </p>
                <div className="text-xs text-nude-500 mb-4 space-y-1">
                  <p>🏝️ Lagons de Polynésie (Toutes peaux)</p>
                  <p>👑 Cléopâtre (Peau mixte à grasse)</p>
                  <p>🌸 Secrets du Japon (Peau sensible)</p>
                  <p className="mt-2">Avec option LED thérapie: 109€</p>
                </div>
                <div className="flex justify-between items-center border-t border-nude-100 pt-3">
                  <span className="text-nude-500 text-sm">1h</span>
                  <span className="text-xl font-bold text-nude-600">69€</span>
                </div>
              </motion.div>

              {/* Rituel Jeunesse Lift */}
              <motion.div
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 ring-2 ring-nude-400 ring-opacity-50"
                whileHover={{ y: -3, scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <div className="flex flex-wrap gap-2 mb-3">
                  <span className="bg-nude-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                    ⭐ Populaire
                  </span>
                  <span className="bg-gradient-to-r from-rose-400 to-pink-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                    🌸 MySpa
                  </span>
                </div>
                <h4 className="text-lg font-serif font-semibold text-nude-800 mb-2">
                  Rituel Jeunesse - Effet Lift
                </h4>
                <p className="text-nude-600 text-sm mb-3">
                  Soin anti-âge aux actifs d&apos;exception pour retrouver
                  jeunesse et vitalité.
                </p>
                <p className="text-nude-500 text-xs mb-4">
                  Actifs au caviar pour rides et fermeté. Avec option LED
                  thérapie: 120€
                </p>
                <div className="flex justify-between items-center border-t border-nude-100 pt-3">
                  <span className="text-nude-500 text-sm">1h</span>
                  <span className="text-xl font-bold text-nude-600">80€</span>
                </div>
              </motion.div>

              {/* Rituel Jeunesse Tenseur */}
              <motion.div
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 ring-2 ring-nude-400 ring-opacity-50"
                whileHover={{ y: -3, scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <div className="flex flex-wrap gap-2 mb-3">
                  <span className="bg-nude-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                    ⭐ Populaire
                  </span>
                  <span className="bg-gradient-to-r from-rose-400 to-pink-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                    🌸 MySpa
                  </span>
                </div>
                <h4 className="text-lg font-serif font-semibold text-nude-800 mb-2">
                  Rituel Jeunesse - Effet Tenseur
                </h4>
                <p className="text-nude-600 text-sm mb-3">
                  Soin anti-âge global alliant luxe et volupté grâce au pouvoir
                  du caviar.
                </p>
                <p className="text-nude-500 text-xs mb-4">
                  Anti-âge global et taches pigmentaires
                </p>
                <div className="flex justify-between items-center border-t border-nude-100 pt-3">
                  <span className="text-nude-500 text-sm">1h</span>
                  <span className="text-xl font-bold text-nude-600">90€</span>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Soins Techniques HydraFace */}
          <div className="mb-16">
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">💎</span>
              </div>
              <h3 className="text-3xl font-serif font-semibold text-nude-700 mb-4">
                Soins Techniques HydraFace by Yumi Beauty
              </h3>
              <p className="text-lg text-nude-600 max-w-3xl mx-auto">
                Technologie brevetée avec acides de fruits et vitamines pour une
                luminosité spectaculaire instantanée
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6 mb-8">
              {/* HydraYeux */}
              <motion.div
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
                whileHover={{ y: -3, scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <div className="flex flex-wrap gap-2 mb-3">
                  <span className="bg-gradient-to-r from-blue-400 to-purple-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                    💎 Yumi Beauty
                  </span>
                  <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-semibold">
                    🔬 Technique
                  </span>
                  <span className="bg-cyan-100 text-cyan-700 px-3 py-1 rounded-full text-xs font-semibold">
                    💧 HydraFace
                  </span>
                </div>
                <h4 className="text-lg font-serif font-semibold text-nude-800 mb-2">
                  HydraYeux Défatiguant + LED
                </h4>
                <p className="text-nude-600 text-sm mb-4">
                  Soin ciblé contour des yeux pour un regard reposé avec LED
                  thérapie.
                </p>
                <div className="flex justify-between items-center border-t border-nude-100 pt-3">
                  <span className="text-nude-500 text-sm">45 min</span>
                  <span className="text-xl font-bold text-nude-600">55€</span>
                </div>
              </motion.div>

              {/* HydraFace Pureté */}
              <motion.div
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 ring-2 ring-nude-400 ring-opacity-50"
                whileHover={{ y: -3, scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <div className="flex flex-wrap gap-2 mb-3">
                  <span className="bg-nude-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                    ⭐ Populaire
                  </span>
                  <span className="bg-gradient-to-r from-blue-400 to-purple-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                    💎 Yumi Beauty
                  </span>
                  <span className="bg-cyan-100 text-cyan-700 px-3 py-1 rounded-full text-xs font-semibold">
                    💧 HydraFace
                  </span>
                </div>
                <h4 className="text-lg font-serif font-semibold text-nude-800 mb-2">
                  HydraFace Pureté
                </h4>
                <p className="text-nude-600 text-sm mb-3">
                  Nettoyage intense combiné à un masque hydratant et à la
                  cryothérapie.
                </p>
                <p className="text-nude-500 text-xs mb-4">
                  Avec option LED thérapie (15min): 120€
                </p>
                <div className="flex justify-between items-center border-t border-nude-100 pt-3">
                  <span className="text-nude-500 text-sm">1h - 1h15</span>
                  <span className="text-xl font-bold text-nude-600">80€</span>
                </div>
              </motion.div>

              {/* Soin Ciblé Anti-Âge */}
              <motion.div
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 ring-2 ring-nude-400 ring-opacity-50"
                whileHover={{ y: -3, scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <div className="flex flex-wrap gap-2 mb-3">
                  <span className="bg-nude-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                    ⭐ Populaire
                  </span>
                  <span className="bg-gradient-to-r from-blue-400 to-purple-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                    💎 Yumi Beauty
                  </span>
                  <span className="bg-cyan-100 text-cyan-700 px-3 py-1 rounded-full text-xs font-semibold">
                    💧 HydraFace
                  </span>
                </div>
                <h4 className="text-lg font-serif font-semibold text-nude-800 mb-2">
                  Soin Ciblé Anti-Âge
                </h4>
                <p className="text-nude-600 text-sm mb-3">
                  Soin anti-âge avec ultrasons, radiofréquence,
                  électrostimulation.
                </p>
                <p className="text-nude-500 text-xs mb-4">
                  Visage et cou avec masque et cryo. Avec option LED thérapie
                  (15min): 130€
                </p>
                <div className="flex justify-between items-center border-t border-nude-100 pt-3">
                  <span className="text-nude-500 text-sm">1h - 1h15</span>
                  <span className="text-xl font-bold text-nude-600">90€</span>
                </div>
              </motion.div>

              {/* HydraFace Prestige */}
              <motion.div
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 ring-2 ring-nude-400 ring-opacity-50"
                whileHover={{ y: -3, scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <div className="flex flex-wrap gap-2 mb-3">
                  <span className="bg-nude-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                    ⭐ Populaire
                  </span>
                  <span className="bg-gradient-to-r from-blue-400 to-purple-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                    💎 Yumi Beauty
                  </span>
                  <span className="bg-cyan-100 text-cyan-700 px-3 py-1 rounded-full text-xs font-semibold">
                    💧 HydraFace
                  </span>
                </div>
                <h4 className="text-lg font-serif font-semibold text-nude-800 mb-2">
                  HydraFace Prestige
                </h4>
                <p className="text-nude-600 text-sm mb-3">
                  Soin complet sur mesure alliant nettoyage de peau et soin
                  anti-âge.
                </p>
                <p className="text-nude-500 text-xs mb-4">
                  Visage et cou. Avec option LED thérapie (15min): 160€
                </p>
                <div className="flex justify-between items-center border-t border-nude-100 pt-3">
                  <span className="text-nude-500 text-sm">1h30 - 1h45</span>
                  <span className="text-xl font-bold text-nude-600">120€</span>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Cures Spécialisées */}
          <div className="mb-12">
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-400 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">📋</span>
              </div>
              <h3 className="text-3xl font-serif font-semibold text-nude-700 mb-4">
                Cures Spécialisées
              </h3>
              <p className="text-lg text-nude-600 max-w-3xl mx-auto">
                Pour un résultat optimal, il est recommandé de réaliser 3/4
                soins en cure d&apos;attaque et par la suite des séances en
                entretien
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {/* Cure Pureté */}
              <motion.div
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
                whileHover={{ y: -3, scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <div className="flex flex-wrap gap-2 mb-3">
                  <span className="bg-gradient-to-r from-blue-400 to-purple-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                    💎 Yumi Beauty
                  </span>
                  <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-xs font-semibold">
                    📋 Cure
                  </span>
                </div>
                <h4 className="text-lg font-serif font-semibold text-nude-800 mb-2">
                  Cure 3 Soins Pureté + LED
                </h4>
                <p className="text-nude-600 text-sm mb-3">
                  Cure de 3 soins Pureté avec LED thérapie pour un résultat
                  optimal.
                </p>
                <p className="text-nude-500 text-xs mb-4">
                  Un soin par mois. Pour un nettoyage en profondeur durable.
                </p>
                <div className="flex justify-between items-center border-t border-nude-100 pt-3">
                  <span className="text-nude-500 text-sm">3 séances</span>
                  <span className="text-xl font-bold text-nude-600">320€</span>
                </div>
              </motion.div>

              {/* Cure Prestige */}
              <motion.div
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 ring-2 ring-nude-400 ring-opacity-50"
                whileHover={{ y: -3, scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <div className="flex flex-wrap gap-2 mb-3">
                  <span className="bg-nude-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                    ⭐ Populaire
                  </span>
                  <span className="bg-gradient-to-r from-blue-400 to-purple-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                    💎 Yumi Beauty
                  </span>
                  <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-xs font-semibold">
                    📋 Cure
                  </span>
                </div>
                <h4 className="text-lg font-serif font-semibold text-nude-800 mb-2">
                  Cure 3 Soins Prestige + LED
                </h4>
                <p className="text-nude-600 text-sm mb-3">
                  Cure de 3 soins Prestige avec LED thérapie pour un
                  rajeunissement complet.
                </p>
                <p className="text-nude-500 text-xs mb-4">
                  Un soin par mois. Programme anti-âge intensif.
                </p>
                <div className="flex justify-between items-center border-t border-nude-100 pt-3">
                  <span className="text-nude-500 text-sm">3 séances</span>
                  <span className="text-xl font-bold text-nude-600">430€</span>
                </div>
              </motion.div>

              {/* Cure Anti-Âge */}
              <motion.div
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 ring-2 ring-nude-400 ring-opacity-50"
                whileHover={{ y: -3, scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <div className="flex flex-wrap gap-2 mb-3">
                  <span className="bg-nude-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                    ⭐ Populaire
                  </span>
                  <span className="bg-gradient-to-r from-blue-400 to-purple-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                    💎 Yumi Beauty
                  </span>
                  <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-xs font-semibold">
                    📋 Cure
                  </span>
                </div>
                <h4 className="text-lg font-serif font-semibold text-nude-800 mb-2">
                  Cure 4 Soins Anti-Âge + LED
                </h4>
                <p className="text-nude-600 text-sm mb-3">
                  Cure intensive de 4 soins anti-âge avec LED thérapie.
                </p>
                <p className="text-nude-500 text-xs mb-4">
                  Un soin par semaine. Cure d&apos;attaque pour un effet
                  maximal.
                </p>
                <div className="flex justify-between items-center border-t border-nude-100 pt-3">
                  <span className="text-nude-500 text-sm">4 séances</span>
                  <span className="text-xl font-bold text-nude-600">470€</span>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Option LED Thérapie */}
          <motion.div
            className="bg-gradient-to-r from-nude-600 to-nude-700 text-white rounded-3xl p-8 text-center max-w-4xl mx-auto"
            whileHover={{ scale: 1.02, y: -3 }}
            transition={{ duration: 0.2 }}
          >
            <div className="mb-6">
              <div className="w-20 h-20 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-3xl">💡</span>
              </div>
              <h3 className="text-2xl font-serif font-semibold mb-4">
                Option LED Thérapie
              </h3>
              <p className="text-lg opacity-90 leading-relaxed mb-6">
                Masque spécifique + Tunnel LED - L&apos;utilisation de la
                chromothérapie est fortement recommandée pour augmenter
                durablement les effets du soin et conserver plus longtemps les
                résultats obtenus
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 text-sm">
              <div className="bg-white bg-opacity-20 rounded-xl p-4 backdrop-blur-sm">
                <h4 className="font-semibold mb-2 text-gray-800">
                  Résultats Optimisés
                </h4>
                <p className="text-gray-800 opacity-90">
                  Effets du soin multipliés et prolongés
                </p>
              </div>
              <div className="bg-white bg-opacity-20 rounded-xl p-4 backdrop-blur-sm">
                <h4 className="font-semibold mb-2 text-gray-800">
                  Cure Recommandée
                </h4>
                <p className="text-gray-800 opacity-90">
                  3-4 soins pour un résultat optimal
                </p>
              </div>
              <div className="bg-white bg-opacity-20 rounded-xl p-4 backdrop-blur-sm">
                <h4 className="font-semibold mb-2 text-gray-800">
                  Option Spa Privatif
                </h4>
                <p className="text-gray-800 opacity-90">
                  1h30 pour 1 personne : 55€
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section LED THERAPIE - LED LIGHT IR 2.0 */}
      <section className="py-16 bg-gradient-to-br from-purple-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-light text-nude-700 mb-6">
              LED THERAPIE - LED LIGHT IR 2.0
            </h2>
            <p className="text-xl text-nude-600 max-w-4xl mx-auto leading-relaxed">
              Technologie nouvelle génération LLLT couplée à l&apos;infrarouge
              pour une régénération cellulaire totale
            </p>
          </div>

          {/* Présentation de la technologie */}
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            {/* Image et description */}
            <motion.div
              className="bg-white rounded-3xl p-8 shadow-xl"
              whileHover={{ y: -3, scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <div className="relative h-64 mb-6 rounded-2xl overflow-hidden">
                <Image
                  src="/image/IR2.png"
                  alt="LED LIGHT IR 2.0"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-2xl font-serif font-semibold text-nude-700 mb-4">
                Technologie LED LIGHT IR 2.0
              </h3>
              <p className="text-nude-600 leading-relaxed mb-4">
                Le LED LIGHT IR 2.0 est un dispositif nouvelle génération conçu
                pour traiter différentes problématiques de peau. Grâce à la
                technologie LLLT (Low Level Led Therapy) couplée à de
                l&apos;infrarouge, les longueurs d&apos;ondes sont transmises au
                niveau sous-cutané sous forme de chaleur.
              </p>
              <div className="space-y-2 text-sm text-nude-600">
                <p>✓ Facilite la circulation sanguine</p>
                <p>✓ Stimule le collagène et l&apos;élastine</p>
                <p>✓ Active le métabolisme cellulaire</p>
                <p>✓ Relaxation musculaire complète</p>
              </div>
            </motion.div>

            {/* Couleurs et bienfaits */}
            <motion.div
              className="bg-white rounded-3xl p-8 shadow-xl"
              whileHover={{ y: -3, scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <h3 className="text-2xl font-serif font-semibold text-nude-700 mb-6">
                4 Couleurs Thérapeutiques
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-blue-500 rounded-full flex-shrink-0 mt-1"></div>
                  <div>
                    <h4 className="font-semibold text-nude-700 mb-1">Bleu</h4>
                    <p className="text-sm text-nude-600">
                      Acné, points noirs, action bactéricide et purifiante
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex-shrink-0 mt-1"></div>
                  <div>
                    <h4 className="font-semibold text-nude-700 mb-1">Vert</h4>
                    <p className="text-sm text-nude-600">
                      Apaisant, peau sensible, cicatrisation, taches
                      pigmentaires
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-yellow-500 rounded-full flex-shrink-0 mt-1"></div>
                  <div>
                    <h4 className="font-semibold text-nude-700 mb-1">Jaune</h4>
                    <p className="text-sm text-nude-600">
                      Vaisseaux sanguins, lésions pigmentaires
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-red-500 rounded-full flex-shrink-0 mt-1"></div>
                  <div>
                    <h4 className="font-semibold text-nude-700 mb-1">Rouge</h4>
                    <p className="text-sm text-nude-600">
                      Régénération cellulaire, stimulation collagène et
                      élastine, anti-âge
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-6 p-4 bg-purple-50 rounded-xl">
                <h4 className="font-semibold text-nude-700 mb-2">
                  Masque Bio-Cellulose
                </h4>
                <p className="text-sm text-nude-600">
                  Application d&apos;un masque en bio-cellulose riche en actifs
                  hydratants. Sensation de seconde peau qui libère uniformément
                  les actifs en profondeur et optimise leur absorption par
                  occlusion. Adapté aux peaux les plus sensibles.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Soins LED disponibles */}
          <div className="mb-12">
            <h3 className="text-3xl font-serif font-semibold text-nude-700 text-center mb-8">
              Nos Soins LED Thérapie
            </h3>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* LED Ciblé Yeux/Lèvres */}
              <motion.div
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
                whileHover={{ y: -3, scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <div className="flex flex-wrap gap-2 mb-3">
                  <span className="bg-gradient-to-r from-purple-400 to-indigo-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                    💡 LED IR 2.0
                  </span>
                  <span className="bg-pink-100 text-pink-700 px-3 py-1 rounded-full text-xs font-semibold">
                    👁️ Ciblé
                  </span>
                </div>
                <h4 className="text-lg font-serif font-semibold text-nude-800 mb-2">
                  Séance LED Ciblé Yeux ou Lèvres
                </h4>
                <p className="text-nude-600 text-sm mb-4">
                  Traitement ciblé pour les zones délicates du contour des yeux
                  et des lèvres.
                </p>
                <div className="space-y-2 text-xs text-nude-500 mb-4">
                  <p>💡 Technologie LED IR 2.0</p>
                  <p>📋 Cure 10 séances : 405€</p>
                  <p>📅 2 à 3 séances / semaine</p>
                </div>
                <div className="flex justify-between items-center border-t border-nude-100 pt-3">
                  <span className="text-nude-500 text-sm">Séance</span>
                  <span className="text-xl font-bold text-nude-600">45€</span>
                </div>
              </motion.div>

              {/* LED Thérapie Classique */}
              <motion.div
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 ring-2 ring-nude-400 ring-opacity-50"
                whileHover={{ y: -3, scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <div className="flex flex-wrap gap-2 mb-3">
                  <span className="bg-nude-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                    ⭐ Populaire
                  </span>
                  <span className="bg-gradient-to-r from-purple-400 to-indigo-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                    💡 LED IR 2.0
                  </span>
                </div>
                <h4 className="text-lg font-serif font-semibold text-nude-800 mb-2">
                  Séance LED Thérapie
                </h4>
                <p className="text-nude-600 text-sm mb-3">
                  Masque spécifique en fonction des besoins de votre peau avec 4
                  couleurs thérapeutiques.
                </p>
                <div className="space-y-1 text-xs text-nude-500 mb-4">
                  <p>🔵 Acné, points noirs, purifiant</p>
                  <p>💧 Hydratation intensive</p>
                  <p>✨ Taches pigmentaires, éclat</p>
                  <p>📋 Cure 10 séances : 495€</p>
                </div>
                <div className="flex justify-between items-center border-t border-nude-100 pt-3">
                  <span className="text-nude-500 text-sm">40 min</span>
                  <span className="text-xl font-bold text-nude-600">55€</span>
                </div>
              </motion.div>

              {/* LED Anti-Âge */}
              <motion.div
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 ring-2 ring-nude-400 ring-opacity-50"
                whileHover={{ y: -3, scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <div className="flex flex-wrap gap-2 mb-3">
                  <span className="bg-nude-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                    ⭐ Populaire
                  </span>
                  <span className="bg-gradient-to-r from-purple-400 to-indigo-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                    💡 LED IR 2.0
                  </span>
                  <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-xs font-semibold">
                    ⚡ Premium
                  </span>
                </div>
                <h4 className="text-lg font-serif font-semibold text-nude-800 mb-2">
                  Séance LED Thérapie Anti-Âge
                </h4>
                <p className="text-nude-600 text-sm mb-3">
                  Masque anti-âge ++ au micro-courant drainant pour une peau
                  lissée et raffermie.
                </p>
                <div className="space-y-1 text-xs text-nude-500 mb-4">
                  <p>🔴 Régénération cellulaire</p>
                  <p>⚡ Micro-courant drainant</p>
                  <p>💪 Raffermissement cutané</p>
                  <p>📋 Cure 10 séances : 585€</p>
                </div>
                <div className="flex justify-between items-center border-t border-nude-100 pt-3">
                  <span className="text-nude-500 text-sm">40 min</span>
                  <span className="text-xl font-bold text-nude-600">65€</span>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Cures d'entretien */}
          <div className="mb-12">
            <h3 className="text-3xl font-serif font-semibold text-nude-700 text-center mb-8">
              Cures d&apos;Entretien
            </h3>

            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {/* Cure Entretien LED Classique */}
              <motion.div
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
                whileHover={{ y: -3, scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <div className="flex flex-wrap gap-2 mb-3">
                  <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-semibold">
                    🔄 Entretien
                  </span>
                  <span className="bg-gradient-to-r from-purple-400 to-indigo-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                    💡 LED IR 2.0
                  </span>
                </div>
                <h4 className="text-lg font-serif font-semibold text-nude-800 mb-2">
                  Cure d&apos;Entretien LED Thérapie
                </h4>
                <p className="text-nude-600 text-sm mb-4">
                  4 séances d&apos;entretien pour maintenir les résultats
                  obtenus.
                </p>
                <div className="space-y-1 text-xs text-nude-500 mb-4">
                  <p>📅 1 séance / semaine ou mois</p>
                  <p>🔄 Maintien des résultats</p>
                  <p>💡 Technologie LED IR 2.0</p>
                </div>
                <div className="flex justify-between items-center border-t border-nude-100 pt-3">
                  <span className="text-nude-500 text-sm">4 séances</span>
                  <span className="text-xl font-bold text-nude-600">198€</span>
                </div>
              </motion.div>

              {/* Cure Entretien Anti-Âge */}
              <motion.div
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
                whileHover={{ y: -3, scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <div className="flex flex-wrap gap-2 mb-3">
                  <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-semibold">
                    🔄 Entretien
                  </span>
                  <span className="bg-gradient-to-r from-purple-400 to-indigo-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                    💡 LED IR 2.0
                  </span>
                  <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-xs font-semibold">
                    ⚡ Premium
                  </span>
                </div>
                <h4 className="text-lg font-serif font-semibold text-nude-800 mb-2">
                  Cure d&apos;Entretien Anti-Âge
                </h4>
                <p className="text-nude-600 text-sm mb-4">
                  4 séances d&apos;entretien anti-âge avec micro-courant pour
                  une action renforcée.
                </p>
                <div className="space-y-1 text-xs text-nude-500 mb-4">
                  <p>📅 1 séance / semaine ou mois</p>
                  <p>⚡ Micro-courant drainant</p>
                  <p>🔄 Maintien anti-âge optimal</p>
                </div>
                <div className="flex justify-between items-center border-t border-nude-100 pt-3">
                  <span className="text-nude-500 text-sm">4 séances</span>
                  <span className="text-xl font-bold text-nude-600">235€</span>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Recommandations */}
          <motion.div
            className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-3xl p-8 text-center"
            whileHover={{ scale: 1.02, y: -3 }}
            transition={{ duration: 0.2 }}
          >
            <div className="mb-6">
              <div className="w-20 h-20 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-3xl">📋</span>
              </div>
              <h3 className="text-2xl font-serif font-semibold mb-4">
                Protocole Recommandé
              </h3>
              <p className="text-lg opacity-90 leading-relaxed">
                Pour un résultat optimal en fonction de votre peau, il est
                recommandé de réaliser 10 séances en cure d&apos;attaque et par
                la suite des séances d&apos;entretien une fois par mois.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 text-sm">
              <div className="bg-white bg-opacity-20 rounded-xl p-4 backdrop-blur-sm">
                <h4 className="font-semibold mb-2 text-gray-800">
                  Cure d&apos;Attaque
                </h4>
                <p className="text-gray-800 opacity-90">
                  10 séances, 2-3 par semaine
                </p>
              </div>
              <div className="bg-white bg-opacity-20 rounded-xl p-4 backdrop-blur-sm">
                <h4 className="font-semibold mb-2 text-gray-800">Entretien</h4>
                <p className="text-gray-800 opacity-90">1 séance par mois</p>
              </div>
              <div className="bg-white bg-opacity-20 rounded-xl p-4 backdrop-blur-sm">
                <h4 className="font-semibold mb-2 text-gray-800">
                  Technologie
                </h4>
                <p className="text-gray-800 opacity-90">
                  LED IR 2.0 nouvelle génération
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section Partenaire MySpa */}
      <section className="py-16 bg-gradient-to-br from-rose-50 to-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-serif font-light text-nude-700 mb-6">
              Notre Partenaire MySpa
            </h2>
            <p className="text-xl text-nude-600 max-w-3xl mx-auto leading-relaxed">
              Découvrez l&apos;excellence des produits MySpa de Deborrha pour
              des rituels d&apos;exception
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <motion.div
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
              whileHover={{ scale: 1.02, y: -3 }}
              transition={{ duration: 0.2 }}
            >
              <div className="relative h-48 mb-4">
                <Image
                  src="/image/myspadeborrha.jpeg"
                  alt="MySpa by Deborrha"
                  fill
                  className="object-cover rounded-xl"
                />
              </div>
              <h3 className="text-lg font-serif font-semibold text-nude-700 text-center">
                MySpa by Deborrha
              </h3>
            </motion.div>

            <motion.div
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
              whileHover={{ scale: 1.02, y: -3 }}
              transition={{ duration: 0.2 }}
            >
              <div className="relative h-48 mb-4">
                <Image
                  src="/image/creme-myspa.jpeg"
                  alt="Crème MySpa"
                  fill
                  className="object-cover rounded-xl"
                />
              </div>
              <h3 className="text-lg font-serif font-semibold text-nude-700 text-center">
                Soins Visage MySpa
              </h3>
            </motion.div>

            <motion.div
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
              whileHover={{ scale: 1.02, y: -3 }}
              transition={{ duration: 0.2 }}
            >
              <div className="relative h-48 mb-4">
                <Image
                  src="/image/collection-cleopatre-myspa.jpeg"
                  alt="Collection Cléopâtre MySpa"
                  fill
                  className="object-cover rounded-xl"
                />
              </div>
              <h3 className="text-lg font-serif font-semibold text-nude-700 text-center">
                Collection Cléopâtre
              </h3>
            </motion.div>

            <motion.div
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
              whileHover={{ scale: 1.02, y: -3 }}
              transition={{ duration: 0.2 }}
            >
              <div className="relative h-48 mb-4">
                <Image
                  src="/image/masque-myspa.jpeg"
                  alt="Masque MySpa"
                  fill
                  className="object-cover rounded-xl"
                />
              </div>
              <h3 className="text-lg font-serif font-semibold text-nude-700 text-center">
                Masques MySpa
              </h3>
            </motion.div>
          </div>

          <div className="text-center">
            <div className="bg-white rounded-2xl p-8 shadow-lg max-w-4xl mx-auto">
              <h3 className="text-2xl font-serif font-semibold text-nude-700 mb-4">
                L&apos;Excellence MySpa au Serenity Spa
              </h3>
              <p className="text-nude-600 leading-relaxed mb-6">
                Nous sommes fiers de vous proposer les rituels MySpa de
                Deborrha, une marque française reconnue pour ses formules
                d&apos;exception et ses textures sensorielles uniques. Chaque
                soin MySpa est conçu pour offrir une expérience sensorielle
                inoubliable alliant efficacité et plaisir.
              </p>
              <div className="grid md:grid-cols-3 gap-4 text-sm">
                <div className="flex items-center justify-center space-x-2 text-nude-600">
                  <span className="text-rose-400">🌸</span>
                  <span>Produits français</span>
                </div>
                <div className="flex items-center justify-center space-x-2 text-nude-600">
                  <span className="text-rose-400">✨</span>
                  <span>Formules d&apos;exception</span>
                </div>
                <div className="flex items-center justify-center space-x-2 text-nude-600">
                  <span className="text-rose-400">💎</span>
                  <span>Expérience sensorielle</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to action */}
      <section className="py-16 bg-gradient-to-r from-nude-400 to-nude-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-serif font-semibold text-white mb-6">
              Prêt pour votre moment de détente ?
            </h2>
            <p className="text-xl text-white opacity-90 mb-8">
              Réservez dès maintenant votre soin sur mesure et laissez-vous
              emporter dans un univers de bien-être.
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
