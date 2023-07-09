/* eslint-disable @next/next/no-img-element */
'use client'

import React from 'react'

export default function TodoItem({ todo, toggleComplete, removeTodo }) {
  const [checked, setChecked] = React.useState<boolean>(todo.completed)

  async function handleToggleComplete(e) {
    setChecked((checked) => !checked)
    await toggleComplete(todo.id, e.target.checked)
  }

  return (
    <div className="flex items-center gap-6 bg-white dark:bg-[#25273D] w-full h-12 md:h-16 px-6 py-5 text-[#494C6B] dark:text-[#C8CBE7] text-sm md:text-lg group">
      <input
        type="checkbox"
        className="w-6 h-6 rounded-lg cursor-pointer before:dark:bg-[#393A4B]"
        id={todo.id}
        checked={checked}
        onChange={handleToggleComplete}
      />
      <label
        htmlFor={todo.id}
        className={`flex-1 cursor-pointer transition-all ${
          checked ? 'line-through text-[#D1D2DA] dark:text-[#4D5067]' : ''
        }`}
      >
        {todo.content}
      </label>
      <span
        className="block md:hidden group-hover:md:block"
        onClick={() => removeTodo(todo.id)}
      >
        <img
          alt="cross icon"
          src="/cross.svg"
          className="cursor-pointer w-3 h-3 md:w-[1.125rem] md:h-[1.125rem]"
        />
      </span>
    </div>
  )
}
