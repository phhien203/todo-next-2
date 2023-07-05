'use client'

import Image from 'next/image'

export default function TodoItem({ todo, toggleComplete, removeTodo }) {
  return (
    <div
      key={todo.id}
      className="flex items-center gap-6 bg-white w-full h-16 px-6 py-5 text-[#494C6B] md:text-lg sm:text-sm first:rounded-t-md group"
    >
      <input
        type="checkbox"
        className="w-6 h-6 rounded-lg cursor-pointer"
        id={todo.id + ''}
        checked={todo.completed}
        onChange={(e) => {
          toggleComplete(todo.id, e.target.checked)
        }}
      />
      <label
        htmlFor={todo.id + ''}
        className={`flex-1 cursor-pointer ${
          todo.completed ? 'line-through text-[#D1D2DA]' : ''
        }`}
      >
        {todo.content}
      </label>
      <span
        className="hidden group-hover:block"
        onClick={() => removeTodo(todo.id)}
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
