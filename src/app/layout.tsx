import { ClerkProvider } from '@clerk/nextjs'
import { Analytics } from '@vercel/analytics/react'
import { Josefin_Sans } from 'next/font/google'
import './globals.css'

const josefin = Josefin_Sans({
  subsets: ['latin'],
})

export const metadata = {
  title: 'Todo',
  description: 'Simple Todo App written in NextJS',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={josefin.className}>
          {children}
          <Analytics />
        </body>
      </html>
    </ClerkProvider>
  )
}
