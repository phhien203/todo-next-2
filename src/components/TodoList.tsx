import TodoItem from './TodoItem'

export default function TodoList({ todos, toggleComplete, removeTodo }) {
  if (!todos || todos.length === 0) {
    return (
      <div className="flex items-center bg-white w-full h-16 px-6 py-5 text-[#9495A5] md:text-lg sm:text-sm rounded-t-md">
        <span>No items</span>
      </div>
    )
  }

  return (
    <div className="rounded-t-md divide-y divide-[#E3E4F1] max-h-96 overflow-y-auto">
      {todos.map((item) => (
        <TodoItem
          key={item.id}
          todo={item}
          toggleComplete={toggleComplete}
          removeTodo={removeTodo}
        />
      ))}
    </div>
  )
}
