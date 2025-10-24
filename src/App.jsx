import React, { useState, useEffect, useRef } from "react";
import { motion, useAnimation, useInView, useScroll, useSpring } from "framer-motion";

// lorna.tv — Landing page complète, propre et moderne

export default function LornaTvLanding() {
  const [open, setOpen] = useState(false);
  const [billing, setBilling] = useState("monthly");
  const [showTop, setShowTop] = useState(false);

  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 100, damping: 30, mass: 0.2 });

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 320);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const platforms = [
    { 
      title: "iOS / iPadOS", 
      points: ["Picture-in-Picture", "AirPlay", "Gestes rapides", "Widgets"],
      icon: (
        <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.5">
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
          <line x1="8" y1="21" x2="16" y2="21"/>
          <line x1="12" y1="17" x2="12" y2="21"/>
        </svg>
      ),
      color: "from-blue-500 to-cyan-400"
    },
    { 
      title: "Android", 
      points: ["Chromecast", "Navigation TV", "Raccourcis", "Intégration système"],
      icon: (
        <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
          <circle cx="9" cy="7" r="4"/>
          <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
          <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
        </svg>
      ),
      color: "from-green-500 to-emerald-400"
    },
    { 
      title: "Web (SaaS)", 
      points: ["Aucune installation", "Sauvegarde cloud", "Gestion appareils", "Mises à jour continues"],
      icon: (
        <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.5">
          <circle cx="12" cy="12" r="3"/>
          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1 1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/>
        </svg>
      ),
      color: "from-purple-500 to-pink-400"
    },
  ];

  const features = [
    { 
      title: "Connexion M3U & Xtream", 
      desc: "Connectez instantanément vos playlists M3U et identifiants Xtream. Détection automatique des chaînes, EPG complet et logos personnalisés.", 
      icon: (
        <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
        </svg>
      ),
      color: "from-yellow-500 to-orange-400"
    },
    { 
      title: "Sync multi-appareils", 
      desc: "Vos favoris, historique et watchlist se synchronisent automatiquement entre tous vos appareils iOS, Android et Web.", 
      icon: (
        <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
          <polyline points="3.27,6.96 12,12.01 20.73,6.96"/>
          <line x1="12" y1="22.08" x2="12" y2="12"/>
        </svg>
      ),
      color: "from-blue-500 to-cyan-400"
    },
    { 
      title: "Guide TV & Recherche", 
      desc: "EPG ultra-clair avec filtres avancés, recherche intelligente et zapping fluide pour une navigation parfaite.", 
      icon: (
        <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.5">
          <circle cx="11" cy="11" r="8"/>
          <path d="M21 21l-4.35-4.35"/>
        </svg>
      ),
      color: "from-purple-500 to-pink-400"
    },
    { 
      title: "Profils & Contrôle parental", 
      desc: "Créez des profils personnalisés avec contrôles parentaux avancés, PIN de sécurité et restrictions par catégories.", 
      icon: (
        <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M12 12a5 5 0 1 0 0-10 5 5 0 0 0 0 10Z"/>
          <path d="M12 1v6m0 6v6m11-7h-6m-6 0H1"/>
        </svg>
      ),
      color: "from-green-500 to-emerald-400"
    },
    { 
      title: "Performance optimale", 
      desc: "Lecteur ultra-moderne avec faible latence, cache intelligent et reprise instantanée pour une expérience fluide.", 
      icon: (
        <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.5">
          <circle cx="12" cy="12" r="10"/>
          <path d="M12 6v6l4 2"/>
        </svg>
      ),
      color: "from-red-500 to-pink-400"
    },
    { 
      title: "SaaS ultra-sécurisé", 
      desc: "Espace Web chiffré de bout en bout, authentification forte et gestion centralisée de tous vos appareils.", 
      icon: (
        <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.5">
          <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
          <circle cx="12" cy="16" r="1"/>
          <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
        </svg>
      ),
      color: "from-indigo-500 to-purple-400"
    },
  ];

  const plans = [
    { name: "Web (SaaS)", highlight: false, prices: { monthly: "Gratuit", yearly: "Gratuit" }, perks: ["Accès navigateur", "Sync cloud", "Favoris illimités", "1 appareil"] },
    { name: "Essentiel", highlight: true, prices: { monthly: "9,99€ / mois", yearly: "99€ / an" }, perks: ["iOS + Android + Web", "EPG avancé", "3 appareils", "Support standard"] },
    { name: "Pro", highlight: false, prices: { monthly: "14,99€ / mois", yearly: "149€ / an" }, perks: ["Jusqu’à 5 appareils", "Profils & PIN", "Sauvegardes prioritaires", "Support prioritaire"] },
  ];

  return (
    <div className="relative min-h-screen text-neutral-100 overflow-hidden">
      <style>{`html{scroll-behavior:smooth}`}</style>

      <div aria-hidden className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute -top-32 left-1/2 h-[36rem] w-[64rem] -translate-x-1/2 rounded-full bg-cyan-500/20 blur-3xl" />
        <div className="absolute top-1/3 -left-24 h-64 w-64 rounded-full bg-blue-500/20 blur-3xl" />
        <div className="absolute bottom-1/4 right-0 h-80 w-80 rounded-full bg-indigo-500/20 blur-3xl" />
        <div className="absolute -bottom-24 left-1/3 h-[28rem] w-[48rem] -translate-x-1/2 rounded-full bg-fuchsia-500/10 blur-3xl" />
        <div className="absolute inset-0 bg-gradient-to-b from-neutral-950 via-neutral-950/70 to-neutral-900" />
      </div>

      <motion.div className="fixed inset-x-0 top-0 z-[60] h-0.5 bg-cyan-400" style={{ scaleX: progress, transformOrigin: "0% 50%" }} />

      <motion.button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="Haut de page"
        className="fixed bottom-6 right-6 z-50 inline-flex items-center justify-center rounded-full bg-white/10 border border-white/15 backdrop-blur-md h-12 w-12 shadow-lg hover:bg-white/15 focus:outline-none focus:ring-2 focus:ring-cyan-400/40"
        initial={{ opacity: 0, y: 20 }}
        animate={showTop ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.25 }}
      >
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 19V5"/><path d="M5 12l7-7 7 7"/></svg>
      </motion.button>

      <motion.header initial={{ y: -10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.35 }} className="sticky top-0 z-50 backdrop-blur bg-neutral-950/70 border-b border-white/10">
        <div className="max-w-7xl mx-auto flex items-center justify-between h-16 px-4">
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-xl bg-gradient-to-tr from-blue-500 to-cyan-400 grid place-items-center">
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="white" strokeWidth="1.6"><path d="M4 12l6 6 10-12" /></svg>
            </div>
            <span className="font-semibold tracking-tight">lorna.tv</span>
          </div>
          <nav className="hidden md:flex gap-8 text-sm">
            <a href="#platforms" className="hover:text-white">Plateformes</a>
            <a href="#features" className="hover:text-white">Fonctionnalités</a>
            <a href="#pricing" className="hover:text-white">Tarifs</a>
            <a href="#faq" className="hover:text-white">FAQ</a>
          </nav>
          <div className="hidden md:flex items-center gap-3">
            {/* LIEN MODIFIÉ */}
            <a
              href="https://app.lorna.tv"
              className="inline-flex items-center rounded-xl border border-white/10 px-4 py-2 text-sm hover:bg-white/5"
            >
              Essayer le Web
            </a>
            <a href="#cta" className="inline-flex items-center rounded-xl bg-white text-neutral-900 px-4 py-2 text-sm font-medium hover:bg-white/90">Créer un compte</a>
          </div>
          <button className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 hover:bg-white/5" onClick={() => setOpen(!open)}>
            <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.5">{open ? (<path d="M6 18L18 6M6 6l12 12" />) : (<path d="M3 6h18M3 12h18M3 18h18" />)}</svg>
          </button>
        </div>
        {open && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="md:hidden border-t border-white/10 bg-neutral-950/90">
            <div className="px-4 py-4 flex flex-col gap-2 text-sm">
              <a onClick={() => setOpen(false)} href="#platforms" className="py-2">Plateformes</a>
              <a onClick={() => setOpen(false)} href="#features" className="py-2">Fonctionnalités</a>
              <a onClick={() => setOpen(false)} href="#pricing" className="py-2">Tarifs</a>
              <a onClick={() => setOpen(false)} href="#faq" className="py-2">FAQ</a>
              <div className="pt-2 flex gap-2">
                {/* LIEN MODIFIÉ */}
                <a
                  href="https://lector.lorna.tv"
                  className="flex-1 inline-flex items-center justify-center rounded-xl border border-white/10 px-4 py-2"
                >
                  Essayer le Web
                </a>
                <a href="#cta" className="flex-1 inline-flex items-center justify-center rounded-xl bg-white text-neutral-900 px-4 py-2 font-medium">Créer un compte</a>
              </div>
            </div>
          </motion.div>
        )}
      </motion.header>

      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 py-20 sm:py-28 grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <FadeUp>
              <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-4 py-2 text-sm text-emerald-300 font-medium">
                <span className="inline-block h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                ✨ Disponible sur iOS, Android & Web
              </div>
            </FadeUp>
            <FadeUp delay={0.05}>
              <h1 className="mt-6 text-5xl sm:text-6xl font-bold tracking-tight leading-tight bg-gradient-to-r from-white via-cyan-100 to-blue-200 bg-clip-text text-transparent">
                lorna.tv — votre lecteur IPTV 
                <span className="block text-4xl sm:text-5xl text-cyan-300">ultra-moderne</span>
              </h1>
            </FadeUp>
            <FadeUp delay={0.1}>
              <p className="mt-6 text-lg text-white/80 max-w-prose leading-relaxed">
                Connectez votre playlist M3U/Xtream, retrouvez vos chaînes, films et séries avec un guide TV clair, une synchro parfaite, et une interface ultra-rapide.
              </p>
            </FadeUp>
            <FadeUp delay={0.15}>
              <div className="mt-8 flex flex-wrap gap-4" id="cta">
                <a className="group inline-flex items-center rounded-2xl bg-gradient-to-r from-cyan-400 to-blue-500 text-white px-8 py-4 font-semibold hover:from-cyan-500 hover:to-blue-600 transition-all duration-300 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-105" href="#pricing">
                  <span>Démarrer gratuitement</span>
                  <svg className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" strokeWidth="2"><path d="M13 7l5 5-5 5M6 12h12"/></svg>
                </a>
                <a className="inline-flex items-center rounded-2xl border-2 border-white/20 bg-white/5 backdrop-blur-sm px-8 py-4 font-medium hover:bg-white/10 hover:border-white/30 transition-all duration-300" href="#features">
                  <svg className="mr-2 h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                  Voir les fonctionnalités
                </a>
              </div>
            </FadeUp>
            <FadeUp delay={0.2}>
              <div className="mt-8 flex items-center gap-6 text-sm text-white/60">
                <div className="flex items-center gap-2">
                  <svg className="h-4 w-4 text-emerald-400" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 13l4 4L19 7"/></svg>
                  <span>Essai gratuit</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="h-4 w-4 text-emerald-400" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 13l4 4L19 7"/></svg>
                  <span>Installation en 2 min</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="h-4 w-4 text-emerald-400" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 13l4 4L19 7"/></svg>
                  <span>Support 24/7</span>
                </div>
              </div>
            </FadeUp>
          </div>
          <FadeScale>
            <div className="relative">
              <div className="aspect-[16/10] w-full rounded-3xl border border-white/20 bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900 shadow-2xl shadow-cyan-500/20 p-6 backdrop-blur-sm">
                <div className="h-full w-full rounded-2xl border border-white/20 bg-gradient-to-br from-neutral-950/90 to-neutral-900/90 grid place-items-center text-center p-8 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-500/5"></div>
                  <div className="relative z-10">
                    <div className="mx-auto mb-6 h-16 w-16 rounded-2xl bg-gradient-to-br from-cyan-400 to-blue-500 grid place-items-center shadow-lg shadow-cyan-500/30">
                      <svg viewBox="0 0 24 24" className="h-8 w-8 text-white" fill="none" stroke="currentColor" strokeWidth="2"><path d="M8 5v14l11-7-11-7z" /></svg>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">Aperçu du lecteur</h3>
                    <p className="text-white/70 max-w-sm mx-auto leading-relaxed">
                      Interface moderne et intuitive pour une expérience de visionnage exceptionnelle
                    </p>
                    <div className="mt-6 flex justify-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-cyan-400"></div>
                      <div className="h-2 w-2 rounded-full bg-white/30"></div>
                      <div className="h-2 w-2 rounded-full bg-white/30"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-8 -left-8 hidden sm:block">
                <DeviceCard label="iOS" />
              </div>
              <div className="absolute -top-10 -right-6 hidden sm:block">
                <DeviceCard label="Android" />
              </div>
              <div className="absolute top-1/2 -right-12 hidden lg:block">
                <DeviceCard label="Web" />
              </div>
            </div>
          </FadeScale>
        </div>
      </section>

      <section id="platforms" className="max-w-7xl mx-auto px-4 py-12 sm:py-16">
        <FadeUp><h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">Conçu pour toutes vos plateformes</h2></FadeUp>
        <FadeUp delay={0.05}><p className="mt-2 text-white/70 max-w-2xl">Une expérience fluide et cohérente sur iOS, Android et dans votre navigateur grâce au SaaS lorna.tv.</p></FadeUp>
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {platforms.map((p, i) => (
            <Card key={p.title} index={i} className="group hover:scale-105 transition-transform duration-300">
              <div className="flex items-center gap-4">
                <div className={`h-12 w-12 rounded-2xl bg-gradient-to-br ${p.color} grid place-items-center shadow-lg group-hover:shadow-xl transition-shadow duration-300`}>
                  {p.icon}
                </div>
                <h3 className="text-xl font-semibold text-white">{p.title}</h3>
              </div>
              <ul className="mt-6 space-y-3 text-sm text-white/80">
                {p.points.map((t) => (
                  <li key={t} className="flex items-start gap-3">
                    <div className="mt-1 h-2 w-2 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 flex-shrink-0"></div>
                    <span className="leading-relaxed">{t}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 pt-4 border-t border-white/10">
                <div className="text-xs text-white/50 font-medium">Optimisé pour cette plateforme</div>
              </div>
            </Card>
          ))}
        </div>
      </section>

      <section id="features" className="max-w-7xl mx-auto px-4 py-12 sm:py-16">
        <FadeUp><h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">Fonctionnalités clés</h2></FadeUp>
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => (
            <Card key={f.title} index={i} className="group hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/10">
              <div className={`h-14 w-14 rounded-2xl bg-gradient-to-br ${f.color} grid place-items-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110`}>
                {f.icon}
              </div>
              <h3 className="mt-6 text-xl font-semibold text-white group-hover:text-cyan-300 transition-colors duration-300">{f.title}</h3>
              <p className="mt-3 text-white/80 leading-relaxed">{f.desc}</p>
              <div className="mt-4 flex items-center text-sm text-cyan-400 font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span>En savoir plus</span>
                <svg className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M9 5l7 7-7 7"/>
                </svg>
              </div>
            </Card>
          ))}
        </div>
      </section>

      <section id="stats" className="max-w-7xl mx-auto px-4 py-12 sm:py-16">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { number: "50K+", label: "Utilisateurs actifs", icon: "👥" },
            { number: "99.9%", label: "Disponibilité", icon: "⚡" },
            { number: "24/7", label: "Support client", icon: "🆘" },
            { number: "4.9/5", label: "Note moyenne", icon: "⭐" }
          ].map((stat, i) => (
            <div key={stat.label} className="text-center group">
              <div className="text-4xl mb-2 group-hover:scale-110 transition-transform duration-300">{stat.icon}</div>
              <div className="text-3xl lg:text-4xl font-bold text-white mb-1">{stat.number}</div>
              <div className="text-white/70 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      <section id="testimonials" className="max-w-7xl mx-auto px-4 py-12 sm:py-16">
        <FadeUp><h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-center">Ce que disent nos utilisateurs</h2></FadeUp>
        <FadeUp delay={0.05}><p className="mt-2 text-white/70 max-w-2xl mx-auto text-center">Découvrez pourquoi des milliers d'utilisateurs font confiance à lorna.tv</p></FadeUp>
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              name: "Marie Dubois",
              role: "Famille de 4",
              content: "Interface incroyablement fluide ! La synchronisation entre nos appareils fonctionne parfaitement. Plus jamais de problème pour retrouver nos chaînes préférées.",
              rating: 5,
              avatar: "👩‍💼"
            },
            {
              name: "Thomas Martin",
              role: "Technophile",
              content: "Enfin un lecteur IPTV moderne ! L'EPG est clair, la recherche ultra-rapide. Le support est réactif et l'équipe très professionnelle.",
              rating: 5,
              avatar: "👨‍💻"
            },
            {
              name: "Sophie Laurent",
              role: "Professionnelle",
              content: "Parfait pour le télétravail. Je peux regarder mes chaînes sur tous mes appareils sans interruption. L'interface est intuitive et élégante.",
              rating: 5,
              avatar: "👩‍🎓"
            }
          ].map((testimonial, i) => (
            <Card key={testimonial.name} index={i} className="group hover:scale-105 transition-all duration-300">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, j) => (
                  <svg key={j} className="h-5 w-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                  </svg>
                ))}
              </div>
              <p className="text-white/80 leading-relaxed mb-6">"{testimonial.content}"</p>
              <div className="flex items-center gap-3">
                <div className="h-12 w-12 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center text-2xl">
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="font-semibold text-white">{testimonial.name}</div>
                  <div className="text-sm text-white/60">{testimonial.role}</div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>

      <section id="pricing" className="max-w-7xl mx-auto px-4 py-12 sm:py-16">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3">
          <FadeUp>
            <div>
              <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">Tarification simple</h2>
              <p className="mt-2 text-white/70 max-w-2xl">Choisissez un plan adapté. Pas de contenu inclus — lorna.tv est un lecteur compatible avec vos sources légales.</p>
            </div>
          </FadeUp>
          <div className="inline-flex rounded-full border border-white/10 bg-white/5 text-xs p-0.5">
            <button onClick={() => setBilling("monthly")} aria-pressed={billing === "monthly"} className={`px-3 py-1.5 rounded-full transition ${billing === "monthly" ? "bg-white text-neutral-900" : "text-white/80"}`}>Mensuel</button>
            <button onClick={() => setBilling("yearly")} aria-pressed={billing === "yearly"} className={`px-3 py-1.5 rounded-full transition ${billing === "yearly" ? "bg-white text-neutral-900" : "text-white/80"}`}>Annuel</button>
          </div>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-3">
          {plans.map((p, i) => (
            <Card key={p.name} index={i} highlight={p.highlight} className={`group relative ${p.highlight ? 'scale-105 lg:scale-110' : 'hover:scale-105'} transition-all duration-300`}>
              {p.highlight && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 px-6 py-2 text-sm font-semibold text-white shadow-lg shadow-cyan-500/30">
                  ⭐ Recommandé
                </div>
              )}
              <div className="text-center">
                <div className={`inline-flex h-16 w-16 rounded-2xl bg-gradient-to-br ${p.highlight ? 'from-cyan-500 to-blue-500' : 'from-gray-500 to-gray-600'} items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110`}>
                  <svg className="h-8 w-8 text-white" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                </div>
                <h3 className="mt-6 text-2xl font-bold text-white">{p.name}</h3>
                <motion.div 
                  key={billing + p.name} 
                  initial={{ opacity: 0, y: 4 }} 
                  animate={{ opacity: 1, y: 0 }} 
                  transition={{ duration: 0.2 }} 
                  className="mt-4 text-4xl font-bold bg-gradient-to-r from-white to-cyan-200 bg-clip-text text-transparent"
                >
                  {p.prices[billing]}
                </motion.div>
                {p.prices[billing] !== "Gratuit" && (
                  <p className="mt-2 text-sm text-white/60">
                    {billing === "yearly" ? "Économisez 2 mois" : "Facturation mensuelle"}
                  </p>
                )}
              </div>
              <ul className="mt-8 space-y-4 text-sm text-white/80">
                {p.perks.map((perk) => (
                  <li key={perk} className="flex items-start gap-3">
                    <div className="mt-1 h-2 w-2 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 flex-shrink-0"></div>
                    <span className="leading-relaxed">{perk}</span>
                  </li>
                ))}
              </ul>
              <a 
                href="#cta" 
                className={`mt-8 inline-flex w-full items-center justify-center rounded-2xl px-6 py-4 font-semibold transition-all duration-300 group-hover:scale-105 ${
                  p.highlight 
                    ? "bg-gradient-to-r from-cyan-400 to-blue-500 text-white hover:from-cyan-500 hover:to-blue-600 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40" 
                    : "border-2 border-white/20 bg-white/5 backdrop-blur-sm hover:bg-white/10 hover:border-white/30"
                }`}
              >
                {p.prices[billing] === "Gratuit" ? "Commencer gratuitement" : "Choisir ce plan"}
                <svg className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M13 7l5 5-5 5M6 12h12"/>
                </svg>
              </a>
            </Card>
          ))}
        </div>
        <p className="mt-3 text-xs text-white/50">* Les prix et fonctionnalités sont indicatifs. Adaptez selon votre offre réelle et vos conditions d’utilisation.</p>
      </section>

      <section id="faq" className="max-w-7xl mx-auto px-4 py-12 sm:py-16">
        <FadeUp><h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">Questions fréquentes</h2></FadeUp>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {[
            { q: "lorna.tv fournit-il du contenu ?", a: "Non. lorna.tv est un lecteur/gestionnaire IPTV. Vous devez fournir vos propres sources légales (M3U/Xtream)." },
            { q: "Sur quels appareils fonctionne l’app ?", a: "iPhone/iPad (iOS/iPadOS), smartphones/tablettes Android, et navigateur web (SaaS)." },
            { q: "Mes favoris sont-ils synchronisés ?", a: "Oui, avec un compte unique, vos favoris, historiques et profils sont synchronisés partout." },
            { q: "Puis-je partager mon compte ?", a: "Vous pouvez connecter plusieurs appareils. Les limites exactes dépendent de votre offre et de l’usage simultané." },
          ].map((f, i) => (
            <Card key={f.q} index={i}>
              <h3 className="font-medium">{f.q}</h3>
              <p className="mt-1 text-sm text-white/70">{f.a}</p>
            </Card>
          ))}
        </div>
      </section>

      <footer className="border-t border-white/10 bg-gradient-to-b from-neutral-950 to-neutral-900">
        <div className="max-w-7xl mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <div className="h-10 w-10 rounded-xl bg-gradient-to-tr from-blue-500 to-cyan-400 grid place-items-center">
                  <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="white" strokeWidth="1.6"><path d="M4 12l6 6 10-12" /></svg>
                </div>
                <span className="text-xl font-bold text-white">lorna.tv</span>
              </div>
              <p className="text-white/70 mb-6 max-w-md">
                Votre lecteur IPTV moderne pour une expérience de visionnage exceptionnelle sur tous vos appareils.
              </p>
              <div className="flex gap-4">
                <a href="#" className="h-10 w-10 rounded-xl bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
                </a>
                <a href="#" className="h-10 w-10 rounded-xl bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/></svg>
                </a>
                <a href="#" className="h-10 w-10 rounded-xl bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                </a>
              </div>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Produit</h3>
              <ul className="space-y-2 text-white/70">
                <li><a href="#features" className="hover:text-white transition-colors">Fonctionnalités</a></li>
                <li><a href="#pricing" className="hover:text-white transition-colors">Tarifs</a></li>
                <li><a href="#platforms" className="hover:text-white transition-colors">Plateformes</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Télécharger</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-white/70">
                <li><a href="#faq" className="hover:text-white transition-colors">FAQ</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Documentation</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Statut</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-white/60">
            <div className="flex items-center gap-6">
              <span>© {new Date().getFullYear()} lorna.tv. Tous droits réservés.</span>
            </div>
            <div className="flex items-center gap-6">
              <a href="#" className="hover:text-white transition-colors">Conditions d'utilisation</a>
              <a href="#" className="hover:text-white transition-colors">Politique de confidentialité</a>
              <a href="#" className="hover:text-white transition-colors">Cookies</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

