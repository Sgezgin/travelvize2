'use client';
import { useState } from 'react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    country: '',
    message: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  return (
    <section id="iletisim" className="py-20 bg-gradient-to-br from-blue-50 via-white to-indigo-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 left-10 w-64 h-64 bg-blue-200 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-indigo-200 rounded-full opacity-20 animate-bounce" style={{animationDuration: '4s'}}></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
    
          <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent mb-6">
            Bize Ulaşın
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
Yurt dışı planlarınıza birlikte yön verelim, vize işlemleri ve seyahat için hemen bize ulaşın!          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
                <span className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center mr-3">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </span>
                İletişim Bilgileri
              </h3>
              
              <div className="space-y-6">
                {/* Address */}
                <div className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:-translate-y-1">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2 text-lg">Ofis Adresimiz</h4>
                      <p className="text-gray-600 leading-relaxed">
                        Ergenekon Mah. Halaskargazi Cad. No: 13/1<br/>
                        Canik Apt. Kat:1<br/>
                        Harbiye/Şişli/İstanbul
                      </p>
                    </div>
                  </div>
                </div>
                
                {/* Phone */}
                <div className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:-translate-y-1">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2 text-lg">Telefon</h4>
                      <a href="tel:+902122259700" className="text-gray-600 hover:text-blue-600 transition-colors text-lg font-medium">
                        0212 225 97 00
                      </a>
                    </div>
                  </div>
                </div>
                
                {/* WhatsApp */}
                <div className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:-translate-y-1">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-green-500 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2 text-lg">WhatsApp</h4>
                      <a href="https://wa.me/905332799080" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-green-600 transition-colors text-lg font-medium">
                        0533 279 90 80
                      </a>
                    </div>
                  </div>
                </div>
                
                {/* Email */}
                <div className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:-translate-y-1">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2 text-lg">E-posta</h4>
                      <a href="mailto:info@travelvize.com" className="text-gray-600 hover:text-purple-600 transition-colors text-lg font-medium">
                        info@travelvize.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Working Hours */}
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 text-white">
              <h4 className="text-xl font-bold mb-6 flex items-center">
                <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Çalışma Saatleri
              </h4>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-blue-100">Hafta içi:</span>
                  <span className="font-semibold">09:00 - 18:00</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-blue-100">Cumartesi:</span>
                  <span className="font-semibold">10:00 - 15:00</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-blue-100">Pazar:</span>
                  <span className="font-semibold text-blue-200">Kapalı</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="bg-white/60 backdrop-blur-md rounded-3xl p-8 shadow-2xl border border-white/20">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
              <span className="w-8 h-8 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center mr-3">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                </svg>
              </span>
              SİZİ ARAYALIM
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="group">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Ad Soyad *</label>
                  <input 
                    type="text" 
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-4 bg-white border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 group-hover:border-blue-300 text-gray-900 placeholder-gray-500" 
                    placeholder="Adınızı ve soyadınızı girin" 
                  />
                </div>
                <div className="group">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Telefon *</label>
                  <input 
                    type="tel" 
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-4 bg-white border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 group-hover:border-blue-300 text-gray-900 placeholder-gray-500" 
                    placeholder="0533 XXX XX XX" 
                  />
                </div>
              </div>
              
              <div className="group">
                <label className="block text-sm font-semibold text-gray-700 mb-2">E-posta *</label>
                <input 
                  type="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-4 bg-white border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 group-hover:border-blue-300 text-gray-900 placeholder-gray-500" 
                  placeholder="ornek@email.com" 
                />
              </div>
              
              <div className="group">
                <label className="block text-sm font-semibold text-gray-700 mb-2">Hangi ülke için vize başvurusu yapmak istiyorsunuz? *</label>
                <select 
                  name="country"
                  value={formData.country}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-4 bg-white border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 group-hover:border-blue-300 text-gray-900"
                >
                  <option value="">Ülke seçiniz</option>
                  <option value="almanya">🇩🇪 Almanya - Schengen Vizesi</option>
                  <option value="fransa">🇫🇷 Fransa - Schengen Vizesi</option>
                  <option value="hollanda">🇳🇱 Hollanda - Schengen Vizesi</option>
                  <option value="ispanya">🇪🇸 İspanya - Schengen Vizesi</option>
                  <option value="italya">🇮🇹 İtalya - Schengen Vizesi</option>
                  <option value="amerika">🇺🇸 Amerika - Turist Vizesi</option>
                  <option value="ingiltere">🇬🇧 İngiltere - UK Vizesi</option>
                  <option value="kanada">🇨🇦 Kanada - eTA & Vize</option>
                </select>
              </div>
              
              <div className="group">
                <label className="block text-sm font-semibold text-gray-700 mb-2">Mesajınız</label>
                <textarea 
                  rows={4} 
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-4 py-4 bg-white border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 group-hover:border-blue-300 resize-none text-gray-900 placeholder-gray-500" 
                  placeholder="Vize başvurunuzla ilgili detayları, seyahat tarihlerinizi ve özel durumlarınızı paylaşabilirsiniz..."
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-4 rounded-xl hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center group"
              >
                <svg className="w-5 h-5 mr-2 group-hover:animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
                Sizi Arayalım
              </button>
              
              <p className="text-sm text-gray-500 text-center">
                Formu gönderdikten sonra uzman ekibimiz 24 saat içinde size geri dönüş yapacaktır.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}