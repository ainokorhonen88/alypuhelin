import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <Link href="/" className="flex items-center gap-2 mb-3 hover:opacity-80 transition-opacity">
              <span className="text-xl">📱</span>
              <span className="font-bold text-white">Älypuhelin</span>
            </Link>
            <p className="text-sm text-gray-400">
              Soita tekoälylle 24/7. Valitse oma gurusi ja keskustele — helposti puhelimella.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-3">Palvelut</h4>
            <div className="space-y-2 text-sm">
              <div><Link href="/vittuilupuhelin" className="text-gray-400 hover:text-primary-400 transition-colors">Vittuilupuhelin</Link></div>
              <div><Link href="/it-guru" className="text-gray-400 hover:text-primary-400 transition-colors">IT-Guru</Link></div>
              <div><Link href="/lemmikkiguru" className="text-gray-400 hover:text-primary-400 transition-colors">LemmikkiGuru</Link></div>
              <div><Link href="/ravintoguru" className="text-gray-400 hover:text-primary-400 transition-colors">RavintoGuru</Link></div>
              <div><Link href="/kuntoguru" className="text-gray-400 hover:text-primary-400 transition-colors">KuntoGuru</Link></div>
            </div>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-3">Guru-perhe</h4>
            <div className="space-y-2 text-sm">
              <div><a href="https://it-guru.fi" target="_blank" rel="noopener" className="text-gray-400 hover:text-primary-400 transition-colors">IT-Guru.fi ↗</a></div>
              <div><a href="https://lemmikkiguru.fi" target="_blank" rel="noopener" className="text-gray-400 hover:text-primary-400 transition-colors">LemmikkiGuru.fi ↗</a></div>
              <div><a href="https://ravintoguru.fi" target="_blank" rel="noopener" className="text-gray-400 hover:text-primary-400 transition-colors">RavintoGuru.fi ↗</a></div>
              <div><a href="https://www.kuntoguru.fi" target="_blank" rel="noopener" className="text-gray-400 hover:text-primary-400 transition-colors">KuntoGuru.fi ↗</a></div>
            </div>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-3">Yhteystiedot</h4>
            <div className="space-y-2 text-sm">
              <div>📞 <a href="tel:0600411104" className="text-gray-400 hover:text-primary-400 transition-colors">0600 411 104</a></div>
              <div className="text-gray-400">0,98 €/min + pvm/mpm</div>
              <div className="pt-2">
                <Link href="/tietosuoja" className="text-gray-400 hover:text-primary-400 transition-colors">Tietosuojaseloste</Link>
              </div>
              <div className="text-xs text-gray-500 pt-2">Valkomedia Oy (2360847-3)</div>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-6 text-center text-xs text-gray-500">
          © 2026 Älypuhelin.fi · Valkomedia Oy
        </div>
      </div>
    </footer>
  );
}
