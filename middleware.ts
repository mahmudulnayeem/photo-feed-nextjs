import { match } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";
import { NextRequest, NextResponse } from "next/server";

import { i18n } from "@/i18n.config";

function getLocale(request: NextRequest) {
  const acceptedLanguage = request.headers.get("accept-language") ?? undefined;
  const headers = { "accept-language": acceptedLanguage };
  const languages = new Negotiator({ headers }).languages();

  return match(languages, i18n.locales, i18n.defaultLocale); // en or bn
}

export function middleware(request: NextRequest) {
  const pathName = request.nextUrl.pathname;

  const pathNameIsMissingLocale = i18n.locales.every(
    (locale) =>
      !pathName.startsWith(`/${locale}`) && !pathName.startsWith(`/${locale}/`)
  );
  if (pathNameIsMissingLocale) {
    // detect user's preference & redirect with a locale with a path eg: /en/about
    const locale = getLocale(request);

    return NextResponse.redirect(
      new URL(`/${locale}/${pathName}`, request.url)
    );
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|assets|.*\\..*|_next).*)"],
};
