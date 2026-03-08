import createMiddleware from 'next-intl/middleware';
import {routing} from './i18n/routing';

export default createMiddleware(routing);

export const config = {
  // Match only internationalized pathnames
  // Except for public files, API, next internals, etc.
  matcher: ['/', '/(tr|en|de|ar)/:path*', '/((?!_next|_vercel|.*\\..*).*)']
};
