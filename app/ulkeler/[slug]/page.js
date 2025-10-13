// app/ulkeler/[slug]/page.js
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { notFound } from 'next/navigation';
import { Calendar, Clock, FileText, Euro, CheckCircle, Phone, ArrowLeft, BadgeCheck, MapPin, Users, CreditCard } from 'lucide-react';
import Link from 'next/link';
import Image from "next/image";
import MobileNavigation from '../../components/MobileNavigation';
import Footer from '../../components/Footer';
import WhatsAppButton from '../../components/WhatsAppButton';

// Country images data
const countryImages = {
  'almanya-vizesi': "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  'fransa-vizesi': "https://images.unsplash.com/photo-1590767072824-a4424eca7038?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  'hollanda-vizesi': "https://images.unsplash.com/photo-1534351590666-13e3e96b5017?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  'ispanya-vizesi': "https://images.unsplash.com/photo-1539037116277-4db20889f2d4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  'italya-vizesi': "https://images.unsplash.com/photo-1515542622106-78bda8ba0e5b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  'amerika-vizesi': "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  'ingiltere-vizesi': "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  'kanada-vizesi': "https://images.unsplash.com/photo-1503614472-8c93d56e92ce?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  'isvicre-vizesi': "https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  'yunanistan-vizesi': "https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  'avusturya-vizesi': "https://images.unsplash.com/photo-1516550893923-42d28e5677af?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  'belcika-vizesi': "https://images.unsplash.com/photo-1559564484-e48bf8aeeca1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  'portekiz-vizesi': "https://images.unsplash.com/photo-1555881400-74d7acaacd8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  'danimarka-vizesi': "https://images.unsplash.com/photo-1513622470522-26c3c8a854bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  'norvec-vizesi': "https://images.unsplash.com/photo-1601439678777-b2b3c56fa627?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  'isvec-vizesi': "https://images.unsplash.com/photo-1509356843151-3e7d96241e11?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  'finlandiya-vizesi': "https://images.unsplash.com/photo-1517721071472-e2d29e33adef?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  'polonya-vizesi': "https://images.unsplash.com/photo-1559628376-f3fe5f782a2e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  'cek-cumhuriyeti-vizesi': "https://images.unsplash.com/photo-1541849546-216549ae216d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  'macaristan-vizesi': "https://images.unsplash.com/photo-1534239697798-120952767c38?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  'romanya-vizesi': "https://images.unsplash.com/photo-1557958114-7888ea8058fd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  'bulgaristan-vizesi': "https://images.unsplash.com/photo-1565008576549-57569a49371d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  'hirvatistan-vizesi': "https://images.unsplash.com/photo-1555990538-c3c6c7e0b499?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  'slovenya-vizesi': "https://images.unsplash.com/photo-1531218150217-54595bc2b934?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  'slovakya-vizesi': "https://images.unsplash.com/photo-1581193459975-4e8b970e2e42?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  'litvanya-vizesi': "https://images.unsplash.com/photo-1596352914160-2b28f27b2de9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  'letonya-vizesi': "https://images.unsplash.com/photo-1580991735757-b8c7c8e5cd5b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  'estonya-vizesi': "https://images.unsplash.com/photo-1526495124232-a04e1849168c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  'malta-vizesi': "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  'luksemburg-vizesi': "https://images.unsplash.com/photo-1585208798174-6cedd86e019a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  'lihtenstayn-vizesi': "https://images.unsplash.com/photo-1605721911519-3dfeb3be25e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
};

const countriesDirectory = path.join(process.cwd(), 'app/data/countries');

function getCountryData(slug) {
  try {
    const fullPath = path.join(countriesDirectory, `${slug}.md`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);
    return { frontmatter: data, content: content, slug: slug };
  } catch (error) {
    return null;
  }
}

