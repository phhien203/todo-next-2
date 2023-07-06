'use client'

import TodoFooter from './TodoFooter'
import TodoItem from './TodoItem'
import { experimental_useOptimistic as useOptimistic } from 'react'

export default function TodoList({
  todos,
  displayMode,
  toggleComplete,
  removeTodo,
  clearCompletedTodos,
}) {
  const [optimisticTodos, dispatchOptimistic] = useOptimistic(
    todos,
    (state, { actionType, payload }) => {
      switch (actionType) {
        case 'deleteOptimistic': {
          return [...state.filter((todo) => todo.id !== payload)]
        }
        case 'completeOptimistic': {
          return [
            ...state.map((todo) => {
              if (todo.id === payload.id) {
                const newTodo = {
                  ...todo,
                  completed: !todo.completed,
                }
                return newTodo
              }
              return todo
            }),
          ]
        }
        case 'clearCompleteOptimistic': {
          return [...state.filter((todo) => !todo.completed)]
        }
      }
    },
  )

  if (!optimisticTodos || optimisticTodos.length === 0) {
    return (
      <>
        <div className="flex items-center bg-white w-full h-16 px-6 py-5 text-[#9495A5] md:text-lg sm:text-sm rounded-t-md">
          <span>No items</span>
        </div>

        <TodoFooter
          itemsLeft={optimisticTodos.filter((todo) => !todo.completed).length}
          displayMode={displayMode}
          clearCompletedTodos={async () => {
            dispatchOptimistic({ actionType: 'clearCompleteOptimistic' })
            await clearCompletedTodos()
          }}
        />
      </>
    )
  }

  return (
    <>
      <div className="rounded-t-md divide-y divide-[#E3E4F1] max-h-96 overflow-y-auto">
        {optimisticTodos.map((item) => (
          <TodoItem
            key={item.id}
            todo={item}
            toggleComplete={async (id, completed) => {
              dispatchOptimistic({
                actionType: 'completeOptimistic',
                payload: {
                  id,
                  completed,
                },
              })
              await toggleComplete(id, completed)
            }}
            removeTodo={async (id) => {
              dispatchOptimistic({
                actionType: 'deleteOptimistic',
                payload: id,
              })
              await removeTodo(id)
            }}
          />
        ))}
      </div>

      <TodoFooter
        itemsLeft={optimisticTodos.filter((todo) => !todo.completed).length}
        displayMode={displayMode}
        clearCompletedTodos={async () => {
          dispatchOptimistic({ actionType: 'clearCompleteOptimistic' })
          await clearCompletedTodos()
        }}
      />
    </>
  )
}
