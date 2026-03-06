import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Tietosuojaseloste — Älypuhelin.fi",
  description: "Älypuhelin.fi-palvelun tietosuojaseloste.",
  alternates: { canonical: "/tietosuoja" },
  robots: "noindex",
};

export default function TietosuojaPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Tietosuojaseloste</h1>
        <div className="prose prose-gray max-w-none space-y-6 text-gray-700 text-sm leading-relaxed">
          <h2 className="text-xl font-semibold text-gray-900">Rekisterinpitäjä</h2>
          <p>
            Valkomedia Oy (Y-tunnus: 2360847-3)<br />
            Sähköposti: visa.valkonen@kaupallinen.fi
          </p>

          <h2 className="text-xl font-semibold text-gray-900">Yksityisyyden suoja</h2>
          <p>
            Yksityisyytesi on meille tärkeää. Tässä tietosuojaselosteessa kuvataan, mitä henkilötietoja keräämme, mihin niitä käytämme ja miten suojaamme niitä.
          </p>

          <h2 className="text-xl font-semibold text-gray-900">Kerättävät tiedot</h2>
          <p>Palvelun käytön yhteydessä saatamme käsitellä seuraavia tietoja:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Puhelinnumero (puhelun yhdistämistä varten)</li>
            <li>IP-osoite ja evästetiedot (verkkosivuston käytöstä)</li>
            <li>Yhteydenottolomakkeella annetut tiedot</li>
          </ul>

          <h2 className="text-xl font-semibold text-gray-900">Tietojen käyttö</h2>
          <p>
            Henkilötietoja käytetään palvelun tuottamiseen, asiakasviestintään ja palvelun kehittämiseen. Emme luovuta tietoja kolmansille osapuolille muutoin kuin palvelun tuottamiseen tarvittaville alihankkijoille.
          </p>

          <h2 className="text-xl font-semibold text-gray-900">Puheluiden käsittely</h2>
          <p>
            Puheluita ei nauhoiteta eikä tallenneta. Puhelinpalvelun tuottamisessa hyödynnetään tekoälyteknologiaa, jossa puheen käsittely tapahtuu reaaliajassa eikä tallennu.
          </p>

          <h2 className="text-xl font-semibold text-gray-900">Evästeet</h2>
          <p>
            Verkkosivustollamme käytetään Vercel Analytics -palvelua sivuston käytön analysointiin. Tämä palvelu kunnioittaa yksityisyyttä eikä käytä evästeitä käyttäjien seurantaan.
          </p>

          <h2 className="text-xl font-semibold text-gray-900">Oikeutesi</h2>
          <p>
            Sinulla on oikeus tarkastaa, oikaista ja poistaa itseäsi koskevat tiedot. Voit myös kieltää tietojen käytön suoramarkkinointitarkoituksiin. Ota yhteyttä: visa.valkonen@kaupallinen.fi.
          </p>

          <h2 className="text-xl font-semibold text-gray-900">Muutokset</h2>
          <p>
            Pidätämme oikeuden päivittää tätä tietosuojaselostetta. Muutokset julkaistaan tällä sivulla.
          </p>

          <p className="text-gray-400 text-xs pt-4">Päivitetty: maaliskuu 2026</p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
