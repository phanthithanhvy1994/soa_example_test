import Container from '@/components/Container'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Theme from '@/components/Theme'
import { ENDPOINTS } from '@/constants/Endpoint'
import { ApplicationProvider } from '@/shareComponents/ApplicationContext'
import { fetchData } from '@/utils/ApiHelpers'
import { buildPopulateQuery } from '@/utils/Helpers'
import { cookies } from 'next/headers'
import { GlobalSettings } from '../layout'

interface MainLayoutProps {
  children: React.ReactNode
  params: {
    locale: string
  }
}

const getGlobalSettings = async () => {
  const query = [
    buildPopulateQuery('headersMapping', ['items', 'megaItem.items', 'megaItem.thumbnail', 'megaItem.certificates']),
    buildPopulateQuery('Header'),
    buildPopulateQuery('footerMapping', [
      'ourServices.servicesList',
      'contactInfo.contactList.addressList.icon',
      'getInTouch.button',
      'subscribe.input',
      'subscribe.button',
      'followUs.socialList'
    ]),
    buildPopulateQuery('cookies', ['cookies'])
  ]
  return await fetchData<GlobalSettings>(`${ENDPOINTS.GLOBAL_SETTINGS}?${query.join('&')}`, {
    cache: 'no-cache'
  })
}

export default async function MainLayout({ children }: Readonly<MainLayoutProps>) {
  const cookieStore = cookies()
  const initialTheme = cookieStore.get('themeMode')?.value || 'light'
  const locale = cookieStore.get('NEXT_LOCALE')?.value
  const availableLocales = process.env.AVAILABLE_LANGUAGE?.split(',') || []

  const response = await fetch(`https://api.test.soa-dev.net/api/v1/pages?lang=${locale}`, {
    cache: 'no-cache'
  })

  const dataRes = await response.json()
  const jsonData = dataRes[0]

  return (
    <>
      <div>
        <ApplicationProvider locales={availableLocales} locale={locale} data={jsonData}>
          <Theme initialTheme={initialTheme}>
            <Header headersMapping={jsonData.head_menu} />
            {children}
            <Footer {...jsonData.footer}/>
          </Theme>
        </ApplicationProvider>
      </div>
    </>
  )
}
