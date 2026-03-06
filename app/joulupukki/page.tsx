import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";

export const metadata: Metadata = {
  title: "AI-Joulupukki — Juttelua Korvatunturin Joulupukin kanssa | 0600 411 104",
  description:
    "Soita AI-Joulupukille ja jutustele Korvatunturin älykkäimmän Pukin kanssa. Tarinoita, lahjatoiveita ja joulumieltä lapsille ja aikuisille. 0,98 €/min.",
  alternates: { canonical: "/joulupukki" },
};

export default function JoulupukkiPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <section className="bg-gradient-to-br from-red-950 via-red-900 to-green-950 pt-20 pb-24 sm:pt-28 sm:pb-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-red-500/20 text-red-300 px-4 py-1.5 rounded-full text-sm font-medium mb-6">
            🎅 Korvatunturin älykkäin Pukki
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-6 leading-tight">
            Soita Joulupukille
            <br />
            <span className="text-red-300">— hän on aina paikalla.</span>
          </h1>
          <p className="text-lg text-white/80 mb-10 max-w-2xl mx-auto">
            Tekoälypohjainen Joulupukki, joka kuuntelee, juttelee ja muistelee tarinoita Korvatunturilta. Ei kiirettä, ei jonotusta. Sopii lapsille ja aikuisille.
          </p>
          <a
            href="tel:0600411104"
            className="inline-flex items-center gap-3 bg-white hover:bg-gray-100 text-red-700 font-bold text-xl px-8 py-4 rounded-xl transition-all shadow-lg"
          >
            📞 0600 411 104
          </a>
          <p className="text-sm text-white/50 mt-4">0,98 €/min · Kerro, että haluat jutella Joulupukille</p>
        </div>
      </section>

      <section className="py-16 sm:py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Kenelle sopii?
          </h2>
          <div className="grid sm:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-6 border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-3">🧒 Lapsille ja perheille</h3>
              <p className="text-gray-600">
                Luo lapselle ikimuistoinen hetki. Pukki juttelee rauhallisesti, kyselee lahjatoiveita ja kehuu reippaudesta. Lempeä huumori rauhoittaa jännityksenkin.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-3">🎄 Aikuisille ja pikkujouluihin</h3>
              <p className="text-gray-600">
                Soita Pukille pikkujouluissa kaiuttimella ja kysy, mitä hänen kirjansa sanoo työkaverin kiltteydestä. Sopivan tilannetajuinen, pilke silmäkulmassa.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-white text-center">
        <div className="max-w-2xl mx-auto px-4">
          <p className="text-gray-500 text-sm italic">
            AI-Joulupukki on sesonkipalvelu, joka on erityisen suosittu joulu- ja talvikaudella. Pukki vastaa kuitenkin ympäri vuoden.
          </p>
        </div>
      </section>

      <Footer />
      <FloatingCTA />
    </div>
  );
}
