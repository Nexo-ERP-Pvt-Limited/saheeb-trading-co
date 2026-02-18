import { NextRequest, NextResponse } from 'next/server'

export function middleware(req: NextRequest) {
  const isAdmin = req.cookies.get('admin')

  if (!isAdmin && req.nextUrl.pathname.startsWith('/admin')) {
    return NextResponse.redirect(new URL('/login', req.url))
  }
}
