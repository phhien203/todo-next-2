import Link from 'next/link'

export default function TodoFooterMobile() {
  return (
    <div className="flex md:hidden justify-center items-center gap-3 h-12 rounded-md shadow-[0_35px_50px_-15px_rgba(194,195,214,0.50)] dark:shadow-[0_35px_50px_-15px_rgba(0,0,0,0.50)] mt-4 bg-white dark:bg-[#25273D] text-sm text-[#9495A5] dark:text-[#5B5E7E]">
      <Link
        className="hover:text-[#494C6B] dark:hover:text-[white] transition-all cursor-pointer"
        href="/todos?displayMode=all"
      >
        All
      </Link>

      <Link
        className="hover:text-[#494C6B] dark:hover:text-[white] transition-all cursor-pointer"
        href="/todos?displayMode=active"
      >
        Active
      </Link>

      <Link
        className="hover:text-[#494C6B] dark:hover:text-[white] transition-all cursor-pointer"
        href="/todos?displayMode=completed"
      >
        Completed
      </Link>
    </div>
  )
}
