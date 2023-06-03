import Navbar from '@/components/Navbar'
import './globals.css'
import { Open_Sans } from 'next/font/google'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsApp'

// const inter = Inter({ subsets: ['latin'] })
const openSans = Open_Sans({
  weight: ['300', '400', '500', '600', '700', '800'],
  subsets: ['latin'],
})
export const metadata = {
  title: 'Aesthetic Dental',
  description: 'Aesthetic Dental clinic in islamabad G8 Markaz',
  icons: {
    icon: '/favicon.ico',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en' className='scroll-smooth'>
      <body className={`${openSans.className} scroll-smooth relative`}>
        <WhatsAppButton />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
