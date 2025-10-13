import Image from "next/image";
import AboutSection from "./components/AboutSection";
import ServicesSection from "./components/ServicesSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import MobileNavigation from "./components/MobileNavigation";
import WhatsAppButton from "./components/WhatsAppButton";
import ImageSlider from "./components/ImageSlider";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Modern Navigation Header */}
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
                { href: '#anasayfa', label: 'Anasayfa' },
                { href: '#hizmetler', label: 'Hizmetler' },
                { href: '#hakkimizda', label: 'Hakkımızda' },
                { href: '#iletisim', label: 'İletişim' }
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
                href="#iletisim" 
                className="group relative bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-3 rounded-xl hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 overflow-hidden"
              >
                <span className="relative z-10 flex items-center space-x-2">
                  <span>Ücretsiz Danışmanlık</span>
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

      {/* Hero Section with Full-Screen Slider */}
      <section id="anasayfa" className="relative pt-20">
        <ImageSlider />
      </section>

      {/* About Section */}
      <AboutSection />

      {/* Services Section */}
      <ServicesSection />

      {/* Contact Section */}
      <ContactSection />

      {/* Footer */}
      <Footer />
      
      {/* WhatsApp Button */}
      <WhatsAppButton />
    </div>
  );
}