// app/ulkeler/[slug]/page.js
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { notFound } from 'next/navigation';
import { Calendar, Clock, FileText, Euro, CheckCircle, Phone, ArrowLeft, Globe, Users, BadgeCheck } from 'lucide-react';
import Link from 'next/link';

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
  const countryData = getCountryData(params.slug);
  if (!countryData) return { title: 'Ülke Bulunamadı' };
  return {
    title: `${countryData.frontmatter.title} | TravelVize`,
    description: `${countryData.frontmatter.country} vizesi başvuru süreci, gerekli belgeler ve detaylı bilgiler.`
  };
}

export default function CountryDetailPage({ params }) {
  const countryData = getCountryData(params.slug);
  if (!countryData) notFound();

  const { frontmatter, content } = countryData;
  const sections = parseMarkdownToSections(content);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-700 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          
          <Link 
            href="/ulkeler"
            className="inline-flex items-center gap-2 text-blue-100 hover:text-white mb-6 transition-all hover:gap-3 group"
          >
            <ArrowLeft className="w-5 h-5 group-hover:translate-x-[-4px] transition-transform" />
            <span className="font-medium">Tüm Ülkelere Dön</span>
          </Link>
          
          <div className="flex items-start gap-6 mb-8">
            <div className="text-7xl md:text-8xl drop-shadow-lg">{frontmatter.flag}</div>
            <div className="flex-1">
              <h1 className="text-4xl md:text-5xl font-bold mb-3 drop-shadow-md">
                {frontmatter.title}
              </h1>
              <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                <Globe className="w-5 h-5" />
                <span className="text-lg font-semibold">{frontmatter.visaType}</span>
              </div>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <StatCard icon={<Clock className="w-6 h-6" />} label="İşlem Süresi" value={frontmatter.processingTime} />
            <StatCard icon={<Calendar className="w-6 h-6" />} label="Geçerlilik" value={frontmatter.validityPeriod} />
            <StatCard icon={<FileText className="w-6 h-6" />} label="Giriş Türü" value={frontmatter.entryType} />
            <StatCard icon={<Euro className="w-6 h-6" />} label="Ücret" value={frontmatter.fees?.adult || 'Değişken'} />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          
          {/* Sol: İçerik */}
          <div className="lg:col-span-2 space-y-6">
            {sections.map((section, idx) => (
              <ContentCard key={idx} section={section} />
            ))}
          </div>

          {/* Sağ: Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-8 space-y-6">
              
              {/* Başvuru Bilgileri */}
              <div className="bg-white rounded-2xl shadow-xl p-6 border border-gray-100">
                <div className="flex items-center gap-3 mb-6 pb-4 border-b border-gray-100">
                  <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                    <CheckCircle className="w-6 h-6 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Başvuru Bilgileri</h3>
                </div>
                <div className="space-y-4">
                  <InfoRow label="Ülke" value={frontmatter.country} />
                  <InfoRow label="Vize Türü" value={frontmatter.visaType} />
                  <InfoRow label="İşlem Süresi" value={frontmatter.processingTime} />
                  <InfoRow label="Geçerlilik" value={frontmatter.validityPeriod} />
                  <InfoRow label="Giriş Türü" value={frontmatter.entryType} />
                </div>
              </div>

              {/* Ücretler */}
              {frontmatter.fees && (
                <div className="bg-gradient-to-br from-blue-500 to-indigo-600 text-white rounded-2xl shadow-xl p-6">
                  <div className="flex items-center gap-3 mb-6">
                    <Euro className="w-8 h-8" />
                    <h3 className="text-2xl font-bold">Vize Ücretleri</h3>
                  </div>
                  <div className="space-y-4">
                    <FeeRow label="Yetişkin" value={frontmatter.fees.adult} />
                    <FeeRow label="Çocuk" value={frontmatter.fees.child} />
                    <div className="pt-4 mt-4 border-t border-white/30">
                      <p className="text-sm text-blue-100 leading-relaxed">
                        {frontmatter.fees.service}
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* CTA */}
              <div className="bg-gradient-to-br from-green-500 to-emerald-600 text-white rounded-2xl shadow-xl p-6">
                <div className="text-center mb-4">
                  <Users className="w-12 h-12 mx-auto mb-3 opacity-90" />
                  <h3 className="text-2xl font-bold mb-2">Hemen Başvurun</h3>
                  <p className="text-green-100 text-sm">
                    Uzman ekibimiz size yardımcı olmak için hazır!
                  </p>
                </div>
                <button className="w-full bg-white text-green-600 font-bold py-4 px-6 rounded-xl hover:bg-green-50 transition-all hover:scale-105 flex items-center justify-center gap-3 shadow-lg">
                  <Phone className="w-5 h-5" />
                  <span>Hemen İletişime Geçin</span>
                </button>
              </div>

              {/* Son Güncelleme */}
              <div className="bg-gray-100 rounded-xl p-4 text-center border border-gray-200">
                <p className="text-sm text-gray-600">
                  <span className="block text-xs text-gray-500 mb-1">Son Güncelleme</span>
                  <span className="font-bold text-gray-900">{new Date(frontmatter.lastUpdate).toLocaleDateString('tr-TR')}</span>
                </p>
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

// Components
function StatCard({ icon, label, value }) {
  return (
    <div className="bg-white/15 backdrop-blur-md rounded-xl p-4 border border-white/20 hover:bg-white/25 transition-all">
      <div className="text-blue-100 mb-2">{icon}</div>
      <p className="text-xs text-blue-100 mb-1 font-medium">{label}</p>
      <p className="text-lg font-bold text-white">{value}</p>
    </div>
  );
}

function InfoRow({ label, value }) {
  return (
    <div className="flex justify-between items-start gap-4 py-3 border-b border-gray-100 last:border-0">
      <span className="text-sm text-gray-600 font-medium">{label}</span>
      <span className="text-sm text-gray-900 font-bold text-right">{value}</span>
    </div>
  );
}

function FeeRow({ label, value }) {
  return (
    <div className="flex justify-between items-center bg-white/10 rounded-lg p-3">
      <span className="text-white font-medium">{label}</span>
      <span className="text-2xl font-bold text-white">{value}</span>
    </div>
  );
}

function ContentCard({ section }) {
  // Eğer başlık yoksa (ilk paragraf gibi), basit kart göster
  if (!section.title) {
    return (
      <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 hover:shadow-xl transition-shadow">
        <div className="prose prose-lg max-w-none">
          {renderContent(section.content)}
        </div>
      </div>
    );
  }

  const HeadingTag = section.level === 2 ? 'h2' : section.level === 3 ? 'h3' : section.level === 4 ? 'h4' : 'h5';
  const headingSize = section.level === 2 ? 'text-3xl' : section.level === 3 ? 'text-2xl' : section.level === 4 ? 'text-xl' : 'text-lg';
  const barHeight = section.level === 2 ? 'h-10' : section.level === 3 ? 'h-8' : 'h-6';
  
  return (
    <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 hover:shadow-xl transition-shadow">
      <HeadingTag className={`font-bold text-gray-900 mb-6 pb-3 border-b-2 border-blue-100 flex items-center gap-3 ${headingSize}`}>
        <span className={`w-1.5 ${barHeight} bg-gradient-to-b from-blue-500 to-indigo-600 rounded-full flex-shrink-0`}></span>
        <span>{section.title}</span>
      </HeadingTag>
      <div className="prose prose-lg max-w-none">
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
    // Tüm başlık seviyelerini yakala (# ile ###### arası)
    const headingMatch = line.match(/^(#{1,6})\s+(.+)$/);
    
    if (headingMatch) {
      // Önceki bölümü kaydet
      if (currentSection.content.length > 0) {
        sections.push({ ...currentSection });
      }
      
      // Yeni bölüm - sadece ## ve üstünü göster (# ana başlığı atla)
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

  // İlk boş başlığı filtrele
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
      // Önceki paragrafı bitir
      if (currentParagraph) {
        const formatted = currentParagraph.replace(/\*\*(.+?)\*\*/g, '<strong class="font-bold text-gray-900">$1</strong>');
        html.push(
          <p key={`p-${idx}`} className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: formatted }} />
        );
        currentParagraph = '';
      }
      
      const level = subHeadingMatch[1].length;
      const HeadingTag = level === 3 ? 'h3' : level === 4 ? 'h4' : 'h5';
      const sizeClass = level === 3 ? 'text-xl' : level === 4 ? 'text-lg' : 'text-base';
      
      html.push(
        <HeadingTag key={`h-${idx}`} className={`${sizeClass} font-bold text-gray-900 mt-8 mb-4 flex items-center gap-2`}>
          <span className="w-1 h-6 bg-blue-500 rounded-full"></span>
          {subHeadingMatch[2].trim()}
        </HeadingTag>
      );
      return;
    }
    
    // Liste
    if (trimmed.startsWith('- ') || trimmed.startsWith('• ')) {
      // Önceki paragrafı bitir
      if (currentParagraph) {
        const formatted = currentParagraph.replace(/\*\*(.+?)\*\*/g, '<strong class="font-bold text-gray-900">$1</strong>');
        html.push(
          <p key={`p-${idx}`} className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: formatted }} />
        );
        currentParagraph = '';
      }
      
      inList = true;
      const text = trimmed.replace(/^[-•]\s*/, '').replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
      listItems.push(text);
    } else {
      // Liste bitişi
      if (inList) {
        html.push(
          <ul key={`list-${idx}`} className="space-y-3 my-6 ml-4">
            {listItems.map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-gray-700 leading-relaxed">
                <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                <span dangerouslySetInnerHTML={{ __html: item }} />
              </li>
            ))}
          </ul>
        );
        inList = false;
        listItems = [];
      }
      
      // Paragraf biriktir (boş satırda bitir)
      if (trimmed) {
        if (currentParagraph) {
          currentParagraph += ' ' + trimmed;
        } else {
          currentParagraph = trimmed;
        }
      } else if (currentParagraph) {
        // Boş satır - paragrafı bitir
        const formatted = currentParagraph.replace(/\*\*(.+?)\*\*/g, '<strong class="font-bold text-gray-900">$1</strong>');
        html.push(
          <p key={`p-${idx}`} className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: formatted }} />
        );
        currentParagraph = '';
      }
    }
  });

  // Son liste
  if (inList) {
    html.push(
      <ul key="list-final" className="space-y-3 my-6 ml-4">
        {listItems.map((item, i) => (
          <li key={i} className="flex items-start gap-3 text-gray-700 leading-relaxed">
            <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
            <span dangerouslySetInnerHTML={{ __html: item }} />
          </li>
        ))}
      </ul>
    );
  }
  
  // Son paragraf
  if (currentParagraph) {
    const formatted = currentParagraph.replace(/\*\*(.+?)\*\*/g, '<strong class="font-bold text-gray-900">$1</strong>');
    html.push(
      <p key="p-final" className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: formatted }} />
    );
  }

  return html;
}