/* Helpers */
function FadeUp({ children, delay = 0 }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: false, margin: "-80px" });
  const controls = useAnimation();
  useEffect(() => { if (inView) controls.start({ opacity: 1, y: 0 }); else controls.start({ opacity: 0, y: 20 }); }, [inView, controls]);
  return (<motion.div ref={ref} initial={{ opacity: 0, y: 20 }} animate={controls} transition={{ duration: 0.45, ease: "easeOut", delay }}>{children}</motion.div>);
}
function FadeScale({ children }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: false, amount: 0.3 });
  const controls = useAnimation();
  useEffect(() => { if (inView) controls.start({ opacity: 1, scale: 1 }); else controls.start({ opacity: 0, scale: 0.98 }); }, [inView, controls]);
  return (<motion.div ref={ref} initial={{ opacity: 0, scale: 0.98 }} animate={controls} transition={{ duration: 0.5, ease: "easeOut" }}>{children}</motion.div>);
}
function Card({ children, index = 0, highlight = false, className = "" }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: false, amount: 0.25 });
  const controls = useAnimation();
  useEffect(() => { if (inView) controls.start({ opacity: 1, y: 0 }); else controls.start({ opacity: 0, y: 24 }); }, [inView, controls]);
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 24 }} animate={controls} transition={{ duration: 0.45, ease: "easeOut", delay: index * 0.06 }} className={`relative rounded-2xl border ${highlight ? "border-cyan-400/40" : "border-white/10"} bg-white/5 p-6 hover:bg-white/[0.06] transition ${className}`}>
      {children}
    </motion.div>
  );
}
function DeviceCard({ label }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur px-4 py-3 shadow-xl shadow-black/40">
      <div className="flex items-center gap-3">
        <div className="h-9 w-9 rounded-xl bg-white/10 grid place-items-center">
          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="4" y="3" width="16" height="12" rx="2" /><path d="M8 21h8" /></svg>
        </div>
        <div>
          <p className="text-sm font-medium">{label}</p>
          <p className="text-xs text-white/60">Lecteur optimisé</p>
        </div>
      </div>
    </div>
  );
}
