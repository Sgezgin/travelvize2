import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';

// Ülke verilerini import edin (ayrı bir dosyada oluşturacağız)
const countryData = {
  'almanya-vizesi': {
    name: 'Almanya',
    flag: '🇩🇪',
    title: 'Almanya Vizesi',
    subtitle: 'Almanya Schengen Vizesi Başvurusu ve Detaylı Bilgiler',
    image: 'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
    description: 'Almanya, Avrupa\'nın en gelişmiş ekonomilerinden birine sahip olan ve her yıl milyonlarca turisti ağırlayan önemli bir destinasyondur.',
    visaType: 'Schengen Vizesi',
    processingTime: '15-30 gün',
    validityPeriod: '90 güne kadar',
    entryType: 'Tek veya Çok Girişli',
    sections: [
      {
        title: 'Gerekli Belgeler',
        icon: '📄',
        content: [
          'Pasaport (en az 6 ay geçerli)',
          'Vize başvuru formu (doldurulmuş ve imzalanmış)',
          'Biyometrik fotoğraf (2 adet)',
          'Seyahat sağlık sigortası (minimum 30.000 Euro)',
          'Uçak bileti rezervasyonu',
          'Otel rezervasyonu veya davetiye mektubu',
          'Mali durum belgesi (banka hesap özeti)',
          'İş yerinden izin belgesi veya öğrenci belgesi',
        ]
      },
      {
        title: 'Başvuru Süreci',
        icon: '⚙️',
        content: [
          'Online randevu alın',
          'Gerekli belgeleri hazırlayın',
          'Vize başvuru merkezine gidin',
          'Biyometrik verilerinizi verin',
          'Başvuru ücretini ödeyin',
          'Başvurunuzu takip edin',
          'Pasaportunuzu teslim alın',
        ]
      },
      {
        title: 'Önemli Bilgiler',
        icon: '⚠️',
        content: [
          'Schengen vizesi 26 Avrupa ülkesinde geçerlidir',
          'Başvuru randevusu önceden alınmalıdır',
          'Vize ücreti iade edilmez',
          'Eksik evrak başvurunun reddine neden olabilir',
          'Başvuru sonucu garanti edilemez',
          'Ek belge istenmesi durumunda süre uzayabilir',
        ]
      }
    ],
    fees: {
      adult: '80 EUR',
      child: '40 EUR (6-12 yaş)',
      service: 'Danışmanlık ücreti ayrıca hesaplanır'
    },
    faqs: [
      {
        question: 'Almanya vizesi kaç günde çıkar?',
        answer: 'Normal şartlarda Almanya vizesi 15-30 gün içinde sonuçlanır. Ancak yoğun dönemlerde bu süre uzayabilir.'
      },
      {
        question: 'Schengen vizesi hangi ülkelerde geçerlidir?',
        answer: 'Schengen vizesi 26 Avrupa ülkesinde geçerlidir: Almanya, Fransa, İtalya, İspanya ve daha fazlası.'
      },
      {
        question: 'Vize başvurusu için randevu almak zorunlu mu?',
        answer: 'Evet, Almanya vize başvurusu için mutlaka önceden randevu almanız gerekmektedir.'
      },
      {
        question: 'Vize ücreti ne kadar?',
        answer: 'Yetişkinler için 80 EUR, 6-12 yaş arası çocuklar için 40 EUR vize ücreti bulunmaktadır.'
      }
    ]
  },
  // Diğer ülkeler için de benzer yapı eklenecek
  'fransa-vizesi': {
    name: 'Fransa',
    flag: '🇫🇷',
    title: 'Fransa Vizesi',
    subtitle: 'Fransa Schengen Vizesi Başvurusu ve Detaylı Bilgiler',
    image: 'https://images.unsplash.com/photo-1590767072824-a4424eca7038?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0',
    // ... benzer içerik
  },
  // Tüm ülkeler için data eklenecek...
};

// Tüm ülke slug'larını generate et
export async function generateStaticParams() {
  return Object.keys(countryData).map((slug) => ({
    slug: slug,
  }));
}

// Metadata için
export async function generateMetadata({ params }) {
  const country = countryData[params.slug];
  
  if (!country) {
    return {
      title: 'Ülke Bulunamadı | TravelVize',
    };
  }

  return {
    title: `${country.title} | TravelVize Danışmanlık`,
    description: country.subtitle,
  };
}

