'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function AdminPanel() {
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState('');
  const [markdownContent, setMarkdownContent] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState('');
  const router = useRouter();

  // Check if user is authenticated
  useEffect(() => {
    const checkAuth = () => {
      const cookie = document.cookie;
      const isAdminLoggedIn = cookie.includes('adminLoggedIn=true');
      if (!isAdminLoggedIn) {
        router.push('/admin/login');
      }
    };
    
    checkAuth();
  }, [router]);

  // Fetch list of countries
  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await fetch('/api/countries');
        const data = await response.json();
        setCountries(data);
      } catch (error) {
        console.error('Error fetching countries:', error);
      }
    };

    // Only fetch if user is logged in
    const cookie = document.cookie;
    const isAdminLoggedIn = cookie.includes('adminLoggedIn=true');
    if (isAdminLoggedIn) {
      fetchCountries();
    }
  }, []);

  // Load markdown content when a country is selected
  const loadCountryContent = async (slug) => {
    if (!slug) return;
    
    setIsLoading(true);
    try {
      const response = await fetch(`/api/countries/${slug}`);
      const data = await response.json();
      setMarkdownContent(data.content);
      setMessage('');
    } catch (error) {
      console.error('Error loading content:', error);
      setMessage('İçerik yüklenirken bir hata oluştu');
    } finally {
      setIsLoading(false);
    }
  };

  // Handle country selection
  const handleCountryChange = (e) => {
    const slug = e.target.value;
    setSelectedCountry(slug);
    loadCountryContent(slug);
  };

  // Save markdown content
  const saveContent = async () => {
    if (!selectedCountry || !markdownContent) return;
    
    setIsLoading(true);
    try {
      const response = await fetch(`/api/countries/${selectedCountry}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ content: markdownContent }),
      });
      
      if (response.ok) {
        setMessage('İçerik başarıyla kaydedildi');
      } else {
        setMessage('İçerik kaydedilirken bir hata oluştu');
      }
    } catch (error) {
      console.error('Error saving content:', error);
      setMessage('İçerik kaydedilirken bir hata oluştu');
    } finally {
      setIsLoading(false);
    }
  };

  // Logout function
  const handleLogout = () => {
    // Remove authentication cookie
    document.cookie = "adminLoggedIn=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT";
    router.push('/admin/login');
  };

  // Check auth status periodically
  useEffect(() => {
    const interval = setInterval(() => {
      const cookie = document.cookie;
      const isAdminLoggedIn = cookie.includes('adminLoggedIn=true');
      if (!isAdminLoggedIn) {
        router.push('/admin/login');
      }
    }, 1000); // Check every second

    return () => clearInterval(interval);
  }, [router]);

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="bg-white rounded-xl shadow-md p-6 mb-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Yönetim Paneli</h1>
            <p className="text-gray-600">Ülke vize bilgilerini düzenleyin</p>
          </div>
          <div className="flex flex-wrap gap-2">
            <Link
              href="/admin/docs"
              className="bg-blue-100 hover:bg-blue-200 text-blue-700 px-4 py-2 rounded-lg flex items-center gap-2"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
              Dokümantasyon
            </Link>
            <button
              onClick={handleLogout}
              className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-lg flex items-center gap-2"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
              </svg>
              Çıkış Yap
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left sidebar - Country selection */}
          <div className="bg-white rounded-xl shadow-md p-6 h-fit">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Ülkeler</h2>
            <div className="space-y-3">
              {countries.map((country) => (
                <button
                  key={country.slug}
                  onClick={() => {
                    setSelectedCountry(country.slug);
                    loadCountryContent(country.slug);
                  }}
                  className={`w-full text-left p-3 rounded-lg transition-colors ${
                    selectedCountry === country.slug
                      ? 'bg-blue-100 text-blue-700 font-medium'
                      : 'hover:bg-gray-100'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <span className="text-lg">{country.flag}</span>
                    <span>{country.name}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Main content - Editor */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-md p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-semibold text-gray-900">
                  {selectedCountry 
                    ? countries.find(c => c.slug === selectedCountry)?.name + ' Vize Bilgileri' 
                    : 'Ülke Seçin'}
                </h2>
                <button
                  onClick={saveContent}
                  disabled={isLoading || !selectedCountry}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
                >
                  {isLoading ? (
                    <>
                      <svg className="animate-spin h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Kaydediliyor...
                    </>
                  ) : (
                    <>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Kaydet
                    </>
                  )}
                </button>
              </div>

              {message && (
                <div className={`mb-4 p-3 rounded-lg ${message.includes('hata') ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700'}`}>
                  {message}
                </div>
              )}

              {selectedCountry ? (
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Markdown İçeriği
                    </label>
                    <textarea
                      value={markdownContent}
                      onChange={(e) => setMarkdownContent(e.target.value)}
                      rows={25}
                      className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 font-mono text-sm"
                      placeholder="Markdown içeriğini buraya yazın..."
                    />
                  </div>
                  
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h3 className="font-medium text-blue-900 mb-2">Düzenleme İpuçları</h3>
                    <ul className="text-sm text-blue-800 space-y-1">
                      <li>• Başlık eklemek için: <code className="bg-blue-100 px-1 rounded"># Başlık</code></li>
                      <li>• Alt başlık eklemek için: <code className="bg-blue-100 px-1 rounded">## Alt Başlık</code></li>
                      <li>• Listeler için: <code className="bg-blue-100 px-1 rounded">- Liste öğesi</code></li>
                      <li>• Kalın yazı için: <code className="bg-blue-100 px-1 rounded">**kalın yazı**</code></li>
                    </ul>
                  </div>
                </div>
              ) : (
                <div className="text-center py-12">
                  <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
                  </svg>
                  <h3 className="mt-2 text-sm font-medium text-gray-900">Ülke Seçin</h3>
                  <p className="mt-1 text-sm text-gray-500">Düzenlemek için listeden bir ülke seçin</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}