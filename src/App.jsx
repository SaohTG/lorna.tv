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
    { title: "iOS / iPadOS", points: ["Picture-in-Picture", "AirPlay", "Gestes rapides", "Widgets"] },
    { title: "Android", points: ["Chromecast", "Navigation TV", "Raccourcis", "Intégration système"] },
    { title: "Web (SaaS)", points: ["Aucune installation", "Sauvegarde cloud", "Gestion appareils", "Mises à jour continues"] },
  ];

  const features = [
    { title: "Connexion M3U & Xtream", desc: "Playlist M3U / identifiants Xtream. Détection automatique, EPG, logos chaînes.", icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M3 7h18M3 12h18M3 17h18"/></svg>
    )},
    { title: "Sync multi-appareils", desc: "Favoris, historique et watchlist synchronisés entre iOS, Android et Web.", icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M8 18h8M4 6h16v10H4z"/></svg>
    )},
    { title: "Guide TV & Recherche", desc: "EPG clair, filtres, recherche rapide et zapping fluide.", icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M10 17l-5 5M17 10a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>
    )},
    { title: "Profils & Parental", desc: "Profils, PIN, verrous par catégories.", icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 12a5 5 0 100-10 5 5 0 000 10zm-7 10a7 7 0 0114 0H5z"/></svg>
    )},
    { title: "Performance", desc: "Lecteur moderne, faible latence, cache intelligent, reprise instantanée.", icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M3 12l18-9-9 18-2-7-7-2z"/></svg>
    )},
    { title: "SaaS sécurisé", desc: "Espace Web chiffré, auth forte, gestion appareils.", icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 12v7m-4-4h8M6 8V6a6 6 0 1112 0v2"/></svg>
    )},
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
              href="https://lector.lorna.tv"
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
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80">
                <span className="inline-block h-2 w-2 rounded-full bg-emerald-400" />
                Disponible sur iOS, Android & Web
              </div>
            </FadeUp>
            <FadeUp delay={0.05}><h1 className="mt-5 text-4xl sm:text-5xl font-semibold tracking-tight leading-tight">lorna.tv — votre lecteur IPTV moderne</h1></FadeUp>
            <FadeUp delay={0.1}><p className="mt-4 text-white/70 max-w-prose">Connectez votre playlist M3U/Xtream, retrouvez vos chaînes, films et séries avec un guide TV clair, une synchro parfaite, et une interface rapide.</p></FadeUp>
            <FadeUp delay={0.15}>
              <div className="mt-8 flex flex-wrap gap-3" id="cta">
                <a className="inline-flex items-center rounded-xl bg-white text-neutral-900 px-5 py-3 font-medium hover:bg:white/90" href="#pricing">Démarrer gratuitement</a>
                <a className="inline-flex items-center rounded-xl border border-white/10 px-5 py-3 hover:bg-white/5" href="#features">Voir les fonctionnalités</a>
              </div>
            </FadeUp>
          </div>
          <FadeScale>
            <div className="relative">
              <div className="aspect-[16/10] w-full rounded-2xl border border-white/10 bg-gradient-to-br from-neutral-900 to-neutral-800 shadow-2xl shadow-cyan-500/10 p-4">
                <div className="h-full w-full rounded-xl border border-white/10 bg-neutral-950/70 grid place-items-center text-center p-6">
                  <div>
                    <div className="mx-auto mb-3 h-10 w-10 rounded-xl bg:white/10 grid place-items-center"><svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M8 5v14l11-7-11-7z" /></svg></div>
                    <h3 className="text-lg font-medium">Aperçu du lecteur</h3>
                    <p className="mt-1 text-sm text-white/60 max-w-sm mx-auto">Placez ici une capture de votre UI (zapping, EPG, détails contenu). PNG/WebP conseillé.</p>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-6 -left-6 hidden sm:block"><DeviceCard label="iOS" /></div>
              <div className="absolute -top-8 -right-4 hidden sm:block"><DeviceCard label="Android" /></div>
            </div>
          </FadeScale>
        </div>
      </section>

      <section id="platforms" className="max-w-7xl mx-auto px-4 py-12 sm:py-16">
        <FadeUp><h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">Conçu pour toutes vos plateformes</h2></FadeUp>
        <FadeUp delay={0.05}><p className="mt-2 text-white/70 max-w-2xl">Une expérience fluide et cohérente sur iOS, Android et dans votre navigateur grâce au SaaS lorna.tv.</p></FadeUp>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {platforms.map((p, i) => (
            <Card key={p.title} index={i}>
              <div className="flex items-center gap-3">
                <div className="h-9 w-9 rounded-xl bg-white/10 grid place-items-center"><svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M4 7h16M4 12h10M4 17h7" /></svg></div>
                <h3 className="font-medium">{p.title}</h3>
              </div>
              <ul className="mt-4 space-y-2 text-sm text-white/70">
                {p.points.map((t) => (
                  <li key={t} className="flex items-start gap-2">
                    <svg viewBox="0 0 24 24" className="mt-0.5 h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M5 12l4 4L19 7"/></svg>
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </section>

      <section id="features" className="max-w-7xl mx-auto px-4 py-12 sm:py-16">
        <FadeUp><h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">Fonctionnalités clés</h2></FadeUp>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => (
            <Card key={f.title} index={i}>
              <div className="h-10 w-10 rounded-xl bg-white/10 grid place-items-center">{f.icon}</div>
              <h3 className="mt-4 font-medium">{f.title}</h3>
              <p className="mt-1 text-sm text-white/70">{f.desc}</p>
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

        <div className="mt-8 grid gap-6 lg:grid-cols-3">
          {plans.map((p, i) => (
            <Card key={p.name} index={i} highlight={p.highlight}>
              {p.highlight && (<div className="absolute -top-3 left-6 rounded-full bg-cyan-400/20 px-3 py-1 text-xs text-cyan-200 border border-cyan-300/30">Recommandé</div>)}
              <h3 className="text-lg font-medium">{p.name}</h3>
              <motion.div key={billing + p.name} initial={{ opacity: 0, y: 4 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.2 }} className="mt-2 text-3xl font-semibold">{p.prices[billing]}</motion.div>
              <ul className="mt-4 space-y-2 text-sm text-white/70">
                {p.perks.map((perk) => (
                  <li key={perk} className="flex items-start gap-2">
                    <svg viewBox="0 0 24 24" className="mt-0.5 h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M5 12l4 4L19 7"/></svg>
                    <span>{perk}</span>
                  </li>
                ))}
              </ul>
              <a href="#cta" className={`mt-6 inline-flex w-full items-center justify-center rounded-xl px-4 py-2 font-medium ${p.highlight ? "bg-white text-neutral-900 hover:bg-white/90" : "border border-white/10 hover:bg-white/5"}`}>Choisir ce plan</a>
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

      <footer className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-10 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-white/60">
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-xl bg-gradient-to-tr from-blue-500 to-cyan-400 grid place-items-center">
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="white" strokeWidth="1.6"><path d="M4 12l6 6 10-12" /></svg>
            </div>
            <span>© {new Date().getFullYear()} lorna.tv. Tous droits réservés.</span>
          </div>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-white">Conditions</a>
            <a href="#" className="hover:text-white">Confidentialité</a>
            <a href="#" className="hover:text-white">Support</a>
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
function Card({ children, index = 0, highlight = false }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: false, amount: 0.25 });
  const controls = useAnimation();
  useEffect(() => { if (inView) controls.start({ opacity: 1, y: 0 }); else controls.start({ opacity: 0, y: 24 }); }, [inView, controls]);
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 24 }} animate={controls} transition={{ duration: 0.45, ease: "easeOut", delay: index * 0.06 }} className={`relative rounded-2xl border ${highlight ? "border-cyan-400/40" : "border-white/10"} bg-white/5 p-6 hover:bg-white/[0.06] transition`}>
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
