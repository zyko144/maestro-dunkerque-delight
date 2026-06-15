import { createFileRoute } from "@tanstack/react-router";
import bgAsset from "@/assets/maestro-bg.png.asset.json";
import logoAsset from "@/assets/maestro-logo.png.asset.json";
import tacosClassic from "@/assets/tacos-classic-real.jpg";
import tacosChicken from "@/assets/tacos-chicken-real.jpg";
import tacosBowl from "@/assets/tacos-bowl-real.jpg";
import tacosXXL from "@/assets/tacos-xxl-real.jpg";
import cheesyFries from "@/assets/cheesy-fries-real.jpg";
import sidesImg from "@/assets/sides-real.jpg";
import { Phone, MapPin, Clock, Star, Bike, ShoppingBag, Flame, ChevronRight } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Maestro Dunkerque — Le Roi du Tacos à Dunkerque" },
      { name: "description", content: "Maestro Dunkerque · 1 Pl. de la Gare. Tacos français généreux, viandes au choix, sauces maison. À emporter & livraison. ☎ 03 28 25 41 48" },
      { property: "og:title", content: "Maestro Dunkerque — Le Chef c'est vous !" },
      { property: "og:description", content: "Tacos signature, bowls, sides. 4,4★ sur 2 300+ avis." },
      { property: "og:type", content: "restaurant" },
      { property: "og:url", content: "/" },
      { property: "og:image", content: logoAsset.url },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FastFoodRestaurant",
        name: "Maestro Dunkerque",
        image: logoAsset.url,
        address: { "@type": "PostalAddress", streetAddress: "1 Place de la Gare", addressLocality: "Dunkerque", postalCode: "59140", addressCountry: "FR" },
        telephone: "+33328254148",
        priceRange: "€€",
        servesCuisine: ["Tacos", "Bowls", "Fast Food"],
        aggregateRating: { "@type": "AggregateRating", ratingValue: "4.4", reviewCount: "2300" },
        openingHours: "Mo-Su 11:00-22:00",
      }),
    }],
  }),
  component: Home,
});

const tacos = [
  { name: "Tacos Classic", desc: "Viande hachée, cheddar fondu, frites maison", img: tacosClassic, tag: "Le best-seller" },
  { name: "Crousty Maestro", desc: "Tenders croustillants, sauce fromagère, chips de tortilla", img: tacosChicken, tag: "La tendance" },
  { name: "Maestro Bowl", desc: "Sans tortilla : tenders, frites, cheddar & sauce signature", img: tacosBowl, tag: "Signature" },
  { name: "Tacos à Composer", desc: "Viandes au choix, frites & sauces : compose ton Maestro", img: tacosXXL, tag: "Sur-mesure" },
];

const sides = [
  { name: "Cheesy Fries", desc: "Frites + cheddar fondu, bacon & ciboulette", img: cheesyFries },
  { name: "Tenders & Onion Rings", desc: "Tenders croustillants, oignons frits & sauces", img: sidesImg },
];

function Logo({ className = "h-9 w-auto" }: { className?: string }) {
  return <img src={logoAsset.url} alt="Maestro" className={className} />;
}

