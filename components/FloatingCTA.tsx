'use client';
import {useEffect,useState} from 'react';
import {site} from '@/lib/site';
import Icon from './Icon';
export default function FloatingCTA(){const [visible,setVisible]=useState(false);useEffect(()=>{const update=()=>setVisible(window.scrollY>500);update();window.addEventListener('scroll',update,{passive:true});return()=>window.removeEventListener('scroll',update)},[]);return visible?<div className="floating-call"><a href={site.tel} className="button"><Icon name="phone"/>Soita {site.phone}</a><span>{site.price} · Pyydä Vittuilupuhelinta</span></div>:null}
