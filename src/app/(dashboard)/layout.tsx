/* eslint-disable @next/next/no-img-element */
export default function DashboardLayout({ children }) {
  return (
    <div>
      <div className="w-full md:h-80 sm:h-48 bg-transparent relative -z-10">
        <div className="absolute inset-0 w-full md:h-80 sm:h-48 bg-gradient-to-bl from-[#5596FF] to-[#AC2DEB] -z-20"></div>
        <div className="absolute inset-0 w-full md:h-80 sm:h-48 bg-hero-pattern object-cover bg-no-repeat bg-center opacity-25 -z-10 brightness-50"></div>
      </div>
      {children}
    </div>
  )
}