function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground relative">
      {/* Background brick wall - fixed, large */}
      <div
        className="fixed inset-0 -z-10 bg-cover bg-center"
        style={{ backgroundImage: `url(${bgAsset.url})` }}
        aria-hidden="true"
      />
      <div className="fixed inset-0 -z-10 bg-background/55" aria-hidden="true" />
      <div className="fixed inset-0 -z-10 bg-gradient-to-b from-background/30 via-transparent to-background" aria-hidden="true" />

      {/* NAV */}
      <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-xl bg-background/80 border-b border-border">
        <div className="max-w-6xl mx-auto px-5 h-16 flex items-center justify-between">
          <a href="#top" className="flex items-center gap-2">
            <Logo className="h-8 w-auto" />
          </a>
          <nav className="hidden md:flex items-center gap-8 text-sm font-semibold uppercase tracking-wider">
            <a href="#menu" className="hover:text-primary transition">Tacos</a>
            <a href="#sides" className="hover:text-primary transition">À côté</a>
            <a href="#about" className="hover:text-primary transition">L'enseigne</a>
            <a href="#visit" className="hover:text-primary transition">Contact</a>
          </nav>
          <a href="tel:+33328254148" className="inline-flex items-center gap-2 px-4 py-2 rounded-sm bg-primary text-primary-foreground text-sm font-bold uppercase hover:opacity-90 transition shadow-gold">
            <Phone className="w-4 h-4" /> <span className="hidden sm:inline">Commander</span>
          </a>
        </div>
      </header>

      {/* HERO */}
      <section id="top" className="relative pt-16">
        <div className="max-w-6xl mx-auto px-5 pt-20 pb-16 md:pt-32 md:pb-24 grid md:grid-cols-2 gap-10 items-center">
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/15 border border-primary/40 text-primary text-xs font-bold uppercase tracking-wider">
              <Star className="w-3.5 h-3.5 fill-primary" /> 4,4 · 2 300+ avis Google
            </div>
            <Logo className="mt-6 h-16 md:h-24 w-auto drop-shadow-[0_8px_30px_rgba(0,0,0,0.9)]" />
            <h1 className="mt-6 font-display text-6xl sm:text-7xl md:text-8xl leading-[0.85]">
              LE ROI<br />
              DU <span className="text-stroke-gold">TACOS</span><br />
              <span className="text-primary">À DUNKERQUE.</span>
            </h1>
            <p className="mt-2 font-display text-lg text-muted-foreground tracking-widest">— Le chef c'est vous !</p>
            <p className="mt-6 max-w-md text-base text-muted-foreground">
              Tortillas grillées minute, viandes au choix, sauces maison, frites à l'intérieur.
              Le vrai tacos français, signé Maestro.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="tel:+33328254148" className="inline-flex items-center gap-2 px-6 py-3.5 rounded-sm bg-gradient-gold text-primary-foreground font-bold uppercase tracking-wider shadow-gold hover:scale-[1.02] transition">
                <Phone className="w-4 h-4" /> 03 28 25 41 48
              </a>
              <a href="#menu" className="inline-flex items-center gap-2 px-6 py-3.5 rounded-sm border-2 border-primary/60 text-primary hover:bg-primary hover:text-primary-foreground font-bold uppercase tracking-wider transition">
                Voir la carte <ChevronRight className="w-4 h-4" />
              </a>
            </div>
            <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-muted-foreground">
              <span className="inline-flex items-center gap-2"><ShoppingBag className="w-4 h-4 text-primary" /> À emporter</span>
              <span className="inline-flex items-center gap-2"><Bike className="w-4 h-4 text-primary" /> Livraison</span>
              <span className="inline-flex items-center gap-2"><Clock className="w-4 h-4 text-primary" /> Ouvert · ferme 22h</span>
            </div>
          </div>

          {/* Hero image - tacos */}
          <div className="relative">
            <div className="absolute -inset-8 bg-primary/25 blur-3xl rounded-full" aria-hidden="true" />
            <img
              src={tacosClassic}
              alt="Tacos Maestro Classic"
              width={1024}
              height={1024}
              className="relative w-full h-auto rounded-sm drop-shadow-[0_25px_50px_rgba(0,0,0,0.9)]"
            />
          </div>
        </div>

        {/* Gold strip */}
        <div className="bg-primary text-primary-foreground py-3 overflow-hidden border-y-4 border-foreground">
          <div className="flex items-center gap-8 font-display text-xl whitespace-nowrap animate-[scroll_30s_linear_infinite]">
            {Array.from({ length: 8 }).map((_, i) => (
              <span key={i} className="flex items-center gap-8">
                LE CHEF C'EST VOUS <Flame className="w-5 h-5" />
                TACOS SIGNATURE <Flame className="w-5 h-5" />
                100% MAISON <Flame className="w-5 h-5" />
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* MENU TACOS */}
      <section id="menu" className="py-20 md:py-28 relative">
        <div className="max-w-6xl mx-auto px-5">
          <div className="flex items-end justify-between mb-12 flex-wrap gap-4">
            <div>
              <span className="text-primary text-sm font-bold tracking-[0.3em] uppercase">La Carte</span>
              <h2 className="font-display text-5xl md:text-7xl mt-3 leading-none">
                Nos <span className="underline-gold">Tacos</span> Signature
              </h2>
            </div>
            <p className="text-muted-foreground max-w-sm text-sm">
              Préparés minute, pressés au grill, viandes fraîches et sauces maison.
              Au choix : viande hachée, poulet crispy, merguez, kebab.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {tacos.map((item) => (
              <article key={item.name} className="group relative overflow-hidden rounded-sm bg-card border border-border shadow-card hover:border-primary transition-all hover:-translate-y-1 duration-300">
                <div className="aspect-square overflow-hidden bg-background">
                  <img src={item.img} alt={item.name} loading="lazy" width={1024} height={1024} className="w-full h-full object-cover group-hover:scale-110 transition duration-700" />
                </div>
                <span className="absolute top-3 left-3 px-2.5 py-1 bg-primary text-primary-foreground text-[10px] font-bold uppercase tracking-widest">{item.tag}</span>
                <div className="p-5">
                  <h3 className="font-display text-2xl">{item.name}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              </article>
            ))}
          </div>
          <p className="mt-8 text-center text-xs text-muted-foreground uppercase tracking-[0.3em]">
            Tarifs à venir · Appelez-nous pour commander
          </p>
        </div>
      </section>

      {/* SIDES */}
      <section id="sides" className="py-20 border-t border-border bg-card/30 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-5">
          <span className="text-primary text-sm font-bold tracking-[0.3em] uppercase">Pour accompagner</span>
          <h2 className="font-display text-5xl md:text-6xl mt-3 mb-10">À côté de tes tacos</h2>

          <div className="grid md:grid-cols-2 gap-6">
            {sides.map((item) => (
              <article key={item.name} className="group flex gap-5 items-center rounded-sm bg-card border border-border p-5 hover:border-primary transition shadow-card">
                <img src={item.img} alt={item.name} loading="lazy" width={1024} height={1024} className="w-32 h-32 object-cover rounded-sm" />
                <div className="flex-1">
                  <h3 className="font-display text-3xl">{item.name}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{item.desc}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="relative py-24 border-t border-border">
        <div className="max-w-5xl mx-auto px-5 grid md:grid-cols-2 gap-12 items-center">
          <div className="relative aspect-[4/5] overflow-hidden border-4 border-primary shadow-gold">
            <img src={tacosBowl} alt="Tacos Bowl Maestro" loading="lazy" width={1024} height={1280} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <p className="font-display text-3xl leading-tight">« Les meilleurs tacos de Dunkerque, sans hésiter. »</p>
              <p className="text-xs text-muted-foreground mt-2 uppercase tracking-widest">— Avis Google ★★★★★</p>
            </div>
          </div>
          <div>
            <span className="text-primary text-sm font-bold tracking-[0.3em] uppercase">L'enseigne</span>
            <h2 className="font-display text-5xl md:text-6xl mt-3 leading-[0.9]">
              Le tacos<br />comme on l'<span className="text-primary">aime</span>.
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              Au cœur de Dunkerque, face à la gare, Maestro c'est <strong className="text-foreground">l'adresse référence</strong> pour
              les amateurs de vrais tacos français. Pâte pressée minute, viandes au choix, sauces maison
              et frites croustillantes à l'intérieur. Plus de <strong className="text-primary">2 300 clients</strong> nous ont noté
              <strong className="text-primary"> 4,4 / 5</strong>.
            </p>
            <div className="mt-8 grid grid-cols-3 gap-4 text-center">
              <Stat value="4,4★" label="sur Google" />
              <Stat value="2,3k" label="avis clients" />
              <Stat value="558" label="recommandés" />
            </div>
          </div>
        </div>
      </section>

      {/* VISIT */}
      <section id="visit" className="py-24 border-t border-border bg-card/30 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-5">
          <span className="text-primary text-sm font-bold tracking-[0.3em] uppercase">Nous trouver</span>
          <h2 className="font-display text-5xl md:text-6xl mt-3 mb-10">Viens goûter.</h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="overflow-hidden border-2 border-primary bg-card shadow-card">
              <iframe
                title="Carte Maestro Dunkerque"
                src="https://www.google.com/maps?q=1+Place+de+la+Gare,+59140+Dunkerque&output=embed"
                className="w-full h-80 md:h-full min-h-[340px]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <div className="space-y-4">
              <InfoCard icon={<MapPin className="w-5 h-5" />} title="Adresse">
                1 Place de la Gare<br />59140 Dunkerque
              </InfoCard>
              <InfoCard icon={<Phone className="w-5 h-5" />} title="Téléphone">
                <a href="tel:+33328254148" className="hover:text-primary transition">03 28 25 41 48</a>
              </InfoCard>
              <InfoCard icon={<Clock className="w-5 h-5" />} title="Horaires">
                Tous les jours · jusqu'à 22:00
              </InfoCard>
              <div className="flex gap-3 pt-2">
                <a href="https://www.google.com/maps/dir/?api=1&destination=1+Place+de+la+Gare,+59140+Dunkerque" target="_blank" rel="noreferrer" className="flex-1 text-center px-5 py-3.5 bg-gradient-gold text-primary-foreground font-bold uppercase tracking-wider shadow-gold">
                  Itinéraire
                </a>
                <a href="tel:+33328254148" className="flex-1 text-center px-5 py-3.5 border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground font-bold uppercase tracking-wider transition">
                  Appeler
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border py-10 text-center text-sm text-muted-foreground bg-background/60 backdrop-blur-sm">
        <Logo className="h-10 w-auto mx-auto mb-4" />
        <p className="font-display text-xs tracking-[0.3em] text-primary mb-4">LE CHEF C'EST VOUS !</p>
        <p>© {new Date().getFullYear()} Maestro Dunkerque · 1 Pl. de la Gare, 59140 Dunkerque · 03 28 25 41 48</p>
      </footer>

      <style>{`
        @keyframes scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="border-2 border-primary/60 py-4 bg-background/40">
      <div className="font-display text-3xl text-primary">{value}</div>
      <div className="text-xs text-muted-foreground mt-1 uppercase tracking-wider">{label}</div>
    </div>
  );
}

function InfoCard({ icon, title, children }: { icon: React.ReactNode; title: string; children: React.ReactNode }) {
  return (
    <div className="border border-border bg-card p-5 flex gap-4 shadow-card hover:border-primary/60 transition">
      <div className="w-11 h-11 bg-primary text-primary-foreground flex items-center justify-center shrink-0">{icon}</div>
      <div>
        <div className="text-xs font-bold uppercase tracking-widest text-primary">{title}</div>
        <div className="mt-1 text-foreground">{children}</div>
      </div>
    </div>
  );
}
