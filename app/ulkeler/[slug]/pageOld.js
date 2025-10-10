// app/ulkeler/[slug]/page.js
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { notFound } from 'next/navigation';
import { Calendar, Clock, FileText, Euro, CheckCircle, AlertCircle, Phone, Mail, MapPin, Download, Share2, Bookmark, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

// Markdown dosyalarının yolu
const countriesDirectory = path.join(process.cwd(), 'app/data/countries');

// Markdown dosyasını oku
function getCountryData(slug) {
  try {
    const fullPath = path.join(countriesDirectory, `${slug}.md`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);
    
    return {
      frontmatter: data,
      content: content,
      slug: slug
    };
  } catch (error) {
    return null;
  }
}

// Tüm ülkelerin slug'larını al (static generation için)
export async function generateStaticParams() {
  const files = fs.readdirSync(countriesDirectory);
  return files
    .filter(file => file.endsWith('.md'))
    .map(file => ({
      slug: file.replace(/\.md$/, '')
    }));
}

// Metadata
export async function generateMetadata({ params }) {
  const countryData = getCountryData(params.slug);
  
  if (!countryData) {
    return {
      title: 'Ülke Bulunamadı'
    };
  }

  return {
    title: `${countryData.frontmatter.title} | TravelVize`,
    description: `${countryData.frontmatter.country} vizesi başvuru süreci, gerekli belgeler ve detaylı bilgiler.`
  };
}

// Ana sayfa komponenti
export default function CountryDetailPage({ params }) {
  const countryData = getCountryData(params.slug);

  if (!countryData) {
    notFound();
  }

  const { frontmatter, content } = countryData;

  // İçeriği bölümlere ayır (## başlıklarına göre)
  const sections = parseMarkdownToSections(content);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <Link 
            href="/ulkeler"
            className="inline-flex items-center gap-2 text-blue-100 hover:text-white mb-6 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Tüm Ülkelere Dön
          </Link>
          
          <div className="flex items-center gap-6 mb-6">
            <div className="text-8xl">{frontmatter.flag}</div>
            <div>
              <h1 className="text-5xl font-bold mb-2">{frontmatter.title}</h1>
              <p className="text-2xl text-blue-100">{frontmatter.visaType}</p>
            </div>
          </div>

          {/* Quick Info Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
            <QuickInfoCard 
              icon={<Clock className="w-6 h-6" />}
              label="İşlem Süresi"
              value={frontmatter.processingTime}
            />
            <QuickInfoCard 
              icon={<Calendar className="w-6 h-6" />}
              label="Geçerlilik"
              value={frontmatter.validityPeriod}
            />
            <QuickInfoCard 
              icon={<FileText className="w-6 h-6" />}
              label="Giriş Türü"
              value={frontmatter.entryType}
            />
            <QuickInfoCard 
              icon={<Euro className="w-6 h-6" />}
              label="Ücret"
              value={frontmatter.fees?.adult || 'Değişken'}
            />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          
          {/* Sol: Ana İçerik */}
          <div className="lg:col-span-2 space-y-8">
            {sections.map((section, index) => (
              <ContentSection 
                key={index}
                title={section.title}
                content={section.content}
                level={section.level}
              />
            ))}
          </div>

          {/* Sağ: Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-8 space-y-6">
              
              {/* Başvuru Bilgileri */}
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <CheckCircle className="w-6 h-6 text-green-600" />
                  Başvuru Bilgileri
                </h3>
                <div className="space-y-4">
                  <InfoItem label="Ülke" value={frontmatter.country} />
                  <InfoItem label="Vize Türü" value={frontmatter.visaType} />
                  <InfoItem label="İşlem Süresi" value={frontmatter.processingTime} />
                  <InfoItem label="Geçerlilik Süresi" value={frontmatter.validityPeriod} />
                  <InfoItem label="Giriş Türü" value={frontmatter.entryType} />
                </div>
              </div>

              {/* Ücretler */}
              {frontmatter.fees && (
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl shadow-lg p-6 border-2 border-blue-200">
                  <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <Euro className="w-6 h-6 text-blue-600" />
                    Vize Ücretleri
                  </h3>
                  <div className="space-y-3">
                    <FeeItem label="Yetişkin" value={frontmatter.fees.adult} />
                    <FeeItem label="Çocuk" value={frontmatter.fees.child} />
                    <div className="pt-3 border-t border-blue-200">
                      <p className="text-sm text-gray-600">
                        {frontmatter.fees.service}
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* İletişim CTA */}
              <div className="bg-gradient-to-br from-green-500 to-emerald-600 text-white rounded-2xl shadow-lg p-6">
                <h3 className="text-xl font-bold mb-2">Hemen Başvurun</h3>
                <p className="text-green-50 mb-4">
                  Uzman ekibimiz size yardımcı olmak için hazır!
                </p>
                <button className="w-full bg-white text-green-600 font-bold py-3 px-6 rounded-xl hover:bg-green-50 transition-colors flex items-center justify-center gap-2">
                  <Phone className="w-5 h-5" />
                  Hemen İletişime Geçin
                </button>
              </div>

              {/* Son Güncelleme */}
              <div className="bg-gray-50 rounded-xl p-4 text-center">
                <p className="text-sm text-gray-600">
                  Son Güncelleme: <strong>{frontmatter.lastUpdate}</strong>
                </p>
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

// Helper Components
function QuickInfoCard({ icon, label, value }) {
  return (
    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
      <div className="text-blue-200 mb-2">{icon}</div>
      <p className="text-sm text-blue-100 mb-1">{label}</p>
      <p className="text-lg font-bold">{value}</p>
    </div>
  );
}

function InfoItem({ label, value }) {
  return (
    <div className="flex justify-between items-center py-2 border-b border-gray-100 last:border-0">
      <span className="text-gray-600 font-medium">{label}</span>
      <span className="text-gray-900 font-semibold">{value}</span>
    </div>
  );
}

function FeeItem({ label, value }) {
  return (
    <div className="flex justify-between items-center">
      <span className="text-gray-700 font-medium">{label}</span>
      <span className="text-2xl font-bold text-blue-600">{value}</span>
    </div>
  );
}

function ContentSection({ title, content, level }) {
  const HeadingTag = `h${Math.min(level + 1, 6)}`;
  
  return (
    <div className="bg-white rounded-2xl shadow-lg p-8">
      {title && (
        <HeadingTag className={`
          font-bold text-gray-900 mb-6 pb-3 border-b-2 border-blue-100
          ${level === 2 ? 'text-3xl' : level === 3 ? 'text-2xl' : 'text-xl'}
        `}>
          {title}
        </HeadingTag>
      )}
      <div 
        className="prose prose-lg max-w-none
          prose-headings:text-gray-900 
          prose-p:text-gray-700 prose-p:leading-relaxed
          prose-ul:list-disc prose-ul:pl-6
          prose-ol:list-decimal prose-ol:pl-6
          prose-li:text-gray-700 prose-li:mb-2
          prose-strong:text-gray-900 prose-strong:font-bold"
        dangerouslySetInnerHTML={{ __html: renderMarkdown(content) }}
      />
    </div>
  );
}

// Markdown parser fonksiyonları
function parseMarkdownToSections(markdown) {
  const lines = markdown.split('\n');
  const sections = [];
  let currentSection = { title: '', content: '', level: 1 };

  lines.forEach(line => {
    // Başlık kontrolü (##, ###, ####)
    const headingMatch = line.match(/^(#{2,4})\s+(.+)$/);
    
    if (headingMatch) {
      // Önceki bölümü kaydet
      if (currentSection.content.trim()) {
        sections.push({ ...currentSection });
      }
      
      // Yeni bölüm başlat
      currentSection = {
        title: headingMatch[2].trim(),
        content: '',
        level: headingMatch[1].length
      };
    } else {
      // İçerik ekle
      currentSection.content += line + '\n';
    }
  });

  // Son bölümü ekle
  if (currentSection.content.trim()) {
    sections.push(currentSection);
  }

  return sections;
}

function renderMarkdown(text) {
  // Basit markdown render (bold, liste, paragraf)
  return text
    .split('\n\n')
    .map(paragraph => {
      // Bold
      paragraph = paragraph.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
      
      // Listeler
      if (paragraph.startsWith('- ') || paragraph.startsWith('• ')) {
        const items = paragraph
          .split('\n')
          .filter(line => line.trim())
          .map(line => {
            const cleaned = line.replace(/^[-•]\s*/, '');
            return `<li>${cleaned}</li>`;
          })
          .join('');
        return `<ul class="space-y-2">${items}</ul>`;
      }
      
      // Numaralı listeler
      if (paragraph.match(/^\d+\.\s/)) {
        const items = paragraph
          .split('\n')
          .filter(line => line.trim())
          .map(line => {
            const cleaned = line.replace(/^\d+\.\s*/, '');
            return `<li>${cleaned}</li>`;
          })
          .join('');
        return `<ol class="space-y-2">${items}</ol>`;
      }
      
      // Normal paragraf
      return `<p class="mb-4">${paragraph}</p>`;
    })
    .join('');
}