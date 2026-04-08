import type { Metadata } from 'next'
import { Inter, Bodoni_Moda } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({
  subsets: ["latin"],
  variable: '--font-inter'
});

const bodoni = Bodoni_Moda({
  subsets: ["latin"],
  weight: ["900"],
  style: ["italic"],
  variable: '--font-bodoni'
});

export const metadata: Metadata = {
  title: 'STIQY — Retention Marketing Agency',
  description: 'We build email, SMS, and loyalty programs for eCommerce brands that keep customers coming back — and spending more.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${bodoni.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
