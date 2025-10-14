import Image from 'next/image';
import Link from 'next/link';

export default function ServicesSection() {
  const services = [
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
    },
    {
      name: "Birleşik Arap Emirlikleri (Dubai)",
      flag: "🇦🇪",
      type: "Vize",
      slug: "dubai-vizesi",
      image: "/dubai.avif",
      alt: "Dubai, Birleşik Arap Emirlikleri",
      order: 32
    },
    {
      name: "Cezayir",
      flag: "🇩🇿",
      type: "Vize",
      slug: "cezayir-vizesi",
      image: "/cezayir.avif",
      alt: "Cezayir, Cezayir",
      order: 33
    },
    {
      name: "Çin",
      flag: "🇨🇳",
      type: "Vize",
      slug: "cin-vizesi",
      image: "/cin.avif",
      alt: "Pekin, Çin",
      order: 34
    },
    {
      name: "İrlanda",
      flag: "🇮🇪",
      type: "Vize",
      slug: "irlanda-vizesi",
      image: "/irlanda.avif",
      alt: "Dublin, İrlanda",
      order: 35
    },
    {
      name: "Meksika",
      flag: "🇲🇽",
      type: "Vize",
      slug: "meksika-vizesi",
      image: "/meksika.avif",
      alt: "Meksiko, Meksika",
      order: 36
    }
  ];

  // Sıralamaya göre sırala
  const sortedServices = [...services].sort((a, b) => a.order - b.order);

  return (
    <section id="hizmetler" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 rounded-full mb-6">
            <span className="w-2 h-2 bg-blue-500 rounded-full mr-2 animate-pulse"></span>
            <span className="text-blue-800 text-sm font-medium">31 Ülke</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Vize Hizmetlerimiz
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Dünya genelindeki ülkeler için profesyonel vize danışmanlık hizmetleri sunuyoruz
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {sortedServices.map((service, index) => (
            <Link
              key={index}
              href={`/ulkeler/${service.slug}`}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group hover:-translate-y-1"
            >
              {/* Country Image Background */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.alt}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex items-center space-x-2">
                    <span className="text-3xl">{service.flag}</span>
                    <h3 className="font-bold text-xl text-white">{service.name}</h3>
                  </div>
                </div>
              </div>

              {/* Card Content */}
              <div className="p-6">
                <p className="text-gray-600 mb-4 text-sm">{service.type}</p>
                <div className="flex items-center justify-between text-blue-600">
                  <span className="text-sm font-semibold">Detaylı Bilgi</span>
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* İletişim CTA */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Aradığınız Ülkeyi Bulamadınız mı?</h3>
            <p className="text-lg mb-6 opacity-90">Size özel vize danışmanlığı için bizimle iletişime geçin</p>
            <a
              href="#iletisim"
              className="inline-block bg-white text-blue-600 px-8 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-colors duration-300"
            >
              Bize Ulaşın
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}