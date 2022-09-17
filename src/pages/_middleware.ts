import { NextRequest, NextResponse } from 'next/server'

const PUBLIC_FILE = /\.(.*)$/

export function middleware(req: NextRequest) {
  if (
    (req.nextUrl.locale != req.nextUrl.defaultLocale && PUBLIC_FILE.test(req.nextUrl.pathname))
    ||
    (req.nextUrl.pathname.includes("/en/") || req.nextUrl.pathname.includes("/de/"))
  ) {
    const url = req.nextUrl;

    url.pathname = `/404`;
    return NextResponse.rewrite(url);
  }
}