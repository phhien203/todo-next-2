import NewTodo from '@/components/NewTodo'
import TodoFooterMobile from '@/components/TodoFooterMobile'
import TodoHeader from '@/components/TodoHeader'
import TodoList from '@/components/TodoList'
import {
  addNewTodo,
  clearCompletedTodos,
  removeTodo,
  toggleTodo,
} from '@/utils/actions'
import { prisma } from '@/utils/db'
import { revalidatePath } from 'next/cache'

async function getVisibleTodos(displayMode: 'all' | 'active' | 'completed') {
  const visibleTodos = await prisma.todo.findMany({
    where: {
      deleted: false,
      ...(displayMode === 'all'
        ? {}
        : { completed: displayMode === 'completed' }),
    },
    orderBy: {
      createdAt: 'desc',
    },
  })

  revalidatePath('/todos')

  return visibleTodos
}

export default async function TodosPage({ searchParams }) {
  const displayMode = searchParams.displayMode ?? 'all'
  const visibleTodos = await getVisibleTodos(displayMode)

  return (
    <div className="md:-mt-80 sm:-mt-48 md:p-16 sm:p-6 md:pt-20 sm:pt-12 max-w-2xl mx-auto">
      <TodoHeader />

      {/* input todo */}
      <NewTodo addNewTodo={addNewTodo} />

      <div className="rounded-md shadow-[0_35px_50px_-15px_rgba(194,195,214,0.50)]">
        {/* todo items container */}
        <TodoList
          todos={visibleTodos}
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
