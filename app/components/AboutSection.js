'use client';
import { useState, useEffect } from 'react';

export default function AboutSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [counters, setCounters] = useState({
    visas: 0,
    countries: 0,
    experience: 0,
    success: 0
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Start counter animations
          animateCounters();
        }
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById('hakkimizda');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const animateCounters = () => {
    const targets = { visas: 500, countries: 50, experience: 5, success: 98 };
    const duration = 2000; // 2 seconds
    const steps = 60;
    const stepDuration = duration / steps;

    let currentStep = 0;
    const timer = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;

      setCounters({
        visas: Math.floor(targets.visas * progress),
        countries: Math.floor(targets.countries * progress),
        experience: Math.floor(targets.experience * progress),
        success: Math.floor(targets.success * progress)
      });

      if (currentStep >= steps) {
        clearInterval(timer);
        setCounters(targets);
      }
    }, stepDuration);
  };

  return (
    <section id="hakkimizda" className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Floating background elements */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-blue-100 rounded-full opacity-20 animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-indigo-100 rounded-full opacity-20 animate-bounce" style={{ animationDuration: '3s' }}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content Section */}
          <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
            }`}>
            <div className="mb-6">
              <div className="inline-flex items-center px-4 py-2 bg-blue-50 rounded-full mb-4">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-2 animate-pulse"></span>
                <span className="text-blue-600 text-sm font-medium">Profesyonel Vize Danışmanlığı</span>
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight">
                <span className="bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
                  TravelVize
                </span>
                <span className="text-blue-600 block mt-2 animate-pulse">
                  Vize Başvuru Süreçleri Artık Kolay!
                </span>
              </h2>
            </div>

            <div className="space-y-6 mb-8">
              <div className="flex items-start space-x-4 group">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center group-hover:bg-blue-200 transition-colors">
                  <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>


                <p className="text-lg text-gray-600 group-hover:text-gray-800 transition-colors">
                  Travel Vize, 2015 yılından bu yana İstanbul-Şişli’de profesyonel vize danışmanlığı hizmeti vermektedir. Deneyimli ekibimizle, turistik, ticari, aile veya arkadaş ziyaretleri dahil tüm seyahat türlerinde danışanlarımıza güvenilir ve hızlı çözümler sunuyoruz.
                </p>
              </div>

              <div className="flex items-start space-x-4 group">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center group-hover:bg-blue-200 transition-colors">
                  <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <p className="text-lg text-gray-600 group-hover:text-gray-800 transition-colors">
                  Türkiye’nin her yerinden başvuru sahiplerine, her ülkenin güncel vize prosedürlerini doğru ve şeffaf şekilde aktararak sürecin en verimli şekilde ilerlemesini sağlıyoruz. Türk vatandaşları ve Türkiye’de yaşayan yabancı uyruklu misafirlerimize, konsolosluk ve büyükelçilik işlemlerinde kesintisiz destek sunmaktayız.                </p>
              </div>
              <p className="text-lg text-gray-600 group-hover:text-gray-800 transition-colors">
                
              </p>
              <div className="inline-flex items-center px-4 py-2 bg-blue-100 rounded-full mb-6">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-2 animate-pulse"></span>
                <span className="text-blue-600 text-sm font-medium">TÜRSAB Belge No: 16045</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#iletisim" className="group bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-xl hover:from-blue-700 hover:to-blue-800 transition-all duration-300 inline-block font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                <span className="flex items-center justify-center">
                  İletişime Geç
                  <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </a>
              <a href="#hizmetler" className="group border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-xl hover:border-blue-600 hover:text-blue-600 transition-all duration-300 inline-block font-semibold transform hover:-translate-y-1">
                Hizmetlerimizi İncele
              </a>
            </div>
          </div>

          {/* Stats Section */}
          <div className={`relative transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
            }`}>
            <div className="relative">
              {/* Gradient background with glassmorphism effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-indigo-600/20 rounded-3xl backdrop-blur-sm"></div>
              <div className="relative bg-white/40 backdrop-blur-md rounded-3xl p-8 border border-white/20 shadow-2xl">
                <div className="grid grid-cols-2 gap-6">
                  {[
                    { key: 'visas', value: counters.visas, suffix: '+', label: 'Başarılı Vize', icon: '🎯', delay: '0ms' },
                    { key: 'countries', value: counters.countries, suffix: '+', label: 'Ülke Seçeneği', icon: '🌍', delay: '100ms' },
                    { key: 'experience', value: counters.experience, suffix: '+', label: 'Yıl Tecrube', icon: '⭐', delay: '200ms' },
                    { key: 'success', value: counters.success, suffix: '%', label: 'Başarı Oranı', icon: '📈', delay: '300ms' }
                  ].map((stat, index) => (
                    <div
                      key={stat.key}
                      className={`bg-white/80 backdrop-blur-sm rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border border-white/30 group ${isVisible ? 'animate-bounce' : ''
                        }`}
                      style={{
                        animationDelay: stat.delay,
                        animationDuration: '1s',
                        animationFillMode: 'both'
                      }}
                    >
                      <div className="text-2xl mb-2 group-hover:scale-110 transition-transform duration-300">
                        {stat.icon}
                      </div>
                      <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">
                        {stat.value}{stat.suffix}
                      </div>
                      <div className="text-gray-600 font-medium">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Floating decorative elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-blue-500 rounded-full opacity-60 animate-ping"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-indigo-500 rounded-full opacity-60 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}