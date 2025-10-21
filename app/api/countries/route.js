import fs from 'fs';
import path from 'path';

const countriesDirectory = path.join(process.cwd(), 'app/data/countries');

// Helper function to check authentication
function isAuthenticated(request) {
  const cookieHeader = request.headers.get('cookie');
  return cookieHeader && cookieHeader.includes('adminLoggedIn=true');
}

// GET /api/countries - List all countries
export async function GET(request) {
  // Check authentication
  if (!isAuthenticated(request)) {
    return new Response(JSON.stringify({ error: 'Yetkisiz erişim' }), {
      status: 401,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }

  try {
    const files = fs.readdirSync(countriesDirectory);
    const countries = files
      .filter(file => file.endsWith('.md'))
      .map(file => {
        const slug = file.replace(/\.md$/, '');
        // Extract country name from slug
        const name = slug
          .replace('-vizesi', '')
          .replace(/-/g, ' ')
          .replace(/\b\w/g, char => char.toUpperCase());
        
        // Simple flag mapping (you might want to improve this)
        const flagMap = {
          'almanya': '🇩🇪',
          'amerika': '🇺🇸',
          'fransa': '🇫🇷',
          'hollanda': '🇳🇱',
          'ispanya': '🇪🇸',
          'italya': '🇮🇹',
          'ingiltere': '🇬🇧',
          'kanada': '🇨🇦',
          'isvicre': '🇨🇭',
          'yunanistan': '🇬🇷',
          'avusturya': '🇦🇹',
          'belcika': '🇧🇪',
          'portekiz': '🇵🇹',
          'danimarka': '🇩🇰',
          'norvec': '🇳🇴',
          'isvec': '🇸🇪',
          'finlandiya': '🇫🇮',
          'polonya': '🇵🇱',
          'cek-cumhuriyeti': '🇨🇿',
          'macaristan': '🇭🇺',
          'romanya': '🇷🇴',
          'bulgaristan': '🇧🇬',
          'hirvatistan': '🇭🇷',
          'slovenya': '🇸🇮',
          'slovakya': '🇸🇰',
          'litvanya': '🇱🇹',
          'letonya': '🇱🇻',
          'estonya': '🇪🇪',
          'malta': '🇲🇹',
          'luksemburg': '🇱🇺',
          'lihtenstayn': '🇱🇮',
          'cezayir': '🇩🇿',
          'dubai': '🇦🇪',
          'hindistan': '🇮🇳'
        };
        
        const countryKey = slug.replace('-vizesi', '');
        const flag = flagMap[countryKey] || '🏳';
        
        return { slug, name, flag };
      });
    
    return new Response(JSON.stringify(countries), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Ülkeler listelenirken hata oluştu' }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
}