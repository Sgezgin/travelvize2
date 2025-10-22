// Shared country data - 31 countries used consistently across the application
export const sharedCountries = [
  // Ana Popüler Ülkeler
  {
    name: "Almanya",
    flag: "🇩🇪",
    type: "Schengen Vizesi",
    slug: "almanya-vizesi",
    image: "/almanya.avif",
    alt: "Brandenburg Gate in Berlin, Germany",
    order: 1
  },
  {
    name: "Fransa",
    flag: "🇫🇷",
    type: "Schengen Vizesi",
    slug: "fransa-vizesi",
    image: "/fransa.avif",
    alt: "Eiffel Tower in Paris, France",
    order: 2
  },
  {
    name: "Hollanda",
    flag: "🇳🇱",
    type: "Schengen Vizesi",
    slug: "hollanda-vizesi",
    image: "/hollanda.avif",
    alt: "Traditional Dutch windmills and tulip fields",
    order: 3
  },
  {
    name: "İspanya",
    flag: "🇪🇸",
    type: "Schengen Vizesi",
    slug: "ispanya-vizesi",
    image: "/ispanya.avif",
    alt: "Sagrada Familia in Barcelona, Spain",
    order: 4
  },
  {
    name: "İtalya",
    flag: "🇮🇹",
    type: "Schengen Vizesi",
    slug: "italya-vizesi",
    image: "/italya.avif",
    alt: "Colosseum in Rome, Italy",
    order: 5
  },
  {
    name: "Amerika",
    flag: "🇺🇸",
    type: "Turist Vizesi",
    slug: "amerika-vizesi",
    image: "/amerika.avif",
    alt: "Statue of Liberty in New York, USA",
    order: 6
  },
  {
    name: "İngiltere",
    flag: "🇬🇧",
    type: "UK Vizesi",
    slug: "ingiltere-vizesi",
    image: "/ingiltere.avif",
    alt: "Big Ben and London Bridge, United Kingdom",
    order: 7
  },
  {
    name: "Kanada",
    flag: "🇨🇦",
    type: "eTA & Vize",
    slug: "kanada-vizesi",
    image: "/kanada.avif",
    alt: "Lake Louise in Canadian Rockies",
    order: 8
  },

  // Yeni Eklenen Ülkeler
  {
    name: "İsviçre",
    flag: "🇨🇭",
    type: "Schengen Vizesi",
    slug: "isvicre-vizesi",
    image: "/isvicre.avif",
    alt: "Swiss Alps and Mountains",
    order: 9
  },
  {
    name: "Yunanistan",
    flag: "🇬🇷",
    type: "Schengen Vizesi",
    slug: "yunanistan-vizesi",
    image: "/yunanistan.avif",
    alt: "Santorini, Greece",
    order: 10
  },
  {
    name: "Avusturya",
    flag: "🇦🇹",
    type: "Schengen Vizesi",
    slug: "avusturya-vizesi",
    image: "/avusturya.avif",
    alt: "Vienna, Austria",
    order: 11
  },
  {
    name: "Belçika",
    flag: "🇧🇪",
    type: "Schengen Vizesi",
    slug: "belcika-vizesi",
    image: "/belcika.avif",
    alt: "Brussels, Belgium",
    order: 12
  },
  {
    name: "Portekiz",
    flag: "🇵🇹",
    type: "Schengen Vizesi",
    slug: "portekiz-vizesi",
    image: "/portekiz.avif",
    alt: "Lisbon, Portugal",
    order: 13
  },
  {
    name: "Danimarka",
    flag: "🇩🇰",
    type: "Schengen Vizesi",
    slug: "danimarka-vizesi",
    image: "/danimarka.avif",
    alt: "Copenhagen, Denmark",
    order: 14
  },
  {
    name: "Norveç",
    flag: "🇳🇴",
    type: "Schengen Vizesi",
    slug: "norvec-vizesi",
    image: "/norvec.avif",
    alt: "Norwegian Fjords",
    order: 15
  },
  {
    name: "İsveç",
    flag: "🇸🇪",
    type: "Schengen Vizesi",
    slug: "isvec-vizesi",
    image: "/isvec.avif",
    alt: "Stockholm, Sweden",
    order: 16
  },
  {
    name: "Finlandiya",
    flag: "🇫🇮",
    type: "Schengen Vizesi",
    slug: "finlandiya-vizesi",
    image: "/finlandia.avif",
    alt: "Helsinki, Finland",
    order: 17
  },
  {
    name: "Polonya",
    flag: "🇵🇱",
    type: "Schengen Vizesi",
    slug: "polonya-vizesi",
    image: "/polonya.avif",
    alt: "Krakow, Poland",
    order: 18
  },
  {
    name: "Çek Cumhuriyeti",
    flag: "🇨🇿",
    type: "Schengen Vizesi",
    slug: "cek-cumhuriyeti-vizesi",
    image: "/cek-cumhuriyeti.avif",
    alt: "Prague, Czech Republic",
    order: 19
  },
  {
    name: "Macaristan",
    flag: "🇭🇺",
    type: "Schengen Vizesi",
    slug: "macaristan-vizesi",
    image: "/macaristan.avif",
    alt: "Budapest, Hungary",
    order: 20
  },
  {
    name: "Romanya",
    flag: "🇷🇴",
    type: "Schengen Vizesi",
    slug: "romanya-vizesi",
    image: "/romanya.avif",
    alt: "Bucharest, Romania",
    order: 21
  },
  {
    name: "Bulgaristan",
    flag: "🇧🇬",
    type: "Schengen Vizesi",
    slug: "bulgaristan-vizesi",
    image: "/bulgaristan.avif",
    alt: "Sofia, Bulgaria",
    order: 22
  },
  {
    name: "Hırvatistan",
    flag: "🇭🇷",
    type: "Schengen Vizesi",
    slug: "hirvatistan-vizesi",
    image: "/hirvatistan.avif",
    alt: "Dubrovnik, Croatia",
    order: 23
  },
  {
    name: "Slovenya",
    flag: "🇸🇮",
    type: "Schengen Vizesi",
    slug: "slovenya-vizesi",
    image: "/slovenya.avif",
    alt: "Ljubljana, Slovenia",
    order: 24
  },
  {
    name: "Slovakya",
    flag: "🇸🇰",
    type: "Schengen Vizesi",
    slug: "slovakya-vizesi",
    image: "/slovakya.avif",
    alt: "Bratislava, Slovakia",
    order: 25
  },
  {
    name: "Litvanya",
    flag: "🇱🇹",
    type: "Schengen Vizesi",
    slug: "litvanya-vizesi",
    image: "/litvanya.avif",
    alt: "Vilnius, Lithuania",
    order: 26
  },
  {
    name: "Letonya",
    flag: "🇱🇻",
    type: "Schengen Vizesi",
    slug: "letonya-vizesi",
    image: "/letonya.avif",
    alt: "Riga, Latvia",
    order: 27
  },
  {
    name: "Estonya",
    flag: "🇪🇪",
    type: "Schengen Vizesi",
    slug: "estonya-vizesi",
    image: "/estonya.avif",
    alt: "Tallinn, Estonia",
    order: 28
  },
  {
    name: "Malta",
    flag: "🇲🇹",
    type: "Schengen Vizesi",
    slug: "malta-vizesi",
    image: "/malta.avif",
    alt: "Valletta, Malta",
    order: 29
  },
  {
    name: "Lüksemburg",
    flag: "🇱🇺",
    type: "Schengen Vizesi",
    slug: "luksemburg-vizesi",
    image: "/luksemburg.avif",
    alt: "Luxembourg City",
    order: 30
  },
  {
    name: "Lihtenştayn",
    flag: "🇱🇮",
    type: "Schengen Vizesi",
    slug: "lihtenstayn-vizesi",
    image: "/lihtenstayn.avif",
    alt: "Vaduz, Liechtenstein",
    order: 31
  }
];

export default sharedCountries;