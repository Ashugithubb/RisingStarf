
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
    const token = request.cookies.get('token')?.value;
  console.log('🔥 Middleware triggered:', request.nextUrl.pathname);
  console.log(token);
    if(token){
        return NextResponse.next();
    }
  // Just allow the request for now
  return  NextResponse.redirect(new URL('/login', request.url));
}

export const config = {
  matcher: ['/dashboard', '/fees','/test','/test/:path*'],
};
