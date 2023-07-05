'use client'

import React from 'react'

export default function NewTodo({ addNewTodo }) {
  const [content, setContent] = React.useState('')
  // const [isLoading, setIsLoading] = React.useState(false)

  const inputRef = React.useRef<HTMLInputElement>()

  React.useEffect(() => {
    inputRef.current.focus()
  }, [])

  async function handleAddNewTodo(formData: FormData) {
    setContent('')
    // setIsLoading(true)
    await addNewTodo(formData)
    // setIsLoading(false)
  }

  return (
    <div className="relative md:mb-6 sm:mb-4">
      {/* <div>{isLoading ? 'loading...' : 'loaded'}</div> */}
      <form action={handleAddNewTodo}>
        <input
          type="text"
          name="content"
          placeholder="Create a new todo..."
          className="bg-white w-full md:h-16 sm:h-12 rounded-md text-[#393A4B] px-6 py-5 pl-[4.5rem] md:text-lg sm:text-sm tracking-tight outline-none focus:outline-none"
          ref={inputRef}
          value={content}
          required={true}
          onChange={(e) => setContent(e.target.value)}
        />
      </form>
      <div className="absolute md:top-5 sm:top-[0.8rem] left-6 md:w-6 sm:w-5 md:h-6 sm:h-5 rounded-3xl border border-[#E3E4F1]"></div>
    </div>
  )
}
