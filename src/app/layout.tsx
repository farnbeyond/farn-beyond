import './globals.css'
import type { Metadata } from 'next'
import { Lato } from 'next/font/google'
import Hero from '@/components/layout/Hero'
import { client } from '@/lib/contentful/client'
import Footer from '@/components/layout/Footer'

const lato = Lato({ weight: '400', subsets: ['latin'] })

const getSiteData = async () => {
  const res = await client.getEntries({ content_type: 'site', 'fields.title': "Far'n Beyond" })
  console.log('🌈RES', res)
  return res.items[0]
}

export const metadata: Metadata = {
  title: "Far'n Beyond",
  description: 'Melodic metal from Finland since 2002',
}

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const siteData = await getSiteData()

  return (
    <html lang="en">
      <body className={lato.className}>
        <Hero siteData={siteData} />

        <main className="max-w-content w-content mx-auto px-6 sm:px-8 py-16">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
