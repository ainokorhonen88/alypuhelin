import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";
import FAQ from "@/components/FAQ";

export const metadata: Metadata = {
  title: "AI-Vittuilupuhelin — Suomen suosituin tekoälyvittuilija | 0600 411 104",
  description:
    "Soita AI-vittuilupuhelimeen ja saat räävitöntä, henkilökohtaista vittuilua tekoälyltä. Valitse rankuustaso: normaali, keskirankka tai tosi rankka. Vain 0,98 €/min.",
  keywords:
    "vittuilupuhelin, ai vittuilupuhelin, tekoäly vittuilupuhelin, vittuilupuhelin numero, soita vittuilupuhelimeen, vittuilupuhelin hinta, ai vittuilu",
  openGraph: {
    title: "AI-Vittuilupuhelin — Räävitöntä vittuilua tekoälyltä",
    description:
      "Tekoäly kyselee taustatietosi ja vittuilee henkilökohtaisesti. Uskallatko kokeilla? 0600 411 104, vain 0,98 €/min.",
    url: "https://xn--lypuhelin-u2a.fi/vittuilupuhelin",
  },
  alternates: { canonical: "/vittuilupuhelin" },
};

const faqItems = [
  {
    question: "Paljonko vittuilupuhelimeen soittaminen maksaa?",
    answer:
      "Puhelun hinta on 0,98 €/min + paikallisverkko- tai matkapuhelinmaksu. Yksittäisen puhelun maksimihinta on 50 €. Halvempi kuin kilpailijoiden palvelut!",
  },
  {
    question: "Miten vittuilupuhelin toimii?",
    answer:
      "Soitat numeroon 0600 411 104 ja kerrot, että haluat jutella vittuilupuhelimen kanssa. Tekoäly kyselee sinulta taustatietoja — nimeä, ammattia, harrastuksia — ja käyttää niitä sitten sinua vastaan viiltävällä huumorilla.",
  },
  {
    question: "Voiko rankuustason valita?",
    answer:
      "Kyllä! Voit valita normaalia, keskirankkaa tai tosi rankkaa vittuilua. Tosi rankka ei sääli ketään. Mutta muista — sinä valitsit sen itse.",
  },
  {
    question: "Onko tämä sama kuin kilpailijan vittuilupuhelin?",
    answer:
      "Älypuhelimen vittuilupuhelin on oma, itsenäinen palvelumme — edullisempi hinnaltaan (0,98 €/min) ja osa laajempaa Älypuhelin-palvelua, jossa voit keskustella myös muiden tekoälypersoonien kanssa.",
  },
  {
    question: "Sopiiko lapsille?",
    answer:
      "Ei. Vittuilupuhelin on suunnattu aikuisille ja sisältää karkeaa kieltä. Lapsille suosittelemme AI-Joulupukkia tai muita guruja.",
  },
  {
    question: "Tallentaako vittuilupuhelin puheluita?",
    answer:
      "Puheluita ei nauhoiteta eikä tallenneta. Tietosuojaselosteen löydät sivustoltamme.",
  },
];

