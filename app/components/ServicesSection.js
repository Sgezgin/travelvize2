import Image from 'next/image';

export default function ServicesSection() {
  const services = [
    { 
      name: "Almanya", 
      flag: "🇩🇪", 
      type: "Schengen Vizesi", 
      image: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Brandenburg Gate in Berlin, Germany"
    },
    { 
      name: "Fransa", 
      flag: "🇫🇷", 
      type: "Schengen Vizesi", 
      image: "https://images.unsplash.com/photo-1590767072824-a4424eca7038?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Eiffel Tower in Paris, France"
    },
    { 
      name: "Hollanda", 
      flag: "🇳🇱", 
      type: "Schengen Vizesi", 
      image: "https://images.unsplash.com/photo-1534351590666-13e3e96b5017?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Traditional Dutch windmills and tulip fields"
    },
    { 
      name: "İspanya", 
      flag: "🇪🇸", 
      type: "Schengen Vizesi", 
      image: "https://images.unsplash.com/photo-1539037116277-4db20889f2d4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Sagrada Familia in Barcelona, Spain"
    },
    { 
      name: "İtalya", 
      flag: "🇮🇹", 
      type: "Schengen Vizesi", 
      image: "https://images.unsplash.com/photo-1515542622106-78bda8ba0e5b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Colosseum in Rome, Italy"
    },
    { 
      name: "Amerika", 
      flag: "🇺🇸", 
      type: "Turist Vizesi", 
      image: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Statue of Liberty in New York, USA"
    },
    { 
      name: "İngiltere", 
      flag: "🇬🇧", 
      type: "UK Vizesi", 
      image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Big Ben and London Bridge, United Kingdom"
    },
    { 
      name: "Kanada", 
      flag: "🇨🇦", 
      type: "eTA & Vize", 
      image: "https://images.unsplash.com/photo-1503614472-8c93d56e92ce?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Lake Louise in Canadian Rockies"
    },
  ];

  return (
    <section id="hizmetler" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Vize Hizmetlerimiz
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Dünya genelindeki ülkeler için profesyonel vize danışmanlık hizmetleri sunuyoruz
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group hover:-translate-y-1">
              {/* Country Image Background */}
              <div className="relative h-48 overflow-hidden group-hover:scale-105 transition-transform duration-300">
                <Image
                  src={service.image}
                  alt={service.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-opacity-20 group-hover:bg-opacity-10 transition-all duration-300"></div>
                {/* Flag overlay */}
                {/* <div className="absolute top-4 right-4 bg-white bg-opacity-90 rounded-full p-2">
                  <span className="text-2xl">{service.flag}</span>
                </div> */}
              </div>
              
              {/* Card Content */}
              <div className="p-6 text-center">
                <h3 className="font-bold text-xl text-gray-900 mb-2">{service.name}</h3>
                <p className="text-gray-600 mb-4">{service.type}</p>
                <div className="flex items-center justify-center space-x-2 text-blue-600">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                  <span className="text-sm font-semibold">Detaylar</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}