import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";

export const metadata: Metadata = {
  title: "RavintoGuru — Ravitsemusneuvontaa tekoälyltä | 0600 411 104",
  description:
    "Soita RavintoGurulle ja saat neuvontaa ravitsemukseen, ruokavalioon ja painonhallintaan. 24/7, vain 0,98 €/min.",
  alternates: { canonical: "/ravintoguru" },
};

export default function RavintoGuruPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <section className="bg-gradient-to-br from-green-950 via-green-900 to-emerald-900 pt-20 pb-24 sm:pt-28 sm:pb-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-green-500/20 text-green-300 px-4 py-1.5 rounded-full text-sm font-medium mb-6">
            🍎 Ravitsemusneuvontaa tekoälyltä
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-6 leading-tight">
            Syötkö oikein?
            <br />
            <span className="text-green-300">RavintoGuru kertoo.</span>
          </h1>
          <p className="text-lg text-white/80 mb-10 max-w-2xl mx-auto">
            Ravitsemusneuvontaa puhelimitse. Kalorilaskentaa, ruokavaliovinkkejä, allergioiden huomiointia ja erityisruokavalioiden tukea.
          </p>
          <a
            href="tel:0600411104"
            className="inline-flex items-center gap-3 bg-white hover:bg-gray-100 text-green-700 font-bold text-xl px-8 py-4 rounded-xl transition-all shadow-lg"
          >
            📞 0600 411 104
          </a>
          <p className="text-sm text-white/50 mt-4">0,98 €/min · Valitse valikosta &quot;RavintoGuru&quot;</p>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            RavintoGurulla on myös oma sivusto
          </h2>
          <p className="text-gray-600 mb-6">
            Artikkeleita ravitsemuksesta, reseptejä ja kalorilaskuri.
          </p>
          <a
            href="https://ravintoguru.fi"
            target="_blank"
            rel="noopener"
            className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 font-semibold"
          >
            Käy RavintoGuru.fi:ssä ↗
          </a>
        </div>
      </section>

      <Footer />
      <FloatingCTA />
    </div>
  );
}
