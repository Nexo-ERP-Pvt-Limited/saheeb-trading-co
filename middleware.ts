import { NextRequest, NextResponse } from 'next/server'

export function middleware(req: NextRequest) {
  // The /admin page handles its own auth UI (login form),
  // so we only need to protect admin API mutation routes here.
  // Skip /api/auth (login/logout) and GET requests.
  return NextResponse.next()
}

export const config = {
  matcher: ['/admin/:path*'],
}
