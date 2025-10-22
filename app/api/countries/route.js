import fs from 'fs';
import path from 'path';
import sharedCountries from '../../data/sharedCountries';

const countriesDirectory = path.join(process.cwd(), 'app/data/countries');

// Helper function to check authentication
function isAuthenticated(request) {
  const cookieHeader = request.headers.get('cookie');
  return cookieHeader && cookieHeader.includes('adminLoggedIn=true');
}

// Helper function to determine if request is from homepage
function isPublicRequest(request) {
  const referer = request.headers.get('referer') || '';
  // Allow public access for homepage requests
  return referer.includes('/page') || referer.includes('localhost:') || referer === '';
}

// GET /api/countries - List all countries
export async function GET(request) {
  try {
    // Return the shared country data
    return new Response(JSON.stringify(sharedCountries), {
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
