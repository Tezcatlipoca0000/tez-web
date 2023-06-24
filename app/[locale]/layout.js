import './globals.css';
import { Alegreya } from 'next/font/google';
import Script from 'next/script';
import { i18n } from '@/i18n-config';

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }))
}

const alegreya = Alegreya({ subsets: ['latin'] })

export const metadata = {
  generator: 'Next.js',
  applicationName: "Tezcatlipoca's Web",
  referrer: 'origin-when-cross-origin',
  title: "Tezcatlipoca's Web",
  description: 'Site for the Web development of Tezcatlipoca',
  keywords: ['Web-Development', 'Web-Design', 'Tezcatlipoca', 'Custom Web Design', 'Custom made Web Sites', 'Tezcatlipoca0000'],
  authors: [{name: 'Tezcatlipoca', email: 'tezcatlipoca0000@gmail.com'}],
  creator: 'Tezcatlipoca0000',
  colorScheme: 'dark',
  themeColor: 'black',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({ children, params }) {
  const script = `if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark')
} else {
    document.documentElement.classList.remove('dark')
}`;
  return (
    <html lang={params.lang}>
      <head>
        <Script type='text/javascript' dangerouslySetInnerHTML={{__html: script}}/>
      </head>
      <body className={`${alegreya.className} w-screen h-screen`}> 
        {children}
      </body>
    </html>
  )
}
