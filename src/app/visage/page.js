"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import CustomDropdown from "../../components/CustomDropdown";

export default function Visage() {
  const [activeTab, setActiveTab] = useState("traditionnels");

  // Onglets disponibles
  const tabs = [
    { id: "traditionnels", name: "Soins Visages Traditionnels", icon: "🌸" },
    { id: "hydraface", name: "Hydraface by Yumi", icon: "💎" },
    { id: "led", name: "Led Thérapie", icon: "💡" },
    { id: "skinneo", name: "Skinnéo Stimulation", icon: "⚡" },
  ];

  // Données des soins visage organisées par onglet
  const soinsData = {
    traditionnels: [
      {
        id: 1,
        name: "Rituel Lift Yeux",
        duration: "30 min",
        price: "40€",
        description:
          "Soin ciblé contour des yeux pour retrouver un regard reposé et lumineux.",
        details:
          "Ce soin peut s'intégrer dans un autre soin visage MySpa (12€)",
        brand: "MySpa",
        type: "traditionnel",
      },
      {
        id: 2,
        name: "Rituel Express Oxygénant",
        duration: "30 min",
        price: "50€",
        priceWithLed: "90€",
        description:
          "Ce soin express adapté à tous, laissera votre peau hydratée et oxygénée.",
        details: "Nettoyage, gommage, masque, crème.",
        brand: "MySpa",
        type: "traditionnel",
        featured: true,
      },
      {
        id: 3,
        name: "Rituel Visage au Choix",
        duration: "1h",
        price: "69€",
        priceWithLed: "109€",
        description:
          "Voyage sensoriel avec trois univers au choix selon votre type de peau.",
        details:
          "🏝️ Lagons de Polynésie (Toutes peaux) - 👑 Cléopâtre (Peau mixte à grasse) - 🌸 Secrets du Japon (Peau sensible).",
        brand: "MySpa",
        featured: true,
      },
      {
        id: 4,
        name: "Rituel Jeunesse - Effet Lift",
        duration: "1h",
        price: "80€",
        priceWithLed: "120€",
        description:
          "Soin anti-âge aux actifs d'exception pour retrouver jeunesse et vitalité.",
        details: "Rides et fermeté.",
        brand: "MySpa",
        featured: true,
      },
      {
        id: 5,
        name: "Rituel Jeunesse - Effet Tenseur",
        duration: "1h",
        price: "90€",
        description:
          "Soin anti-âge global alliant luxe et volupté grâce au pouvoir du caviar.",
        details: "Anti-âge global et taches pigmentaires",
        brand: "MySpa",
        featured: true,
      },
    ],
    hydraface: [
      {
        id: 6,
        name: "HydraYeux Défatiguant + LED",
        duration: "45 min",
        price: "55€",
        description:
          "Soin ciblé contour des yeux pour un regard reposé avec LED thérapie pour une peau nettoyée et une luminosité spectaculaire.",
        brand: "Yumi Beauty",
        technology: "HydraFace",
        type: "technique",
      },
      {
        id: 7,
        name: "HydraFace Pureté",
        duration: "1h",
        price: "80€",
        durationWithLed: "1h15 avec LED thérapie",
        priceWithLed: "120€",
        description:
          "Nettoyage intense combiné à un masque hydratant et à la cryothérapie pour une peau nettoyée et une luminosité spectaculaire.",
        details: "",
        brand: "Yumi Beauty",
        technology: "HydraFace",
        featured: true,
      },
      {
        id: 8,
        name: "Soin Ciblé Anti-Âge",
        duration: "1h",
        price: "90€",
        durationWithLed: "1h15 avec LED thérapie",
        priceWithLed: "130€",
        description:
          "Soin anti-âge avec ultrasons, radiofréquence, électrostimulation pour une peau nettoyée et une luminosité spectaculaire.",
        details: "Visage et cou avec masque et cryo.",
        brand: "Yumi Beauty",
        technology: "HydraFace",
        featured: true,
      },
      {
        id: 9,
        name: "HydraFace Prestige",
        duration: "1h30",
        price: "120€",
        durationWithLed: "1h45 avec LED thérapie",
        priceWithLed: "160€",
        description:
          "Soin complet sur mesure alliant nettoyage de peau et soin anti-âge pour une peau nettoyée et une luminosité spectaculaire.",
        details: "Visage et cou.",
        brand: "Yumi Beauty",
        technology: "HydraFace",
        featured: true,
      },
    ],
    led: [
      {
        id: 10,
        name: "Séance LED Ciblé Yeux ou Lèvres",
        duration: "Séance",
        price: "45€",
        priceWithCure: "405€",
        description:
          "Traitement ciblé pour les zones délicates du contour des yeux et des lèvres.",
        details: "💡 Technologie LED IR 2.0 - 📅 2 à 3 séances / semaine",
        technology: "LED IR 2.0",
        type: "ciblé",
      },
      {
        id: 11,
        name: "Séance LED Thérapie",
        duration: "40 min",
        price: "55€",
        priceWithCure: "495€",
        description:
          "Masque spécifique en fonction des besoins de votre peau avec 4 couleurs thérapeutiques.",
        details:
          "🔵 Acné, points noirs, purifiant - 💧 Hydratation intensive - ✨ Taches pigmentaires, éclat",
        technology: "LED IR 2.0",
        featured: true,
      },
      {
        id: 12,
        name: "Séance LED Thérapie Anti-Âge",
        duration: "40 min",
        price: "65€",
        priceWithCure: "585€",
        description:
          "Masque anti-âge ++ au micro-courant drainant pour une peau lissée et raffermie.",
        details:
          "🔴 Régénération cellulaire - ⚡ Micro-courant drainant - 💪 Raffermissement cutané",
        technology: "LED IR 2.0",
        type: "premium",
        featured: true,
      },
    ],
    skinneo: [
      {
        id: 13,
        name: "Skinnéo Stimulation + LED",
        duration: "1h",
        price: "140€",
        description:
          "Technique révolutionnaire de micro-stimulation pour une peau raffermie et régénérée.",
        technology: "ACS SkinNeedler",
        type: "technique",
        featured: true,
      },
      {
        id: 14,
        name: "Cure 3 Soins Skinnéo + LED",
        duration: "3 séances",
        price: "390€",
        description:
          "Cure de 3 soins Skinnéo pour un résultat anti-âge progressif et naturel.",
        technology: "ACS SkinNeedler",
        type: "cure",
      },
      {
        id: 15,
        name: "Cure 5 Soins Skinnéo + LED",
        duration: "5 séances",
        price: "630€",
        description:
          "Cure intensive de 5 soins Skinnéo pour un rajeunissement optimal.",
        technology: "ACS SkinNeedler",
        type: "cure",
        featured: true,
      },
    ],
  };

  // Cures spécialisées
  const cures = {
    hydraface: [
      {
        id: 16,
        name: "Cure de 3 soins pureté + LED",
        duration: "3 séances",
        price: "320€",
        description: "3 soins purifiants pour une peau nettoyée en profondeur.",
        details: "Un soin par mois.",
        type: "cure",
      },
      {
        id: 17,
        name: "Cure de 4 soins ciblé anti-âge + LED",
        duration: "4 séances",
        price: "470€",
        description: "Cure intensive pour un résultat optimal.",
        details: "Un soin par semaine.",
        type: "cure",
        featured: true,
      },
      {
        id: 18,
        name: "Cure de 3 soins Prestige + LED",
        duration: "3 séances",
        price: "430€",
        description:
          "3 soins complets pour une peau nettoyée et un effet anti-âge global.",
        details: "Un soin par mois.",
        type: "cure",
        featured: true,
      },
    ],
    led: [
      {
        id: 19,
        name: "Cure d'Entretien LED Thérapie",
        duration: "4 séances",
        price: "198€",
        description:
          "4 séances d'entretien pour maintenir les résultats obtenus.",
        details:
          "📅 1 séance / semaine ou mois - 🔄 Maintien des résultats - 💡 Technologie LED IR 2.0",
        type: "entretien",
      },
      {
        id: 20,
        name: "Cure d'Entretien Anti-Âge",
        duration: "4 séances",
        price: "235€",
        description:
          "4 séances d'entretien anti-âge avec micro-courant pour une action renforcée.",
        details:
          "📅 1 séance / semaine ou mois - ⚡ Micro-courant drainant - 🔄 Maintien anti-âge optimal",
        type: "entretien",
      },
    ],
  };

  // Fonction pour obtenir les soins de l'onglet actif
  const getActiveSoins = () => {
    return soinsData[activeTab] || [];
  };

  const getActiveCures = () => {
    return cures[activeTab] || [];
  };

  const activeSoins = getActiveSoins();
  const activeCures = getActiveCures();

  return (
    <div className="min-h-screen bg-nude-50">
      <Navigation />

      {/* Header Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-nude-100 to-nude-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-serif font-bold text-nude-800 mb-6 leading-tight">
              Soins Visage
            </h1>
            <p className="text-xl md:text-2xl text-nude-600 max-w-4xl mx-auto leading-relaxed">
              Découvrez nos soins visage d&apos;exception alliant tradition et
              innovation pour sublimer votre beauté naturelle
            </p>
          </div>
        </div>
      </section>

      {/* Tabs Section */}
      <section className="py-4 md:py-8 bg-white shadow-sm sticky top-20 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Version mobile - Custom Dropdown */}
          <div className="block md:hidden">
            <CustomDropdown
              options={tabs.map((tab) => ({
                value: tab.id,
                label: `${tab.icon} ${tab.name} ${
                  activeTab === tab.id
                    ? `(${activeSoins.length + activeCures.length})`
                    : ""
                }`,
              }))}
              value={activeTab}
              onChange={setActiveTab}
              placeholder="Choisir une catégorie"
            />
          </div>

          {/* Version desktop - Boutons */}
          <div className="hidden md:flex flex-wrap justify-center gap-3">
            {tabs.map((tab) => (
              <motion.button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-3 rounded-full font-medium text-sm transition-all duration-300 flex items-center gap-2 ${
                  activeTab === tab.id
                    ? "bg-nude-600 text-white shadow-lg"
                    : "bg-nude-100 text-nude-700 hover:bg-nude-200"
                }`}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.2 }}
              >
                <span>{tab.icon}</span>
                <span>{tab.name}</span>
                {activeTab === tab.id && (
                  <span className="bg-white text-nude-600 text-xs px-2 py-1 rounded-full font-semibold">
                    {activeSoins.length + activeCures.length}
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
            {activeSoins.map((soin) => (
              <motion.div
                key={soin.id}
                className={`bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col h-full ${
                  soin.featured ? "ring-2 ring-nude-400 ring-opacity-50" : ""
                }`}
                whileHover={{ y: -5, scale: 1.02 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
              >
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
                    {soin.brand === "Yumi Beauty" && (
                      <span className="bg-gradient-to-r from-blue-400 to-purple-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                        💎 Yumi Beauty
                      </span>
                    )}
                    {soin.technology === "HydraFace" && (
                      <span className="bg-cyan-100 text-cyan-700 px-3 py-1 rounded-full text-xs font-semibold">
                        💧 HydraFace
                      </span>
                    )}
                    {soin.technology === "LED IR 2.0" && (
                      <span className="bg-gradient-to-r from-purple-400 to-indigo-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                        💡 LED IR 2.0
                      </span>
                    )}
                    {soin.technology === "ACS SkinNeedler" && (
                      <span className="bg-gradient-to-r from-green-400 to-emerald-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                        ⚡ SkinNeedler
                      </span>
                    )}
                    {soin.type === "traditionnel" && (
                      <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-xs font-semibold">
                        🌺 Traditionnel
                      </span>
                    )}
                    {soin.type === "technique" && (
                      <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-semibold">
                        🔬 Technique
                      </span>
                    )}
                    {soin.type === "premium" && (
                      <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-xs font-semibold">
                        ⚡ Premium
                      </span>
                    )}
                    {soin.type === "cure" && (
                      <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-xs font-semibold">
                        📋 Cure
                      </span>
                    )}
                    {soin.type === "entretien" && (
                      <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-semibold">
                        🔄 Entretien
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

                  {/* Footer avec prix et durée */}
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
                      {soin.durationWithLed && soin.priceWithLed && (
                        <div className="flex justify-between items-center">
                          <div className="text-nude-500 text-sm font-medium">
                            {soin.durationWithLed}
                          </div>
                          <div className="text-2xl font-bold text-nude-600">
                            {soin.priceWithLed}
                          </div>
                        </div>
                      )}
                      {soin.priceWithCure && (
                        <div className="flex justify-between items-center">
                          <div className="text-nude-500 text-sm font-medium">
                            Cure 10 séances
                          </div>
                          <div className="text-2xl font-bold text-green-600">
                            {soin.priceWithCure}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Cures section */}
            {activeCures.map((cure) => (
              <motion.div
                key={cure.id}
                className={`bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col h-full ${
                  cure.featured ? "ring-2 ring-nude-400 ring-opacity-50" : ""
                }`}
                whileHover={{ y: -5, scale: 1.02 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
              >
                <div className="p-6 flex flex-col flex-grow">
                  {/* En-tête avec badges */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {cure.featured && (
                      <span className="bg-nude-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                        ⭐ Populaire
                      </span>
                    )}
                    {cure.type === "cure" && (
                      <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-xs font-semibold">
                        📋 Cure
                      </span>
                    )}
                    {cure.type === "entretien" && (
                      <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-semibold">
                        🔄 Entretien
                      </span>
                    )}
                  </div>

                  {/* Titre */}
                  <h3 className="text-xl font-serif font-semibold text-nude-800 leading-tight mb-3">
                    {cure.name}
                  </h3>

                  {/* Description - zone flexible */}
                  <div className="flex-grow">
                    <p className="text-nude-600 leading-relaxed mb-4">
                      {cure.description}
                    </p>

                    {cure.details && (
                      <div className="bg-nude-50 rounded-xl p-4 mb-4">
                        <p className="text-sm text-nude-600 italic">
                          {cure.details}
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Footer avec prix et durée */}
                  <div className="mt-auto pt-4 border-t border-nude-100">
                    <div className="flex justify-between items-center">
                      <div className="text-nude-500 text-sm font-medium">
                        {cure.duration}
                      </div>
                      <div className="text-2xl font-bold text-nude-600">
                        {cure.price}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section LED Thérapie Info */}
      {activeTab === "led" && (
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

            {/* Indications et contre-indications */}
            <div className="mb-16">
              <div className="grid lg:grid-cols-2 gap-12">
                {/* Indications */}
                <motion.div
                  className="bg-white rounded-3xl p-8 shadow-xl"
                  whileHover={{ y: -3, scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <h3 className="text-2xl font-serif font-semibold text-nude-700 mb-6">
                    Indications du Soin
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-4">
                      <div className="w-6 h-6 bg-blue-500 rounded-full flex-shrink-0 mt-1"></div>
                      <div>
                        <h4 className="font-semibold text-nude-700 mb-1">
                          Bleu
                        </h4>
                        <p className="text-sm text-nude-600">
                          Acné, points noirs, action bactéricide et purifiante
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <div className="w-6 h-6 bg-green-500 rounded-full flex-shrink-0 mt-1"></div>
                      <div>
                        <h4 className="font-semibold text-nude-700 mb-1">
                          Vert
                        </h4>
                        <p className="text-sm text-nude-600">
                          Apaisant, peau sensible, cicatrisation, taches
                          pigmentaires
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <div className="w-6 h-6 bg-yellow-500 rounded-full flex-shrink-0 mt-1"></div>
                      <div>
                        <h4 className="font-semibold text-nude-700 mb-1">
                          Jaune
                        </h4>
                        <p className="text-sm text-nude-600">
                          Vaisseaux sanguins, lésions pigmentaires
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <div className="w-6 h-6 bg-red-500 rounded-full flex-shrink-0 mt-1"></div>
                      <div>
                        <h4 className="font-semibold text-nude-700 mb-1">
                          Rouge
                        </h4>
                        <p className="text-sm text-nude-600">
                          Régénération cellulaire, stimulation collagène et
                          élastine, anti-âge
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Contre-indications */}
                <motion.div
                  className="bg-orange-50 rounded-3xl p-8 shadow-xl border-l-4 border-orange-400"
                  whileHover={{ y: -3, scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <h3 className="text-2xl font-serif font-semibold text-orange-800 mb-6">
                    Contre-indications du Soin
                  </h3>
                  <div className="space-y-4 text-orange-700">
                    <div className="flex items-start space-x-3">
                      <span className="text-orange-500 mt-1">⚠️</span>
                      <p className="text-sm">
                        <strong>Femmes enceintes ou allaitantes</strong>
                      </p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <span className="text-orange-500 mt-1">⚠️</span>
                      <p className="text-sm">
                        <strong>
                          Prise de médicaments photosensibilisants
                        </strong>
                      </p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <span className="text-orange-500 mt-1">⚠️</span>
                      <p className="text-sm">
                        <strong>Antécédents de cancer de la peau</strong>
                      </p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <span className="text-orange-500 mt-1">⚠️</span>
                      <p className="text-sm">
                        <strong>Épilepsie photosensible</strong>
                      </p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <span className="text-orange-500 mt-1">⚠️</span>
                      <p className="text-sm">
                        <strong>Troubles de la coagulation</strong>
                      </p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <span className="text-orange-500 mt-1">⚠️</span>
                      <p className="text-sm">
                        <strong>
                          Exposition solaire récente (moins de 48h)
                        </strong>
                      </p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <span className="text-orange-500 mt-1">⚠️</span>
                      <p className="text-sm">
                        <strong>Maladie avec troubles de l&apos;ADN</strong>
                      </p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <span className="text-orange-500 mt-1">⚠️</span>
                      <p className="text-sm">
                        <strong>
                          Grain de beauté cancéreux ou syndrome des nævus
                          dyspepsiques héréditaires
                        </strong>
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Section Skinnéo Info et Contre-indications */}
      {activeTab === "skinneo" && (
        <section className="py-16 bg-gradient-to-br from-green-50 to-emerald-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-serif font-light text-nude-700 mb-6">
                Skinnéo Stimulation - ACS SkinNeedler
              </h2>
              <p className="text-xl text-nude-600 max-w-4xl mx-auto leading-relaxed">
                Technologie révolutionnaire de micro-stimulation pour une
                régénération cellulaire naturelle
              </p>
            </div>

            {/* Description du Skinnéo */}
            <div className="mb-16">
              <motion.div
                className="bg-white rounded-3xl p-8 shadow-xl max-w-5xl mx-auto"
                whileHover={{ y: -3, scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <h3 className="text-2xl font-serif font-semibold text-nude-700 mb-6 text-center">
                  Description du Skinnéo
                </h3>
                <div className="text-nude-700 leading-relaxed text-center">
                  <p className="text-lg mb-4">
                    <strong>
                      Traitement anti-âge révolutionnaire et non invasif
                    </strong>{" "}
                    qui vise à rajeunir, régénérer et améliorer la qualité et
                    l&apos;apparence de la peau.
                  </p>
                  <p className="text-lg mb-4">
                    On stimule la{" "}
                    <strong>régénération cellulaire naturelle</strong> de la
                    peau par mouvement de tapping.
                  </p>
                  <p className="text-lg font-semibold text-nude-800">
                    Un résultat <span className="text-green-600">NATUREL</span>,{" "}
                    <span className="text-green-600">durable</span> et{" "}
                    <span className="text-green-600">évolutif</span> au fil des
                    séances.
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Contre-indications */}
            <div className="mb-16">
              <motion.div
                className="bg-orange-50 rounded-3xl p-8 shadow-xl border-l-4 border-orange-400 max-w-5xl mx-auto"
                whileHover={{ y: -3, scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <h3 className="text-2xl font-serif font-semibold text-orange-800 mb-6">
                  Contre-indications du Skinnéo
                </h3>
                <div className="space-y-4 text-orange-700 grid md:grid-cols-2 gap-4">
                  <div className="flex items-start space-x-3">
                    <span className="text-orange-500 mt-1">⚠️</span>
                    <p className="text-sm">
                      <strong>Anti-inflammatoires</strong>
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="text-orange-500 mt-1">⚠️</span>
                    <p className="text-sm">
                      <strong>Antibiotiques</strong>
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="text-orange-500 mt-1">⚠️</span>
                    <p className="text-sm">
                      <strong>Maladies tumorales</strong>
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="text-orange-500 mt-1">⚠️</span>
                    <p className="text-sm">
                      <strong>Infections aiguës ou inflammatoires</strong>
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="text-orange-500 mt-1">⚠️</span>
                    <p className="text-sm">
                      <strong>États fébriles</strong>
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="text-orange-500 mt-1">⚠️</span>
                    <p className="text-sm">
                      <strong>Médicaments photo-sensibilisants</strong>
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="text-orange-500 mt-1">⚠️</span>
                    <p className="text-sm">
                      <strong>
                        Médicaments affectant le système immunitaire
                      </strong>
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="text-orange-500 mt-1">⚠️</span>
                    <p className="text-sm">
                      <strong>
                        Médicaments affectant la coagulation du sang
                      </strong>
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="text-orange-500 mt-1">⚠️</span>
                    <p className="text-sm">
                      <strong>Grossesse et allaitement</strong>
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="text-orange-500 mt-1">⚠️</span>
                    <p className="text-sm">
                      <strong>Affections cutanées</strong>
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="text-orange-500 mt-1">⚠️</span>
                    <p className="text-sm">
                      <strong>Inflammation de l&apos;intestin</strong>
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="text-orange-500 mt-1">⚠️</span>
                    <p className="text-sm">
                      <strong>Tendance aux chéloïdes</strong>
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="text-orange-500 mt-1">⚠️</span>
                    <p className="text-sm">
                      <strong>Phénomène de Koebner</strong>
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="text-orange-500 mt-1">⚠️</span>
                    <p className="text-sm">
                      <strong>Tous types de cancers</strong>
                    </p>
                  </div>
                </div>

                <div className="mt-8 p-6 bg-red-100 rounded-xl border border-red-300">
                  <h4 className="font-semibold text-red-800 mb-3">
                    Délais de sécurité obligatoires :
                  </h4>
                  <div className="grid md:grid-cols-2 gap-3 text-sm text-red-700">
                    <p>• Isotrétinoïne (vitamine A) : 6 mois après arrêt</p>
                    <p>• Radiations et chimiothérapie : accord médical écrit</p>
                    <p>• Traitements laser : 6 mois après</p>
                    <p>• Opérations récentes : 6 mois après</p>
                    <p>• Lifting : 6 semaines après</p>
                    <p>• Injections de remplissage : 6 semaines après</p>
                    <p>• Injections toxine botulique : 1 semaine après</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      )}

      {/* Section HydraFace Contre-indications */}
      {activeTab === "hydraface" && (
        <section className="py-16 bg-gradient-to-br from-cyan-50 to-blue-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-serif font-light text-nude-700 mb-6">
                HydraFace by Yumi Beauty
              </h2>
              <p className="text-xl text-nude-600 max-w-4xl mx-auto leading-relaxed">
                Technologie avancée pour un nettoyage profond et une
                régénération cutanée
              </p>
            </div>

            {/* Contre-indications */}
            <div className="mb-16">
              <motion.div
                className="bg-orange-50 rounded-3xl p-8 shadow-xl border-l-4 border-orange-400 max-w-4xl mx-auto"
                whileHover={{ y: -3, scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <h3 className="text-2xl font-serif font-semibold text-orange-800 mb-6">
                  Contre-indications HydraFace
                </h3>
                <div className="space-y-4 text-orange-700">
                  <div className="flex items-start space-x-3">
                    <span className="text-orange-500 mt-1">⚠️</span>
                    <p className="text-sm">
                      <strong>Allergie aux acides de fruits AHA et BHA</strong>
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="text-orange-500 mt-1">⚠️</span>
                    <p className="text-sm">
                      <strong>Femme enceinte et allaitante</strong>
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="text-orange-500 mt-1">⚠️</span>
                    <p className="text-sm">
                      <strong>
                        Maladie de peau en crise (eczéma, psoriasis, herpès,
                        vitiligo)
                      </strong>
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="text-orange-500 mt-1">⚠️</span>
                    <p className="text-sm">
                      <strong>Cancers</strong>
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="text-orange-500 mt-1">⚠️</span>
                    <p className="text-sm">
                      <strong>Chimiothérapie et radiothérapie</strong>
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="text-orange-500 mt-1">⚠️</span>
                    <p className="text-sm">
                      <strong>Épilepsie</strong>
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="text-orange-500 mt-1">⚠️</span>
                    <p className="text-sm">
                      <strong>Diabète sévère</strong>
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="text-orange-500 mt-1">⚠️</span>
                    <p className="text-sm">
                      <strong>Pacemaker</strong>
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="text-orange-500 mt-1">⚠️</span>
                    <p className="text-sm">
                      <strong>Cicatrices récentes</strong>
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="text-orange-500 mt-1">⚠️</span>
                    <p className="text-sm">
                      <strong>Traitement Roacutane</strong>
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="text-orange-500 mt-1">⚠️</span>
                    <p className="text-sm">
                      <strong>
                        Appareil auditif (les enlever durant le soin)
                      </strong>
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      )}

      {/* Section Partenaire MySpa */}
      {activeTab === "traditionnels" && (
        <section className="py-16 bg-gradient-to-br from-rose-50 to-pink-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-serif font-light text-nude-700 mb-6">
                Notre Partenaire MySpa
              </h2>
              <p className="text-xl text-nude-600 max-w-3xl mx-auto leading-relaxed">
                Découvrez l&apos;excellence des produits MySpa de Deborrha, une
                marque créée par une meilleure ouvrière de France, pour des
                rituels d&apos;exception
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
                    src="/image/agrume.jpeg"
                    alt="Nouveauté Agrumes MySpa"
                    fill
                    className="object-cover rounded-xl"
                  />
                </div>
                <h3 className="text-lg font-serif font-semibold text-nude-700 text-center">
                  Nouveauté Agrumes
                </h3>
              </motion.div>

              <motion.div
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
                whileHover={{ scale: 1.02, y: -3 }}
                transition={{ duration: 0.2 }}
              >
                <div className="relative h-48 mb-4">
                  <Image
                    src="/image/4images.jpeg"
                    alt="Collection MySpa"
                    fill
                    className="object-cover rounded-xl"
                  />
                </div>
                <h3 className="text-lg font-serif font-semibold text-nude-700 text-center">
                  Collection MySpa
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
                    src="/image/collection creme-jeunesse-myspa.jpeg"
                    alt="Collection Crème Jeunesse MySpa"
                    fill
                    className="object-cover rounded-xl"
                  />
                </div>
                <h3 className="text-lg font-serif font-semibold text-nude-700 text-center">
                  Collection Jeunesse
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
                  Deborrha, une marque française créée par une meilleure
                  ouvrière de France. C&apos;est un gage de qualité important
                  que nous souhaitons souligner. Chaque soin MySpa est conçu
                  pour offrir une expérience sensorielle inoubliable alliant
                  efficacité et plaisir.
                </p>
                <div className="grid md:grid-cols-3 gap-4 text-sm">
                  <div className="flex items-center justify-center space-x-2 text-nude-600">
                    <span className="text-rose-400">🌸</span>
                    <span>Produits français</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2 text-nude-600">
                    <span className="text-rose-400">🏆</span>
                    <span>Meilleure ouvrière de France</span>
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
      )}

      {/* Call to action */}
      <section className="py-16 bg-gradient-to-r from-nude-400 to-nude-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-serif font-semibold text-white mb-6">
              Prêt pour votre soin visage sur-mesure ?
            </h2>
            <p className="text-xl text-white opacity-90 mb-8">
              Réservez dès maintenant votre soin visage et laissez-vous emporter
              dans un univers de beauté et de bien-être.
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
