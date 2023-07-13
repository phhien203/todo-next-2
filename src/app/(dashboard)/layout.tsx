import { UserButton } from '@clerk/nextjs'

/* eslint-disable @next/next/no-img-element */
export default function DashboardLayout({ children }) {
  return (
    <div>
      <div className="w-full h-48 md:h-80">
        <div className="h-full bg-hero-pattern object-cover bg-no-repeat bg-center"></div>
      </div>

      <nav className="fixed top-0 w-full flex items-center justify-end bg-transparent px-6 md:px-8 py-4">
        <UserButton />
      </nav>
      {children}
    </div>
  )
}
