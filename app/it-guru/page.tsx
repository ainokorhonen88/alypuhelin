import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";

export const metadata: Metadata = {
  title: "IT-Guru — Tietokone- ja teknologia-apua tekoälyltä | 0600 411 104",
  description:
    "Soita IT-Gurulle ja saat apua tietokoneen, puhelimen, Wi-Fin ja muiden laitteiden ongelmiin. Tekoälypohjainen IT-tuki 24/7. Vain 0,98 €/min.",
  alternates: { canonical: "/it-guru" },
};

export default function ITGuruPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <section className="bg-gradient-to-br from-blue-950 via-blue-900 to-primary-900 pt-20 pb-24 sm:pt-28 sm:pb-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-blue-500/20 text-blue-300 px-4 py-1.5 rounded-full text-sm font-medium mb-6">
            💻 IT-tuki tekoälyltä
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-6 leading-tight">
            Tietokone jumissa?
            <br />
            <span className="text-blue-300">IT-Guru auttaa heti.</span>
          </h1>
          <p className="text-lg text-white/80 mb-10 max-w-2xl mx-auto">
            IT-Guru on tekoälypohjainen IT-tukihenkilö, joka auttaa tietokoneen, puhelimen, tabletin ja muiden laitteiden ongelmissa. Soita ja kerro ongelmasi — saat selkeät ohjeet heti.
          </p>
          <a
            href="tel:0600411104"
            className="inline-flex items-center gap-3 bg-white hover:bg-gray-100 text-blue-700 font-bold text-xl px-8 py-4 rounded-xl transition-all shadow-lg hover:shadow-xl hover:scale-[1.02]"
          >
            📞 0600 411 104
          </a>
          <p className="text-sm text-white/50 mt-4">0,98 €/min · Valitse valikosta &quot;IT-Guru&quot;</p>
        </div>
      </section>

      <section className="py-16 sm:py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Milloin soittaa IT-Gurulle?
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { emoji: "📶", title: "Wi-Fi ei toimi", desc: "Yhteys pätkii tai laite ei yhdistä verkkoon." },
              { emoji: "🐌", title: "Tietokone on hidas", desc: "Käynnistys kestää, ohjelmat jumittavat." },
              { emoji: "🦠", title: "Epäilen virusta", desc: "Outojen ilmoituksia, selaimen uudelleenohjauksia." },
              { emoji: "📱", title: "Puhelin jumissa", desc: "Sovellus ei toimi, päivitys ei asennu." },
              { emoji: "🖨️", title: "Tulostin ei tulosta", desc: "Yhteysongelmat, paperitukos, ajurit." },
              { emoji: "📧", title: "Sähköpostiongelma", desc: "Viestit eivät lähde tai tule perille." },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-xl p-6 border border-gray-200">
                <div className="text-3xl mb-3">{item.emoji}</div>
                <h3 className="font-bold text-gray-900 mb-1">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            IT-Gurulla on myös oma sivusto
          </h2>
          <p className="text-gray-600 mb-6">
            Löydät IT-Gurun blogin, oppaat ja lisätietoja osoitteesta IT-Guru.fi.
          </p>
          <a
            href="https://it-guru.fi"
            target="_blank"
            rel="noopener"
            className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 font-semibold"
          >
            Käy IT-Guru.fi:ssä ↗
          </a>
        </div>
      </section>

      <Footer />
      <FloatingCTA />
    </div>
  );
}
