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
import ActiveTableOfContents from '../../components/ActiveTableOfContents';

// Country images data
const countryImages = {
  'almanya-vizesi': "/almanya.avif",
  'fransa-vizesi': "/fransa.avif",
  'hollanda-vizesi': "/hollanda.avif",
  'ispanya-vizesi': "/ispanya.avif",
  'italya-vizesi': "/italya.avif",
  'amerika-vizesi': "/amerika.avif",
  'ingiltere-vizesi': "/ingiltere.avif",
  'kanada-vizesi': "/kanada.avif",
  'isvicre-vizesi': "/isvicre.avif",
  'yunanistan-vizesi': "/yunanistan.avif",
  'avusturya-vizesi': "/avusturya.avif",
  'belcika-vizesi': "/belcika.avif",
  'portekiz-vizesi': "/portekiz.avif",
  'danimarka-vizesi': "/danimarka.avif",
  'norvec-vizesi': "/norvec.avif",
  'isvec-vizesi': "/isvec.avif",
  'finlandiya-vizesi': "/finlandia.avif",
  'polonya-vizesi': "/polonya.avif",
  'cek-cumhuriyeti-vizesi': "/cek-cumhuriyeti.avif",
  'macaristan-vizesi': "/macaristan.avif",
  'romanya-vizesi': "/romanya.avif",
  'bulgaristan-vizesi': "/bulgaristan.avif",
  'hirvatistan-vizesi': "/hirvatistan.avif",
  'slovenya-vizesi': "/slovenya.avif",
  'slovakya-vizesi': "/slovakya.avif",
  'litvanya-vizesi': "/litvanya.avif",
  'letonya-vizesi': "/letonya.avif",
  'estonya-vizesi': "/estonya.avif",
  'malta-vizesi': "/malta.avif",
  'luksemburg-vizesi': "/luksemburg.avif",
  'lihtenstayn-vizesi': "/lihtenstayn.avif",
};

const countriesDirectory = path.join(process.cwd(), 'app/data/countries');

