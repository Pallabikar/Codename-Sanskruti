import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const host = request.headers.get('host') || '';

  // Redirect any request made to *.vercel.app directly to the official domain www.sanskruti.ind.in
  if (host.includes('vercel.app')) {
    const targetUrl = new URL(request.nextUrl.pathname + request.nextUrl.search, 'https://www.sanskruti.ind.in');
    return NextResponse.redirect(targetUrl, { status: 301 });
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for internal static assets or API routes if needed.
     */
    '/((?!api|_next/static|_next/image|favicon.ico|icon.png).*)',
  ],
};
