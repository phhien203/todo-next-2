'use client'

import Image from 'next/image'
import React from 'react'

export default function TodoItem({ todo, toggleComplete, removeTodo }) {
  const [checked, setChecked] = React.useState<boolean>(todo.completed)

  async function handleToggleComplete(e) {
    setChecked(e.target.checked)
    await toggleComplete(todo.id, e.target.checked)
  }

  async function handleRemoveTodo(id: string) {
    await removeTodo(id)
  }

  return (
    <div className="flex items-center gap-6 bg-white w-full h-16 px-6 py-5 text-[#494C6B] md:text-lg sm:text-sm first:rounded-t-md group">
      <input
        type="checkbox"
        className="w-6 h-6 rounded-lg cursor-pointer"
        id={todo.id}
        checked={checked}
        onChange={handleToggleComplete}
      />
      <label
        htmlFor={todo.id}
        className={`flex-1 cursor-pointer ${
          checked ? 'line-through text-[#D1D2DA]' : ''
        }`}
      >
        {todo.content}
      </label>
      <span
        className="hidden group-hover:block"
        onClick={() => handleRemoveTodo(todo.id)}
      >
        <Image
          width={18}
          height={18}
          alt="cross icon"
          src="/cross.svg"
          className="cursor-pointer"
        />
      </span>
    </div>
  )
}
