import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";
import PersonaCard from "@/components/PersonaCard";
import FAQ from "@/components/FAQ";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

const faqItems = [
  {
    question: "Mitä Älypuhelin-palvelu maksaa?",
    answer:
      "Puhelun hinta on 0,98 €/min + paikallisverkko- tai matkapuhelinmaksu. Yksittäisen puhelun maksimihinta on 50 €. Ei kuukausimaksuja eikä tilauksia — maksat vain kun soitat.",
  },
  {
    question: "Miten palvelu toimii?",
    answer:
      "Soitat numeroon 0600 411 104 ja puhelimeen vastaa tekoäly. Voit valita, millaisen tekoälyn kanssa haluat keskustella — esimerkiksi IT-tukihenkilön, lemmikkineuvojan tai vittuilupuhelimen. Tekoäly keskustelee kanssasi luonnollisella suomen kielellä.",
  },
  {
    question: "Voiko palvelua käyttää mihin aikaan tahansa?",
    answer:
      "Kyllä. Palvelu on käytössä 24 tuntia vuorokaudessa, 7 päivänä viikossa. Tekoäly ei tarvitse taukoja.",
  },
  {
    question: "Kuka palvelun takana on?",
    answer:
      "Palvelun tuottaa suomalainen Valkomedia Oy. Puhelut käsitellään turvallisesti ja tietosuojaseloste löytyy sivustoltamme.",
  },
  {
    question: "Onko Vittuilupuhelin oikea palvelu?",
    answer:
      "Kyllä! Vittuilupuhelin on Älypuhelimen suosituin palvelu. Tekoäly kyselee sinulta taustatietoja ja vittuilee sitten räävittömästi ja henkilökohtaisesti. Voit valita rankuustason: normaali, keskirankka tai tosi rankka.",
  },
  {
    question: "Mikä ero on Älypuhelimella ja ChatGPT:llä?",
    answer:
      "Älypuhelin toimii puhelimitse — et tarvitse sovelluksia, tilejä tai internetyhteyttä. Soitat, puhut ja kuuntelet. Tekoäly on erikoistunut suomenkieliseen keskusteluun ja eri aihealueisiin (IT-tuki, lemmikit, ravitsemus jne.).",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-primary-950 via-primary-900 to-accent-900 pt-20 pb-24 sm:pt-28 sm:pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(139,92,246,0.3),transparent_50%)]" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 text-white/90 px-4 py-1.5 rounded-full text-sm font-medium mb-6 backdrop-blur-sm">
            🤖 Tekoäly vastaa puhelimeesi — 24/7
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight">
            Soita tekoälylle.
            <br />
            <span className="bg-gradient-to-r from-primary-300 to-accent-300 bg-clip-text text-transparent">
              Valitse oma gurusi.
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-white/80 mb-10 max-w-2xl mx-auto">
            Älypuhelin on puhelinpalvelu, jossa keskustelet tekoälyn kanssa omalla äänelläsi.
            IT-tukea, lemmikkineuvontaa, ravitsemusvinkkejä — tai räävitöntä vittuilua.
          </p>
          <div className="flex flex-col items-center gap-4">
            <a
              href="tel:0600411104"
              className="inline-flex items-center gap-3 bg-white hover:bg-gray-100 text-primary-700 font-bold text-xl sm:text-2xl px-8 py-4 rounded-xl transition-all shadow-lg hover:shadow-xl hover:scale-[1.02]"
            >
              📞 0600 411 104
            </a>
            <p className="text-sm text-white/60">
              0,98 €/min · Ei kuukausimaksuja · Ei tilauksia
            </p>
          </div>
        </div>
      </section>

      {/* Gurut */}
      <section id="gurut" className="py-16 sm:py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Valitse oma gurusi
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Älypuhelimessa on useita erilaisia tekoälypersoonallisuuksia. Soita ja kerro, minkä gurun kanssa haluat keskustella.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <PersonaCard
              emoji="🤬"
              title="Vittuilupuhelin"
              description="Suomen suosituin AI-vittuilupuhelin. Räävitön, henkilökohtainen ja armoton huumorilla höystetty ryöpytys."
              href="/vittuilupuhelin"
              highlight
              tag="SUOSITUIN"
            />
            <PersonaCard
              emoji="💻"
              title="IT-Guru"
              description="Tietokone- ja teknologia-apua 24/7. Wi-Fi ei toimi? Puhelin jumissa? Virus? IT-Guru auttaa."
              href="/it-guru"
            />
            <PersonaCard
              emoji="🐾"
              title="LemmikkiGuru"
              description="Lemmikkineuvontaa koirien, kissojen ja muiden lemmikkien omistajille. Terveys, käytös ja hoito."
              href="/lemmikkiguru"
            />
            <PersonaCard
              emoji="🍎"
              title="RavintoGuru"
              description="Ravitsemusneuvontaa ja ruokavaliovinkkejä. Kalorilaskentaa, allergiat, erityisruokavaliot."
              href="/ravintoguru"
            />
            <PersonaCard
              emoji="💪"
              title="KuntoGuru"
              description="Liikunta- ja kuntoiluneuvontaa. Treeniohjelmat, venyttely, palautuminen ja urheiluvammat."
              href="/kuntoguru"
            />
            <PersonaCard
              emoji="🎅"
              title="AI-Joulupukki"
              description="Juttelua Korvatunturin älykkäimmän Joulupukin kanssa. Tarinoita, lahjatoiveita ja joulumieltä."
              href="/joulupukki"
              tag="SESONKI"
            />
          </div>
          <p className="text-center text-gray-500 text-sm mt-8">
            ...ja lisää guruja tulossa! Soita ja kysy, mitä muuta tarjoamme.
          </p>
        </div>
      </section>

      {/* Miten toimii */}
      <section id="miten-toimii" className="py-16 sm:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Näin se toimii
            </h2>
            <p className="text-gray-600 text-lg">
              Kolme askelta tekoälykeskusteluun.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "1",
                title: "Soita",
                desc: "Soita numeroon 0600 411 104 tavallisella puhelimellasi. Ei sovelluksia, ei tilejä.",
              },
              {
                step: "2",
                title: "Valitse guru",
                desc: "Tekoäly luettelee saatavilla olevat gurut. Kerro, minkä gurun kanssa haluat keskustella.",
              },
              {
                step: "3",
                title: "Keskustele",
                desc: "Keskustele vapaasti suomeksi. Guru kuuntelee, vastaa ja auttaa — niin kauan kuin haluat.",
              },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-14 h-14 bg-primary-100 text-primary-700 rounded-2xl flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hinta */}
      <section id="hinta" className="py-16 sm:py-24 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Selkeä hinnoittelu
          </h2>
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 mt-8">
            <div className="text-5xl font-extrabold text-primary-600 mb-2">
              0,98 €<span className="text-2xl text-gray-400">/min</span>
            </div>
            <p className="text-gray-500 mb-6">+ paikallisverkko- tai matkapuhelinmaksu</p>
            <div className="space-y-3 text-left max-w-sm mx-auto">
              {[
                "Ei kuukausimaksuja",
                "Ei tilauksia tai sitoumuksia",
                "Maksat vain kun soitat",
                "Yksittäisen puhelun max 50 €",
                "Puhelu katkaistaan automaattisesti rajalla",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <span className="text-green-500 mt-0.5">✓</span>
                  <span className="text-gray-700 text-sm">{item}</span>
                </div>
              ))}
            </div>
            <a
              href="tel:0600411104"
              className="inline-flex items-center gap-2 bg-primary-600 hover:bg-primary-700 text-white font-bold text-lg px-8 py-4 rounded-xl transition-all mt-8 shadow-lg hover:shadow-xl"
            >
              📞 Soita 0600 411 104
            </a>
          </div>
        </div>
      </section>

      {/* Media */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm text-gray-400 uppercase tracking-wider mb-6">Nähty mediassa</p>
          <div className="flex items-center justify-center gap-12 opacity-40 grayscale">
            <span className="text-2xl font-bold text-gray-900">Radio Rock</span>
            <span className="text-2xl font-bold text-gray-900">Helsingin Sanomat</span>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="ukk" className="py-16 sm:py-24 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Usein kysytyt kysymykset
            </h2>
          </div>
          <FAQ items={faqItems} />
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 sm:py-24 bg-gradient-to-br from-primary-900 to-accent-900">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Kokeile heti
          </h2>
          <p className="text-white/80 text-lg mb-8">
            Soita ja tutustu tekoälyyn omalla äänelläsi. Helpompaa tapaa ei ole.
          </p>
          <a
            href="tel:0600411104"
            className="inline-flex items-center gap-3 bg-white hover:bg-gray-100 text-primary-700 font-bold text-xl px-8 py-4 rounded-xl transition-all shadow-lg hover:shadow-xl hover:scale-[1.02]"
          >
            📞 0600 411 104
          </a>
        </div>
      </section>

      <Footer />
      <FloatingCTA />
    </div>
  );
}
