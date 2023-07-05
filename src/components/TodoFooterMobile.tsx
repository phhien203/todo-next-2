'use client'

export default function TodoFooterMobile({
  handleShowAll,
  handleShowActive,
  handleShowCompleted,
}) {
  return (
    <div className="md:hidden sm:flex justify-center items-center gap-3 h-12 rounded-md shadow-[0_35px_50px_-15px_rgba(194,195,214,0.50)] mt-4 bg-white text-base text-[#9495A5]">
      <span
        className="hover:text-[#494C6B] cursor-pointer"
        onClick={handleShowAll}
      >
        All
      </span>
      <span
        className="hover:text-[#494C6B] cursor-pointer"
        onClick={handleShowActive}
      >
        Active
      </span>
      <span
        className="hover:text-[#494C6B] cursor-pointer"
        onClick={handleShowCompleted}
      >
        Completed
      </span>
    </div>
  )
}
