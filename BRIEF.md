# Älypuhelin.fi — Rebuild Brief

## Tavoite
Rakenna älypuhelin.fi uudestaan Next.js 14 + Tailwind CSS + TypeScript -stackilla (Vercel deploy). Sivusto on "Guru-perheen" kattosivu: Älypuhelin on palvelu jossa soitat tekoälylle ja valitset minkä tyyppisen tekoälyn kanssa haluat keskustella. Jokainen "guru" on oma persoonansa.

## Brändilinjaus
- Nimi: **Älypuhelin** (ei .fi domainissa, käytä logossa)
- Domain: älypuhelin.fi (punycode: xn--lypuhelin-u2a.fi), myös alypuhelin.fi käytössä
- Numero: **0600 411 104**
- Hinta: **0,98 €/min** + pvm/mpm, max 50 €/puhelu
- Ei kuukausimaksuja tai tilauksia
- Palveluntarjoaja: Valkomedia Oy (2360847-3)
- Värimaailma: moderni, tummansininen/violetti gradientin kanssa, futuristinen mutta selkeä. EI samoja värejä kuin muut guru-sivustot.
- Fontti: Inter (kuten muut guru-sivustot)

## Sivurakenne

### 1. Etusivu (`/`)
- Hero: "Soita tekoälylle — valitse oma gurusi" + puhelinnumero CTA
- Esittele kaikki persoonat/gurut (korteissa):
  - 🤬 **Vittuilupuhelin** — Suomen suosituin AI-vittuilupuhelin. Räävitön, henkilökohtainen, armoton.
  - 💻 **IT-Guru** — Tietokone- ja teknologia-apua 24/7 (linkki myös it-guru.fi)
  - 🐾 **LemmikkiGuru** — Lemmikkineuvontaa (linkki myös lemmikkiguru.fi)
  - 🍎 **RavintoGuru** — Ravitsemusneuvontaa (linkki myös ravintoguru.fi)
  - 💪 **KuntoGuru** — Kuntoilu- ja liikuntaneuvontaa (linkki myös kuntoguru.fi)
  - 🎅 **AI-Joulupukki** — Juttelua Joulupukin kanssa (sesonkisivu)
  - ... ja lisää guruja tulossa!
- "Näin se toimii" 3-step: Soita → Valitse guru → Keskustele
- Hinta-osio
- Media-osio (Radio Rock, Helsingin Sanomat logot — mainitse "nähty mediassa")
- FAQ (usein kysytyt)
- Footer: tietosuoja, yhteystiedot, Valkomedia Oy, guru-perheen linkit

### 2. Vittuilupuhelin landing page (`/vittuilupuhelin`)
**Tämä on tärkein SEO-sivu!** Suurin osa liikenteestä tulee vittuilupuhelin-hauista.
- Hero: aggressiivinen, hauska, rohkea
- "Vittuilupuhelin on Älypuhelimen viihdekäytön räävitön sivupolku"
- Näin toimii: Soita → Pyydä vittuilupuhelinta → Anna taustatiedot → Nauti ryöpytyksestä
- Tasot: normaali / keskirankka / tosi rankka (Lapinlahden Linnut -viittaus)
- Vahva CTA: Soita 0600 411 104
- SEO-avainsanat: "ai vittuilupuhelin", "vittuilupuhelin", "tekoäly vittuilupuhelin", "vittuilupuhelin numero", "vittuilupuhelin hinta"
- Kilpailuetu: halvempi hinta (0,98€ vs kilpailijan 1,55€), osa laajempaa Älypuhelin-palvelua
- Sosiaalinen todiste: "Tuhannet suomalaiset ovat jo testanneet"

### 3. IT-Guru (`/it-guru`)
- Landing page IT-tukipalvelulle
- Linkki it-guru.fi:hin
- Esimerkkikysymyksiä (Wi-Fi, virus, puhelin jumissa)
- CTA: Soita 0600 411 104 ja valitse IT-Guru

### 4. Muut Gurut (`/lemmikkiguru`, `/ravintoguru`, `/kuntoguru`)
- Lyhyet landing paget joka gurulle
- Linkki omaan guru-sivustoon
- CTA: soita tai käy guru-sivustolla

### 5. AI-Joulupukki (`/joulupukki`)
- Sesonkisivu, voidaan aktivoida jouluna
- Juttelua AI-Joulupukin kanssa

### 6. Blogi (`/blogi`)
- Sisältöhubi tulevaa SEO-sisältöä varten
- Artikkelisivu: `/blogi/[slug]`
- Artikkelit TypeScript-arrayssa (kuten muut guru-sivustot)

### 7. Tietosuoja (`/tietosuoja`)
- Privacy policy (kopioi rakenne muilta guru-sivustoilta, muokkaa Älypuhelin-kontekstiin)

## Tekniset vaatimukset
- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- @vercel/analytics
- Yoast-tyylinen SEO: metadata, OpenGraph, JSON-LD (Service, FAQPage)
- Sitemap generointi (scripts/generate-sitemap.mjs)
- robots.txt
- Responsiivinen (mobile-first)
- Favicon (SVG, 📱 emoji tai puhelin-teemainen)
- Ei Supabase/auth toistaiseksi — staattinen sivusto

## Komponentit (samanlainen rakenne kuin muissa Guru-sivustoissa)
- Navigation (sticky, mobile hamburger)
- Footer (guru-perhe linkit, yhteystiedot, tietosuoja)
- FloatingCTA (kiinteä soitto-nappi mobiilissa)
- PersonaCard (guru-kortti etusivulle)
- HeroSection
- FAQ (accordion)

## Tärkeää
- Vittuilupuhelin-sivu on SEO-prioriteetti #1 — tee siitä paras mahdollinen
- Älä käytä samaa värimaailmaa kuin LemmikkiGuru (keltainen/amber) — käytä sinistä/violettia/tummaa
- Teksti suomeksi
- Puhelinnumero joka sivulla, selkeästi esillä
- Ei "Lorem ipsum" — kirjoita oikea sisältö joka sivulle

## Reference
- Tekninen pohja: katso ~/Projects/lemmikkiguru/ rakenteesta mallia (package.json, tailwind.config.ts, app/layout.tsx, components/)
- Mutta ÄLÄ kopioi värejä tai sisältöä suoraan — tee Älypuhelimelle oma identiteetti
