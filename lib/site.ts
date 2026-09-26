export const site = {
  name: 'Älypuhelin',
  url: 'https://xn--lypuhelin-u2a.fi',
  phone: '0600 411 104',
  tel: 'tel:0600411104',
  price: '0,98 €/min + pvm/mpm',
};
export const gurus = [
  { name: 'IT-Guru', topic: 'Tekniikka', question: 'Laite ei toimi?', description: 'Apua tietokoneen, puhelimen ja kodin laitteiden pulmiin.', url: 'https://it-guru.fi', icon: 'screen', example: 'Miksi tulostin ei löydä Wi-Fiä?' },
  { name: 'LemmikkiGuru', topic: 'Lemmikit', question: 'Karvakaveri mietityttää?', description: 'Tietoa lemmikin hoidosta, käytöksestä ja yhteisestä arjesta.', url: 'https://lemmikkiguru.fi', icon: 'paw', example: 'Miten totutan pennun yksinoloon?' },
  { name: 'KuntoGuru', topic: 'Liikunta', question: 'Mistä aloittaisin treenin?', description: 'Liikeoppaita ja vinkkejä liikkumiseen omista lähtökohdistasi.', url: 'https://kuntoguru.fi', icon: 'activity', example: 'Millainen treeni sopii aloittelijalle?' },
  { name: 'RavintoGuru', topic: 'Ruoka', question: 'Mitä tänään söisi?', description: 'Ideoita ruokavalioon ja tavallisiin ruokailun kysymyksiin.', url: 'https://ravintoguru.fi', icon: 'leaf', example: 'Miten lisään proteiinia kasvisruokaan?' },
  { name: 'OikeusGuru', topic: 'Oikeusasiat', question: 'Sopimus epäselvä?', description: 'Ohjeita ja asiakirjamalleja arjen oikeuskysymyksiin.', url: 'https://oikeusguru.fi', icon: 'scales', example: 'Mitä vuokrasopimuksesta kannattaa tarkistaa?' },
  { name: 'VeroGuru', topic: 'Verotus', question: 'Verotus askarruttaa?', description: 'Tietoa verotuksesta ja apua verotermien ymmärtämiseen.', url: 'https://veroguru.fi', icon: 'receipt', example: 'Mitä kotitalousvähennys tarkoittaa?' },
] as const;
