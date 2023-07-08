import { UserButton } from '@clerk/nextjs'

/* eslint-disable @next/next/no-img-element */
export default function DashboardLayout({ children }) {
  return (
    <div>
      <div className="w-full h-48 md:h-80">
        {/* <div className="absolute inset-0 w-full h-48 md:h-80 bg-gradient-to-bl from-[#5596FF] to-[#AC2DEB] -z-20"></div> */}
        {/* <div className="absolute inset-0 w-full md:h-80 sm:h-48 bg-hero-pattern object-cover bg-no-repeat bg-center opacity-25 -z-10 brightness-50"></div> */}
        <div className="h-full bg-hero-pattern object-cover bg-no-repeat bg-center"></div>
      </div>
      {/* <div className={styles.banner}> */}

      {/* </div> */}

      <nav className="fixed top-0 w-full flex items-center justify-end bg-transparent px-6 md:px-8 py-4">
        <UserButton />
      </nav>
      {children}
    </div>
  )
}
