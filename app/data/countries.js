// data/countries.js
// Tüm ülke verilerini bu dosyada saklayın

export const countryData = {
 'almanya-vizesi': {
    name: 'Almanya',
    flag: '🇩🇪',
    title: 'Almanya Vizesi',
    subtitle: 'Almanya Schengen Vizesi Başvurusu ve Detaylı Bilgiler',
    image: 'https://images.unsplash.com/photo-1467269204594-9661b134dd2b',
    
    // Ana açıklama
    description: 'Almanya vizesi başvurusu için doğru ve eksiksiz evrak hazırlamanız çok önemli. Vize türleri arasında turistik, iş, aile veya arkadaş ziyareti, kültürel etkinlikler, sağlık, eğitim gibi seçenekler bulunuyor. Unutmayın ki, 6 aylık süre zarfında en fazla 90 gün kalış hakkınız var.',
    
    visaType: 'Schengen Vizesi',
    processingTime: '10-15 iş günü',
    validityPeriod: '90 güne kadar (6 aylık dönemde)',
    entryType: 'Tek veya Çok Girişli',
    
    // Detaylı bölümler
    sections: [
      {
        title: 'Almanya Vizesi Nasıl Alınır?',
        icon: '📋',
        content: [
          'Almanya vize başvuruları, vize başvuru merkezi aracılığıyla randevu alınarak yapılmaktadır.',
          'Gerekli evraklar, konsolosluğun talep ettiği şekilde hazırlanır ve başvuru merkezine teslim edilir.',
          'Aile veya arkadaş ziyareti için, Almanya\'daki belediyeden onaylı davetiye gereklidir.',
          'İş amaçlı seyahatler için, Almanya\'daki firmanın antetli kağıdına yazılmış davet mektubu gerekir.',
          'Turistik ve aile ziyareti başvurularının işlem süresi ortalama 10-15 iş günüdür.',
        ]
      },
      {
        title: 'Almanya Turistik Vize',
        icon: '✈️',
        content: [
          'En fazla 90 gün konaklama imkanı sunar',
          'İstanbul, Ankara, İzmir, Bursa ve Gaziantep ofislerinden başvuru yapılabilir',
          'Schengen vizesi kapsamında diğer Schengen ülkelerine de serbest dolaşım hakkı tanır',
          'Resmi ikamet adresi ve iş yeri kayıtları dikkate alınır',
        ]
      },
      {
        title: 'Almanya Ticari Vize',
        icon: '💼',
        content: [
          'Mutlaka ticari davetiye temin edilmelidir',
          'Davetiye, davet eden kurumun antetli kağıdına yazılmalıdır',
          'Pasaport bilgileri, seyahat tarihleri, konaklama ve ulaşım bilgileri içermelidir',
          'Fuar katılımı, iş görüşmeleri veya kurumsal ticari görüşmeler için geçerlidir',
          'İşlem süresi genellikle 10-12 iş günüdür',
        ]
      },
      {
        title: 'Gerekli Belgeler - Çalışanlar İçin',
        icon: '📄',
        content: [
          'Pasaport (en az 6 ay geçerli, varsa eski pasaportlar)',
          '2 adet biyometrik fotoğraf (3,5 x 4,5 cm)',
          'İş yerinden izin dilekçesi (antetli, ıslak imzalı ve kaşeli)',
          'İşe giriş bildirgesi (E-devlet barkodlu)',
          'SGK tescil ve hizmet dökümü (E-devlet barkodlu)',
          'İş yeri evrakları (Vergi levhası, Oda kayıt, Faaliyet belgesi, İmza sirküleri)',
          'Son 3 aylık maaş bordrosu (ıslak imzalı ve kaşeli)',
          'Son 3 aylık banka hesap dökümü (60.000 TL bakiye, ıslak imza kaşeli)',
          'Tapu-ruhsat fotokopisi (varsa)',
          'Kimlik fotokopisi',
          'Vukuatlı nüfus kayıt örneği (E-devlet barkodlu)',
          'Yerleşim yeri belgesi (E-devlet barkodlu)',
        ]
      },
      {
        title: 'Gerekli Belgeler - İşverenler İçin',
        icon: '🏢',
        content: [
          'Vergi levhası fotokopisi',
          'Oda kayıt Faaliyet belgesi ORJİNAL (6 aydan eski olmamalı)',
          'İmza sirküleri fotokopisi',
          'Ticaret sicil gazetesi fotokopisi',
          'Son 3 aylık banka hesap dökümü (60.000 TL bakiye)',
          'Tapu-ruhsat fotokopileri (varsa)',
          'Kimlik fotokopisi',
          'Vukuatlı nüfus kayıt örneği',
          'Yerleşim yeri belgesi',
          'Vize talep dilekçesi (antetli, imzalı ve kaşeli)',
        ]
      },
      {
        title: 'Gerekli Belgeler - Emekliler İçin',
        icon: '👴',
        content: [
          'Emekli aylık belgesi',
          'Son 3 aylık banka hesap dökümü (60.000 TL bakiye)',
          'Tapu-ruhsat fotokopileri (varsa)',
          'Kimlik fotokopisi',
          'Vukuatlı nüfus kayıt örneği',
          'Yerleşim yeri belgesi',
        ]
      },
      {
        title: 'Gerekli Belgeler - Öğrenciler İçin',
        icon: '🎓',
        content: [
          'Garantör kişinin evrakları',
          'Öğrenci belgesi (E-devlet barkodlu)',
          'Sponsora ait 3 aylık banka hesap dökümü (60.000 TL bakiye)',
          'Tapu-ruhsat fotokopileri (varsa)',
          'Kimlik fotokopisi',
          'Vukuatlı nüfus kayıt örneği',
          'Yerleşim yeri belgesi',
        ]
      },
      {
        title: 'Parmak İzi İşlemi',
        icon: '👆',
        content: [
          'Son 59 ay içinde Schengen vizesi almadıysanız parmak izi zorunludur',
          'İlk başvurularda mutlaka başvuru merkezinde bulunmanız gerekir',
          'Son 59 ay içinde vize aldıysanız ve VIS ibaresi varsa parmak izi gerekmez',
          'Danışmanlarımız sizi başvuru merkezinde karşılar ve işlemleri gerçekleştirir',
        ]
      },
      {
        title: 'Vize Reddi Durumunda',
        icon: '⚠️',
        content: [
          'Ret mektubu 16 maddeden oluşur ve ret sebebi belirtilir',
          'Seyahat amacının inandırıcı bulunmaması ret nedeni olabilir',
          'Risk teşkil eden durumlar veya bağlayıcı sebeplerin yetersizliği',
          'Berlin İdare Mahkemesi\'ne (Verwaltungsgericht Berlin) itiraz edilebilir',
          'İtiraz için adres: Kirchstr. 7, 10557 Berlin, +49 (0) 30 9014-8790',
          'İtiraz sırasında kanıtlayıcı belgeler sunulmalıdır',
        ]
      },
    ],
    
    fees: {
      adult: '80 EUR',
      child: '40 EUR (6-12 yaş)',
      service: 'Konsolosluk, koordinasyon, danışmanlık ücretleri dahil'
    },
    
    faqs: [
      {
        question: 'Almanya vizesi nasıl alınır?',
        answer: 'Almanya vize başvuruları, vize başvuru merkezi aracılığıyla randevu alınarak yapılır. Gerekli evraklar konsolosluğun talep ettiği şekilde hazırlanır ve başvuru merkezine teslim edilir.'
      },
      {
        question: 'Almanya vizesi kaç günde sonuçlanır?',
        answer: 'Turistik ve aile ziyareti başvuruları 10-15 iş günü, ticari vize başvuruları 10-12 iş günü içinde sonuçlanır. Seyahatinizden en az 1 ay önce başvuru yapmanız önerilir.'
      },
      {
        question: 'Almanya vize ücreti ne kadar?',
        answer: 'Vize ücreti 80 EUR (yetişkin) ve 40 EUR (6-12 yaş çocuk) olup, konsolosluk, koordinasyon, başvuru formu, evrak hazırlama, takip ve danışmanlık ücretlerini kapsar.'
      },
      {
        question: 'Almanya vize başvurusu için benim gelmem gerekiyor mu?',
        answer: 'Son 59 ay içinde Schengen vizesi almadıysanız veya ilk kez başvuruyorsanız parmak izi vermek için başvuru merkezinde bulunmanız gerekir. VIS ibareli vizeniz varsa gelmenize gerek yoktur.'
      },
      {
        question: 'Almanya vize reddinde ne yapmalıyım?',
        answer: 'Vize reddedilirse, ret mektubu ile sebep belirtilir. Berlin İdare Mahkemesi\'ne itiraz edebilir veya eksiklikleri giderip yeniden başvurabilirsiniz.'
      },
      {
        question: 'Schengen vizesi hangi ülkelerde geçerlidir?',
        answer: 'Almanya Schengen vizesi ile 26 Schengen ülkesine seyahat edebilirsiniz: Almanya, Fransa, İtalya, İspanya, Hollanda, Belçika, Avusturya, İsviçre, Yunanistan, Portekiz ve diğerleri.'
      },
    ],
    
    // Ek bilgiler
    additionalInfo: {
      about: {
        title: 'Almanya Hakkında Genel Bilgiler',
        content: 'Almanya, Orta Avrupa\'da bulunan ve Avrupa Birliği\'nin en büyük ekonomisine sahip ülkedir. Başkenti Berlin olup, yaklaşık 83 milyon nüfusa sahiptir. Güçlü sanayisi, otomotiv, mühendislik ve kimya sektörlerinde öne çıkar.'
      },
      places: {
        title: 'Almanya\'da Gezilecek Yerler',
        locations: [
          {
            city: 'Berlin',
            attractions: ['Berlin Duvarı', 'Brandenburg Kapısı', 'Reichstag']
          },
          {
            city: 'Münih',
            attractions: ['Marienplatz', 'Oktoberfest', 'Nymphenburg Sarayı']
          },
          {
            city: 'Hamburg',
            attractions: ['Speicherstadt', 'Elbphilharmonie', 'Hamburg Limanı']
          },
          {
            city: 'Köln',
            attractions: ['Köln Katedrali', 'Rhein Nehri']
          },
          {
            city: 'Frankfurt',
            attractions: ['Römer', 'Main Kulesi', 'Palmengarten']
          },
        ]
      },
      consulates: {
        title: 'Almanya Konsoloslukları',
        locations: [
          { city: 'Ankara', address: 'PK 54, Çankaya, 06552 Ankara' },
          { city: 'İstanbul', address: 'PK 6, 34431 Beyoğlu, İstanbul' },
          { city: 'İzmir', address: 'Havuzbaşı Sok. No. 1, 35330 Balçova, İzmir' },
          { city: 'Antalya', address: 'Başkonsolosluk' },
          { city: 'Bursa', address: 'Fahri Konsolosluk' },
        ]
      }
    }
  },

  'fransa-vizesi': {
    name: 'Fransa',
    flag: '🇫🇷',
    title: 'Fransa Vizesi',
    subtitle: 'Fransa Schengen Vizesi Başvurusu ve Detaylı Bilgiler',
    image: 'https://images.unsplash.com/photo-1590767072824-a4424eca7038?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0',
    description: 'Fransa, dünyanın en çok ziyaret edilen ülkesidir. Paris, Fransız Rivierası, şarap bölgeleri ve tarihi şatoları ile her yıl milyonlarca turisti ağırlayan Fransa, Schengen vizesi ile kolayca ziyaret edilebilir.',
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
          'Vize başvuru formu (Fransızca veya İngilizce)',
          'Biyometrik fotoğraf (2 adet)',
          'Seyahat sağlık sigortası (minimum 30.000 Euro)',
          'Uçak bileti rezervasyonu',
          'Otel rezervasyonu veya konaklamalık belgesi',
          'Banka hesap özeti (son 3 ay)',
          'İş yeri belgesi veya öğrenci belgesi',
          'Seyahat planı ve itinerary',
        ]
      },
      {
        title: 'Başvuru Süreci',
        icon: '⚙️',
        content: [
          'Online randevu alın (France-Visas portalı)',
          'Belgeleri hazırlayın',
          'VFS Global veya TLScontact\'a gidin',
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
          'Fransa Schengen bölgesinin en büyük ülkelerinden biridir',
          'Turizm, iş ve aile ziyareti için ayrı evraklar gerekir',
          'Davetiyelerin noter onaylı olması önerilir',
          'Konsolosluk ek belge talep edebilir',
          'Vize görüşmesi istenebilir',
          'Red durumunda itiraz süresi 2 aydır',
        ]
      }
    ],
    fees: {
      adult: '80 EUR',
      child: '40 EUR (6-12 yaş)',
      service: 'Hizmet bedeli ve danışmanlık ücreti ayrıca hesaplanır'
    },
    faqs: [
      {
        question: 'Fransa vizesi için hangi belgeleri Fransızca çevirmem gerekir?',
        answer: 'Genel olarak İngilizce belgeler kabul edilir, ancak bazı resmi evrakların (nüfus kayıt, medeni durum belgesi gibi) Fransızca veya İngilizce tercümeli olması istenebilir.'
      },
      {
        question: 'Fransa vizesi ile başka Schengen ülkelerine gidebilir miyim?',
        answer: 'Evet, Fransa vizesi ile tüm Schengen bölgesinde seyahat edebilirsiniz. Ancak başvuruyu yaptığınız ülkede en uzun süre konaklayacağınız yer olmalıdır.'
      },
      {
        question: 'Fransa vize başvurusu için randevu ne kadar sürede alınır?',
        answer: 'Normal dönemlerde 1-2 hafta içinde randevu alınabilir. Yaz aylarında yoğunluk nedeniyle bu süre 3-4 haftaya kadar çıkabilir.'
      },
      {
        question: 'VFS Global ve TLScontact arasında fark nedir?',
        answer: 'İkisi de Fransa konsolosluğu adına vize başvuruları kabul eden resmi kuruluşlardır. Başvuru yapacağınız şehre göre değişiklik gösterir.'
      }
    ]
  },

  'kanada-vizesi': {
    name: 'Kanada',
    flag: '🇨🇦',
    title: 'Kanada Vizesi',
    subtitle: 'Kanada eTA ve Turist Vizesi Başvurusu',
    image: 'https://images.unsplash.com/photo-1503614472-8c93d56e92ce?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
    description: 'Kanada, doğal güzellikleri, modern şehirleri ve yüksek yaşam standartları ile tercih edilen bir destinasyondur. Hava yolu ile seyahat edenler için eTA (elektronik seyahat izni), diğerleri için turist vizesi gereklidir.',
    visaType: 'eTA / Turist Vizesi',
    processingTime: 'eTA: Dakikalar içinde, Vize: 2-4 hafta',
    validityPeriod: 'eTA: 5 yıl, Vize: 6 ay',
    entryType: 'Çok Girişli',
    sections: [
      {
        title: 'eTA için Gerekli Bilgiler',
        icon: '📄',
        content: [
          'Geçerli pasaport',
          'E-posta adresi',
          'Kredi veya banka kartı',
          'İş ve seyahat bilgileri',
        ]
      },
      {
        title: 'Turist Vizesi için Gerekli Belgeler',
        icon: '📄',
        content: [
          'Pasaport (en az 6 ay geçerli)',
          'Vize başvuru formu (IMM 5257)',
          'Fotoğraflar',
          'Mali durum belgesi',
          'Seyahat planı',
          'İş/eğitim belgeleri',
          'Biyometrik veriler (parmak izi)',
        ]
      },
      {
        title: 'Başvuru Süreci',
        icon: '⚙️',
        content: [
          'eTA için online başvuru yapın',
          'Turist vizesi için evrakları hazırlayın',
          'Biyometrik randevusu alın (vize için)',
          'Başvuru ücretini ödeyin',
          'Başvurunuzu online takip edin',
        ]
      },
      {
        title: 'Önemli Bilgiler',
        icon: '⚠️',
        content: [
          'eTA sadece hava yolu ile girişlerde geçerlidir',
          'eTA başvurusu çok kısa sürer',
          'Vize başvurusu daha detaylı evrak ister',
          'Biyometrik veriler zorunludur (vize için)',
          'Aile üyeleri ayrı başvuru yapmalıdır',
        ]
      }
    ],
    fees: {
      adult: 'eTA: 7 CAD, Vize: 100 CAD',
      child: 'eTA: 7 CAD, Vize: 100 CAD',
      service: 'Biyometrik ücret: 85 CAD (kişi başı)'
    },
    faqs: [
      {
        question: 'eTA ve turist vizesi arasındaki fark nedir?',
        answer: 'eTA elektronik bir seyahat iznidir ve sadece hava yolu ile giriş yapacaklar için geçerlidir. Turist vizesi ise tüm giriş türleri için geçerli olan fiziksel bir belgedir.'
      },
      {
        question: 'eTA başvurusu ne kadar sürer?',
        answer: 'Çoğu eTA başvurusu dakikalar içinde onaylanır. Ancak bazı durumlarda ek evrak istenerek süreç uzayabilir.'
      },
      {
        question: 'Kanada vizesi için biyometrik vermek zorunlu mu?',
        answer: 'Evet, turist vizesi başvurusu yapanlar için biyometrik veri (parmak izi ve fotoğraf) vermek zorunludur. eTA için gerekli değildir.'
      }
    ]
  },

  // Diğer ülkeler için benzer şablon - tüm ülkeler için bu yapıyı kullanın:
  'isvicre-vizesi': {
    name: 'İsviçre',
    flag: '🇨🇭',
    title: 'İsviçre Vizesi',
    subtitle: 'İsviçre Schengen Vizesi Başvurusu',
    image: 'https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
    description: 'İsviçre, Alpler, çikolata, saatler ve bankacılık sektörü ile ünlüdür. Schengen üyesi olan İsviçre için vize başvurusu standart Schengen prosedürünü takip eder.',
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
          'Vize başvuru formu',
          'Biyometrik fotoğraf (2 adet)',
          'Seyahat sağlık sigortası (minimum 30.000 Euro)',
          'Uçak bileti rezervasyonu',
          'Otel rezervasyonu',
          'Mali durum belgesi',
          'İş veya öğrenci belgesi',
        ]
      },
      {
        title: 'Başvuru Süreci',
        icon: '⚙️',
        content: [
          'Online randevu alın',
          'Belgeleri hazırlayın',
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
          'Schengen vizesi 26 ülkede geçerlidir',
          'İsviçre AB üyesi olmasa da Schengen üyesidir',
          'Başvuru randevusu şarttır',
          'Mali yeterlilik önemlidir',
          'Eksik evrak başvuruyu reddedebilir',
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
        question: 'İsviçre vizesi ile hangi ülkelere gidebilirim?',
        answer: 'İsviçre Schengen vizesi ile tüm Schengen bölgesi ülkelerine seyahat edebilirsiniz.'
      },
      {
        question: 'İsviçre AB üyesi mi?',
        answer: 'Hayır, İsviçre AB üyesi değildir ancak Schengen anlaşmasına taraftır.'
      },
      {
        question: 'İsviçre vizesi başvurusu ne kadar sürer?',
        answer: 'Normal şartlarda 15-30 gün içinde sonuçlanır.'
      }
    ]
  },

  'yunanistan-vizesi': {
    name: 'Yunanistan',
    flag: '🇬🇷',
    title: 'Yunanistan Vizesi',
    subtitle: 'Yunanistan Schengen Vizesi Başvurusu',
    image: 'https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
    description: 'Yunanistan, antik tarihi, muhteşem adaları ve Akdeniz mutfağı ile ünlüdür. Santorini, Mykonos ve Atina gibi popüler destinasyonlar için Schengen vizesi gereklidir.',
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
          'Vize başvuru formu',
          'Biyometrik fotoğraf (2 adet)',
          'Seyahat sağlık sigortası',
          'Uçak ve otel rezervasyonu',
          'Mali durum belgesi',
          'İş yeri veya okul belgesi',
        ]
      },
      {
        title: 'Başvuru Süreci',
        icon: '⚙️',
        content: [
          'Online randevu alın',
          'Belgeleri hazırlayın',
          'Başvuru merkezine gidin',
          'Biyometrik veri verin',
          'Ücret ödeyin',
          'Başvuru takibi yapın',
        ]
      },
      {
        title: 'Önemli Bilgiler',
        icon: '⚠️',
        content: [
          'Turist sezonu öncesi erken başvuru yapın',
          'Ada seyahatleri için ek evrak istenebilir',
          'Gemi bileti rezervasyonu gerekli olabilir',
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
        question: 'Yunanistan adalarına vize ile gidebilir miyim?',
        answer: 'Evet, Yunanistan Schengen vizesi ile tüm Yunan adalarına seyahat edebilirsiniz.'
      },
      {
        question: 'Yaz aylarında vize başvurusu ne kadar sürer?',
        answer: 'Yaz sezonu yoğunluğu nedeniyle 30-45 gün sürebilir, erken başvuru önerilir.'
      }
    ]
  },

  // Tüm diğer ülkeler için benzer yapıda veri ekleyin
  // İhtiyacınıza göre her ülke için özelleştirebilirsiniz

  'amerika-vizesi': {
    name: 'Amerika',
    flag: '🇺🇸',
    title: 'Amerika Vizesi',
    subtitle: 'ABD Turist Vizesi (B1/B2) Başvurusu',
    image: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
    description: 'Amerika Birleşik Devletleri, dünyanın en çok ziyaret edilen ülkelerinden biridir. Turist vizesi (B1/B2) iş ve turizm amaçlı seyahatler için gereklidir.',
    visaType: 'B1/B2 Turist Vizesi',
    processingTime: '3-5 hafta',
    validityPeriod: '10 yıla kadar',
    entryType: 'Çok Girişli',
    sections: [
      {
        title: 'Gerekli Belgeler',
        icon: '📄',
        content: [
          'Pasaport (en az 6 ay geçerli)',
          'DS-160 formu (online doldurulmuş)',
          'Vize görüşme randevusu',
          'Vize ücreti makbuzu',
          'Fotoğraf (5x5 cm)',
          'Mali durum belgeleri',
          'İş veya eğitim belgeleri',
          'Seyahat planı',
          'Önceki vize kopyaları (varsa)',
        ]
      },
      {
        title: 'Başvuru Süreci',
        icon: '⚙️',
        content: [
          'DS-160 formunu online doldurun',
          'Vize ücretini ödeyin',
          'Görüşme randevusu alın',
          'Belgeleri hazırlayın',
          'Konsoloslukta görüşmeye gidin',
          'Parmak izi verin',
          'Sonucu bekleyin',
          'Pasaportunuzu kargo ile alın',
        ]
      },
      {
        title: 'Görüşme İpuçları',
        icon: '💡',
        content: [
          'Randevu saatinden 15 dakika önce gelin',
          'Tüm belgeleri düzenli bir şekilde getirin',
          'Sorulara net ve kısa cevaplar verin',
          'Göz teması kurun ve güvenli olun',
          'Türkiye\'ye dönüş bağlarınızı vurgulayın',
          'Mali durumunuzu net açıklayın',
        ]
      },
      {
        title: 'Önemli Bilgiler',
        icon: '⚠️',
        content: [
          'Vize görüşmesi zorunludur',
          'Red durumunda ücret iade edilmez',
          'İkinci başvuru için bekleme süresi yoktur',
          'Vize süresi konsolos tarafından belirlenir',
          'ESTA ile karıştırılmamalıdır',
        ]
      }
    ],
    fees: {
      adult: '185 USD',
      child: '185 USD',
      service: 'Randevu ücreti ve danışmanlık ayrıca'
    },
    faqs: [
      {
        question: 'Amerika vizesi ne kadar sürede çıkar?',
        answer: 'Görüşme sonrası genellikle 3-5 iş günü içinde sonuçlanır. Ek evrak istenirse süre uzayabilir.'
      },
      {
        question: 'Vize reddedilirse ne yapmalıyım?',
        answer: 'Red nedenini öğrenin, eksikleri tamamlayın ve yeniden başvurabilirsiniz. Bekleme süresi yoktur.'
      },
      {
        question: 'ESTA ile vize arasındaki fark nedir?',
        answer: 'ESTA vizesiz seyahat programıdır ve sadece uygun vatandaşlara açıktır. Türk vatandaşları vize başvurusu yapmalıdır.'
      },
      {
        question: 'Vize görüşmesinde neler sorulur?',
        answer: 'Seyahat amacınız, mali durumunuz, iş/eğitim durumunuz, Türkiye\'ye dönüş bağlarınız ve seyahat planınız sorulur.'
      }
    ]
  },

  'ingiltere-vizesi': {
    name: 'İngiltere',
    flag: '🇬🇧',
    title: 'İngiltere Vizesi',
    subtitle: 'İngiltere Standart Ziyaretçi Vizesi Başvurusu',
    image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
    description: 'İngiltere, tarihi, kültürü ve modern şehirleri ile popüler bir destinasyondur. Standard Visitor Visa turizm, iş ve aile ziyaretleri için gereklidir.',
    visaType: 'Standard Visitor Visa',
    processingTime: '3 hafta',
    validityPeriod: '6 ay - 10 yıl',
    entryType: 'Çok Girişli',
    sections: [
      {
        title: 'Gerekli Belgeler',
        icon: '📄',
        content: [
          'Pasaport (en az 6 ay geçerli)',
          'Online başvuru formu',
          'Biyometrik randevu belgesi',
          'Mali durum belgeleri',
          'İş veya eğitim belgeleri',
          'Konaklama belgesi',
          'Seyahat planı',
          'Davetiye mektubu (varsa)',
        ]
      },
      {
        title: 'Başvuru Süreci',
        icon: '⚙️',
        content: [
          'Online başvuru yapın (gov.uk)',
          'Vize ücretini ödeyin',
          'Biyometrik randevu alın',
          'Belgeleri hazırlayın',
          'VFS Global\'e gidin',
          'Biyometrik veri verin',
          'Belgeleri teslim edin',
          'Kararı bekleyin',
        ]
      },
      {
        title: 'Önemli Bilgiler',
        icon: '⚠️',
        content: [
          'İngiltere Schengen üyesi değildir',
          'Başvuru tamamen online yapılır',
          'Biyometrik veri zorunludur',
          'Öncelikli hizmet mevcuttur (ek ücret)',
          'Her başvuru ayrı değerlendirilir',
        ]
      }
    ],
    fees: {
      adult: '100 GBP (6 ay), 361 GBP (2 yıl), 655 GBP (5 yıl), 822 GBP (10 yıl)',
      child: '100 GBP (6 ay)',
      service: 'Öncelikli servis ve danışmanlık ek ücretlidir'
    },
    faqs: [
      {
        question: 'İngiltere vizesi kaç günde çıkar?',
        answer: 'Standart başvurular 3 hafta içinde sonuçlanır. Öncelikli hizmet ile 5 iş günü, süper öncelikli ile 24 saat içinde sonuç alınabilir.'
      },
      {
        question: 'İngiltere vizesi ile Schengen\'e gidebilir miyim?',
        answer: 'Hayır, İngiltere Schengen üyesi değildir. Ayrı vize gereklidir.'
      },
      {
        question: 'Çok girişli vize alabilirim miyim?',
        answer: 'Evet, 6 ay, 2, 5 veya 10 yıllık çok girişli vize seçenekleri mevcuttur.'
      }
    ]
  },

  // Kalan ülkeler için template
  'italya-vizesi': {
    name: 'İtalya',
    flag: '🇮🇹',
    title: 'İtalya Vizesi',
    subtitle: 'İtalya Schengen Vizesi Başvurusu',
    image: 'https://images.unsplash.com/photo-1515542622106-78bda8ba0e5b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
    description: 'İtalya, Roma, Venedik, Floransa ve Toskana ile Avrupa\'nın en çok ziyaret edilen ülkelerinden biridir.',
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
          'Vize başvuru formu',
          'Biyometrik fotoğraf',
          'Seyahat sağlık sigortası',
          'Uçak ve otel rezervasyonu',
          'Mali durum belgesi',
          'İş/öğrenci belgesi',
        ]
      },
      {
        title: 'Başvuru Süreci',
        icon: '⚙️',
        content: [
          'Online randevu alın',
          'Belgeleri hazırlayın',
          'VFS Global\'e gidin',
          'Biyometrik veri verin',
          'Ücret ödeyin',
          'Başvuru takibi yapın',
        ]
      },
      {
        title: 'Önemli Bilgiler',
        icon: '⚠️',
        content: [
          'Turist sezonu öncesi erken başvuru yapın',
          'Konaklama belgesi önemlidir',
          'Seyahat planı detaylı olmalı',
        ]
      }
    ],
    fees: {
      adult: '80 EUR',
      child: '40 EUR (6-12 yaş)',
      service: 'VFS ve danışmanlık ücreti ayrıca'
    },
    faqs: [
      {
        question: 'İtalya vizesi ile hangi ülkelere gidebilirim?',
        answer: 'İtalya Schengen vizesi ile 26 Schengen ülkesine seyahat edebilirsiniz.'
      },
      {
        question: 'İtalya vizesi için kaç gün önceden başvurmalıyım?',
        answer: 'Seyahat tarihinden en az 3-4 hafta önce başvurmanız önerilir.'
      }
    ]
  },

  // DİĞER TÜM ÜLKELER İÇİN BU TEMPLATE YAPISINI KULLANIN
  // Her ülke için aynı yapıyı kopyalayıp, içeriği özelleştirin
};

// Ülke listesini export edin
export const countryList = Object.keys(countryData).map(slug => ({
  slug,
  name: countryData[slug].name,
  flag: countryData[slug].flag
}))