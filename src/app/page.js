"use client";

import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import Navigation from "../components/Navigation";
import Modal from "../components/Modal";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-nude-50">
      <Navigation />

      {/* Hero Section - Bienvenue */}
      <section
        id="accueil"
        className="relative pt-20 min-h-screen flex items-center"
      >
        <div className="absolute inset-0 z-0">
          <Image
            src="/image/background.jpg"
            alt="Accueil Serenity Spa"
            fill
            className="object-cover opacity-80"
            priority
          />
          <div className="absolute inset-0 bg-nude-900/20"></div>
        </div>

        <motion.div
          className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="mb-6">
            {/* 1. Serenity Spa en grand - Avec animation */}
            <motion.h1
              className="text-4xl md:text-6xl font-serif font-bold text-nude-800 mb-4 leading-tight tracking-wider drop-shadow-sm"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
            >
              SERENITY SPA
            </motion.h1>

            {/* 2. Bien-être, Spa et Beauté - Avec animation */}
            <motion.h2
              className="text-2xl md:text-4xl font-serif font-light text-nude-700 mb-6 italic drop-shadow-sm"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            >
              Bien-être, Spa et Beauté
            </motion.h2>

            {/* 3. Noémie Saddier avec animation spéciale */}
            <motion.h3
              className="text-2xl md:text-4xl font-serif font-semibold mb-6 bg-gradient-to-r from-nude-400 to-nude-600 bg-clip-text text-transparent drop-shadow-sm"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.9, ease: "easeOut" }}
            >
              Noémie Saddier
            </motion.h3>
          </div>

          {/* Séparateur animé */}
          <motion.div
            className="my-8 w-24 h-0.5 bg-gradient-to-r from-transparent via-nude-400 to-transparent mx-auto opacity-60"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 1.5, ease: "easeOut" }}
          />

          {/* Messages d'accueil animés */}
          <motion.p
            className="text-xl md:text-2xl text-nude-700 max-w-4xl mx-auto leading-relaxed font-light mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.8, ease: "easeOut" }}
          >
            Bienvenue dans l&apos;univers du bien-être et de la détente
          </motion.p>

          <motion.p
            className="text-lg md:text-xl text-nude-600 max-w-3xl mx-auto leading-relaxed mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 2.1, ease: "easeOut" }}
          >
            Où le temps s&apos;arrête pour une pause détente absolue dans notre
            espace privatif unique
          </motion.p>

          {/* Boutons animés */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 2.4, ease: "easeOut" }}
          >
            <motion.a
              href="https://www.kalendes.com/site/serenityspanoemiesaddier/welcome"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-spa text-white px-8 py-4 rounded-full font-medium text-lg shadow-2xl inline-block"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2 }}
            >
              Réserver l&apos;espace privatif
            </motion.a>
            <motion.a
              href="https://www.kalendes.com/site/serenityspanoemiesaddier/welcome"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-nude-200/80 backdrop-blur-sm text-nude-800 border-2 border-nude-300 px-8 py-4 rounded-full font-medium text-lg hover:bg-nude-300/80 transition-all duration-300 inline-block"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2 }}
            >
              Réserver nos soins
            </motion.a>
          </motion.div>
        </motion.div>
      </section>

      {/* Section Mon Histoire */}
      <section className="py-20 bg-nude-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-light text-nude-700 mb-6">
              Mon Histoire
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 text-nude-700 leading-relaxed">
              <p>
                À la suite de 7 années d&apos;expériences en institut de beauté,
                Spas hôteliers et urbains, ma passion pour le métier m&apos;a
                amené à créer mon propre espace de soins. Depuis le 21 mars
                2022, je suis très heureuse de vous accueillir dans mon univers
                dédié au bien-être et à la beauté.
              </p>

              <p>
                Après 1 an et demi à travailler seule avec un planning
                surchargé, j&apos;ai embauché Laurie en septembre 2023.
                C&apos;est une amie et ancienne collègue de travail, qui est LA
                personne de confiance pour commencer à évoluer petit à petit.
                Puis Justine, qui était ma toute première stagiaire fin 2022 en
                BTS 2ème année, nous a vite rejoint en novembre 2023 pour sa
                formation d&apos;une année en alternance.
              </p>

              <p>
                Après son départ fin septembre 2024, Manon, que nous
                connaissions déjà également, est venue nous rejoindre pour
                renforcer l&apos;équipe.
              </p>

              <p>
                En novembre 2023, à l&apos;étage de l&apos;institut, nous avons
                ouvert un espace détente privatif composé d&apos;un hammam,
                d&apos;un sauna, d&apos;un jacuzzi ainsi qu&apos;une salle de
                repos-tisanerie. Seul ou suivi d&apos;un massage, en solo ou en
                duo, ce lieu unique à La Roche vous transporte dans un pur
                moment de détente et de relaxation absolue.
              </p>
            </div>

            <div className="relative">
              <Image
                src="/image/accueil-serenityspa.jpeg"
                alt="Enseigne Serenity Spa"
                width={600}
                height={400}
                className="rounded-2xl shadow-xl"
              />
            </div>
          </div>

          <div className="mt-12 text-nude-700 leading-relaxed space-y-6">
            <p>
              Nous disposons de 3 cabines de soins dont 2 transformables en duo
              et espace accueil avec un pôle onglerie mains et pieds. Nous
              proposons des massages bien-être, des soins du corps, des soins du
              visage traditionnels ou avec des technologies tel que le soin
              Hydraface avec la machine V3 de chez Yumi Beauty, le traitement
              LED Thérapie de chez KBS, le Skinnéo Stimulation avec l&apos;ACS
              SkinNeedler… et d&apos;autres prestations esthétiques.
            </p>

            <p className="text-center font-medium text-lg text-nude-600">
              Laurie, Manon et moi-même sommes ravies de prendre soin de vous le
              temps d&apos;un instant.
            </p>

            <p className="text-center italic text-nude-600">
              Aujourd&apos;hui le Spa continue de s&apos;agrandir grâce à vous.
              Merci !
            </p>
          </div>
        </div>
      </section>

      {/* Section Spa Privatif */}
      <section className="py-20 bg-nude-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-light text-nude-700 mb-6">
              Espace Serenity Privatif
            </h2>
            <p className="text-xl text-nude-600 max-w-3xl mx-auto">
              Laissez vous transporter dans une ambiance zen et chaleureuse et
              profitez d&apos;une parenthèse de détente hors du temps.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            <div className="space-y-6">
              <Image
                src="/image/spa-privatif.jpeg"
                alt="Spa Privatif"
                width={600}
                height={400}
                className="rounded-2xl shadow-xl w-full"
              />
            </div>
            <div className="space-y-6">
              <Image
                src="/image/espace-spa-privatif.jpeg"
                alt="Espace Spa Privatif"
                width={600}
                height={400}
                className="rounded-2xl shadow-xl w-full"
              />
            </div>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-xl">
            <p className="text-nude-700 leading-relaxed mb-8 text-center">
              L&apos;espace Serenity Privatif* se compose d&apos;un bain à
              remous, d&apos;un hammam, d&apos;un saune et d&apos;une salle de
              repos - tisanerie.
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Privatisation groupe */}
              <div className="bg-nude-100 rounded-2xl p-6">
                <h3 className="text-2xl font-serif font-semibold text-nude-700 mb-4">
                  Privatisation 2h
                </h3>
                <div className="space-y-2 text-nude-700">
                  <div className="flex justify-between">
                    <span>2 personnes :</span>
                    <span className="font-semibold">150€</span>
                  </div>
                  <div className="flex justify-between">
                    <span>3 personnes :</span>
                    <span className="font-semibold">225€</span>
                  </div>
                  <div className="flex justify-between">
                    <span>4 personnes :</span>
                    <span className="font-semibold">280€</span>
                  </div>
                  <div className="flex justify-between">
                    <span>5 personnes :</span>
                    <span className="font-semibold">325€</span>
                  </div>
                  <div className="flex justify-between">
                    <span>6 personnes :</span>
                    <span className="font-semibold">375€</span>
                  </div>
                </div>
              </div>

              {/* Privatisation solo */}
              <div className="bg-nude-100 rounded-2xl p-6">
                <h3 className="text-2xl font-serif font-semibold text-nude-700 mb-4">
                  Solo
                </h3>
                <div className="space-y-2 text-nude-700 mb-4">
                  <div className="flex justify-between">
                    <span>1h30 - 1 personne :</span>
                    <span className="font-semibold">55€</span>
                  </div>
                  <div className="flex justify-between">
                    <span>2h - 1 personne :</span>
                    <span className="font-semibold">75€</span>
                  </div>
                </div>
                <div className="border-t border-nude-300 pt-3 space-y-2 text-nude-700">
                  <p className="text-sm font-medium">Forfaits 6 entrées :</p>
                  <div className="flex justify-between text-sm">
                    <span>1h30 :</span>
                    <span className="font-semibold">295€</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>2h :</span>
                    <span className="font-semibold">405€</span>
                  </div>
                  <p className="text-xs text-nude-600 mt-2">
                    (valable 6 mois, possibilité de l&apos;utiliser à deux)
                  </p>
                </div>
              </div>

              {/* Hammam/Sauna seul */}
              <div className="bg-nude-100 rounded-2xl p-6">
                <h3 className="text-2xl font-serif font-semibold text-nude-700 mb-4">
                  Hammam/Sauna
                </h3>
                <div className="space-y-2 text-nude-700 mb-4">
                  <div className="flex justify-between">
                    <span>Hammam ou sauna seul 45 min :</span>
                    <span className="font-semibold">30€</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Hammam et Sauna 1h :</span>
                    <span className="font-semibold">45€</span>
                  </div>
                </div>
                <div className="border-t border-nude-300 pt-3 space-y-2 text-nude-700">
                  <div className="flex justify-between text-sm">
                    <span>Forfait 5 entrées :</span>
                    <span className="font-semibold">135€ / 205€</span>
                  </div>
                </div>
              </div>

              {/* Informations */}
              <div className="bg-nude-200 rounded-2xl p-6">
                <h3 className="text-xl font-serif font-semibold text-nude-700 mb-4">
                  Informations importantes
                </h3>
                <div className="space-y-3 text-nude-700 text-sm">
                  <p>
                    L&apos;entrée privative à l&apos;Espace Serenity est
                    uniquement sur réservation.
                  </p>
                  <p>
                    *Privatif : Pas d&apos;autres personnes sur votre créneau
                    dans l&apos;espace détente.
                  </p>
                  <p>
                    N&apos;hésitez pas à nous contacter pour plus de
                    renseignements.
                  </p>
                </div>
              </div>
            </div>

            <div className="text-center mt-8">
              <button
                onClick={() => setIsModalOpen(true)}
                className="btn-spa text-white px-8 py-3 rounded-full font-medium shadow-lg"
              >
                En savoir plus
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Section Visite Virtuelle */}
      <section id="visite" className="py-20 bg-nude-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-light text-nude-700 mb-6">
              Découvrez Notre Spa
            </h2>
            <p className="text-xl text-nude-600 max-w-4xl mx-auto">
              Plongez dans l&apos;univers apaisant de Serenity Spa grâce à notre
              visite virtuelle. Explorez nos espaces de détente depuis chez vous
              avant de venir vivre l&apos;expérience.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Informations sur la visite virtuelle */}
            <div className="space-y-8">
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h3 className="text-2xl font-serif font-semibold text-nude-700 mb-6">
                  Visite Virtuelle Interactive
                </h3>

                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-gradient-to-br from-rose-300 to-rose-400 rounded-full flex items-center justify-center mt-1">
                      <svg
                        className="w-4 h-4 text-white"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                        <path
                          fillRule="evenodd"
                          d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-nude-700 mb-2">
                        Explorez chaque espace
                      </h4>
                      <p className="text-nude-600">
                        Découvrez nos cabines de soins, l&apos;espace privatif
                        avec hammam, sauna et jacuzzi, ainsi que notre accueil
                        chaleureux.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-gradient-to-br from-rose-300 to-rose-400 rounded-full flex items-center justify-center mt-1">
                      <svg
                        className="w-4 h-4 text-white"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-nude-700 mb-2">
                        Ambiance authentique
                      </h4>
                      <p className="text-nude-600">
                        Ressentez l&apos;atmosphère zen et chaleureuse qui vous
                        attend. Chaque détail a été pensé pour votre bien-être.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-gradient-to-br from-rose-300 to-rose-400 rounded-full flex items-center justify-center mt-1">
                      <svg
                        className="w-4 h-4 text-white"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-nude-700 mb-2">
                        Navigation intuitive
                      </h4>
                      <p className="text-nude-600">
                        Utilisez votre souris pour vous déplacer et découvrir
                        tous les recoins de notre espace de bien-être unique à
                        La Roche-sur-Foron.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 space-y-4">
                  <a
                    href="https://www.kalendes.com/site/serenityspanoemiesaddier/welcome"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-spa text-white px-8 py-3 rounded-full font-medium w-full shadow-lg inline-block text-center"
                  >
                    Réserver ma séance
                  </a>
                  <button className="bg-nude-100 text-nude-800 border border-nude-300 px-8 py-3 rounded-full font-medium w-full hover:bg-nude-200 transition-colors">
                    Nous contacter
                  </button>
                </div>
              </div>
            </div>

            {/* Visite virtuelle interactive */}
            <div className="bg-white rounded-2xl p-4 shadow-lg">
              <div className="rounded-xl overflow-hidden bg-nude-100">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!4v1753085891444!6m8!1m7!1sCAoSHENJQUJJaERFWHhYOEMtWGRFRXNIa2ZudWRwcGM.!2m2!1d46.06593657441184!2d6.311598047209364!3f339.48126883605903!4f-0.09043518996399769!5f0.7820865974627469"
                  width="100%"
                  height="450"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Visite virtuelle Serenity Spa"
                />
              </div>
              <div className="text-center p-4">
                <h4 className="font-semibold text-nude-700 mb-2">
                  Visite Interactive 360°
                </h4>
                <p className="text-sm text-nude-600 mb-3">
                  🔄 Cliquez et faites glisser pour explorer • 🔍 Utilisez les
                  contrôles pour zoomer
                </p>
              </div>
            </div>
          </div>

          {/* Call to action en bas */}
          <div className="text-center mt-16">
            <div className="bg-gradient-to-r from-nude-400 to-nude-600 rounded-2xl p-8 text-white">
              <h3 className="text-2xl md:text-3xl font-serif font-semibold mb-4">
                Prêt pour votre moment de détente ?
              </h3>
              <p className="text-lg mb-6 opacity-90">
                Après cette visite virtuelle, venez vivre l&apos;expérience
                Serenity Spa en réel !
              </p>
              <a
                href="https://www.kalendes.com/site/serenityspanoemiesaddier/welcome"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-nude-800 px-8 py-3 rounded-full font-semibold text-lg hover:bg-nude-50 transition-colors shadow-lg inline-block"
              >
                Réserver maintenant
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-nude-700 text-nude-100 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-6 mb-6">
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
            <div className="text-center">
              <h4 className="text-lg font-serif font-semibold mb-3 text-nude-200">
                Horaires
              </h4>
              <div className="text-nude-300 text-sm space-y-1 mb-4">
                <p>Lun : 10h-13h / 14h-19h</p>
                <p>Mar-Ven : 9h-13h / 14h-19h</p>
                <p>Sam : 9h-13h / 14h-17h30</p>
              </div>
              <div className="flex flex-wrap justify-center gap-3 text-xs">
                <a
                  href="#accueil"
                  className="text-nude-400 hover:text-white transition-colors"
                >
                  Accueil
                </a>
                <a
                  href="#soins"
                  className="text-nude-400 hover:text-white transition-colors"
                >
                  Soins
                </a>
                <a
                  href="#visite"
                  className="text-nude-400 hover:text-white transition-colors"
                >
                  Visite
                </a>
              </div>
            </div>

            {/* Contact et Réseaux */}
            <div className="text-center md:text-right">
              <h4 className="text-lg font-serif font-semibold mb-3 text-nude-200">
                Contact
              </h4>

              <div className="text-nude-300 text-sm space-y-1 mb-4">
                <p>43 rue Perrine</p>
                <p>74800 La Roche-sur-Foron</p>
                <a
                  href="tel:0450256867"
                  className="block hover:text-white transition-colors"
                >
                  04 50 25 68 67
                </a>
                <a
                  href="mailto:ns.serenityspa@gmail.com"
                  className="block hover:text-white transition-colors text-xs"
                >
                  ns.serenityspa@gmail.com
                </a>
              </div>

              {/* Réseaux sociaux */}
              <div className="flex justify-center md:justify-end space-x-3 mb-3">
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
          </div>

          {/* Copyright */}
          <div className="border-t border-nude-600 pt-4 text-center">
            <p className="text-nude-400 text-xs">
              © 2025 Serenity Spa - Tous droits réservés
            </p>
          </div>
        </div>
      </footer>

      {/* Modal */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Informations détaillées"
      >
        <div className="space-y-4">
          <p>
            Ici vous pourrez ajouter toutes les informations complémentaires sur
            l&apos;espace Serenity Privatif que vous souhaitez communiquer à vos
            clients.
          </p>
          <p>
            Vous pourrez détailler les équipements, les règles
            d&apos;utilisation, les conseils, les contre-indications, etc.
          </p>
          <p className="text-sm text-nude-600">
            Vous pourrez me fournir le texte complet à intégrer dans cette
            modale plus tard.
          </p>
        </div>
      </Modal>
    </div>
  );
}
