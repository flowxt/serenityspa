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

            {/* 3. Noémie Saddier avec la couleur du bouton */}
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
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h2 className="text-4xl md:text-5xl font-serif font-light text-nude-700 mb-6">
              Mon Histoire
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              className="space-y-6 text-nude-700 leading-relaxed"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            >
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
            </motion.div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            >
              <Image
                src="/image/accueil-serenityspa.jpeg"
                alt="Enseigne Serenity Spa"
                width={600}
                height={400}
                className="rounded-2xl shadow-xl"
              />
            </motion.div>
          </div>

          <motion.div
            className="mt-12 text-nude-700 leading-relaxed space-y-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          >
            <p>
              Nous disposons de 3 cabines de soins dont 2 transformables en duo
              et espace accueil avec un pôle onglerie mains et pieds. Nous
              proposons des massages bien-être, des soins du corps, des soins du
              visage traditionnels ou avec des technologies tel que le soin
              Hydraface avec la machine V3 de chez Yumi Beauty, le traitement
              LED Thérapie de chez KBS, le Skinnéo Stimulation avec l&apos;ACS
              SkinNeedler… et d&apos;autres prestations esthétiques.
            </p>

            <motion.p
              className="text-center font-medium text-lg text-nude-600"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
            >
              Laurie, Manon et moi-même sommes ravies de prendre soin de vous le
              temps d&apos;un instant.
            </motion.p>

            <motion.p
              className="text-center italic text-nude-600"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 1, ease: "easeOut" }}
            >
              Aujourd&apos;hui le Spa continue de s&apos;agrandir grâce à vous.
              Merci !
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Section Spa Privatif */}
      <section className="py-20 bg-nude-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h2 className="text-4xl md:text-5xl font-serif font-light text-nude-700 mb-6">
              Espace Serenity Privatif
            </h2>
            <p className="text-xl text-nude-600 max-w-3xl mx-auto">
              Laissez vous transporter dans une ambiance zen et chaleureuse et
              profitez d&apos;une parenthèse de détente hors du temps.
            </p>
          </motion.div>

          <motion.div
            className="grid lg:grid-cols-2 gap-12 mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
            >
              <Image
                src="/image/spa-privatif.jpeg"
                alt="Spa Privatif"
                width={600}
                height={400}
                className="rounded-2xl shadow-xl w-full"
              />
            </motion.div>
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
            >
              <Image
                src="/image/espace-spa-privatif.jpeg"
                alt="Espace Spa Privatif"
                width={600}
                height={400}
                className="rounded-2xl shadow-xl w-full"
              />
            </motion.div>
          </motion.div>

          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
          >
            <p className="text-lg text-nude-700 mb-6">
              L&apos;espace Serenity Privatif* se compose d&apos;un bain à
              remous, d&apos;un hammam, d&apos;un sauna et d&apos;une salle de
              repos - tisanerie.
            </p>

            <motion.div
              className="grid md:grid-cols-2 gap-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 1, ease: "easeOut" }}
            >
              {/* Privatisation groupe */}
              <motion.div
                className="bg-nude-100 rounded-2xl p-6"
                whileHover={{ scale: 1.02, y: -5 }}
                transition={{ duration: 0.3 }}
              >
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
              </motion.div>

              {/* Privatisation solo */}
              <motion.div
                className="bg-nude-100 rounded-2xl p-6"
                whileHover={{ scale: 1.02, y: -5 }}
                transition={{ duration: 0.3 }}
              >
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
              </motion.div>

              {/* Hammam/Sauna seul */}
              <motion.div
                className="bg-nude-100 rounded-2xl p-6"
                whileHover={{ scale: 1.02, y: -5 }}
                transition={{ duration: 0.3 }}
              >
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
              </motion.div>

              {/* Informations */}
              <motion.div
                className="bg-nude-200 rounded-2xl p-6"
                whileHover={{ scale: 1.02, y: -5 }}
                transition={{ duration: 0.3 }}
              >
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
              </motion.div>
            </motion.div>

            <motion.div
              className="mt-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 1.2, ease: "easeOut" }}
            >
              <motion.button
                onClick={() => setIsModalOpen(true)}
                className="btn-spa text-white px-8 py-3 rounded-full font-medium shadow-lg"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.2 }}
              >
                En savoir plus
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Section Visite Virtuelle */}
      <section className="py-20 bg-nude-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h2 className="text-4xl md:text-5xl font-serif font-light text-nude-700 mb-6">
              Visite Virtuelle
            </h2>
            <p className="text-xl text-nude-600 max-w-3xl mx-auto">
              Découvrez notre espace privatif de bien-être en 360° avant votre
              visite
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            >
              <div className="space-y-6">
                <motion.div
                  className="flex items-start space-x-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
                >
                  <div className="bg-nude-400 rounded-full p-3 mt-1">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-nude-700 mb-2">
                      Explorez notre spa privatif
                    </h4>
                    <p className="text-nude-600">
                      Visitez virtuellement notre hammam, sauna, jacuzzi et
                      espace détente avant de réserver votre créneau.
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  className="flex items-start space-x-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
                >
                  <div className="bg-nude-400 rounded-full p-3 mt-1">
                    <svg
                      className="w-6 h-6 text-white"
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
                      Utilisez votre souris pour vous déplacer et découvrir tous
                      les recoins de notre espace de bien-être unique à La
                      Roche-sur-Foron.
                    </p>
                  </div>
                </motion.div>
              </div>

              <motion.div
                className="space-y-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
              >
                <motion.a
                  href="https://www.kalendes.com/site/serenityspanoemiesaddier/welcome"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-spa text-white px-8 py-3 rounded-full font-medium w-full shadow-lg inline-block text-center"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.2 }}
                >
                  Réserver ma séance
                </motion.a>
                <motion.button
                  className="bg-nude-100 text-nude-800 border border-nude-300 px-8 py-3 rounded-full font-medium w-full hover:bg-nude-200 transition-colors"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.2 }}
                >
                  Nous contacter
                </motion.button>
              </motion.div>
            </motion.div>

            {/* Visite virtuelle interactive */}
            <motion.div
              className="bg-white rounded-2xl p-4 shadow-lg"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            >
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
            </motion.div>
          </div>

          {/* Call to action en bas */}
          <motion.div
            className="text-center mt-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          >
            <motion.div
              className="bg-gradient-to-r from-nude-400 to-nude-600 rounded-2xl p-8 text-white"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-2xl md:text-3xl font-serif font-semibold mb-4">
                Prêt pour votre moment de détente ?
              </h3>
              <p className="text-lg mb-6 opacity-90">
                Après cette visite virtuelle, venez vivre l&apos;expérience
                Serenity Spa en réel !
              </p>
              <motion.a
                href="https://www.kalendes.com/site/serenityspanoemiesaddier/welcome"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-nude-800 px-8 py-3 rounded-full font-semibold text-lg hover:bg-nude-50 transition-colors shadow-lg inline-block"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.2 }}
              >
                Réserver maintenant
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
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
                <a
                  href="#accueil"
                  className="block text-nude-300 hover:text-nude-100 transition-colors"
                >
                  Accueil
                </a>
                <a
                  href="#soins"
                  className="block text-nude-300 hover:text-nude-100 transition-colors"
                >
                  Soins
                </a>
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

      {/* Modal */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Espace Serenity Privatif"
      >
        <div className="space-y-4">
          <p>
            Contenu du modal à définir selon les informations supplémentaires
            que vous souhaitez partager sur l&apos;espace privatif.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </Modal>
    </div>
  );
}
