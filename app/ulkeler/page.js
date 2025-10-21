'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from "next/image";
import { Search, MapPin, Calendar, Clock, Users, FileText } from 'lucide-react';
import MobileNavigation from '../components/MobileNavigation';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';

// Country data from ServicesSection
const countries = [
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

export default function CountriesPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredCountries, setFilteredCountries] = useState(countries);

  useEffect(() => {
    const filtered = countries.filter(country =>
      country.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredCountries(filtered);
  }, [searchTerm]);

  return (
    <div className="min-h-screen bg-white">
      {/* Modern Navigation Header - Same as Homepage but without icons */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-lg border-b border-white/20 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo Section */}
            <div className="flex-shrink-0 group">
              <div className="relative overflow-hidden rounded-xl">
                <Image
                  src="/travel.png"
                  alt="TravelVize Logo"
                  width={160}
                  height={45}
                  className="h-54 w-auto transition-transform duration-300 group-hover:scale-105"
                  priority
                />
              </div>
            </div>

            {/* Desktop Navigation - Without Icons */}
            <nav className="hidden md:flex items-center space-x-1">
              {[
                { href: '/', label: 'Anasayfa' },
                { href: '/#hizmetler', label: 'Hizmetler' },
                { href: '/#hakkimizda', label: 'Hakkımızda' },
                { href: '/#iletisim', label: 'İletişim' }
              ].map((item, index) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="group relative px-4 py-2 rounded-xl text-gray-700 hover:text-blue-600 font-medium transition-all duration-300 hover:bg-blue-50/50"
                >
                  <span className="text-sm group-hover:scale-110 transition-transform duration-300">{item.label}</span>
                  <div className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-indigo-500 group-hover:w-full group-hover:left-0 transition-all duration-300 rounded-full"></div>
                </a>
              ))}
            </nav>

            {/* Contact Info & CTA */}
            <div className="hidden md:flex items-center space-x-6">
              {/* Phone Number */}
              <div className="flex items-center space-x-2 text-gray-600 group">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center group-hover:bg-green-200 transition-colors duration-300">
                  <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <a href="tel:+902122259700" className="text-sm font-medium hover:text-blue-600 transition-colors">
                  0212 225 97 00
                </a>
              </div>

              {/* CTA Button */}
              <a
                href="/#iletisim"
                className="group relative bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-3 rounded-xl hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 overflow-hidden"
              >
                <span className="relative z-10 flex items-center space-x-2">
                  <span>Sizi Arayalım</span>
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-indigo-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <MobileNavigation />
          </div>
        </div>

        {/* Header bottom accent line */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-30"></div>
      </header>

      {/* Main Content - Adjusted for fixed header */}
      <main className="pt-20">
        {/* Header Section */}
        <div className="bg-gradient-to-r from-blue-800 to-indigo-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Ülke Vize Bilgileri</h1>
              <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-10">
                Profesyonel vize danışmanlık hizmeti ile 30+ ülkeden detaylı vize bilgileri, başvuru süreçleri ve gerekli belgeler
              </p>

              {/* Search Bar */}
              <div className="max-w-2xl mx-auto relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  placeholder="Ülke ara..."
                  className="block w-full pl-10 pr-3 py-4 border border-transparent rounded-xl bg-white/10 backdrop-blur-sm text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        {/* <div className="bg-white shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="flex items-center">
                <div className="flex-shrink-0 bg-blue-100 p-3 rounded-lg">
                  <MapPin className="h-6 w-6 text-blue-600" />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-500">Toplam Ülke</p>
                  <p className="text-2xl font-bold text-gray-900">{countries.length}</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="flex-shrink-0 bg-green-100 p-3 rounded-lg">
                  <FileText className="h-6 w-6 text-green-600" />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-500">Vize Türü</p>
                  <p className="text-2xl font-bold text-gray-900">15+</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="flex-shrink-0 bg-purple-100 p-3 rounded-lg">
                  <Users className="h-6 w-6 text-purple-600" />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-500">Danışman</p>
                  <p className="text-2xl font-bold text-gray-900">25+</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="flex-shrink-0 bg-amber-100 p-3 rounded-lg">
                  <Clock className="h-6 w-6 text-amber-600" />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-500">Ort. Süreç</p>
                  <p className="text-2xl font-bold text-gray-900">7 Gün</p>
                </div>
              </div>
            </div>
          </div>
        </div> */}

        {/* Countries Grid - Corporate Design */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              {filteredCountries.length} Ülke Bulundu
            </h2>
            <p className="text-gray-600">
              Detaylı vize bilgileri için ülkeye tıklayın
            </p>
          </div>

          {filteredCountries.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">Aradığınız kriterlere uygun ülke bulunamadı.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {filteredCountries.map((country, index) => (
                <Link
                  key={index}
                  href={`/ulkeler/${country.slug}`}
                  className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group hover:-translate-y-1"
                >
                  {/* Country Image Background */}
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={country.image}
                      alt={country.alt}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-300"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="flex items-center space-x-2">
                        <span className="text-3xl">{country.flag}</span>
                        <h3 className="font-bold text-xl text-white">{country.name}</h3>
                      </div>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-6">
                    <p className="text-gray-600 mb-4 text-sm">{country.type}</p>
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
          )}
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Vize Başvurunuzda Yardıma mı İhtiyacınız Var?</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Profesyonel danışmanlarımız başvuru sürecinizi yönetsin, belgelerinizi hazırlasın ve vizenizi almanıza yardımcı olsun.
            </p>
            <Link
              href="/#iletisim"
              className="inline-block bg-white text-blue-600 font-bold px-8 py-4 rounded-xl hover:bg-gray-100 transition-colors duration-300 shadow-lg"
            >
              Sizi Arayalım
            </Link>
          </div>
        </div>
      </main>

      {/* Footer - Same as Homepage */}
      <Footer />

      {/* WhatsApp Button - Same as Homepage */}
      <WhatsAppButton />
    </div>
  );
}