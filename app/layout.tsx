import type {Metadata,Viewport} from 'next';
import localFont from 'next/font/local';
import './globals.css';
import {Analytics} from '@vercel/analytics/next';
import {site} from '@/lib/site';
const manrope=localFont({src:'../public/fonts/Manrope.ttf',variable:'--font-display',display:'swap',weight:'200 800'});
const dmSans=localFont({src:'../public/fonts/DMSans.ttf',variable:'--font-body',display:'swap',weight:'100 1000'});
export const metadata: Metadata={
 metadataBase:new URL(site.url), title:{default:'Älypuhelin – Kysy ääneen. Löydä oma Gurusi.',template:'%s | Älypuhelin'},
 description:'Löydä sopiva Guru arjen kysymyksiin tai soita tekoälylle: 0600 411 104. Ilman sovellusta tai kirjautumista. 0,98 €/min + pvm/mpm.',
 authors:[{name:'Valkomedia Oy'}],robots:{index:true,follow:true},
 openGraph:{title:'Älypuhelin – Kysy ääneen.',description:'Apua arjen kysymyksiin. Löydä sopiva Guru tai juttele tekoälyn kanssa puhelimessa.',url:site.url,siteName:site.name,locale:'fi_FI',type:'website',images:[{url:'/brand/social-card.png',width:1200,height:630,alt:'Älypuhelin – Kysy ääneen. Kaiku-maskotti.'}]},
 twitter:{card:'summary_large_image'},icons:{icon:'/favicon.svg'},alternates:{canonical:'/'},
};
export const viewport:Viewport={themeColor:'#F7F3EA'};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="fi" className={`${manrope.variable} ${dmSans.variable}`}><body><a className="skip-link" href="#main">Siirry sisältöön</a>{children}<Analytics/></body></html>}
