import { createFileRoute } from "@tanstack/react-router";
import heroBurger from "@/assets/hero-burger.jpg";
import tenders from "@/assets/tenders.jpg";
import tacos from "@/assets/tacos.jpg";
import burger2 from "@/assets/burger2.jpg";
import { Phone, MapPin, Clock, Star, Bike, ShoppingBag, Flame } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Maestro Dunkerque — Burgers, Tacos & Tenders à emporter" },
      { name: "description", content: "Maestro Dunkerque, 1 Place de la Gare. Burgers, tacos, tenders. À emporter & livraison. Ouvert jusqu'à 22h. ☎ 03 28 25 41 48" },
      { property: "og:title", content: "Maestro Dunkerque — Le goût de la rue" },
      { property: "og:description", content: "Le fast food n°1 à Dunkerque. Note 4,4★ (2,3k avis). À emporter & livraison." },
      { property: "og:type", content: "restaurant" },
      { property: "og:url", content: "/" },
      { property: "og:image", content: heroBurger },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: heroBurger },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FastFoodRestaurant",
        name: "Maestro Dunkerque",
        image: heroBurger,
        address: {
          "@type": "PostalAddress",
          streetAddress: "1 Place de la Gare",
          addressLocality: "Dunkerque",
          postalCode: "59140",
          addressCountry: "FR",
        },
        telephone: "+33328254148",
        priceRange: "€€",
        servesCuisine: ["Burgers", "Tacos", "Fast Food"],
        aggregateRating: { "@type": "AggregateRating", ratingValue: "4.4", reviewCount: "2300" },
        openingHours: "Mo-Su 11:00-22:00",
      }),
    }],
  }),
  component: Home,
});

const menu = [
  { name: "Le Maestro", desc: "Double steak, cheddar fondu, bacon, sauce maison", price: "12,90 €", img: burger2, tag: "Best-seller" },
  { name: "Tacos Signature", desc: "Viande au choix, fromage coulant, frites à l'intérieur", price: "9,50 €", img: tacos, tag: "Coup de cœur" },
  { name: "Tenders Crispy", desc: "Filets de poulet panés croustillants, sauces au choix", price: "8,90 €", img: tenders, tag: "Croustillant" },
  { name: "Smash Classic", desc: "Steak smashé, cheddar, oignons caramélisés, cornichons", price: "10,50 €", img: heroBurger, tag: "Nouveau" },
];

