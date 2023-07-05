'use client'

import NewTodo from '@/components/NewTodo'
import TodoFooter from '@/components/TodoFooter'
import TodoFooterMobile from '@/components/TodoFooterMobile'
import TodoHeader from '@/components/TodoHeader'
import TodoList from '@/components/TodoList'
import React from 'react'

export default function TodosPage() {
  const [allTodos, setAllTodos] = React.useState([])
  const [displayMode, setDisplayMode] = React.useState<
    'all' | 'active' | 'completed'
  >('all')

  const visibleTodos =
    displayMode === 'all'
      ? allTodos
      : allTodos.filter((item) =>
          displayMode === 'completed' ? item.completed : !item.completed,
        )

  const addNewTodo = (newTodo) => {
    const newAllItems = [newTodo, ...allTodos]
    setAllTodos(newAllItems)
  }

  const handleToggle = (id, checked) => {
    const newAllItems = allTodos.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          completed: checked,
        }
      }
      return item
    })
    setAllTodos(newAllItems)
  }

  const handleClearCompleted = () => {
    const newAllItems = allTodos.filter((item) => !item.completed)
    setAllTodos(newAllItems)
  }

  const handleShowAll = () => {
    setDisplayMode('all')
  }

  const handleShowActive = () => {
    setDisplayMode('active')
  }

  const handleShowCompleted = () => {
    setDisplayMode('completed')
  }

  const handleDeleteItem = (id) => {
    const newAllItems = allTodos.filter((i) => i.id !== id)
    setAllTodos(newAllItems)
  }

  return (
    <div className="md:-mt-80 sm:-mt-48 md:p-16 sm:p-6 md:pt-20 sm:pt-12 max-w-2xl mx-auto">
      <TodoHeader />

      {/* input todo */}
      <NewTodo addNewTodo={addNewTodo} />

      <div className="rounded-md shadow-[0_35px_50px_-15px_rgba(194,195,214,0.50)]">
        {/* todo items container */}
        <TodoList
          todos={visibleTodos}
          toggleComplete={handleToggle}
          removeTodo={handleDeleteItem}
        />

        {/* footer */}
        <TodoFooter
          itemsLeft={visibleTodos.filter((i) => !i.completed).length}
          displayMode={displayMode}
          handleShowAll={handleShowAll}
          handleShowActive={handleShowActive}
          handleShowCompleted={handleShowCompleted}
          handleClearCompleted={handleClearCompleted}
        />
      </div>

      <TodoFooterMobile
        handleShowAll={handleShowAll}
        handleShowActive={handleShowActive}
        handleShowCompleted={handleShowCompleted}
      />
    </div>
  )
}