export async function generateStaticParams() {
  const files = fs.readdirSync(countriesDirectory);
  return files.filter(file => file.endsWith('.md')).map(file => ({
    slug: file.replace(/\.md$/, '')
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const countryData = getCountryData(slug);
  if (!countryData) return { title: 'Ülke Bulunamadı' };
  return {
    title: `${countryData.frontmatter.title} | TravelVize`,
    description: `${countryData.frontmatter.country} vizesi başvuru süreci, gerekli belgeler ve detaylı bilgiler.`
  };
}

export default async function CountryDetailPage({ params }) {
  const { slug } = await params;
  const countryData = getCountryData(slug);
  if (!countryData) notFound();

  const { frontmatter, content } = countryData;
  const sections = parseMarkdownToSections(content);
  
  // Get country image
  const countryImage = countryImages[slug] || frontmatter.image || "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80";

  return (
    <div className="min-h-screen bg-white">
      {/* Modern Navigation Header - Same as Homepage */}
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
                  className="h-12 w-auto transition-transform duration-300 group-hover:scale-105"
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

      {/* Main Content - Adjusted for fixed header */}
      <main className="pt-20">
        {/* Hero Section with Country Image */}
        <div className="relative">
          {/* Country Image Background */}
          <div className="relative h-96 md:h-[500px] w-full overflow-hidden">
            <Image
              src={countryImage}
              alt={`${frontmatter.country} vize bilgileri`}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 to-slate-900/40"></div>
          </div>
          
          {/* Back Button */}
          <div className="absolute top-6 left-6">
            <Link 
              href="/ulkeler"
              className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-lg hover:bg-white/30 transition-all group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              <span className="text-sm font-medium">Ülkelere Dön</span>
            </Link>
          </div>
          
          {/* Country Info Overlay */}
          <div className="absolute bottom-0 left-0 right-0">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
              <div className="flex flex-col md:flex-row items-start md:items-end gap-6">
                <div className="w-24 h-24 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center text-5xl border border-white/20">
                  {frontmatter.flag}
                </div>
                <div className="flex-1">
                  <div className="inline-flex items-center gap-2 bg-blue-500/20 border border-blue-400/30 backdrop-blur-sm px-3 py-1 rounded-full mb-3">
                    <BadgeCheck className="w-4 h-4 text-blue-300" />
                    <span className="text-xs font-semibold text-blue-100 uppercase tracking-wide">{frontmatter.visaType}</span>
                  </div>
                  <h1 className="text-4xl md:text-5xl font-bold text-white mb-2 tracking-tight">
                    {frontmatter.title}
                  </h1>
                  <p className="text-blue-200 text-lg max-w-3xl">
                    Profesyonel Vize Danışmanlığı ve Başvuru Hizmetleri
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Stats Section */}
        <div className="bg-gradient-to-r from-slate-50 to-blue-50 py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <StatCard icon={<Clock className="w-5 h-5" />} label="İşlem Süresi" value={frontmatter.processingTime} />
              <StatCard icon={<Calendar className="w-5 h-5" />} label="Geçerlilik Süresi" value={frontmatter.validityPeriod} />
              <StatCard icon={<FileText className="w-5 h-5" />} label="Giriş Türü" value={frontmatter.entryType} />
              <StatCard icon={<Euro className="w-5 h-5" />} label="Başlangıç Ücreti" value={frontmatter.fees?.adult || 'Değişken'} />
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid lg:grid-cols-3 gap-12">
            
            {/* Sol: İçerik */}
            <div className="lg:col-span-2 space-y-8">
              {sections.map((section, idx) => (
                <ContentCard key={idx} section={section} />
              ))}
            </div>

            {/* Sağ: Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-8 space-y-6">
                
                {/* Başvuru Bilgileri */}
                <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
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
                </div>

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
                      href="/#iletisim" 
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
            </div>

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

// Components
function StatCard({ icon, label, value }) {
  return (
    <div className="bg-white/80 backdrop-blur-sm rounded-xl p-5 border border-white/50 hover:bg-white transition-all group shadow-sm">
      <div className="text-blue-600 mb-3 group-hover:scale-110 transition-transform">{icon}</div>
      <p className="text-xs text-gray-600 mb-1.5 font-medium uppercase tracking-wider">{label}</p>
      <p className="text-lg font-bold text-gray-900">{value}</p>
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

function ContentCard({ section }) {
  // Eğer başlık yoksa (ilk paragraf gibi), basit kart göster
  if (!section.title) {
    return (
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 hover:shadow-md transition-shadow">
        <div className="prose prose-lg max-w-none">
          {renderContent(section.content)}
        </div>
      </div>
    );
  }

  const HeadingTag = section.level === 2 ? 'h2' : section.level === 3 ? 'h3' : section.level === 4 ? 'h4' : 'h5';
  const headingSize = section.level === 2 ? 'text-2xl' : section.level === 3 ? 'text-xl' : section.level === 4 ? 'text-lg' : 'text-base';
  
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow">
      <div className="bg-gradient-to-r from-slate-50 to-blue-50 px-8 py-5 border-b border-gray-100">
        <HeadingTag className={`font-bold text-slate-900 flex items-center gap-3 ${headingSize}`}>
          <span className="w-1.5 h-6 bg-blue-600 rounded-full flex-shrink-0"></span>
          <span>{section.title}</span>
        </HeadingTag>
      </div>
      <div className="p-8 prose prose-lg max-w-none">
        {renderContent(section.content)}
      </div>
    </div>
  );
}

// Parsers
function parseMarkdownToSections(markdown) {
  const lines = markdown.split('\n');
  const sections = [];
  let currentSection = { title: '', content: [], level: 1 };

  lines.forEach(line => {
    const headingMatch = line.match(/^(#{1,6})\s+(.+)$/);
    
    if (headingMatch) {
      if (currentSection.content.length > 0) {
        sections.push({ ...currentSection });
      }
      
      const level = headingMatch[1].length;
      if (level >= 2) {
        currentSection = {
          title: headingMatch[2].trim(),
          content: [],
          level: level
        };
      }
    } else if (line.trim()) {
      currentSection.content.push(line);
    }
  });

  if (currentSection.content.length > 0) {
    sections.push(currentSection);
  }

  return sections.filter(s => s.title || s.content.length > 0);
}

function renderContent(lines) {
  let html = [];
  let inList = false;
  let listItems = [];
  let currentParagraph = '';

  lines.forEach((line, idx) => {
    const trimmed = line.trim();
    
    // Alt başlıklar (###, ####, #####)
    const subHeadingMatch = trimmed.match(/^(#{3,5})\s+(.+)$/);
    if (subHeadingMatch) {
      if (currentParagraph) {
        const formatted = currentParagraph.replace(/\*\*(.+?)\*\*/g, '<strong class="font-semibold text-slate-900">$1</strong>');
        html.push(
          <p key={`p-${idx}`} className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: formatted }} />
        );
        currentParagraph = '';
      }
      
      const level = subHeadingMatch[1].length;
      const HeadingTag = level === 3 ? 'h3' : level === 4 ? 'h4' : 'h5';
      const sizeClass = level === 3 ? 'text-lg' : level === 4 ? 'text-base' : 'text-sm';
      
      html.push(
        <HeadingTag key={`h-${idx}`} className={`${sizeClass} font-bold text-slate-900 mt-8 mb-4 flex items-center gap-2.5`}>
          <span className="w-1 h-5 bg-slate-400 rounded-full"></span>
          {subHeadingMatch[2].trim()}
        </HeadingTag>
      );
      return;
    }
    
    // Liste
    if (trimmed.startsWith('- ') || trimmed.startsWith('• ')) {
      if (currentParagraph) {
        const formatted = currentParagraph.replace(/\*\*(.+?)\*\*/g, '<strong class="font-semibold">$1</strong>');
        html.push(
          <p key={`p-${idx}`} className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: formatted }} />
        );
        currentParagraph = '';
      }
      
      inList = true;
      const text = trimmed.replace(/^[-•]\s*/, '').replace(/\*\*(.+?)\*\*/g, '<strong class="font-semibold">$1</strong>');
      listItems.push(text);
    } else {
      if (inList) {
        html.push(
          <ul key={`list-${idx}`} className="space-y-2.5 my-6 pl-1">
            {listItems.map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-gray-700 leading-relaxed">
                <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                <span dangerouslySetInnerHTML={{ __html: item }} />
              </li>
            ))}
          </ul>
        );
        inList = false;
        listItems = [];
      }
      
      if (trimmed) {
        if (currentParagraph) {
          currentParagraph += ' ' + trimmed;
        } else {
          currentParagraph = trimmed;
        }
      } else if (currentParagraph) {
        const formatted = currentParagraph.replace(/\*\*(.+?)\*\*/g, '<strong class="font-semibold text-slate-900">$1</strong>');
        html.push(
          <p key={`p-${idx}`} className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: formatted }} />
        );
        currentParagraph = '';
      }
    }
  });

  if (inList) {
    html.push(
      <ul key="list-final" className="space-y-2.5 my-6 pl-1">
        {listItems.map((item, i) => (
          <li key={i} className="flex items-start gap-3 text-gray-700 leading-relaxed">
            <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
            <span dangerouslySetInnerHTML={{ __html: item }} />
          </li>
        ))}
      </ul>
    );
  }
  
  if (currentParagraph) {
    const formatted = currentParagraph.replace(/\*\*(.+?)\*\*/g, '<strong class="font-semibold text-slate-900">$1</strong>');
    html.push(
      <p key="p-final" className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: formatted }} />
    );
  }

  return html;
}