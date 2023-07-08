import Link from 'next/link'

export default function TodoFooterMobile() {
  return (
    <div className="flex md:hidden justify-center items-center gap-3 h-12 rounded-md shadow-[0_35px_50px_-15px_rgba(194,195,214,0.50)] mt-4 bg-white text-sm text-[#9495A5]">
      <Link
        className="hover:text-[#494C6B] cursor-pointer"
        href="/todos?displayMode=all"
      >
        All
      </Link>

      <Link
        className="hover:text-[#494C6B] cursor-pointer"
        href="/todos?displayMode=active"
      >
        Active
      </Link>

      <Link
        className="hover:text-[#494C6B] cursor-pointer"
        href="/todos?displayMode=completed"
      >
        Completed
      </Link>
    </div>
  )
}
