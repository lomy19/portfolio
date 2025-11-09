import React, { useEffect, useState, useMemo } from "react";

const projectsData = [
  {
    category: "Développement Web",
    works: [
      { title: "Genshop",
        description: (
          <>
            Durant ma deuxième année de BUT MMI, j'ai réalisé un site e-commerce nommé <a href="https://www.youtube.com/watch?v=_vKfB2r5bRo" target="_blank" rel="noopener noreferrer">Genshop</a>, basé sur le jeu vidéo Genshin Impact. En respectant la structure Modèle-Vue-Contrôleur (MVC) et en utilisant une base de données via MyPhpMyAdmin, j'ai développé ce site en utilisant mes compétences en HTML, CSS, Javascript, PHP, SQL et jQuery. L'idée était que Genshop permette aux utilisateurs d'acheter divers produits typiques du jeu (personnages, armes, artéfacts, nourriture et gadgets), lesquels sont ensuite directement envoyés dans la boîte aux lettres du compte Genshin Impact de l'acheteur.
          </>
        ),
        image: "/assets/dev/Genshop.gif"
      },
      { title: "Pet Store Lomy",
        description: (
          <>
            <a href="https://nintendogscats.netlify.app/" target="_blank" rel="noopener noreferrer">Pet Store Lomy</a> est inspiré d'un de mes jeux d'enfance Nintendogs + Cats. J'ai créé ma propre version avec des assets trouvé sur PolyPizza. J'ai ainsi recréé une salle dans laquelle des chiens de différentes races, tailles et comportements se balades. On peut se déplacer et aller voir les chiens. En interagissant avec un chien en particulier, on peut découvrir ses caractéristiques personnelles.
          </>
        ),
        image: "/assets/dev/Pet.gif"
      },
      { title: "Scène 3D",
        description: (
          <>
            Notre professeur de développement Front End nous a présenté lors d'un cours le framework React et le site PolyPizza sur lequel nous pouvons retrouver des modèles 3D souvent gratuits, dont beaucoup sont animés. Il nous a ainsi demandé de créer une <a href="https://scene3d-lomy.netlify.app/" target="_blank" rel="noopener noreferrer">scène 3D</a> dans laquelle une interaction devra être intégrée. En cliquant sur le chat et / ou le papillon, ils s'animeront.
            </>
        ),
        image: "/assets/dev/scene.gif"
      },
      { title: "Des bombes et des étoiles",
        description: (
          <>
            Un de mes professeurs de développement web nous a un jour présenté Phaser : un framework JavaScript populaire utilisé pour le développement de jeux 2D en ligne, adapté aux navigateurs web. De là je me suis amusée à créer un petit jeu que j'ai nommé <a href="https://lomy-05.itch.io/des-etoiles-et-des-bombes" target="_blank" rel="noopener noreferrer">"Des étoiles et des bombes"</a>. J'ai créé les personnages de moi-même sur Illustrator et les ai ensuite intégré au jeu. On incarne ainsi les deux personnages de l'anime Cyberpunk : Lucie ou David. Ensemble, vous devez récupérer des étoiles et esquiver les bombes ! Ce jeu se joue ainsi à 2 mais sur le même clavier !
          </>
        ),
        image: "/assets/dev/cyberpunk.gif"
      },
      { title: "Le Tueur du Caillou",
        description: (
          <>
            Pour ce devoir, nous devions créer un jeu de société sur la Nouvelle-Calédonie en intégrant des éléments technologiques. Avec mes trois camarades, nous avons créé un jeu mi-vidéo, mi-société : "<a href="https://www.youtube.com/watch?v=_vKfB2r5bRo" target="_blank" rel="noopener noreferrer">Le Tueur du Caillou</a>". Nous avons développé l'histoire, conçu les visuels des personnages, acheté et décoré une boîte au trésor, imprimé et découpé les éléments physiques de notre jeu. De plus, nous avons programmé le jeu, réalisé un trailer et mis le tout en ligne sur itch.io, une plateforme d'hébergement de jeux vidéo. Ce visual novel vous emportera dans l'histoire intrigante de cinq jeunes amis vivant en Nouvelle-Calédonie et essayant de découvrir qui est le tueur du caillou. Et vous, serez-vous capable de découvrir son identité à temps ?
          </>
        ),
        image: "/assets/dev/caillou.gif"
      }
    ]
  },
  {
    category: "Modélisation 3D",
    works: [
      { title: "Bouclier", description: "En 3e année de BUT MMI, j'ai découvert Blender à travers cette exercice : la création d'un bouclier. J'ai énormément appris sur l'outil et la création d'objet en 3D. Ma première en 3D ne fut pas parfaite, mais je suis fière de l'exposer sur mon portfolio.", image: "/assets/3d/bouclier.gif" },
      { title: "Parapluie", description: "Aimant tout ce qui touche aux fleurs, je me suis empressée de créer ce parapluie fleur en 3D sur Blender. De là est née mon envie de continuer de créer avec cet outil.", image: "/assets/3d/parapluie.gif" },
      { title: "Chat", description: "Cet exercice fait en cours m'a permis de découvrir le Grease Pencil, technique que je ne connaissais pas encore sur Blender. Le Grease Pencil permet de transformer nos objets 3D en sorte de dessins que nous pouvons tourner autour.", image: "/assets/3d/chat.gif" },
      { title: "Brique de lait", description: "La demande de créer une brique de lait n'était pas aussi simple à mettre en oeuvre. Une fois la bouteille finie, il fallait la décorer à l'aide d'un patron créé par nos soins. J'ai, pour ma part, décidé de dédier cette brique de lait à l'Univers du jeu Expédition 33.", image: "/assets/3d/lait.gif" },
      { title: "Citrouille", description: "Après avoir découvert Blender, j'ai voulu créer un petit projet personnel. De vidéo en vidéo, je tombe sur un tutoriel de citrouille en 3D sur youtube que je désire reproduire. C'est ainsi qu'est née cette oeuvre, que je me suis ensuite amusée à animer.", image: "/assets/3d/citrouille.gif" }
    ]
  },
  {
    category: "Audiovisuel",
    works: [
      { title: "CV Vidéo",
        description: (
          <>
            En cours de Projet Personnel et Professionnel (PPP), notre professeur nous a demandé de réaliser un <a href="https://www.youtube.com/watch?v=loOmzzFmUoM" target="_blank" rel="noopener noreferrer">CV Vidéo</a> : une vidéo de nous nous présentant nous, nos qualités, nos défauts, nos diplômes, nos envies pour l'avenir.</>
        ),
        image: "/assets/audiovisuel/cv.gif"
      },
      { title: "Ma présentation",
        description: (
          <>
            En cours de Projet Personnel et Professionnel (PPP), notre professeure nous a demandé de réaliser une <a href="https://www.youtube.com/watch?v=Ko2jRhHAiCs" target="_blank" rel="noopener noreferrer">présentation</a> de nous expliquant brièvement notre diplôme, nos compétences, ainsi que nos perspectives d'avenir. Je vous laisse ainsi découvrir mon profil.</>
        ),
        image: "/assets/audiovisuel/presentation.gif"
      },
      { title: "Luciole",
        description: (
          <>
            <a href="https://www.youtube.com/watch?v=gsJRb9KuboU" target="_blank" rel="noopener noreferrer">Luciole</a> est une vidéo toute particulière pour moi. Il s'agit d'un essai vidéo que j'ai réalisé durant mes études. J'ai choisi d'aborder le sujet de Luciole dont vous découvrirez la véritable identité en regardant ma video c:
          </>
        ),
        image: "/assets/audiovisuel/luciole.gif"
      },
      { title: "Le bagne",
        description: (
          <>
            L'objectif de cet <a href="https://www.youtube.com/watch?v=6931HH_syRI" target="_blank" rel="noopener noreferrer">exercice</a> était de rechercher des visuels du bagne et de réaliser un montage sur un passage d'un texte que nous avons co-écrit avec mes camarades et notre professeur. N'illustrant qu'un passage, je vous invite à regarder la vidéo complète pour découvrir le montage final du projet Ils-Nous qui sortira bientôt !
          </>
        ),
        image: "/assets/audiovisuel/bagne.gif"
      }
    ]
  },
  {
    category: "Crochet",
    works: [
      { title: "Petit sac citron", description: "Pour le plaisir de crocheter et tester de nouvelles choses, j'ai créé un petit sac citron !", image: "/assets/crochet/citron.gif" },
      { title: "Petit sac fraise", description: "Mon premier petit sac en crochet, j'ai choisi de faire des fraises !", image: "/assets/crochet/fraise.gif" },
      { title: "Portes clés", description: "Petits portes clés mignons pour accrocher à son sac !", image: "/assets/crochet/porte_cle.gif" },
      { title: "Porte clé en rose", description: "Une rose en crochet est quelque chose de beau à voir ", image: "/assets/crochet/rose.gif" },
      { title: "Coeur", description: "Pour octobre rose, j'ai réalisé de nombreux coeurs comme celui-ci, afin que les gens puissent les accrocher près de leur coeur.", image: "/assets/crochet/coeur.gif" }
    ]
  },
  {
    category: "Autre",
    works: [
      { title: "Jeu unity tutuuuure",
        description: (
          <>
            La consigne : Construire un jeu de voiture en se servant de Blender et de Unity. Défi relevé, je vous laisse à la <a href="https://drive.google.com/file/d/1SDdk5kUi4sQ9tqcpSJs_HRL_aey7dqPe/view?usp=drive_link" target="_blank" rel="noopener noreferrer">vidéo</a> de démonstration !
          </>
        ),
        image: "/assets/autre/voiture.gif" },
      { title: "Mon portrait IA",
        description: (
          <>
            Avec l'arrivée croissante des IA, notre professeure nous a proposé un devoir étonnant : créer son <a href="https://drive.google.com/drive/folders/1QEylHCDuLod9t7qS-40zhXnnTwtLbe6j?usp=drive_link" target="_blank" rel="noopener noreferrer">portrait avec une IA</a>, tout en mettant notre culture en avant, que ce soit avec des objets symboliques ou des décors culturels. Il faudrait ensuite animer notre portrait et créer une vidéo où il se ferait passer pour nous. Dans cette vidéo, notre portrait devra se présenter lui et sa relation avec sa culture.
          </>
        ),
        image: "/assets/autre/ia.gif" },
      { title: "Baleine sur TouchDesigner", description: "TouchDesigner est un outil que j'ai découvert en 2e année de BUT MMI. Difficile à prendre en main, j'ai voulu apprendre en suivant un tutoriel sur youtube. Je vous laisse avec le résulat ^^", image: "/assets/autre/baleine.gif" },
      { title: "De major de promo à moyenne", description: "Sur LinkedIn, j'ai voulu partager ce que j'ai ressenti et comment j'ai rebondi en passant de major de promo à élève moyenne, la transition entre le lycée et l'université. J'ai ainsi dessiné ce personnage me représentant entièrement sur Illustrator, outil de la suite Adobe que j'apprennais à utiliser.", image: "/assets/autre/major.gif" },
      { title: "Au rythme de la musique", description: "Durant ce projet, j'ai appris à créer des 'particules' qui dansent au rythme de la musique. J'ai également rajouté une augmentation conséquente de la vitesse de déplacement lorsque je parle. Le tout ayant été créé sur TouchDesigner.", image: "/assets/autre/rose.gif" }
    ]
  }
];

