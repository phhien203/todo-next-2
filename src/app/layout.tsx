import './globals.css'
import { Josefin_Sans } from 'next/font/google'
import { ClerkProvider } from '@clerk/nextjs'

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
        <body className={josefin.className}>{children}</body>
      </html>
    </ClerkProvider>
  )
}