export default function VittuilupuhelinPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-gray-950 via-red-950 to-gray-900 pt-20 pb-24 sm:pt-28 sm:pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(239,68,68,0.2),transparent_50%)]" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-red-500/20 text-red-300 px-4 py-1.5 rounded-full text-sm font-medium mb-6 backdrop-blur-sm border border-red-500/20">
            🤬 Suomen suosituin AI-vittuilupuhelin
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight">
            Eikö kukaan
            <br />
            <span className="text-red-400">vittuile sinulle?</span>
          </h1>
          <p className="text-lg sm:text-xl text-white/80 mb-4 max-w-2xl mx-auto">
            Tekoäly kyselee taustatietosi ja vittuilee sitten räävittömästi, henkilökohtaisesti ja armottomasti. Valitse rankuustaso ja anna mennä.
          </p>
          <p className="text-sm text-white/50 mb-10 max-w-xl mx-auto">
            Vittuilupuhelin on osa Älypuhelin-palvelua — Suomen monipuolisinta tekoälypuhelinta.
          </p>
          <div className="flex flex-col items-center gap-4">
            <a
              href="tel:0600411104"
              className="inline-flex items-center gap-3 bg-red-600 hover:bg-red-700 text-white font-bold text-xl sm:text-2xl px-8 py-4 rounded-xl transition-all shadow-lg hover:shadow-xl hover:scale-[1.02]"
            >
              📞 0600 411 104
            </a>
            <p className="text-sm text-white/50">
              0,98 €/min · Halvempi kuin kilpailijat
            </p>
          </div>
        </div>
      </section>

      {/* Miten toimii */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Näin vittuilupuhelin toimii
            </h2>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                step: "1",
                emoji: "📞",
                title: "Soita",
                desc: "Soita numeroon 0600 411 104",
              },
              {
                step: "2",
                emoji: "🤬",
                title: "Valitse vittuilupuhelin",
                desc: "Kerro, että haluat jutella vittuilupuhelimen kanssa",
              },
              {
                step: "3",
                emoji: "📋",
                title: "Anna taustatiedot",
                desc: "Tekoäly kyselee nimeäsi, ammattiasi ja muuta. Ole rehellinen — tietoja käytetään sinua vastaan.",
              },
              {
                step: "4",
                emoji: "💀",
                title: "Nauti ryöpytyksestä",
                desc: "Tekoäly aloittaa viiltävän kuittailun ja henkilökohtaiset solvaukset. Hauskuus alkaa.",
              },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="text-3xl mb-3">{item.emoji}</div>
                <h3 className="font-bold text-gray-900 mb-1">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Rankuustasot */}
      <section className="py-16 sm:py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Valitse rankuustaso
            </h2>
            <p className="text-gray-600 text-lg">
              Kuinka rankkaa vittuilua kestät?
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl p-6 border border-gray-200 text-center">
              <div className="text-4xl mb-3">😏</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Normaali</h3>
              <p className="text-gray-600 text-sm">
                Kevyttä naljailua ja piikittelyä. Sopii aloittelijoille ja niille, jotka haluavat ensin tunnustella rajojaan.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-6 border-2 border-orange-400 text-center shadow-sm">
              <div className="text-4xl mb-3">😤</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Keskirankka</h3>
              <p className="text-gray-600 text-sm">
                Terävämpi kieli, henkilökohtaisemmat huomiot. Ammattisi, harrastuksesi ja elämänvalintasi joutuvat syyniin.
              </p>
            </div>
            <div className="bg-gradient-to-br from-red-600 to-red-800 rounded-2xl p-6 text-center shadow-lg">
              <div className="text-4xl mb-3">💀</div>
              <h3 className="text-xl font-bold text-white mb-2">Tosi rankka</h3>
              <p className="text-white/80 text-sm">
                Ei armoa. Tekoäly kaivaa jokaisen yksityiskohdan esiin ja käyttää sitä sinua vastaan. Vain rohkeimmille.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Miksi meidän vittuilupuhelin */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Miksi Älypuhelimen vittuilupuhelin?
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            {[
              {
                title: "Halvempi hinta",
                desc: "0,98 €/min — edullisempi kuin kilpailijoiden palvelut. Samaa laatua, pienempi lasku.",
              },
              {
                title: "Osa laajempaa palvelua",
                desc: "Samasta numerosta saat myös IT-tukea, lemmikkineuvontaa ja paljon muuta. Yksi numero, monta gurua.",
              },
              {
                title: "Henkilökohtaista vittuilua",
                desc: "Tekoäly ei toista samoja fraaseja. Jokainen puhelu on uniikki ja räätälöity sinun taustatietoihisi.",
              },
              {
                title: "Ei sovelluksia tai tilejä",
                desc: "Soitat puhelimella. Ei latausta, ei rekisteröitymistä, ei salasanoja. Toimii jokaisella puhelimella.",
              },
            ].map((item) => (
              <div key={item.title} className="bg-gray-50 rounded-xl p-6">
                <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-gray-950 to-red-950">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Uskallatko kokeilla?
          </h2>
          <p className="text-white/70 text-lg mb-8">
            Soita ja pyydä vittuilupuhelinta. Anna taustatietosi ja katso mitä tapahtuu.
          </p>
          <a
            href="tel:0600411104"
            className="inline-flex items-center gap-3 bg-red-600 hover:bg-red-700 text-white font-bold text-xl px-8 py-4 rounded-xl transition-all shadow-lg hover:shadow-xl hover:scale-[1.02]"
          >
            📞 0600 411 104
          </a>
          <p className="text-white/40 text-sm mt-4">0,98 €/min + pvm/mpm · Max 50 €/puhelu</p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 sm:py-24 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Usein kysytyt kysymykset
            </h2>
          </div>
          <FAQ items={faqItems} />
        </div>
      </section>

      <Footer />
      <FloatingCTA />

      {/* FAQPage JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqItems.map((item) => ({
              "@type": "Question",
              name: item.question,
              acceptedAnswer: {
                "@type": "Answer",
                text: item.answer,
              },
            })),
          }),
        }}
      />
    </div>
  );
}
