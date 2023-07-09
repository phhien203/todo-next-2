'use client'

import NewTodo from '@/components/NewTodo'
import TodoFooterMobile from '@/components/TodoFooterMobile'
import TodoHeader from '@/components/TodoHeader'
import TodoList from '@/components/TodoList'
import React from 'react'

export default function TodosPage({ searchParams }) {
  const displayMode = searchParams.displayMode ?? 'all'
  const [todos, setTodos] = React.useState([])

  React.useEffect(() => {
    fetch(`/api/todos?displayMode=${displayMode}`)
      .then((res) => res.json())
      .then((todos) => setTodos(todos))
  }, [displayMode])

  async function addNewTodo(content: string) {
    const res = await fetch(`/api/todos`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ content }),
    })
    const todo = await res.json()
    setTodos([todo, ...todos])
  }

  async function removeTodo(id: string) {
    setTodos((todos) => todos.filter((todo) => todo.id !== id))
    await fetch(`/api/todos/${id}`, {
      method: 'DELETE',
    })
  }

  async function toggleTodo(id: string) {
    await fetch(`/api/todos/${id}`, {
      method: 'PUT',
    })
  }

  async function clearCompletedTodos() {
    const res = await fetch('/api/todos', {
      method: 'PUT',
    })

    if (res.ok) {
      fetch(`/api/todos?displayMode=${displayMode}`)
        .then((res) => res.json())
        .then((todos) => setTodos(todos))
    }
  }

  return (
    <div className="-mt-52 md:-mt-80 p-6 md:p-16 pt-10 md:pt-20 max-w-2xl mx-auto">
      <TodoHeader />

      {/* input todo */}
      <NewTodo addNewTodo={addNewTodo} />

      <div className="rounded-md shadow-[0_35px_50px_-15px_rgba(194,195,214,0.50)]">
        {/* todo items container */}
        <TodoList
          todos={todos}
          displayMode={displayMode}
          toggleComplete={toggleTodo}
          removeTodo={removeTodo}
          clearCompletedTodos={clearCompletedTodos}
        />
      </div>

      <TodoFooterMobile />
    </div>
  )
}
