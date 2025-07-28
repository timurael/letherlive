import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  locales: ['tr', 'en', 'de'],
  defaultLocale: 'en'
});

export const config = {
  matcher: ['/', '/(tr|en|de)/:path*', '/((?!_next|_vercel|.*\\..*).*)']
};