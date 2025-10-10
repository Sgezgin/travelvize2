// app/ulkeler/[slug]/page.js
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { notFound } from 'next/navigation';
import { Calendar, Clock, FileText, Euro, CheckCircle, Phone, ArrowLeft, BadgeCheck } from 'lucide-react';
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
    <div className="min-h-screen bg-white">
      
      {/* Hero Section - Daha Kurumsal */}
      <div className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }}></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          
          <Link 
            href="/ulkeler"
            className="inline-flex items-center gap-2 text-blue-200 hover:text-white mb-8 transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span className="text-sm font-medium uppercase tracking-wider">Geri Dön</span>
          </Link>
          
          <div className="flex items-center gap-8 mb-12">
            <div className="w-24 h-24 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center text-5xl border border-white/20">
              {frontmatter.flag}
            </div>
            <div className="flex-1">
              <div className="inline-flex items-center gap-2 bg-blue-500/20 border border-blue-400/30 backdrop-blur-sm px-3 py-1 rounded-full mb-3">
                <BadgeCheck className="w-4 h-4 text-blue-300" />
                <span className="text-xs font-semibold text-blue-100 uppercase tracking-wide">{frontmatter.visaType}</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-2 tracking-tight">
                {frontmatter.title}
              </h1>
              <p className="text-blue-200 text-lg">Profesyonel Vize Danışmanlığı ve Başvuru Hizmetleri</p>
            </div>
          </div>

          {/* Quick Stats - Daha Profesyonel */}
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
              
              {/* Başvuru Bilgileri - Daha Temiz */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                <div className="bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-4">
                  <div className="flex items-center gap-3 text-white">
                    <CheckCircle className="w-5 h-5" />
                    <h3 className="text-lg font-semibold">Başvuru Bilgileri</h3>
                  </div>
                </div>
                <div className="p-6 space-y-4">
                  <InfoRow label="Ülke" value={frontmatter.country} />
                  <InfoRow label="Vize Türü" value={frontmatter.visaType} />
                  <InfoRow label="İşlem Süresi" value={frontmatter.processingTime} />
                  <InfoRow label="Geçerlilik" value={frontmatter.validityPeriod} />
                  <InfoRow label="Giriş Türü" value={frontmatter.entryType} />
                </div>
              </div>

        

              {/* CTA - Daha Kurumsal */}
              <div className="bg-gradient-to-br from-blue-600 to-indigo-700 text-white rounded-xl shadow-lg overflow-hidden">
                <div className="p-6 text-center">
                  <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Phone className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Profesyonel Destek</h3>
                  <p className="text-blue-100 text-sm mb-6 leading-relaxed">
                    Uzman danışmanlarımız başvuru sürecinizde size yardımcı olmak için hazır
                  </p>
                  <button className="w-full bg-white text-blue-700 font-semibold py-3.5 px-6 rounded-lg hover:bg-blue-50 transition-all hover:shadow-xl flex items-center justify-center gap-2 group">
                    <Phone className="w-4 h-4 group-hover:rotate-12 transition-transform" />
                    <span>İletişime Geçin</span>
                  </button>
                </div>
              </div>

              {/* Son Güncelleme - Minimal */}
              <div className="bg-gray-50 rounded-lg border border-gray-200 p-4 text-center">
                <p className="text-xs text-gray-500 mb-1">Son Güncelleme</p>
                <p className="text-sm font-semibold text-gray-900">
                  {new Date(frontmatter.lastUpdate).toLocaleDateString('tr-TR', { 
                    day: 'numeric', 
                    month: 'long', 
                    year: 'numeric' 
                  })}
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
    <div className="bg-white/10 backdrop-blur-md rounded-xl p-5 border border-white/20 hover:bg-white/15 transition-all group">
      <div className="text-blue-200 mb-3 group-hover:scale-110 transition-transform">{icon}</div>
      <p className="text-xs text-blue-200 mb-1.5 font-medium uppercase tracking-wider">{label}</p>
      <p className="text-xl font-bold text-white">{value}</p>
    </div>
  );
}

function InfoRow({ label, value }) {
  return (
    <div className="flex justify-between items-start gap-4 py-2.5">
      <span className="text-sm text-gray-500 font-medium">{label}</span>
      <span className="text-sm text-gray-900 font-semibold text-right">{value}</span>
    </div>
  );
}

function FeeRow({ label, value }) {
  return (
    <div className="flex justify-between items-center bg-white/5 rounded-lg px-4 py-3 border border-white/10">
      <span className="text-sm text-gray-200 font-medium">{label}</span>
      <span className="text-xl font-bold text-white">{value}</span>
    </div>
  );
}

function ContentCard({ section }) {
  // Eğer başlık yoksa (ilk paragraf gibi), basit kart göster
  if (!section.title) {
    return (
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 hover:shadow-md transition-shadow">
        <div className="prose prose-lg max-w-none">
          {renderContent(section.content)}
        </div>
      </div>
    );
  }

  const HeadingTag = section.level === 2 ? 'h2' : section.level === 3 ? 'h3' : section.level === 4 ? 'h4' : 'h5';
  const headingSize = section.level === 2 ? 'text-2xl' : section.level === 3 ? 'text-xl' : section.level === 4 ? 'text-lg' : 'text-base';
  
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow">
      <div className="bg-gradient-to-r from-slate-50 to-blue-50 px-8 py-5 border-b border-gray-100">
        <HeadingTag className={`font-bold text-slate-900 flex items-center gap-3 ${headingSize}`}>
          <span className="w-1 h-6 bg-blue-600 rounded-full flex-shrink-0"></span>
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
        const formatted = currentParagraph.replace(/\*\*(.+?)\*\*/g, '<strong class="font-semibold text-slate-900">$1</strong>');
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