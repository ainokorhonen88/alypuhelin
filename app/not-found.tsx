import Link from 'next/link';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
export default function NotFound(){return <><Navigation/><main id="main" className="container not-found"><span className="eyebrow" style={{justifyContent:'center'}}>404 · SIVUA EI LÖYTYNYT</span><h1>Väärä numero?<br/>Vain väärä sivu.</h1><p>Etsimääsi sivua ei ole tässä osoitteessa. Löydät palvelumme etusivulta.</p><Link href="/" className="button">Takaisin etusivulle →</Link></main><Footer/></>}
