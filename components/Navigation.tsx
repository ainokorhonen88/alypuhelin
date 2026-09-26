'use client';
import {useEffect,useRef,useState} from 'react';
import Link from 'next/link';
import Brand from './Brand';
import Icon from './Icon';
const links = [['/#gurut','Löydä oma Guru'],['/#miten-toimii','Näin se toimii'],['/#hinta','Hinnat'],['/#ukk','Kysyttävää?']];
export default function Navigation(){
 const [open,setOpen]=useState(false);const button=useRef<HTMLButtonElement>(null);
 useEffect(()=>{const close=(e:KeyboardEvent)=>{if(e.key==='Escape'){setOpen(false);button.current?.focus();}};if(open)window.addEventListener('keydown',close);return()=>window.removeEventListener('keydown',close)},[open]);
 return <header className="header"><div className="container nav-wrap"><Brand/><nav aria-label="Päävalikko" className="desktop-nav">{links.slice(1).map(([href,label])=><Link key={href} href={href}>{label}</Link>)}<Link href="/#gurut" className="button button-small">Löydä oma Guru<Icon name="arrow"/></Link></nav><button ref={button} className="menu-toggle" aria-expanded={open} aria-controls="mobile-menu" aria-label={open?'Sulje valikko':'Avaa valikko'} onClick={()=>setOpen(!open)}><span>{open?'Sulje':'Valikko'}</span><svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.8">{open?<path d="m6 6 12 12M18 6 6 18"/>:<path d="M4 8h16M4 16h16"/>}</svg></button></div><nav id="mobile-menu" aria-label="Mobiilivalikko" className="mobile-nav" hidden={!open}>{links.map(([href,label])=><Link key={href} href={href} onClick={()=>setOpen(false)}>{label}<Icon name="arrow"/></Link>)}</nav></header>
}
