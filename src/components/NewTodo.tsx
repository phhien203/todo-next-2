'use client'

import React from 'react'

export default function NewTodo({ addNewTodo }) {
  const inputRef = React.useRef<HTMLInputElement>()
  const formRef = React.useRef<HTMLFormElement>()

  React.useEffect(() => {
    inputRef.current.focus()
  }, [])

  async function handleAddNewTodo(formData: FormData) {
    await addNewTodo(formData)
    formRef.current.reset()
  }

  return (
    <div className="relative md:mb-6 sm:mb-4">
      <form ref={formRef} action={handleAddNewTodo}>
        <input
          type="text"
          name="content"
          placeholder="Create a new todo..."
          className="bg-white w-full md:h-16 sm:h-12 rounded-md text-[#393A4B] px-6 py-5 pl-[4.5rem] md:text-lg sm:text-sm tracking-tight outline-none focus:outline-none"
          ref={inputRef}
          required={true}
        />
      </form>

      <div className="absolute md:top-5 sm:top-[0.8rem] left-6 md:w-6 sm:w-5 md:h-6 sm:h-5 rounded-3xl border border-[#E3E4F1]"></div>
    </div>
  )
}
