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
          "Exfoliation du corps suivi d'une hydratation pour une peau lisse et veloutée.",
        details:
          "Senteurs : Vanille, mangue, fleur de cerisier, agrumes, amyris/patchouli",
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
          "Senteur : Vanille, mangue, fleur de cerisier, agrumes, amyris/patchouli, coco",
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
          "À partir du 4ème mois jusqu'au 8ème mois. (Position PLS et sur le dos)",
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
          "À la fois doux et tonique, relaxant et énergétique. Il permet de retrouver une harmonie totale entre le corps et l'esprit.",
        category: "mondes",
        origin: "Asie",
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
        name: "Massage aux Pierres Chaudes",
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
        details: "Possibilité de rajouter vapeur + retrait des points noirs.",
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
          "Senteurs au choix : Vanille, mangue, fleur de cerisier, Amyris/patchouli, Agrumes, coco",
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
        details: "Gommage au choix, massage Signature 30min / 1h.",
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
        details: "Massage signature 30min / 1h, soin du visage MySpa.",
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
          "Gommage au choix et enveloppement, massage Signature 30min/1h.",
        category: "evasions",
        brand: "MySpa",
        image: "/image/evasion-signature.jpg",
      },
      {
        id: 24,
        name: "Evasion Délicate",
        duration: "2h / 2h30",
        price: "155€ / 180€",
        description: "Rituel complet alliant gommage, massage et soin visage.",
        details:
          "Gommage au choix, massage Signature 30min / 1h, soin du visage MySpa.",
        category: "evasions",
        brand: "MySpa",
        featured: true,
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
          "Gommage au choix, enveloppement, massage 30min/1h, soin du visage MySpa.",
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
                  <p>
                    Massage Future Maman : du 4ème au 8ème mois de grossesse.
                  </p>
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
