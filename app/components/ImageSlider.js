"use client";
import { useState, useEffect } from "react";

export default function ImageSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [ 
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1920&h=1080&fit=crop&crop=center",
      title: "Vize Başvurularınızda",
      subtitle: "Vize işlemlerinizi  başlatmak için bizi arayarak kolayca bilgi edinin",
      description: "Vize başvuru sürecinde profesyonel destek almak, başvurunuzun daha hızlı ve kolay bir şekilde sonuçlanmasına yardımcı olabilir.",
      gradient: "from-blue-600 to-indigo-800"
    },  
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1920&h=1080&fit=crop&crop=center",
      title: "Amerika ve İngiltere",
      subtitle: "Vize işlemlerinizi  başlatmak için bizi arayarak kolayca bilgi edinin",
      description: "En zorlu vize başvurularında yanınızdayız. Deneyimli ekibimizle başarıya ulaşın.",
      gradient: "from-green-600 to-teal-800"
    }
  ];

  // Auto-advance slides
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-transform duration-500 ease-in-out ${
            index === currentSlide ? 'translate-x-0' : 
            index < currentSlide ? '-translate-x-full' : 'translate-x-full'
          }`}
        >
          <div 
            className={`relative w-full h-full bg-gradient-to-br ${slide.gradient}`}
            style={{
              backgroundImage: `linear-gradient(135deg, rgba(0,0,0,0.4), rgba(0,0,0,0.6)), url(${slide.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat'
            }}
          >
            
            {/* Content */}
            <div className="absolute inset-0 flex items-center justify-center text-center text-white">
              <div className="max-w-4xl px-4">
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 animate-fade-in">
                  {slide.title}
                </h1>
                <h2 className="text-2xl md:text-4xl lg:text-5xl font-semibold text-blue-400 mb-6 animate-fade-in-delay">
                  {slide.subtitle}
                </h2>
                <p className="text-lg md:text-xl lg:text-2xl opacity-90 mb-8 max-w-3xl mx-auto animate-fade-in-delay-2">
                  {slide.description}
                </p>
                
                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-delay-3">
                  <a 
                    href="#iletisim" 
                    className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg transition-all duration-300 text-lg font-semibold hover:scale-105 shadow-lg"
                  >
                    Bize Ulaşın
                  </a>
            
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-2 rounded-full transition-all duration-200"
        aria-label="Önceki resim"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-2 rounded-full transition-all duration-200"
        aria-label="Sonraki resim"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-200 ${
              index === currentSlide ? 'bg-white' : 'bg-white bg-opacity-50'
            }`}
            aria-label={`Slide ${index + 1}'e git`}
          />
        ))}
      </div>
    </div>
  );
}