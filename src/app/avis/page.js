"use client";

import { motion } from "framer-motion";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";

export default function Avis() {
  const avisClients = [
    {
      id: 1,
      nom: "Aurelie Crestin",
      note: 5,
      date: "23 juillet 2025",
      commentaire:
        "Très belle découverte. J'ai eu la chance de faire un soin de visage avec Manon.",
      featured: true,
    },
    {
      id: 2,
      nom: "Sophie Lauriac",
      note: 5,
      date: "juin 2025",
      commentaire: "Une superbe expérience !",
    },
    {
      id: 3,
      nom: "Jordan Troussier",
      note: 5,
      date: "février 2025",
      commentaire:
        "Une expérience absolument merveilleuse ! Le massage relaxant que j'ai reçu a parfaitement soulagé toutes mes tensions. Je me sens incroyablement détendu et...",
      featured: true,
    },
    {
      id: 4,
      nom: "Swienty Sarah",
      note: 5,
      date: "juin 2025",
      commentaire:
        "Petit moment de douceur, un accueil chaleureux, un environnement tout doux, et un personnel au petits soins pour ses clients",
    },
    {
      id: 5,
      nom: "Ivanne J",
      note: 5,
      date: "février 2025",
      commentaire:
        "Endroit très chaleureux, j'adore ! En plus, l'équipe est superbe.",
    },
    {
      id: 6,
      nom: "Amélie L.",
      note: 5,
      date: "mai 2025",
      commentaire:
        "Très bonne expérience chez Serenity. Un massage qui m'a vraiment fait du bien, des huiles qui sentent divinement bons ! Un moment hors du temps. J'ai adoré !",
      featured: true,
    },
    {
      id: 7,
      nom: "Maud Landemaine",
      note: 5,
      date: "février 2025",
      commentaire:
        "Un grand merci pour ce moment à deux. Le lieu est superbe, le coin spa privatisé est vraiment beau et agréable, suivi d'un massage signature incroyable. Merci beaucoup. Au plaisir de revenir",
      featured: true,
    },
    {
      id: 8,
      nom: "Laurence Prudent",
      note: 5,
      date: "janvier 2025",
      commentaire:
        "Cliente fidèle, je ne peux que conseiller Noémie et son équipe pour leur professionnalisme, leur douceur en soins. Tout est charmant, le spa est top.",
    },
    {
      id: 9,
      nom: "Juliette Wiart",
      note: 5,
      date: "janvier 2025",
      commentaire:
        "Un moment de pure détente ! Le massage femme enceinte était vraiment bien. Je me suis sentie chouchoutée et apaisée de pas mal de douleurs.. merci beaucoup. Je recommande vivement.",
    },
    {
      id: 10,
      nom: "Nina Andreoli",
      note: 5,
      date: "juin 2025",
      commentaire:
        "Super moment avec Laurie. Les pressions étaient supers ! Le massage était incroyable. Merci pour ce moment.",
    },
    {
      id: 11,
      nom: "Virginie Girard",
      note: 5,
      date: "octobre 2024",
      commentaire:
        "Endroit propre, agréable et chaleureux. On y est bien accueillies et en ce qui concerne les épilations elles utilisent une cire très douce qui évite les douleurs trop importantes pour les plus sensibles comme moi. Je recommande cet institut à 100%",
    },
    {
      id: 12,
      nom: "Khadija Edaibech",
      note: 5,
      date: "novembre 2024",
      commentaire:
        "Je voulais juste prendre un moment pour exprimer ma gratitude envers le centre d'esthétique pour le service exceptionnel que j'ai reçu lors de mon épilation.",
    },
    {
      id: 13,
      nom: "Catherine Duplan",
      note: 5,
      date: "octobre 2024",
      commentaire:
        "Magnifique endroit, havre de paix où l'on se sent bien au calme, détendu et d'une propreté irréprochable.",
    },
    {
      id: 14,
      nom: "Dorothée Brazillé",
      note: 5,
      date: "janvier 2024",
      commentaire:
        "Nous avons passé un très bon moment dans la partie SPA. Le massage était vraiment au top, je suis sortie détendue. En ce qui concerne l'accueil là encore rien à redire.",
    },
    {
      id: 15,
      nom: "Kathye Borges",
      note: 5,
      date: "décembre 2024",
      commentaire:
        "Je suis cliente depuis leur début. Autant l'accueil que les soins sont prodigués dans les règles de l'art!!! Je vous recommande grandement cet institut. Ce sont de vrais professionnelles.",
    },
    {
      id: 16,
      nom: "Othilie Gal",
      note: 5,
      date: "novembre 2024",
      commentaire:
        "Déjà mon 3e massage avec Noémie. Des prestations vraiment superbes, Noémie est très douce et professionnelle, et l'ambiance est apaisante. Merci pour ces moments agréables de détente. Je conseille vivement !",
    },
    {
      id: 17,
      nom: "Elodie LOUET",
      note: 5,
      date: "mars 2024",
      commentaire:
        "Une pause de 2h00 … mais une vraie pause ! Tout est parfait, de l'accueil bienveillant en passant par les installations (jacuzzi, hammam, sauna, salle de repos).",
      featured: true,
    },
    {
      id: 18,
      nom: "Julie Bt",
      note: 5,
      date: "juillet 2024",
      commentaire:
        "Un moment magique. 1h de massage génial, Laurie est très douce, le salon est très beau, agréable, on commence à se détendre juste en passant la porte. L'accueil est top également. J'y retournerais sans aucun doute",
    },
  ];

  // Étoiles pour l'affichage
  const renderStars = (note) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span
        key={i}
        className={`text-lg ${i < note ? "text-yellow-400" : "text-gray-300"}`}
      >
        ⭐
      </span>
    ));
  };

  return (
    <div className="min-h-screen bg-nude-50">
      <Navigation />

      {/* Header Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-nude-100 to-nude-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-serif font-bold text-nude-800 mb-6 leading-tight">
              Avis Clients
            </h1>
            <p className="text-xl md:text-2xl text-nude-600 max-w-4xl mx-auto leading-relaxed mb-8">
              Découvrez les témoignages de nos clients qui ont vécu
              l&apos;expérience Serenity Spa
            </p>

            {/* Note globale */}
            <div className="bg-white rounded-2xl p-6 shadow-lg max-w-md mx-auto mb-8">
              <div className="flex items-center justify-center space-x-2 mb-2">
                {renderStars(5)}
              </div>
              <p className="text-3xl font-bold text-nude-700">5.0/5</p>
              <p className="text-nude-600">
                Note moyenne basée sur nos avis Google
              </p>
              <a
                href="https://share.google/Yn7dQiTPluKTqS07J"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 bg-nude-600 text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-nude-700 transition-colors"
              >
                Voir tous nos avis Google
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Avis en vedette */}
      <section className="py-16 bg-gradient-to-br from-nude-50 to-nude-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-serif font-semibold text-nude-700 text-center mb-12">
            Témoignages en vedette
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {avisClients
              .filter((avis) => avis.featured)
              .map((avis, index) => (
                <motion.div
                  key={avis.id}
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-nude-400 flex flex-col h-full"
                  whileHover={{ y: -3, scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex space-x-1">
                      {renderStars(avis.note)}
                    </div>
                    <span className="bg-nude-100 text-nude-700 px-3 py-1 rounded-full text-xs font-semibold">
                      ⭐ Vedette
                    </span>
                  </div>

                  <div className="flex-grow">
                    <p className="text-nude-700 leading-relaxed mb-4 italic">
                      &ldquo;{avis.commentaire}&rdquo;
                    </p>
                  </div>

                  <div className="border-t border-nude-100 pt-4 mt-auto">
                    <p className="font-semibold text-nude-800">{avis.nom}</p>
                    <p className="text-sm text-nude-500">{avis.date}</p>
                  </div>
                </motion.div>
              ))}
          </div>
        </div>
      </section>

      {/* Tous les avis - Défilement infini */}
      <section className="py-16 bg-white overflow-hidden">
        <div className="max-w-full">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-semibold text-nude-700 text-center">
              Tous nos avis clients
            </h2>
          </div>

          {/* Première ligne - défilement de gauche à droite */}
          <div className="relative mb-6">
            <div className="flex animate-scroll-right space-x-6">
              {/* Premier groupe d'avis (pairs) */}
              {avisClients
                .filter((_, index) => index % 2 === 0)
                .map((avis, index) => (
                  <div
                    key={`right-first-${avis.id}`}
                    className="flex-shrink-0 w-96 h-52 bg-nude-50 rounded-xl p-6 hover:bg-nude-100 transition-colors duration-300 flex flex-col"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex space-x-1">
                        {renderStars(avis.note)}
                      </div>
                      <span className="text-xs text-nude-500">{avis.date}</span>
                    </div>

                    <div className="flex-grow">
                      <p className="text-nude-700 leading-relaxed mb-3 text-sm">
                        &ldquo;{avis.commentaire}&rdquo;
                      </p>
                    </div>

                    <p className="font-semibold text-nude-800 text-sm mt-auto">
                      {avis.nom}
                    </p>
                  </div>
                ))}

              {/* Duplication pour le défilement infini */}
              {avisClients
                .filter((_, index) => index % 2 === 0)
                .map((avis, index) => (
                  <div
                    key={`right-second-${avis.id}`}
                    className="flex-shrink-0 w-96 h-52 bg-nude-50 rounded-xl p-6 hover:bg-nude-100 transition-colors duration-300 flex flex-col"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex space-x-1">
                        {renderStars(avis.note)}
                      </div>
                      <span className="text-xs text-nude-500">{avis.date}</span>
                    </div>

                    <div className="flex-grow">
                      <p className="text-nude-700 leading-relaxed mb-3 text-sm">
                        &ldquo;{avis.commentaire}&rdquo;
                      </p>
                    </div>

                    <p className="font-semibold text-nude-800 text-sm mt-auto">
                      {avis.nom}
                    </p>
                  </div>
                ))}
            </div>
          </div>

          {/* Deuxième ligne - défilement de droite à gauche */}
          <div className="relative">
            <div className="flex animate-scroll-left space-x-6">
              {/* Deuxième groupe d'avis (impairs) */}
              {avisClients
                .filter((_, index) => index % 2 === 1)
                .map((avis, index) => (
                  <div
                    key={`left-first-${avis.id}`}
                    className="flex-shrink-0 w-96 h-52 bg-nude-100 rounded-xl p-6 hover:bg-nude-200 transition-colors duration-300 flex flex-col"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex space-x-1">
                        {renderStars(avis.note)}
                      </div>
                      <span className="text-xs text-nude-500">{avis.date}</span>
                    </div>

                    <div className="flex-grow">
                      <p className="text-nude-700 leading-relaxed mb-3 text-sm">
                        &ldquo;{avis.commentaire}&rdquo;
                      </p>
                    </div>

                    <p className="font-semibold text-nude-800 text-sm mt-auto">
                      {avis.nom}
                    </p>
                  </div>
                ))}

              {/* Duplication pour le défilement infini */}
              {avisClients
                .filter((_, index) => index % 2 === 1)
                .map((avis, index) => (
                  <div
                    key={`left-second-${avis.id}`}
                    className="flex-shrink-0 w-96 h-52 bg-nude-100 rounded-xl p-6 hover:bg-nude-200 transition-colors duration-300 flex flex-col"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex space-x-1">
                        {renderStars(avis.note)}
                      </div>
                      <span className="text-xs text-nude-500">{avis.date}</span>
                    </div>

                    <div className="flex-grow">
                      <p className="text-nude-700 leading-relaxed mb-3 text-sm">
                        &ldquo;{avis.commentaire}&rdquo;
                      </p>
                    </div>

                    <p className="font-semibold text-nude-800 text-sm mt-auto">
                      {avis.nom}
                    </p>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section CTA */}
      <section className="py-16 bg-gradient-to-r from-nude-400 to-nude-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-serif font-semibold text-white mb-6">
              À votre tour de vivre l&apos;expérience Serenity Spa
            </h2>
            <p className="text-xl text-white opacity-90 mb-8">
              Rejoignez nos clients satisfaits et découvrez pourquoi nous avons
              tant d&apos;avis 5 étoiles
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
              <motion.a
                href="https://share.google/Yn7dQiTPluKTqS07J"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-nude-700 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-nude-800 transition-colors shadow-xl inline-block"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.2 }}
              >
                Laisser un avis
              </motion.a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
