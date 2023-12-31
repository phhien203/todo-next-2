'use client'

import React from 'react'

export default function NewTodo({ addNewTodo }) {
  const [content, setContent] = React.useState('')
  const inputRef = React.useRef<HTMLInputElement>()

  React.useEffect(() => {
    inputRef.current.focus()
  }, [])

  function handleAddNewTodo(e) {
    e.preventDefault()
    setContent('')
    addNewTodo(content)
  }

  return (
    <div className="relative mb-4 md:mb-6">
      <form onSubmit={handleAddNewTodo}>
        <input
          type="text"
          name="content"
          autoComplete="off"
          placeholder="Create a new todo..."
          maxLength={40}
          ref={inputRef}
          required={true}
          value={content}
          className="bg-white dark:bg-[#25273D] w-full h-12 md:h-16 rounded-md text-[#393A4B] dark:text-[#C8CBE7] px-6 py-5 pl-[4.5rem] text-sm md:text-lg tracking-tight outline-none focus:outline-none"
          onChange={(e) => setContent(e.target.value)}
        />
      </form>

      <div className="absolute top-[0.8rem] md:top-5 left-6 w-5 md:w-6 h-5 md:h-6 rounded-3xl border border-[#E3E4F1]"></div>
    </div>
  )
}
