import { NextResponse } from 'next/server';

export function middleware(request) {
  // Check if the request is for admin routes
  if (request.nextUrl.pathname.startsWith('/admin')) {
    // Skip authentication for login page
    if (request.nextUrl.pathname === '/admin/login') {
      return NextResponse.next();
    }
    
    // For other admin routes, check authentication via cookie
    const cookieHeader = request.headers.get('cookie');
    const isAdminLoggedIn = cookieHeader && cookieHeader.includes('adminLoggedIn=true');
    
    if (!isAdminLoggedIn) {
      // Redirect to login page
      const url = request.nextUrl.clone();
      url.pathname = '/admin/login';
      return NextResponse.redirect(url);
    }
  }
  
  return NextResponse.next();
}

export const config = {
  matcher: ['/admin/:path*'],
};