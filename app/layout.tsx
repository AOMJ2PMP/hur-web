import './globals.css'
import './clerk.css'
import './prism.css'

import { ClerkProvider } from '@clerk/nextjs'
import { type Metadata } from 'next'

import { ThemeProvider } from '~/app/(main)/ThemeProvider'
import { url } from '~/lib'
import { zhCN } from '~/lib/clerkLocalizations'
import { sansFont } from '~/lib/font'
import { seo } from '~/lib/seo'

export const metadata: Metadata = {
  metadataBase: seo.url,
  title: {
    template: '%s | ENGCMP0200',
    default: seo.title,
  },
  description: seo.description,
  keywords: 'ENGCMP0200,SCUPI,Robyn Najar,AI,Chatbot,Writing',
  themeColor: [
    { media: '(prefers-color-scheme: dark)', color: '#000212' },
    { media: '(prefers-color-scheme: light)', color: '#fafafa' },
  ],
  manifest: '/site.webmanifest',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: {
      default: seo.title,
      template: '%s | ENGCMP0200',
    },
    description: seo.description,
    siteName: 'ENGCMP0200',
    locale: 'zh_CN',
    type: 'website',
    url: 'https://hur-web.vercel.app',
  },
  twitter: {
    site: '@thecalicastle',
    creator: '@thecalicastle',
    card: 'summary_large_image',
    title: seo.title,
    description: seo.description,
  },
  alternates: {
    canonical: url('/'),
    types: {
      'application/rss+xml': [{ url: 'rss', title: 'RSS 订阅' }],
    },
  },
}

// const chatbotId = "cstgQOQ_E7PwrqcDCarHg"
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider localization={zhCN}>
      <html
        lang="zh-CN"
        className={`${sansFont.variable} m-0 h-full p-0 font-sans antialiased`}
        suppressHydrationWarning
      >
        <head>
          
          <script
                type="text/javascript"
                dangerouslySetInnerHTML={{
                  __html: `
                  (function(d, t) {
                    var v = d.createElement(t), s = d.getElementsByTagName(t)[0];
                    v.onload = function() {
                      window.voiceflow.chat.load({
                        verify: { projectID: '64eab651a0d9820008aacb2f' },
                        url: 'https://general-runtime.voiceflow.com',
                        versionID: 'production'
                      });
                    }
                    v.src = "https://cdn.voiceflow.com/widget/bundle.mjs"; v.type = "text/javascript"; s.parentNode.insertBefore(v, s);
                })(document, 'script');
                  `,
                }}
              />
        </head>
        <body className="flex h-full flex-col">
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
        </body>
      {/* <script>
        window.chatbaseConfig = {
          chatbotId
        }
      </script>
      <script
        src="https://www.chatbase.co/embed.min.js" 
        id="cstgQOQ_E7PwrqcDCarHg"
        defer
      ></script> */}
      </html>
    </ClerkProvider>
  )
}