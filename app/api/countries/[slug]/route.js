import fs from 'fs';
import path from 'path';

const countriesDirectory = path.join(process.cwd(), 'app/data/countries');

// Helper function to check authentication
function isAuthenticated(request) {
  const cookieHeader = request.headers.get('cookie');
  return cookieHeader && cookieHeader.includes('adminLoggedIn=true');
}

// GET /api/countries/[slug] - Get country content
export async function GET(request, { params }) {
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
    const { slug } = await params;
    const fullPath = path.join(countriesDirectory, `${slug}.md`);
    
    if (!fs.existsSync(fullPath)) {
      return new Response(JSON.stringify({ error: 'Ülke bulunamadı' }), {
        status: 404,
        headers: {
          'Content-Type': 'application/json',
        },
      });
    }
    
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    
    return new Response(JSON.stringify({ content: fileContents }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'İçerik yüklenirken hata oluştu' }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
}

// PUT /api/countries/[slug] - Update country content
export async function PUT(request, { params }) {
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
    const { slug } = await params;
    const { content } = await request.json();
    
    const fullPath = path.join(countriesDirectory, `${slug}.md`);
    
    // Check if file exists
    if (!fs.existsSync(fullPath)) {
      return new Response(JSON.stringify({ error: 'Ülke bulunamadı' }), {
        status: 404,
        headers: {
          'Content-Type': 'application/json',
        },
      });
    }
    
    // Write the new content
    fs.writeFileSync(fullPath, content, 'utf8');
    
    return new Response(JSON.stringify({ message: 'İçerik başarıyla güncellendi' }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'İçerik güncellenirken hata oluştu' }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
}