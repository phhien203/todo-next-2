'use client'

export default function TodoFooter({
  itemsLeft,
  displayMode,
  handleShowAll,
  handleShowActive,
  handleShowCompleted,
  handleClearCompleted,
}) {
  return (
    <div className="flex items-center justify-between px-6 py-4 text-sm text-[#9495A5] bg-white rounded-b-md">
      <span>{itemsLeft} items left</span>

      <span className="flex items-center gap-3 md:flex sm:hidden">
        <span
          className={`hover:text-[#494C6B] cursor-pointer ${
            displayMode === 'all' ? 'text-[#3A7CFD]' : ''
          }`}
          onClick={handleShowAll}
        >
          All
        </span>
        <span
          className={`hover:text-[#494C6B] cursor-pointer ${
            displayMode === 'active' ? 'text-[#3A7CFD]' : ''
          }`}
          onClick={handleShowActive}
        >
          Active
        </span>
        <span
          className={`hover:text-[#494C6B] cursor-pointer ${
            displayMode === 'completed' ? 'text-[#3A7CFD]' : ''
          }`}
          onClick={handleShowCompleted}
        >
          Completed
        </span>
      </span>
      <span
        className="hover:text-[#494C6B] cursor-pointer"
        onClick={handleClearCompleted}
      >
        Clear Completed
      </span>
    </div>
  )
}
