import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";

export const metadata: Metadata = {
  title: "KuntoGuru — Liikunta- ja kuntoiluneuvontaa tekoälyltä | 0600 411 104",
  description:
    "Soita KuntoGurulle ja saat neuvontaa treenaamiseen, liikuntaan, venyttelyyn ja palautumiseen. 24/7, vain 0,98 €/min.",
  alternates: { canonical: "/kuntoguru" },
};

export default function KuntoGuruPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <section className="bg-gradient-to-br from-orange-950 via-orange-900 to-red-900 pt-20 pb-24 sm:pt-28 sm:pb-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-orange-500/20 text-orange-300 px-4 py-1.5 rounded-full text-sm font-medium mb-6">
            💪 Kuntoiluneuvontaa tekoälyltä
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-6 leading-tight">
            Treeni jumissa?
            <br />
            <span className="text-orange-300">KuntoGuru auttaa.</span>
          </h1>
          <p className="text-lg text-white/80 mb-10 max-w-2xl mx-auto">
            Treeniohjelmat, venyttelyohjeet, palautumisvinkit ja liikuntaneuvontaa puhelimitse. Aloittelijasta kokeneeseen treenaajaan.
          </p>
          <a
            href="tel:0600411104"
            className="inline-flex items-center gap-3 bg-white hover:bg-gray-100 text-orange-700 font-bold text-xl px-8 py-4 rounded-xl transition-all shadow-lg"
          >
            📞 0600 411 104
          </a>
          <p className="text-sm text-white/50 mt-4">0,98 €/min · Valitse valikosta &quot;KuntoGuru&quot;</p>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            KuntoGurulla on myös oma sivusto
          </h2>
          <p className="text-gray-600 mb-6">
            Artikkeleita liikunnasta, treenivinkkejä ja hyvinvointiohjeita.
          </p>
          <a
            href="https://www.kuntoguru.fi"
            target="_blank"
            rel="noopener"
            className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 font-semibold"
          >
            Käy KuntoGuru.fi:ssä ↗
          </a>
        </div>
      </section>

      <Footer />
      <FloatingCTA />
    </div>
  );
}
