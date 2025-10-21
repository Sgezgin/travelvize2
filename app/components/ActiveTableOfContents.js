'use client';

import { useState, useEffect } from 'react';
import { MapPin, CheckCircle, Phone, Users, CreditCard, Calendar, FileText, Clock } from 'lucide-react';
import Link from 'next/link';
import Image from "next/image";

export default function ActiveTableOfContents({ sections, relatedCountries, frontmatter }) {
  const [activeSection, setActiveSection] = useState('');

  // Track active section as user scrolls
  useEffect(() => {
    const handleScroll = () => {
      // Find the section currently in view
      let currentSection = '';
      const scrollPosition = window.scrollY + 200; // Offset for better detection

      sections.forEach((section) => {
        if (section.title) {
          const element = document.getElementById(section.title.toLowerCase().replace(/\s+/g, '-'));
          if (element) {
            const offsetTop = element.offsetTop;
            const height = element.offsetHeight;
            if (scrollPosition >= offsetTop && scrollPosition < offsetTop + height) {
              currentSection = section.title.toLowerCase().replace(/\s+/g, '-');
            }
          }
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [sections]);

  return (
    <div className="sticky top-8 space-y-6">
      {/* Table of Contents */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-4">
          <div className="flex items-center gap-3 text-white">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h7" />
            </svg>
            <h3 className="text-lg font-semibold">İçindekiler</h3>
          </div>
        </div>
        <div className="p-4">
          <ul className="space-y-2">
            {sections.map((section, idx) => (
              section.title && (
                <li key={idx}>
                  <a 
                    href={`#${section.title.toLowerCase().replace(/\s+/g, '-')}`}
                    className={`flex items-start gap-2 p-2 rounded-lg transition-colors ${
                      activeSection === section.title.toLowerCase().replace(/\s+/g, '-')
                        ? 'bg-blue-100 text-blue-700 font-semibold'
                        : 'text-gray-700 hover:bg-blue-50 hover:text-blue-700'
                    }`}
                  >
                    <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2.5 flex-shrink-0"></span>
                    <span className="text-sm">{section.title}</span>
                  </a>
                </li>
              )
            ))}
          </ul>
        </div>
      </div>

      {/* Related Countries with Images */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-4">
          <div className="flex items-center gap-3 text-white">
            <MapPin className="w-5 h-5" />
            <h3 className="text-lg font-semibold">Diğer Ülkeler</h3>
          </div>
        </div>
        <div className="p-4 space-y-4">
          {relatedCountries.map((country) => (
            <Link 
              key={country.slug}
              href={`/ulkeler/${country.slug}`}
              className="flex items-center gap-4 p-3 rounded-lg hover:bg-gray-50 transition-all group border border-gray-100 hover:border-blue-200 hover:shadow-sm"
            >
              <div className="flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden relative">
                <Image
                  src={country.image}
                  alt={country.name}
                  fill
                  className="object-cover"
                  sizes="64px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                <div className="absolute bottom-1 left-1 text-lg">
                  {country.flag}
                </div>
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="font-medium text-gray-900 group-hover:text-blue-600 truncate">
                  {country.name}
                </h4>
                <p className="text-xs text-gray-500 truncate mt-1">{country.type}</p>
              </div>
              <svg className="w-4 h-4 text-gray-400 group-hover:text-blue-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          ))}
        </div>
      </div>

      {/* Başvuru Bilgileri */}
      {/* <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-4">
          <div className="flex items-center gap-3 text-white">
            <CheckCircle className="w-5 h-5" />
            <h3 className="text-lg font-semibold">Başvuru Bilgileri</h3>
          </div>
        </div>
        <div className="p-6 space-y-4">
          <InfoRow icon={<MapPin className="w-4 h-4" />} label="Ülke" value={frontmatter.country} />
          <InfoRow icon={<FileText className="w-4 h-4" />} label="Vize Türü" value={frontmatter.visaType} />
          <InfoRow icon={<Clock className="w-4 h-4" />} label="İşlem Süresi" value={frontmatter.processingTime} />
          <InfoRow icon={<Calendar className="w-4 h-4" />} label="Geçerlilik" value={frontmatter.validityPeriod} />
          <InfoRow icon={<Users className="w-4 h-4" />} label="Giriş Türü" value={frontmatter.entryType} />
          <InfoRow icon={<CreditCard className="w-4 h-4" />} label="Yetişkin Ücreti" value={frontmatter.fees?.adult || 'Değişken'} />
        </div>
      </div> */}

      {/* CTA Section */}
      <div className="bg-gradient-to-br from-blue-600 to-indigo-700 text-white rounded-xl shadow-lg overflow-hidden">
        <div className="p-6 text-center">
          <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
            <Phone className="w-8 h-8" />
          </div>
          <h3 className="text-xl font-bold mb-2">Profesyonel Destek</h3>
          <p className="text-blue-100 text-sm mb-6 leading-relaxed">
            Uzman danışmanlarımız başvuru sürecinizde size yardımcı olmak için hazır
          </p>
          <a 
            href="/iletisim" 
            className="w-full bg-white text-blue-700 font-semibold py-3.5 px-6 rounded-lg hover:bg-blue-50 transition-all hover:shadow-xl flex items-center justify-center gap-2 group"
          >
            <Phone className="w-4 h-4 group-hover:rotate-12 transition-transform" />
            <span>İletişime Geçin</span>
          </a>
        </div>
      </div>

      {/* Son Güncelleme */}
      <div className="bg-gray-50 rounded-lg border border-gray-200 p-4 text-center">
        <p className="text-xs text-gray-500 mb-1">Son Güncelleme</p>
        <p className="text-sm font-semibold text-gray-900">
          {frontmatter.lastUpdate 
            ? new Date(frontmatter.lastUpdate).toLocaleDateString('tr-TR', { 
                day: 'numeric', 
                month: 'long', 
                year: 'numeric' 
              })
            : 'Bilgi yok'}
        </p>
      </div>
    </div>
  );
}

function InfoRow({ icon, label, value }) {
  return (
    <div className="flex justify-between items-start gap-4 py-2.5">
      <div className="flex items-center gap-2">
        <span className="text-blue-500">{icon}</span>
        <span className="text-sm text-gray-500 font-medium">{label}</span>
      </div>
      <span className="text-sm text-gray-900 font-semibold text-right max-w-[60%]">{value}</span>
    </div>
  );
}