// Tous mes filtres
const CATEGORY_LABELS = {
  all: "Tout",
  web: "Développement web",
  threeD: "Modélisation 3D",
  audiovisuel: "Audiovisuel",
  crochet: "Crochet",
  autre: "Autre",
};

const toKey = (label: string) => {
  const l = label.toLowerCase();
  if (l.includes("crochet")) return "crochet";
  if (l.includes("audiovisuel")) return "audiovisuel";
  if (l.includes("modélisation") || l.includes("modelisation") || l.includes("3d")) return "threeD";
  if (l.includes("développement") || l.includes("developpement") || l.includes("web")) return "web";
  return "autre";
};

const flatItems = projectsData.flatMap((block, blockIndex) => {
  const key = toKey(block.category);
  return block.works.map((w, workIndex) => ({ ...w, __key: key, __order: [blockIndex, workIndex] }));
});

// === STYLES ===
const GlobalStyles: React.FC = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Baloo+2:wght@600&family=Quicksand:wght@400;600&display=swap');
    :root { --rose: #FFD9F8; --jaune: #FFF7D9; --ink: #3a2d22; }
    * { box-sizing: border-box; }
    body { margin: 0; }
    .app { font-family: 'Quicksand', sans-serif; background-color: var(--jaune); color: var(--ink); min-height: 100vh; }
    header { background: var(--rose); padding: 1rem; display: flex; justify-content: space-between; align-items: center; position: sticky; top: 0; z-index: 10; }
    h1, h2 { font-family: 'Baloo 2', cursive; margin: .5rem 0; text-align:center; }
    nav a { color: #6f3370; text-decoration: none; font-weight: 600; margin-left: .5rem; }
    section { margin: 2rem auto; padding: 0 1rem; }
    .project-card { background: #fff; border: 2px solid var(--rose); border-radius: 2rem; box-shadow: 0 4px 0 var(--jaune); padding: 1rem; text-align:center; }
    img { max-width: 100%; border-radius: 1rem; }
    /* Project thumbnails: fixed height, width auto, keep aspect ratio and avoid cropping */
    .project-card img {
      height: 250px;
      object-fit: contain;
      display: block;
      margin: 0 auto 0.75rem;
    }
    .btn { background-color: var(--rose); border: 2px solid var(--rose); padding: .5rem 1rem; border-radius: 2rem; color: #6f3370; font-weight: 700; cursor: pointer; }
    footer { text-align: center; padding: 2rem; font-size: .9rem; opacity: .9; }

    .filters { display: flex; gap: .5rem; flex-wrap: wrap; justify-content: center; margin: 0 auto 1.5rem; width: 90vw; }
    .filter-btn { border: 2px solid var(--rose); background: rgba(255,255,255,.85); color: #6f3370; padding: .4rem .8rem; border-radius: 999px; cursor: pointer; font-weight: 600; transition: all .3s ease; }
    .filter-btn.active, .filter-btn:hover { background: var(--rose); transform: scale(1.05); }

    .projects-wrap { width: 90vw; margin: 0 auto; }
    /* Use flexbox so rows with 1 or 2 items stay centered */
    .grid-3 { display: flex; flex-wrap: wrap; justify-content: center; gap: 1rem; }
    .project-card { flex: 0 1 calc(33.333% - 1rem); max-width: 360px; }
    @media (max-width: 900px) {
      .project-card { flex: 0 1 calc(50% - 1rem); }
    }
    @media (max-width: 600px) {
      .project-card { flex: 0 1 100%; }
    }

    /* Contact specific styles */
    .contact-row { display:flex; gap:1rem; align-items:center; justify-content:center; margin:1rem 0; }
    .contact-icon { width:56px; height:56px; display:inline-flex; align-items:center; justify-content:center; border-radius:12px; background:#fff; border:2px solid var(--rose); color:#6f3370; text-decoration:none; }
    .contact-icon svg { width:26px; height:26px; }
    .cv-btn { margin-left: .5rem; padding:.6rem 1rem; border-radius: 999px; text-decoration:none; border:2px solid var(--rose); background:var(--rose); color:#6f3370; font-weight:700; }
    .contact-legend { text-align:center; opacity: .95; }

  `}</style>
);

export default function PortfolioTemplate() {
  const [active, setActive] = useState("all");

  // Pour que s'affiche jamais dans le même ordre !!
  const shuffle = (arr: any[]) => {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  };

  // Mes filtres
  const visibleItems = useMemo(() => {
    const filtered = active === "all" ? flatItems : flatItems.filter((it) => it.__key === active);
    return shuffle(filtered);
  }, [active]);

  useEffect(() => {
    console.log("Portfolio Template chargé ✅");
  }, []);

  return (
    <div className="app">
      <GlobalStyles />

      <header>
        <h1>Mon portfolio – Lory MORELLO</h1>
        <nav>
          <a href="#about">À propos</a> |
          <a href="#projects">Projets</a> |
          <a href="#skills">Compétences</a> |
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main>
        <section id="about" style={{ maxWidth: "900px" }}>
          <h2>À propos de moi</h2>
          <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', textAlign: 'center', gap: '1.5rem' }}>
            <img src="assets/lory.png" alt="Lory Morello" style={{ height: '300px'}} />
            <p style={{ maxWidth: '700px' }}>
              Je m'appelle <strong>Lory Morello</strong>, fraîchement diplômée d’un BUT Métiers du Multimédia et de
              l’Internet (MMI). Passionnée par la création numérique, je combine mes compétences en développement web,
              design et communication pour donner vie à des projets créatifs et soignés.
            </p>
          </div>
        </section>

        <section id="projects">
          <h2>Mes Projets</h2>
          <div className="filters">
            {Object.entries(CATEGORY_LABELS).map(([key, label]) => (
              <button key={key} className={`filter-btn ${active === key ? 'active' : ''}`} onClick={() => setActive(key)}>
                {label}
              </button>
            ))}
          </div>

          <div className="projects-wrap">
            <div className="grid-3">
              {visibleItems.map((work) => (
                <article key={`${work.title}-${work.image}`} className="project-card">
                  <img src={work.image} alt={work.title} />
                  <h4>{work.title}</h4>
                  {typeof work.description === "string" ? (
                    <p dangerouslySetInnerHTML={{ __html: work.description }} />
                  ) : (
                    <p>{work.description}</p>
                  )}
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="skills" style={{ maxWidth: "900px" }}>
          <h2>Compétences</h2>
          <p>Au travers de ces projets, vous avez pu voir de nombreuses compétences techniques que je possède :</p>
          <ul>
            <li>Développement web : Angular, html, css, bootstrap, java, flutter, react, vue.js, MVC, javascript, Github.</li>
            <li>Travail d'objets 3D : Blender, TouchDesigner.</li>
            <li>Audiovisuel : Premiere Pro, CapCut, VN, Procreat, matériel de tournage (perche, trépieds, lumières, caméras, etc).</li>
            <li>Crochet : accessoires, petits sacs.</li>
          </ul>
        </section>

        <section id="contact" style={{ maxWidth: "900px" }}>
          <h2>Contact</h2>

          <div className="contact-legend">
            <p>Vous pouvez me contacter via Instagram, LinkedIn ou télécharger mon CV.</p>
          </div>

          <div className="contact-row" role="list">
            <a className="contact-icon" href="https://www.instagram.com/miss_apple_crea?igsh=eWtoYmt3cnB1NXFv&utm_source=qr" target="_blank" rel="noopener noreferrer" aria-label="Instagram - Miss Apple Crea">
              <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M7 2h10a5 5 0 015 5v10a5 5 0 01-5 5H7a5 5 0 01-5-5V7a5 5 0 015-5zm5 6.2A3.8 3.8 0 109 12a3.8 3.8 0 003-3.8zM17.5 6.2a.88.88 0 11-1.76 0 .88.88 0 011.76 0z"/></svg>
            </a>

            <a className="contact-icon" href="https://www.linkedin.com/in/lory-morello-90426a26b" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn - Lory Morello">
              <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.11 1 2.5 1 4.98 2.12 4.98 3.5zM0 8h5v16H0V8zm7.5 0H12v2.2h.1c.6-1.1 2-2.2 4.1-2.2 4.4 0 5.2 2.9 5.2 6.6V24h-5V16c0-1.9 0-4.3-2.6-4.3-2.6 0-3 2-3 4.1V24h-5V8z"/></svg>
            </a>

            <a className="cv-btn" href="/assets/MORELLO Lory - CV 2025.pdf" download target="_blank" rel="noopener noreferrer" aria-label="Télécharger mon CV (PDF)">Télécharger mon CV</a>
          </div>

        </section>
      </main>

      <footer>
        <p>Fait avec ❤️ par Lory MORELLO.</p>
      </footer>
    </div>
  );
}