'use client'

import TodoFooter from './TodoFooter'
import TodoItem from './TodoItem'
import { AnimatePresence, motion } from 'framer-motion'

export default function TodoList({
  todos,
  displayMode,
  toggleComplete,
  removeTodo,
  clearCompletedTodos,
}) {
  if (!todos || todos.length === 0) {
    return (
      <div>
        <div className="flex items-center justify-center bg-white w-full h-96 px-6 py-5 text-[#9495A5] text-sm md:text-lg rounded-t-md">
          <span>No items</span>
        </div>

        <TodoFooter
          itemsLeft={todos.length}
          displayMode={displayMode}
          clearCompletedTodos={async () => {
            await clearCompletedTodos()
          }}
        />
      </div>
    )
  }

  return (
    <>
      <div className="rounded-t-md divide-y divide-[#E3E4F1] h-96 overflow-y-auto">
        <AnimatePresence initial={false}>
          {todos.map((item) => (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ opacity: { duration: 0.2 } }}
              key={item.id}
            >
              <TodoItem
                todo={item}
                toggleComplete={toggleComplete}
                removeTodo={removeTodo}
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      <TodoFooter
        itemsLeft={todos.length}
        displayMode={displayMode}
        clearCompletedTodos={async () => {
          await clearCompletedTodos()
        }}
      />
    </>
  )
}
