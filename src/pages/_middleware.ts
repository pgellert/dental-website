import { NextRequest, NextResponse } from 'next/server'

const PUBLIC_FILE = /\.(.*)$/

export function middleware(req: NextRequest) {
  if (
    (req.nextUrl.pathname.includes('/en/') || req.nextUrl.pathname.includes('/de/'))
    &&
    PUBLIC_FILE.test(req.nextUrl.pathname)
  ) {
    return
  }
}