function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* NAV */}
      <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-background/70 border-b border-border">
        <div className="max-w-6xl mx-auto px-5 h-16 flex items-center justify-between">
          <a href="#top" className="flex items-center gap-2">
            <Flame className="w-6 h-6 text-primary" />
            <span className="font-display text-2xl tracking-wider">MAESTRO</span>
          </a>
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
            <a href="#menu" className="hover:text-secondary transition">Menu</a>
            <a href="#about" className="hover:text-secondary transition">L'enseigne</a>
            <a href="#visit" className="hover:text-secondary transition">Nous trouver</a>
          </nav>
          <a href="tel:+33328254148" className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary text-primary-foreground text-sm font-semibold hover:opacity-90 transition shadow-fire">
            <Phone className="w-4 h-4" /> <span className="hidden sm:inline">Commander</span>
          </a>
        </div>
      </header>

      {/* HERO */}
      <section id="top" className="relative pt-16 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <img src={heroBurger} alt="" width={1920} height={1080} className="w-full h-full object-cover opacity-40" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/70 to-background" />
        </div>
        <div className="max-w-6xl mx-auto px-5 pt-16 pb-24 md:pt-28 md:pb-40">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/15 border border-secondary/30 text-secondary text-xs font-semibold">
            <Star className="w-3.5 h-3.5 fill-secondary" /> 4,4 / 5 · 2 300+ avis Google
          </div>
          <h1 className="mt-6 font-display text-6xl sm:text-7xl md:text-8xl leading-[0.9]">
            LE GOÛT <br />
            <span className="text-stroke">DE LA RUE</span><br />
            <span className="text-primary">À DUNKERQUE.</span>
          </h1>
          <p className="mt-6 max-w-xl text-base md:text-lg text-muted-foreground">
            Burgers smashés, tacos généreux, tenders croustillants. Préparés sur place,
            servis chaud — à emporter ou livrés chez vous.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="tel:+33328254148" className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-gradient-fire text-primary-foreground font-semibold shadow-fire hover:scale-[1.02] transition">
              <Phone className="w-4 h-4" /> 03 28 25 41 48
            </a>
            <a href="#menu" className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full border border-border bg-card/60 hover:bg-card font-semibold transition">
              Voir le menu
            </a>
          </div>
          <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-muted-foreground">
            <span className="inline-flex items-center gap-2"><ShoppingBag className="w-4 h-4 text-secondary" /> À emporter</span>
            <span className="inline-flex items-center gap-2"><Bike className="w-4 h-4 text-secondary" /> Livraison</span>
            <span className="inline-flex items-center gap-2"><Clock className="w-4 h-4 text-secondary" /> Ouvert · ferme à 22:00</span>
            <span className="inline-flex items-center gap-2">💶 10–20 € / personne</span>
          </div>
        </div>
      </section>

      {/* MENU */}
      <section id="menu" className="py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-5">
          <div className="flex items-end justify-between mb-10 flex-wrap gap-4">
            <div>
              <span className="text-secondary text-sm font-bold tracking-widest">LA CARTE</span>
              <h2 className="font-display text-5xl md:text-6xl mt-2">Nos best-sellers</h2>
            </div>
            <p className="text-muted-foreground max-w-sm text-sm">
              Une carte courte, des produits frais, des portions généreuses.
              Tout est préparé minute, devant vous.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {menu.map((item) => (
              <article key={item.name} className="group relative overflow-hidden rounded-2xl bg-card border border-border shadow-card hover:border-primary/50 transition">
                <div className="aspect-square overflow-hidden">
                  <img src={item.img} alt={item.name} loading="lazy" width={1024} height={1024} className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
                </div>
                <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-secondary text-secondary-foreground text-[10px] font-bold uppercase tracking-wider">{item.tag}</span>
                <div className="p-5">
                  <div className="flex items-baseline justify-between gap-2">
                    <h3 className="font-display text-2xl">{item.name}</h3>
                    <span className="text-primary font-bold">{item.price}</span>
                  </div>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              </article>
            ))}
          </div>

          <p className="mt-8 text-center text-sm text-muted-foreground">
            Menu complet disponible sur place · prix moyens 10–20 €
          </p>
        </div>
      </section>

      {/* ABOUT band */}
      <section id="about" className="relative py-24 border-y border-border bg-card/40">
        <div className="max-w-5xl mx-auto px-5 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-secondary text-sm font-bold tracking-widest">L'ENSEIGNE</span>
            <h2 className="font-display text-5xl md:text-6xl mt-2 leading-none">
              Le fast food <span className="text-primary">qui régale</span> Dunkerque.
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              Depuis le cœur de Dunkerque, face à la gare, Maestro c'est l'adresse
              incontournable pour les amateurs de bons burgers, de tacos qui débordent
              et de poulet croustillant. Plus de <strong className="text-foreground">2 300 clients</strong>
              {" "}nous ont noté <strong className="text-secondary">4,4 / 5</strong>.
            </p>
            <div className="mt-8 grid grid-cols-3 gap-4 text-center">
              <Stat value="4,4★" label="sur Google" />
              <Stat value="2,3k" label="avis clients" />
              <Stat value="558" label="recommandations" />
            </div>
          </div>
          <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-fire">
            <img src={burger2} alt="Burger Maestro" loading="lazy" width={1024} height={1280} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <p className="font-display text-3xl">« Le meilleur burger de Dunkerque. »</p>
              <p className="text-xs text-muted-foreground mt-2">— Avis Google</p>
            </div>
          </div>
        </div>
      </section>

      {/* VISIT */}
      <section id="visit" className="py-24">
        <div className="max-w-6xl mx-auto px-5">
          <span className="text-secondary text-sm font-bold tracking-widest">NOUS TROUVER</span>
          <h2 className="font-display text-5xl md:text-6xl mt-2 mb-10">Venez goûter.</h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="rounded-2xl overflow-hidden border border-border bg-card shadow-card">
              <iframe
                title="Carte Maestro Dunkerque"
                src="https://www.google.com/maps?q=1+Place+de+la+Gare,+59140+Dunkerque&output=embed"
                className="w-full h-80 md:h-full min-h-[320px]"
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
                <a href="https://www.google.com/maps/dir/?api=1&destination=1+Place+de+la+Gare,+59140+Dunkerque" target="_blank" rel="noreferrer" className="flex-1 text-center px-5 py-3 rounded-full bg-gradient-fire text-primary-foreground font-semibold shadow-fire">
                  Itinéraire
                </a>
                <a href="tel:+33328254148" className="flex-1 text-center px-5 py-3 rounded-full border border-border bg-card hover:bg-muted font-semibold">
                  Appeler
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border py-10 text-center text-sm text-muted-foreground">
        <div className="flex items-center justify-center gap-2 mb-3">
          <Flame className="w-5 h-5 text-primary" />
          <span className="font-display text-xl tracking-wider text-foreground">MAESTRO DUNKERQUE</span>
        </div>
        <p>© {new Date().getFullYear()} Maestro Dunkerque · 1 Pl. de la Gare, 59140 Dunkerque</p>
      </footer>
    </div>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-xl bg-background/60 border border-border py-4">
      <div className="font-display text-3xl text-secondary">{value}</div>
      <div className="text-xs text-muted-foreground mt-1">{label}</div>
    </div>
  );
}

function InfoCard({ icon, title, children }: { icon: React.ReactNode; title: string; children: React.ReactNode }) {
  return (
    <div className="rounded-2xl border border-border bg-card p-5 flex gap-4 shadow-card">
      <div className="w-10 h-10 rounded-full bg-primary/15 text-primary flex items-center justify-center shrink-0">{icon}</div>
      <div>
        <div className="text-xs font-bold uppercase tracking-widest text-muted-foreground">{title}</div>
        <div className="mt-1 text-foreground">{children}</div>
      </div>
    </div>
  );
}
