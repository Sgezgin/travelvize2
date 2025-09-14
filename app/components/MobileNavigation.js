"use client";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function MobileNavigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const menuItems = [
    { href: '#anasayfa', label: 'Anasayfa', icon: '🏠', description: 'Ana sayfa' },
    { href: '#hizmetler', label: 'Hizmetler', icon: '✈️', description: 'Vize hizmetlerimiz' },
    { href: '#hakkimizda', label: 'Hakkımızda', icon: '👥', description: 'Firmamız hakkında' },
    { href: '#iletisim', label: 'İletişim', icon: '📞', description: 'İletişim bilgileri' }
  ];

  return (
    <>
      {/* Modern Mobile Menu Button */}
      <div className="md:hidden relative z-50">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`relative w-10 h-10 rounded-xl transition-all duration-300 ${
            isOpen 
              ? 'bg-blue-600 text-white shadow-lg' 
              : 'bg-white text-gray-700 hover:bg-blue-50 hover:text-blue-600 shadow-md border border-gray-200'
          } focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50`}
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative w-5 h-5">
              {/* Hamburger to X animation */}
              <span className={`absolute block w-5 h-0.5 bg-current transform transition-all duration-300 ${
                isOpen ? 'rotate-45 translate-y-0' : '-translate-y-1.5'
              }`}></span>
              <span className={`absolute block w-5 h-0.5 bg-current transform transition-all duration-300 ${
                isOpen ? 'opacity-0' : 'opacity-100'
              }`}></span>
              <span className={`absolute block w-5 h-0.5 bg-current transform transition-all duration-300 ${
                isOpen ? '-rotate-45 translate-y-0' : 'translate-y-1.5'
              }`}></span>
            </div>
          </div>
        </button>
      </div>

      {/* Modern Mobile Menu Overlay */}
      <div className={`fixed inset-0 z-[9999] md:hidden transition-all duration-500 ${
        isOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
      }`}>
        {/* Backdrop */}
        <div 
          className={`absolute inset-0 bg-black/80 backdrop-blur-sm transition-all duration-500 ${
            isOpen ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={() => setIsOpen(false)}
        ></div>
        
        {/* Menu Panel */}
        <div className={`absolute top-0 right-0 w-80 max-w-[85vw] h-full bg-white shadow-2xl transition-all duration-500 transform z-[10000] ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}>
          {/* Header */}
          <div className="relative p-6 border-b border-gray-100/50">
            <div className="flex justify-between items-center">
              <div className="group">
                <Image
                  src="https://www.travelvize.com/wp-content/uploads/2022/08/LOGOV3.png"
                  alt="TravelVize Logo"
                  width={140}
                  height={38}
                  className="h-10 w-auto transition-transform duration-300 group-hover:scale-105"
                  priority
                />
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="w-10 h-10 rounded-xl bg-gray-100 text-gray-700 hover:bg-red-50 hover:text-red-600 transition-all duration-300 flex items-center justify-center group"
              >
                <svg className="w-5 h-5 group-hover:rotate-90 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            {/* Decorative gradient line */}
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-30"></div>
          </div>
          
          {/* Navigation Menu */}
          <nav className="flex-1 px-6 py-8 space-y-2 bg-white">
            {menuItems.map((item, index) => (
              <a
                key={item.href}
                href={item.href}
                className={`group block p-4 rounded-2xl transition-all duration-300 hover:bg-blue-50/80 border border-transparent hover:border-blue-100/50 transform hover:-translate-y-0.5 ${
                  isOpen ? `animate-fadeInUp` : ''
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
                onClick={() => setIsOpen(false)}
              >
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl flex items-center justify-center group-hover:from-blue-100 group-hover:to-indigo-100 transition-all duration-300 group-hover:scale-110">
                    <span className="text-xl">{item.icon}</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                      {item.label}
                    </h3>
                    <p className="text-sm text-gray-500 group-hover:text-blue-500 transition-colors duration-300">
                      {item.description}
                    </p>
                  </div>
                  <svg className="w-5 h-5 text-gray-400 group-hover:text-blue-500 group-hover:translate-x-1 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </a>
            ))}
          </nav>
          
          {/* Contact Section */}
          <div className="p-6 border-t border-gray-100/50 space-y-4 bg-white">
            {/* Phone Number */}
            <div className="flex items-center space-x-3 p-3 bg-green-50/50 rounded-xl border border-green-100/50">
              <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div>
                <p className="text-xs text-gray-500 font-medium">Hemen Ara</p>
                <a href="tel:+902122259700" className="text-sm font-semibold text-gray-900 hover:text-green-600 transition-colors">
                  0212 225 97 00
                </a>
              </div>
            </div>
            
            {/* WhatsApp */}
            <div className="flex items-center space-x-3 p-3 bg-green-50/50 rounded-xl border border-green-100/50">
              <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                <span className="text-lg">📱</span>
              </div>
              <div>
                <p className="text-xs text-gray-500 font-medium">WhatsApp</p>
                <a href="https://wa.me/905332799080" className="text-sm font-semibold text-gray-900 hover:text-green-600 transition-colors">
                  0533 279 90 80
                </a>
              </div>
            </div>
            
            {/* CTA Button */}
            <a
              href="#iletisim"
              className="block w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-4 rounded-xl hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 font-semibold text-center shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 group"
              onClick={() => setIsOpen(false)}
            >
              <span className="flex items-center justify-center space-x-2">
                <span>Ücretsiz Danışmanlık Al</span>
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </a>
          </div>
        </div>
      </div>
      
      {/* Add CSS for animations */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fadeInUp {
          animation: fadeInUp 0.6s ease-out forwards;
        }
      `}</style>
    </>
  );
}