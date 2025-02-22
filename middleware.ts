import { i18nRouter } from 'next-i18n-router'
import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'
import { Locale } from './types/language'

export async function middleware(request) {
  const res = await fetch(`${process.env.API_URL}/api/i18n/locales`, {
    cache: 'no-cache',
    headers: {
      Authorization: `Bearer ${process.env.BEARER_TOKEN}`
    }
  })

  const locales: Locale[] = await res.json()
  const availableLanguage = process.env.AVAILABLE_LANGUAGE?.split(',') || []
  const availableLocales = locales.filter(l => availableLanguage.includes(l.code))
  const defaultLocale = availableLocales.find(r => r.isDefault)

  const i18nResponse = i18nRouter(request, {
    locales: availableLocales.map(r => r.code),
    defaultLocale: defaultLocale.code || 'en'
  })

  const response = i18nResponse || NextResponse.next()
  const cookiesStore = await cookies()
  const currentLocale = cookiesStore.get('NEXT_LOCALE')?.value

  response.cookies.set('locales', JSON.stringify(availableLocales), { path: '/' })
  if (!currentLocale) response.cookies.set('NEXT_LOCALE', defaultLocale.code || 'en')

  return response
}

// only applies this middleware to files in the app directory
export const config = {
  matcher: '/((?!api|static|.*\\..*|_next).*)'
}