function getCountryData(slug) {
  try {
    const fullPath = path.join(countriesDirectory, `${slug}.md`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);
    return { frontmatter: data, content: content, slug: slug };
  } catch (error) {
    // Return default data when MD file doesn't exist
    return {
      frontmatter: {
        title: slug.replace('-vizesi', '').replace(/-/g, ' '),
        country: slug.replace('-vizesi', '').replace(/-/g, ' '),
        flag: '🏳',
        visaType: 'Vize Bilgileri',
        processingTime: 'Güncelleniyor',
        validityPeriod: 'Güncelleniyor',
        entryType: 'Güncelleniyor',
        image: '',
        fees: {
          adult: 'Güncelleniyor',
          child: 'Güncelleniyor',
          service: 'Güncelleniyor'
        },
        lastUpdate: new Date().toISOString().split('T')[0]
      },
      content: '',
      slug: slug,
      fileNotFound: true
    };
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
  // Removed notFound() to handle missing MD files gracefully

  const { frontmatter, content, fileNotFound } = countryData;
  const sections = fileNotFound ? [{
    title: null,
    content: ['<div class="corporate-message"><div class="icon">&#128221;</div><div><h3>Bilgiler Güncelleniyor</h3><p>Evraklar hakkında detaylı bilgi ve başvuru süreçleri için iletişim sayfamızdan bize ulaşabilirsiniz. Profesyonel danışman ekibimiz, vize başvurunuzda size yardımcı olmak için hazır.</p><a href="/#iletisim" class="cta-button" style="color:white">İletişime Geçin</a></div></div>'],
    level: 2
  }] : parseMarkdownToSections(content);

  // Get country image
  const countryImage = countryImages[slug] || frontmatter.image || "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80";

  // Get all countries for sidebar
  const allCountries = getAllCountries();
  const relatedCountries = allCountries
    .filter(country => country.slug !== slug)
    .sort(() => 0.5 - Math.random())
    .slice(0, 5);

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
                  className="h-54 w-auto transition-transform duration-300 group-hover:scale-105"
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
                  <span>Sizi Arayalım</span>
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
        {/* <div className="bg-gradient-to-r from-slate-50 to-blue-50 py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <StatCard icon={<Clock className="w-5 h-5" />} label="İşlem Süresi" value={frontmatter.processingTime} />
              <StatCard icon={<Calendar className="w-5 h-5" />} label="Geçerlilik Süresi" value={frontmatter.validityPeriod} />
              <StatCard icon={<FileText className="w-5 h-5" />} label="Giriş Türü" value={frontmatter.entryType} />
              <StatCard icon={<Euro className="w-5 h-5" />} label="Başlangıç Ücreti" value={frontmatter.fees?.adult || 'Değişken'} />
            </div>
          </div>
        </div> */}

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid lg:grid-cols-3 gap-12">

            {/* Sol: İçerik */}
            <div className="lg:col-span-2 space-y-8">
              {/* Custom H1 styling for the main title */}
              <h1 className="text-4xl font-bold text-slate-900 mb-8 pb-4 border-b-2 border-blue-600">
                {frontmatter.title}
              </h1>
              {sections.map((section, idx) => (
                <ContentCard key={idx} section={section} />
              ))}
            </div>

            {/* Sağ: Sidebar */}
            <div className="lg:col-span-1">
              <ActiveTableOfContents sections={sections} relatedCountries={relatedCountries} frontmatter={frontmatter} />
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

// Parsers
function parseMarkdownToSections(markdown) {
  // Remove frontmatter if present
  let content = markdown;
  if (content.startsWith('---')) {
    const frontmatterEnd = content.indexOf('---', 3);
    if (frontmatterEnd !== -1) {
      content = content.substring(frontmatterEnd + 3).trim();
    }
  }

  const lines = content.split('\n');
  const sections = [];
  let currentSection = null;
  let firstHeadingProcessed = false;

  lines.forEach((line, index) => {
    // Remove carriage returns and trim
    const cleanLine = line.replace(/\r$/, '').trim();

    // Check for any heading (including H1)
    const headingMatch = cleanLine.match(/^(#{1,6})\s+(.+)$/);

    if (headingMatch) {
      // Skip the first H1 heading as it's the main title
      if (!firstHeadingProcessed && headingMatch[1].length === 1) {
        firstHeadingProcessed = true;
        return;
      }

      // Save previous section if it exists
      if (currentSection) {
        sections.push(currentSection);
      }

      const level = headingMatch[1].length;
      currentSection = {
        title: headingMatch[2].trim(),
        content: [],
        level: level
      };
    } else if (currentSection && cleanLine) {
      // Add content to current section
      currentSection.content.push(cleanLine);
    } else if (currentSection && !cleanLine && currentSection.content.length > 0) {
      // Add empty line to preserve paragraph breaks
      currentSection.content.push('');
    } else if (!currentSection && cleanLine && firstHeadingProcessed) {
      // Handle content before first heading (after main title)
      currentSection = {
        title: null,
        content: [cleanLine],
        level: 2
      };
    } else if (!currentSection && !cleanLine && sections.length > 0 && sections[sections.length - 1].content.length > 0) {
      // Add empty line to last section if it exists
      sections[sections.length - 1].content.push('');
    }
  });

  // Don't forget the last section
  if (currentSection) {
    sections.push(currentSection);
  }

  // If no sections were found, create one with all content (excluding main title)
  if (sections.length === 0 && content.trim()) {
    // Filter out the first H1 heading
    const contentLines = lines
      .map(line => line.replace(/\r$/, '').trim())
      .filter(line => {
        const headingMatch = line.match(/^(#{1,6})\s+(.+)$/);
        // Exclude H1 headings
        return !headingMatch || headingMatch[1].length > 1;
      })
      .filter(line => line.trim() !== '');

    if (contentLines.length > 0) {
      sections.push({
        title: null,
        content: contentLines,
        level: 2
      });
    }
  }

  return sections;
}

// Add ContentCard component
function ContentCard({ section }) {
  // Eğer başlık yoksa (ilk paragraf gibi), basit kart göster
  if (!section.title) {
    return (
      <div className="modern-card">
        <div className="modern-card-content">
          <div className="prose prose-lg max-w-none">
            {renderContent(section.content)}
          </div>
        </div>
      </div>
    );
  }

  const HeadingTag = section.level === 2 ? 'h2' : section.level === 3 ? 'h3' : section.level === 4 ? 'h4' : 'h5';
  const headingSize = section.level === 2 ? 'text-2xl md:text-3xl' : section.level === 3 ? 'text-xl md:text-2xl' : section.level === 4 ? 'text-lg md:text-xl' : 'text-base md:text-lg';

  return (
    <div className="modern-card" id={section.title.toLowerCase().replace(/\s+/g, '-')}>
      <div className="modern-card-header">
        <HeadingTag className={`font-bold text-slate-900 flex items-center gap-3 ${headingSize}`}>
          <span className="w-2 h-8 bg-blue-600 rounded-full flex-shrink-0"></span>
          <span>{section.title}</span>
        </HeadingTag>
      </div>
      <div className="modern-card-content">
        <div className="prose prose-lg max-w-none">
          {renderContent(section.content)}
        </div>
      </div>
    </div>
  );
}

function renderContent(lines) {
  if (!lines || lines.length === 0) return null;

  let elements = [];
  let currentParagraph = '';
  let inList = false;
  let listItems = [];

  const flushParagraph = () => {
    if (currentParagraph) {
      // Process bold text
      const formatted = currentParagraph.replace(/\*\*(.*?)\*\*/g, '<strong class="font-semibold text-slate-900">$1</strong>');
      elements.push(
        <p key={`p-${elements.length}`} className="text-gray-700 leading-relaxed mb-5 text-base md:text-lg corporate-gray" dangerouslySetInnerHTML={{ __html: formatted }} />
      );
      currentParagraph = '';
    }
  };

  const flushList = () => {
    if (inList && listItems.length > 0) {
      elements.push(
        <ul key={`list-${elements.length}`} className="space-y-3 my-6 pl-0">
          {listItems.map((item, i) => (
            <li key={i} className="flex items-start gap-3 text-gray-700 leading-relaxed text-base md:text-lg corporate-gray pl-6 relative">
              <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2.5 flex-shrink-0 absolute left-0 top-2.5"></span>
              <span dangerouslySetInnerHTML={{ __html: item }} />
            </li>
          ))}
        </ul>
      );
      listItems = [];
    }
    inList = false;
  };

  lines.forEach((line, idx) => {
    // Skip completely empty lines unless we need to break a paragraph
    if (!line.trim()) {
      if (currentParagraph) {
        flushParagraph();
      }
      return;
    }

    const trimmed = line.trim();

    // Check for H1 headings and skip them (they should be the main title only)
    const h1Match = trimmed.match(/^(#{1})\s+(.+)$/);
    if (h1Match) {
      // Skip H1 headings as they are already displayed as the main title
      return;
    }

    // Check for H2 headings (##)
    const h2Match = trimmed.match(/^(#{2})\s+(.+)$/);
    if (h2Match) {
      // Flush any pending content before the heading
      flushParagraph();
      flushList();

      elements.push(
        <h2 key={`h-${elements.length}`} className="text-2xl md:text-3xl font-bold text-slate-900 mt-10 mb-5 flex items-center gap-3 corporate-dark">
          <span className="w-2 h-8 bg-blue-600 rounded-full flex-shrink-0"></span>
          <span>{h2Match[2].trim()}</span>
        </h2>
      );
      return;
    }

    // Check for subheadings (###, ####, etc.)
    const subHeadingMatch = trimmed.match(/^(#{3,6})\s+(.+)$/);
    if (subHeadingMatch) {
      // Flush any pending content before the heading
      flushParagraph();
      flushList();

      const level = subHeadingMatch[1].length;
      const HeadingTag = level === 3 ? 'h3' : level === 4 ? 'h4' : level === 5 ? 'h5' : 'h6';
      const sizeClass = level === 3 ? 'text-xl md:text-2xl' : level === 4 ? 'text-lg md:text-xl' : 'text-base md:text-lg';

      elements.push(
        <HeadingTag key={`h-${elements.length}`} className={`${sizeClass} font-bold text-slate-900 mt-10 mb-5 flex items-center gap-3 corporate-dark`}>
          <span className="w-2 h-2 bg-blue-600 rounded-full flex-shrink-0"></span>
          <span>{subHeadingMatch[2].trim()}</span>
        </HeadingTag>
      );
      return;
    }

    // Check for list items
    if (trimmed.startsWith('- ') || trimmed.startsWith('• ')) {
      // Flush paragraph before starting a list
      flushParagraph();

      inList = true;
      // Process bold text in list items
      const text = trimmed.replace(/^[-•]\s*/, '').replace(/\*\*(.*?)\*\*/g, '<strong class="font-semibold text-slate-900">$1</strong>');
      listItems.push(text);
    } else {
      // Regular paragraph text
      // If we were in a list, flush it first
      if (inList) {
        flushList();
      }

      // Add to current paragraph (with space if needed)
      if (currentParagraph) {
        currentParagraph += ' ' + line.trim();
      } else {
        currentParagraph = line.trim();
      }
    }
  });

  // Flush any remaining content
  flushParagraph();
  flushList();

  return elements;
}

// Add this function to get all countries
function getAllCountries() {
  // Import the shared country data
  const { sharedCountries } = require('../../data/sharedCountries');
  return sharedCountries;
}
