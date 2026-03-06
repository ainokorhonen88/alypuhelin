import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";

export const metadata: Metadata = {
  title: "LemmikkiGuru — Lemmikkineuvontaa tekoälyltä | 0600 411 104",
  description:
    "Soita LemmikkiGurulle ja saat neuvontaa lemmikin terveyteen, käytökseen ja hoitoon. Koirat, kissat ja muut lemmikit. 24/7, vain 0,98 €/min.",
  alternates: { canonical: "/lemmikkiguru" },
};

export default function LemmikkiGuruPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <section className="bg-gradient-to-br from-amber-900 via-amber-800 to-yellow-900 pt-20 pb-24 sm:pt-28 sm:pb-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-amber-500/20 text-amber-300 px-4 py-1.5 rounded-full text-sm font-medium mb-6">
            🐾 Lemmikkineuvontaa tekoälyltä
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-6 leading-tight">
            Lemmikki huolettaa?
            <br />
            <span className="text-amber-300">LemmikkiGuru auttaa.</span>
          </h1>
          <p className="text-lg text-white/80 mb-10 max-w-2xl mx-auto">
            Tekoälypohjainen lemmikkineuvonta puhelimessa. Saat apua koiran, kissan ja muiden lemmikkien terveyteen, käytökseen ja hoitoon — heti, ilman ajanvarausta.
          </p>
          <a
            href="tel:0600411104"
            className="inline-flex items-center gap-3 bg-white hover:bg-gray-100 text-amber-700 font-bold text-xl px-8 py-4 rounded-xl transition-all shadow-lg"
          >
            📞 0600 411 104
          </a>
          <p className="text-sm text-white/50 mt-4">0,98 €/min · Valitse valikosta &quot;LemmikkiGuru&quot;</p>
        </div>
      </section>

      <section className="py-16 sm:py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Esimerkkikysymyksiä
          </h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {[
              { emoji: "🤢", q: "\"Koira oksentaa — pitääkö huolestua?\"" },
              { emoji: "🐾", q: "\"Pentu puree ja hyppii kaikkien päälle\"" },
              { emoji: "😿", q: "\"Kissa ei syö eikä leiki\"" },
              { emoji: "🦴", q: "\"Mitä ruokaa koiralle voi antaa?\"" },
            ].map((item) => (
              <div key={item.q} className="bg-white rounded-xl p-5 border border-gray-200 flex items-start gap-3">
                <span className="text-2xl">{item.emoji}</span>
                <span className="text-gray-700 font-medium">{item.q}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            LemmikkiGurulla on myös oma sivusto
          </h2>
          <p className="text-gray-600 mb-6">
            Yli 360 artikkelia lemmikkien hoidosta, terveydestä ja käytöksestä.
          </p>
          <a
            href="https://lemmikkiguru.fi"
            target="_blank"
            rel="noopener"
            className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 font-semibold"
          >
            Käy LemmikkiGuru.fi:ssä ↗
          </a>
        </div>
      </section>

      <Footer />
      <FloatingCTA />
    </div>
  );
}
