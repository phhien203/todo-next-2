/* eslint-disable @next/next/no-img-element */
export default function DashboardLayout({ children }) {
  return (
    <div>
      <div className="w-full h-[18.75rem] bg-gray-50 relative">
        <div className="absolute inset-0 w-full h-[18.75rem] bg-gradient-to-bl from-[#5596FF] to-[#AC2DEB]"></div>
        <div className="absolute inset-0 w-full h-[18.75rem] bg-hero-pattern object-cover bg-no-repeat bg-center opacity-25"></div>
      </div>
      {children}
    </div>
  )
}
