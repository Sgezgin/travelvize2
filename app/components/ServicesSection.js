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
      image: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Brandenburg Gate in Berlin, Germany",
      order: 1
    },
    { 
      name: "Fransa", 
      flag: "🇫🇷", 
      type: "Schengen Vizesi", 
      slug: "fransa-vizesi",
      image: "https://images.unsplash.com/photo-1590767072824-a4424eca7038?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Eiffel Tower in Paris, France",
      order: 2
    },
    { 
      name: "Hollanda", 
      flag: "🇳🇱", 
      type: "Schengen Vizesi", 
      slug: "hollanda-vizesi",
      image: "https://images.unsplash.com/photo-1534351590666-13e3e96b5017?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Traditional Dutch windmills and tulip fields",
      order: 3
    },
    { 
      name: "İspanya", 
      flag: "🇪🇸", 
      type: "Schengen Vizesi", 
      slug: "ispanya-vizesi",
      image: "https://images.unsplash.com/photo-1539037116277-4db20889f2d4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Sagrada Familia in Barcelona, Spain",
      order: 4
    },
    { 
      name: "İtalya", 
      flag: "🇮🇹", 
      type: "Schengen Vizesi", 
      slug: "italya-vizesi",
      image: "https://images.unsplash.com/photo-1515542622106-78bda8ba0e5b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Colosseum in Rome, Italy",
      order: 5
    },
    { 
      name: "Amerika", 
      flag: "🇺🇸", 
      type: "Turist Vizesi", 
      slug: "amerika-vizesi",
      image: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Statue of Liberty in New York, USA",
      order: 6
    },
    { 
      name: "İngiltere", 
      flag: "🇬🇧", 
      type: "UK Vizesi", 
      slug: "ingiltere-vizesi",
      image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Big Ben and London Bridge, United Kingdom",
      order: 7
    },
    { 
      name: "Kanada", 
      flag: "🇨🇦", 
      type: "eTA & Vize", 
      slug: "kanada-vizesi",
      image: "https://images.unsplash.com/photo-1503614472-8c93d56e92ce?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Lake Louise in Canadian Rockies",
      order: 8
    },
    
    // Yeni Eklenen Ülkeler
    { 
      name: "İsviçre", 
      flag: "🇨🇭", 
      type: "Schengen Vizesi", 
      slug: "isvicre-vizesi",
      image: "https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Swiss Alps and Mountains",
      order: 9
    },
    { 
      name: "Yunanistan", 
      flag: "🇬🇷", 
      type: "Schengen Vizesi", 
      slug: "yunanistan-vizesi",
      image: "https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Santorini, Greece",
      order: 10
    },
    { 
      name: "Avusturya", 
      flag: "🇦🇹", 
      type: "Schengen Vizesi", 
      slug: "avusturya-vizesi",
      image: "https://images.unsplash.com/photo-1516550893923-42d28e5677af?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Vienna, Austria",
      order: 11
    },
    { 
      name: "Belçika", 
      flag: "🇧🇪", 
      type: "Schengen Vizesi", 
      slug: "belcika-vizesi",
      image: "https://images.unsplash.com/photo-1559564484-e48bf8aeeca1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Brussels, Belgium",
      order: 12
    },
    { 
      name: "Portekiz", 
      flag: "🇵🇹", 
      type: "Schengen Vizesi", 
      slug: "portekiz-vizesi",
      image: "https://images.unsplash.com/photo-1555881400-74d7acaacd8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Lisbon, Portugal",
      order: 13
    },
    { 
      name: "Danimarka", 
      flag: "🇩🇰", 
      type: "Schengen Vizesi", 
      slug: "danimarka-vizesi",
      image: "https://images.unsplash.com/photo-1513622470522-26c3c8a854bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Copenhagen, Denmark",
      order: 14
    },
    { 
      name: "Norveç", 
      flag: "🇳🇴", 
      type: "Schengen Vizesi", 
      slug: "norvec-vizesi",
      image: "https://images.unsplash.com/photo-1601439678777-b2b3c56fa627?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Norwegian Fjords",
      order: 15
    },
    { 
      name: "İsveç", 
      flag: "🇸🇪", 
      type: "Schengen Vizesi", 
      slug: "isvec-vizesi",
      image: "https://images.unsplash.com/photo-1509356843151-3e7d96241e11?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Stockholm, Sweden",
      order: 16
    },
    { 
      name: "Finlandiya", 
      flag: "🇫🇮", 
      type: "Schengen Vizesi", 
      slug: "finlandiya-vizesi",
      image: "https://images.unsplash.com/photo-1517721071472-e2d29e33adef?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Helsinki, Finland",
      order: 17
    },
    { 
      name: "Polonya", 
      flag: "🇵🇱", 
      type: "Schengen Vizesi", 
      slug: "polonya-vizesi",
      image: "https://images.unsplash.com/photo-1559628376-f3fe5f782a2e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Krakow, Poland",
      order: 18
    },
    { 
      name: "Çek Cumhuriyeti", 
      flag: "🇨🇿", 
      type: "Schengen Vizesi", 
      slug: "cek-cumhuriyeti-vizesi",
      image: "https://images.unsplash.com/photo-1541849546-216549ae216d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Prague, Czech Republic",
      order: 19
    },
    { 
      name: "Macaristan", 
      flag: "🇭🇺", 
      type: "Schengen Vizesi", 
      slug: "macaristan-vizesi",
      image: "https://images.unsplash.com/photo-1534239697798-120952767c38?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Budapest, Hungary",
      order: 20
    },
    { 
      name: "Romanya", 
      flag: "🇷🇴", 
      type: "Schengen Vizesi", 
      slug: "romanya-vizesi",
      image: "https://images.unsplash.com/photo-1557958114-7888ea8058fd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Bucharest, Romania",
      order: 21
    },
    { 
      name: "Bulgaristan", 
      flag: "🇧🇬", 
      type: "Schengen Vizesi", 
      slug: "bulgaristan-vizesi",
      image: "https://images.unsplash.com/photo-1565008576549-57569a49371d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Sofia, Bulgaria",
      order: 22
    },
    { 
      name: "Hırvatistan", 
      flag: "🇭🇷", 
      type: "Schengen Vizesi", 
      slug: "hirvatistan-vizesi",
      image: "https://images.unsplash.com/photo-1555990538-c3c6c7e0b499?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Dubrovnik, Croatia",
      order: 23
    },
    { 
      name: "Slovenya", 
      flag: "🇸🇮", 
      type: "Schengen Vizesi", 
      slug: "slovenya-vizesi",
      image: "https://images.unsplash.com/photo-1531218150217-54595bc2b934?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Ljubljana, Slovenia",
      order: 24
    },
    { 
      name: "Slovakya", 
      flag: "🇸🇰", 
      type: "Schengen Vizesi", 
      slug: "slovakya-vizesi",
      image: "https://images.unsplash.com/photo-1581193459975-4e8b970e2e42?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Bratislava, Slovakia",
      order: 25
    },
    { 
      name: "Litvanya", 
      flag: "🇱🇹", 
      type: "Schengen Vizesi", 
      slug: "litvanya-vizesi",
      image: "https://images.unsplash.com/photo-1596352914160-2b28f27b2de9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Vilnius, Lithuania",
      order: 26
    },
    { 
      name: "Letonya", 
      flag: "🇱🇻", 
      type: "Schengen Vizesi", 
      slug: "letonya-vizesi",
      image: "https://images.unsplash.com/photo-1580991735757-b8c7c8e5cd5b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Riga, Latvia",
      order: 27
    },
    { 
      name: "Estonya", 
      flag: "🇪🇪", 
      type: "Schengen Vizesi", 
      slug: "estonya-vizesi",
      image: "https://images.unsplash.com/photo-1526495124232-a04e1849168c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Tallinn, Estonia",
      order: 28
    },
    { 
      name: "Malta", 
      flag: "🇲🇹", 
      type: "Schengen Vizesi", 
      slug: "malta-vizesi",
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Valletta, Malta",
      order: 29
    },
    { 
      name: "Lüksemburg", 
      flag: "🇱🇺", 
      type: "Schengen Vizesi", 
      slug: "luksemburg-vizesi",
      image: "https://images.unsplash.com/photo-1585208798174-6cedd86e019a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Luxembourg City",
      order: 30
    },
    { 
      name: "Lihtenştayn", 
      flag: "🇱🇮", 
      type: "Schengen Vizesi", 
      slug: "lihtenstayn-vizesi",
      image: "https://images.unsplash.com/photo-1605721911519-3dfeb3be25e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Vaduz, Liechtenstein",
      order: 31
    },
  ];

  // Sıralamaya göre sırala
  const sortedServices = [...services].sort((a, b) => a.order - b.order);

  return (
    <section id="hizmetler" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 rounded-full mb-6">
            <span className="w-2 h-2 bg-blue-500 rounded-full mr-2 animate-pulse"></span>
            <span className="text-blue-600 text-sm font-medium">31 Ülke</span>
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