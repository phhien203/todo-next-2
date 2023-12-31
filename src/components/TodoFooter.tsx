'use client'

import Link from 'next/link'

export default function TodoFooter({
  itemsLeft,
  displayMode,
  clearCompletedTodos,
}) {
  return (
    <div className="flex items-center justify-between px-6 py-4 text-sm text-[#9495A5] dark:text-[#5B5E7E] bg-white dark:bg-[#25273D] rounded-b-md">
      <span>{itemsLeft} items</span>

      <span className="items-center gap-3 hidden md:flex">
        <Link
          className={`hover:text-[#494C6B] cursor-pointer ${
            displayMode === 'all' ? 'text-[#3A7CFD]' : ''
          }`}
          href="/todos?displayMode=all"
        >
          All
        </Link>

        <Link
          className={`hover:text-[#494C6B] cursor-pointer ${
            displayMode === 'active' ? 'text-[#3A7CFD]' : ''
          }`}
          href="/todos?displayMode=active"
        >
          Active
        </Link>

        <Link
          className={`hover:text-[#494C6B] cursor-pointer ${
            displayMode === 'completed' ? 'text-[#3A7CFD]' : ''
          }`}
          href="/todos?displayMode=completed"
        >
          Completed
        </Link>
      </span>

      <span
        className="hover:text-[#494C6B] dark:hover:text-white transition-all cursor-pointer"
        onClick={clearCompletedTodos}
      >
        Clear Completed
      </span>
    </div>
  )
}
