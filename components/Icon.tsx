import type { CSSProperties } from 'react';
const paths: Record<string, React.ReactNode> = {
 arrow: <><path d="M5 12h14M13 6l6 6-6 6"/></>,
 external: <><path d="M7 17 17 7M7 7h10v10"/></>,
 phone: <path d="m7 3 3 5-2 2c1.5 3 3 4.5 6 6l2-2 5 3c0 3-2 4-4 4C10 20 4 14 3 7c0-2 1-4 4-4Z"/>,
 screen: <><rect x="3" y="4" width="18" height="13" rx="2"/><path d="M8 21h8M12 17v4"/></>,
 paw: <><ellipse cx="6" cy="8" rx="2" ry="3"/><ellipse cx="12" cy="5" rx="2" ry="3"/><ellipse cx="18" cy="8" rx="2" ry="3"/><path d="M6 18c0-3 4-7 6-7s6 4 6 7c0 4-4 1-6 1s-6 3-6-1Z"/></>,
 activity: <><path d="M2 12h5l3-8 4 16 3-8h5"/></>,
 leaf: <><path d="M20 3c-10 0-16 3-16 10a7 7 0 0 0 7 7c7 0 9-7 9-17ZM4 21 15 10"/></>,
 scales: <><path d="M12 3v18M6 21h12M3 7h18M6 7l-4 8h8L6 7ZM18 7l-4 8h8l-4-8Z"/></>,
 receipt: <><path d="M6 3h12v18l-3-2-3 2-3-2-3 2V3Z M9 7h6M9 11h6M9 15h3"/></>,
 check: <path d="m5 12 4 4L19 6"/>,
 sound: <><path d="M4 10v4M8 6v12M12 3v18M16 7v10M20 10v4"/></>,
};
export default function Icon({name, className='', style}: {name: string; className?: string; style?: CSSProperties}) {
 return <svg className={`icon ${className}`} style={style} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{paths[name] || paths.arrow}</svg>;
}