export default function CountryPage({ params }) {
  const country = countryData[params.slug];
  
  if (!country) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative h-[400px] overflow-hidden">
        <Image
          src={country.image}
          alt={country.name}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-indigo-900/80"></div>
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="flex items-center space-x-4 mb-4">
              <span className="text-6xl">{country.flag}</span>
              <div>
                <h1 className="text-4xl lg:text-5xl font-bold text-white mb-2">
                  {country.title}
                </h1>
                <p className="text-xl text-white/90">{country.subtitle}</p>
              </div>
            </div>
            <div className="flex flex-wrap gap-4 mt-6">
              <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-lg text-white">
                <span className="font-semibold">Vize Türü:</span> {country.visaType}
              </div>
              <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-lg text-white">
                <span className="font-semibold">İşlem Süresi:</span> {country.processingTime}
              </div>
              <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-lg text-white">
                <span className="font-semibold">Geçerlilik:</span> {country.validityPeriod}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Breadcrumb */}
      <div className="bg-gray-50 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center space-x-2 text-sm">
            <Link href="/" className="text-gray-600 hover:text-blue-600">Anasayfa</Link>
            <span className="text-gray-400">/</span>
            <Link href="/#hizmetler" className="text-gray-600 hover:text-blue-600">Ülkeler</Link>
            <span className="text-gray-400">/</span>
            <span className="text-gray-900 font-medium">{country.name}</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Description */}
            <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                {country.name} Vizesi Hakkında
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                {country.description}
              </p>
            </div>

            {/* Sections */}
            {country.sections.map((section, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-8 mb-8">
                <div className="flex items-center space-x-3 mb-6">
                  <span className="text-4xl">{section.icon}</span>
                  <h2 className="text-2xl font-bold text-gray-900">
                    {section.title}
                  </h2>
                </div>
                <ul className="space-y-3">
                  {section.content.map((item, idx) => (
                    <li key={idx} className="flex items-start space-x-3">
                      <svg className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {/* FAQs */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Sıkça Sorulan Sorular
              </h2>
              <div className="space-y-4">
                {country.faqs.map((faq, index) => (
                  <div key={index} className="border-b border-gray-200 pb-4 last:border-0">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {faq.question}
                    </h3>
                    <p className="text-gray-600">
                      {faq.answer}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* CTA Card */}
            <div className="bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl p-8 text-white mb-6 sticky top-6">
              <h3 className="text-2xl font-bold mb-4">
                Ücretsiz Danışmanlık
              </h3>
              <p className="mb-6 opacity-90">
                Vize başvurunuz için profesyonel destek alın. Size özel çözümler sunuyoruz.
              </p>
              <Link 
                href="/#iletisim"
                className="block w-full bg-white text-blue-600 text-center py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300 mb-4"
              >
                Hemen Başvur
              </Link>
              <a 
                href="https://wa.me/905332799080"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-full bg-green-500 text-white py-3 rounded-lg font-semibold hover:bg-green-600 transition-colors duration-300"
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                </svg>
                WhatsApp ile İletişim
              </a>
            </div>

            {/* Fees Card */}
            <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Vize Ücretleri
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center py-2 border-b">
                  <span className="text-gray-600">Yetişkin</span>
                  <span className="font-semibold text-gray-900">{country.fees.adult}</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b">
                  <span className="text-gray-600">Çocuk (6-12 yaş)</span>
                  <span className="font-semibold text-gray-900">{country.fees.child}</span>
                </div>
                <div className="pt-2">
                  <p className="text-sm text-gray-500">{country.fees.service}</p>
                </div>
              </div>
            </div>

            {/* Quick Info Card */}
            <div className="bg-blue-50 rounded-xl p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Hızlı Bilgi
              </h3>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <svg className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <p className="font-semibold text-gray-900">İşlem Süresi</p>
                    <p className="text-sm text-gray-600">{country.processingTime}</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <svg className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <p className="font-semibold text-gray-900">Geçerlilik Süresi</p>
                    <p className="text-sm text-gray-600">{country.validityPeriod}</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <svg className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                  <div>
                    <p className="font-semibold text-gray-900">Giriş Türü</p>
                    <p className="text-sm text-gray-600">{country.entryType}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Related Countries */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Diğer Popüler Ülkeler
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { name: 'Fransa', slug: 'fransa-vizesi', flag: '🇫🇷' },
              { name: 'İtalya', slug: 'italya-vizesi', flag: '🇮🇹' },
              { name: 'İspanya', slug: 'ispanya-vizesi', flag: '🇪🇸' },
              { name: 'Hollanda', slug: 'hollanda-vizesi', flag: '🇳🇱' },
            ].filter(c => c.slug !== params.slug).map((relatedCountry, index) => (
              <Link
                key={index}
                href={`/ulkeler/${relatedCountry.slug}`}
                className="group bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="text-center">
                  <span className="text-5xl mb-3 block group-hover:scale-110 transition-transform duration-300">
                    {relatedCountry.flag}
                  </span>
                  <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                    {relatedCountry.name}
                  </h3>
                  <p className="text-sm text-gray-600 mt-1">Schengen Vizesi</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}