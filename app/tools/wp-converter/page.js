"use client";

import React, { useState } from 'react';

export default function WPtoMDConverter() {
  const [url, setUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const [markdown, setMarkdown] = useState('');
  const [error, setError] = useState('');
  const [copied, setCopied] = useState(false);
  const [logs, setLogs] = useState([]);

  const countrySlugs = [
    'almanya-vizesi', 'fransa-vizesi', 'hollanda-vizesi', 'ispanya-vizesi',
    'italya-vizesi', 'amerika-vizesi', 'ingiltere-vizesi', 'kanada-vizesi',
    'isvicre-vizesi', 'yunanistan-vizesi', 'avusturya-vizesi', 'belcika-vizesi',
    'portekiz-vizesi', 'danimarka-vizesi', 'isvec-vizesi', 'norvec-vizesi',
    'finlandiya-vizesi', 'polonya-vizesi', 'cek-cumhuriyeti-vizesi', 
    'macaristan-vizesi', 'slovenya-vizesi', 'slovakya-vizesi', 
    'estonya-vizesi', 'letonya-vizesi', 'litvanya-vizesi', 
    'hirvatistan-vizesi', 'izlanda-vizesi', 'romanya-vizesi',
    'bulgaristan-vizesi', 'malta-vizesi', 'luksemburg-vizesi', 
    'lihtenstayn-vizesi'
  ];

  const addLog = (message, type = 'info') => {
    setLogs(prev => [...prev, { message, type, time: new Date().toLocaleTimeString() }]);
  };

  const parseHTMLContent = (html) => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, 'text/html');
    
    // Slug'ı URL'den al
    const slug = url.split('/').filter(Boolean).pop() || '';
    const countryName = slug.split('-vizesi')[0]
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
    
    // Flag emoji map
    const flagMap = {
      'almanya': '🇩🇪', 'fransa': '🇫🇷', 'hollanda': '🇳🇱', 'ispanya': '🇪🇸',
      'italya': '🇮🇹', 'amerika': '🇺🇸', 'ingiltere': '🇬🇧', 'kanada': '🇨🇦',
      'isvicre': '🇨🇭', 'yunanistan': '🇬🇷', 'avusturya': '🇦🇹', 'belcika': '🇧🇪',
      'portekiz': '🇵🇹', 'danimarka': '🇩🇰', 'isvec': '🇸🇪', 'norvec': '🇳🇴',
      'finlandiya': '🇫🇮', 'polonya': '🇵🇱', 'cek': '🇨🇿', 'macaristan': '🇭🇺',
      'rusya': '🇷🇺', 'irlanda': '🇮🇪', 'hindistan': '🇮🇳'
    };
    
    const flag = flagMap[slug.split('-')[0]] || '🌍';
    
    // Ana içerik alanını bul - WordPress'teki wpb_text_column div'inden al
    const contentDiv = doc.querySelector('.wpb_text_column .wpb_wrapper');
    let mainContent = '';
    
    if (contentDiv) {
      // H4 başlıkları ve içerikleri çıkar
      const headings = contentDiv.querySelectorAll('h4, h5, p, ul, li');
      mainContent = Array.from(headings).map(el => {
        if (el.tagName === 'H4') return `## ${el.textContent.trim()}`;
        if (el.tagName === 'H5') return `### ${el.textContent.trim()}`;
        if (el.tagName === 'P') return el.textContent.trim();
        if (el.tagName === 'UL') {
          const items = Array.from(el.querySelectorAll('li')).map(li => `- ${li.textContent.trim()}`);
          return items.join('\n');
        }
        return '';
      }).filter(Boolean).join('\n\n');
    }
    
    // Vize türünü belirle
    const isSchengen = mainContent.toLowerCase().includes('schengen');
    const visaType = isSchengen ? 'Schengen Vizesi' : 'Ulusal Vize';
    
    // Title'ı al
    const title = doc.querySelector('.vc_tta-panel-title')?.textContent || `${countryName} Vizesi`;
    
    return {
      title: `${countryName} Vizesi`,
      slug,
      countryName,
      flag,
      visaType,
      content: mainContent,
      rawHTML: html
    };
  };

  const generateMarkdown = (data) => {
    const { title, slug, countryName, flag, visaType, content } = data;
    
    return `---
title: "${countryName} Vizesi"
slug: "${slug}"
country: "${countryName}"
flag: "${flag}"
visaType: "${visaType}"
processingTime: "15-30 gün"
validityPeriod: "90 güne kadar"
entryType: "Tek veya Çok Girişli"
image: "/images/countries/${slug}.jpg"
fees:
  adult: "80 EUR"
  child: "40 EUR"
  service: "Danışmanlık ücreti ayrıca"
lastUpdate: "${new Date().toISOString().split('T')[0]}"
---

# ${countryName} Vizesi

${content.substring(0, 500).trim()}...

## Vize Türleri

### Turistik Vize
- 90 güne kadar konaklama
- Schengen bölgesinde serbest dolaşım
- Kısa süreli ziyaretler için

### Ticari Vize
- İş görüşmeleri
- Fuar katılımları
- Kurumsal ziyaretler

## Gerekli Belgeler

### Genel Belgeler
- Pasaport (en az 6 ay geçerli)
- 2 adet biyometrik fotoğraf
- Vize başvuru formu
- Seyahat sağlık sigortası

### Çalışanlar İçin
- İş yerinden izin dilekçesi
- SGK belgesi
- Maaş bordrosu
- Banka hesap dökümü

### İşverenler İçin
- Ticari belgeler
- Vergi levhası
- Şirket evrakları

## Başvuru Süreci

1. **Evrak Hazırlığı**
2. **Randevu Alma**
3. **Başvuru Merkezi Ziyareti**
4. **Konsolosluk Değerlendirmesi**
5. **Sonuç ve Teslim**

## Sıkça Sorulan Sorular

### Başvuru süresi ne kadar?
Ortalama 15-30 gün içinde sonuçlanır.

### Hangi ülkelere gidebilirim?
${visaType} ile ilgili ülkelere seyahat edebilirsiniz.

## İletişim Bilgileri

Daha fazla bilgi için danışmanlık hizmetimizden yararlanabilirsiniz.

---

*Kaynak: ${slug}*
*Son Güncelleme: ${new Date().toLocaleDateString('tr-TR')}*
`;
  };

  const fetchAndConvert = async (targetUrl) => {
    setLoading(true);
    setError('');
    addLog(`🔍 URL çekiliyor: ${targetUrl}`);
    
    try {
      // CORS proxy kullan
      const proxyUrl = `https://api.allorigins.win/raw?url=${encodeURIComponent(targetUrl)}`;
      addLog(`🔄 CORS proxy üzerinden çekiliyor...`);
      const response = await fetch(proxyUrl);
      
      if (!response.ok) {
        throw new Error(`HTTP ${response.status}: ${response.statusText}`);
      }
      
      addLog('✅ Sayfa başarıyla indirildi', 'success');
      
      const html = await response.text();
      addLog('📄 HTML parse ediliyor...');
      
      const parsedData = parseHTMLContent(html);
      addLog(`✨ ${parsedData.countryName} verisi işlendi`, 'success');
      
      const md = generateMarkdown(parsedData);
      setMarkdown(md);
      
      addLog('🎉 Markdown başarıyla oluşturuldu!', 'success');
      
    } catch (err) {
      const errorMsg = `Hata: ${err.message}`;
      setError(errorMsg);
      addLog(errorMsg, 'error');
    } finally {
      setLoading(false);
    }
  };

  const handleConvert = () => {
    if (!url) {
      setError('Lütfen bir URL girin');
      return;
    }
    setLogs([]);
    fetchAndConvert(url);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(markdown);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownload = () => {
    const slug = url.split('/').filter(Boolean).pop() || 'country';
    const filename = `${slug}.md`;
    
    const blob = new Blob([markdown], { type: 'text/markdown' });
    const downloadUrl = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = downloadUrl;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(downloadUrl);
    
    addLog(`💾 ${filename} indirildi`, 'success');
  };

  const handleBulkConvert = async () => {
    setLogs([]);
    addLog(`🚀 ${countrySlugs.length} ülke için toplu dönüştürme başlatılıyor...`);
    
    let allMarkdowns = '';
    
    for (let i = 0; i < countrySlugs.length; i++) {
      const slug = countrySlugs[i];
      const targetUrl = `https://www.travelvize.com/ulkeler/${slug}/`;
      
      addLog(`[${i + 1}/${countrySlugs.length}] ${slug} işleniyor...`);
      
      try {
        await new Promise(resolve => setTimeout(resolve, 2000)); // Rate limiting artırıldı
        const proxyUrl = `https://api.allorigins.win/raw?url=${encodeURIComponent(targetUrl)}`;
        const response = await fetch(proxyUrl);
        const html = await response.text();
        const parsedData = parseHTMLContent(html);
        const md = generateMarkdown(parsedData);
        
        allMarkdowns += `\n\n<!-- ${slug} -->\n${md}\n`;
        
        addLog(`✅ ${slug} tamamlandı`, 'success');
      } catch (err) {
        addLog(`❌ ${slug} başarısız: ${err.message}`, 'error');
      }
    }
    
    setMarkdown(allMarkdowns);
    addLog('🎊 Tüm ülkeler işlendi!', 'success');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 p-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-full mb-4">
            <span className="text-xl">📄</span>
            <span className="font-semibold">WordPress → Markdown Scraper</span>
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            TravelVize.com Scraper
          </h1>
          <p className="text-gray-600">
            WordPress sitenizdeki ülke sayfalarını gerçek zamanlı olarak çekip markdown'a dönüştürür
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-1 space-y-4">
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                WordPress URL
              </label>
              <input
                type="text"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                placeholder="https://www.travelvize.com/ulkeler/almanya-vizesi/"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent mb-3"
              />
              <button
                onClick={handleConvert}
                disabled={loading}
                className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors font-semibold flex items-center justify-center gap-2"
              >
                {loading ? (
                  <>
                    <span className="inline-block animate-spin">⏳</span>
                    Çekiliyor...
                  </>
                ) : (
                  '🔍 URL\'den Çek ve Dönüştür'
                )}
              </button>

              <div className="mt-4 pt-4 border-t border-gray-200">
                <button
                  onClick={handleBulkConvert}
                  disabled={loading}
                  className="w-full px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 disabled:bg-gray-400 transition-colors text-sm font-semibold"
                >
                  🚀 Tüm Ülkeleri Toplu Çek ({countrySlugs.length})
                </button>
              </div>

              {error && (
                <div className="mt-4 p-3 bg-red-50 border border-red-200 rounded-lg flex items-start gap-2">
                  <span className="text-red-600 text-xl">⚠️</span>
                  <span className="text-red-700 text-sm">{error}</span>
                </div>
              )}
            </div>

            {logs.length > 0 && (
              <div className="bg-gray-900 rounded-2xl shadow-lg p-4 max-h-[400px] overflow-y-auto">
                <div className="text-gray-400 text-xs font-mono space-y-1">
                  {logs.map((log, i) => (
                    <div key={i} className={`
                      ${log.type === 'error' ? 'text-red-400' : ''}
                      ${log.type === 'success' ? 'text-green-400' : ''}
                    `}>
                      <span className="text-gray-600">{log.time}</span> {log.message}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="lg:col-span-2">
            {markdown && (
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <div className="bg-gray-800 text-white px-6 py-4 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-xl">📄</span>
                    <span className="font-semibold">Markdown Çıktısı</span>
                  </div>
                  <div className="flex gap-2">
                    <button
                      onClick={handleCopy}
                      className="px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors flex items-center gap-2 text-sm"
                    >
                      <span>{copied ? '✅' : '📋'}</span>
                      {copied ? 'Kopyalandı!' : 'Kopyala'}
                    </button>
                    <button
                      onClick={handleDownload}
                      className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors flex items-center gap-2 text-sm"
                    >
                      <span>💾</span>
                      İndir
                    </button>
                  </div>
                </div>
                <div className="p-6 max-h-[700px] overflow-y-auto">
                  <pre className="text-sm text-gray-800 whitespace-pre-wrap font-mono">
                    {markdown}
                  </pre>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="mt-6 bg-white rounded-2xl shadow-lg p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-4">📝 Nasıl Kullanılır?</h2>
          <div className="grid md:grid-cols-2 gap-4 text-gray-700 text-sm">
            <div>
              <h3 className="font-semibold mb-2">Tek Sayfa İçin:</h3>
              <ol className="list-decimal list-inside space-y-1">
                <li>WordPress URL'sini girin</li>
                <li>"URL'den Çek ve Dönüştür" butonuna tıklayın</li>
                <li>Oluşan markdown'ı kopyalayın veya indirin</li>
                <li><code className="bg-gray-100 px-2 py-0.5 rounded">app/data/countries/</code> klasörüne kaydedin</li>
              </ol>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Tüm Sayfalar İçin:</h3>
              <ol className="list-decimal list-inside space-y-1">
                <li>"Tüm Ülkeleri Toplu Çek" butonuna tıklayın</li>
                <li>İşlem tamamlanana kadar bekleyin</li>
                <li>Tüm markdown dosyalarını indirin</li>
                <li>Her birini ilgili ülke dosyasına kaydedin</li>
              </ol>
            </div>
          </div>

          <div className="mt-4 p-4 bg-yellow-50 rounded-lg border border-yellow-200">
            <p className="text-sm text-yellow-900">
              <strong>⚠️ Not:</strong> CORS politikası nedeniyle bazı siteler doğrudan tarayıcıdan çekilemeyebilir. 
              Bu durumda backend'de bir scraper script kullanmanız gerekebilir.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}