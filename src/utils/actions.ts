'use server'

import { revalidatePath } from 'next/cache'
import { prisma } from './db'

export async function addNewTodo(formData: FormData) {
  await prisma.todo.create({
    data: {
      content: formData.get('content') as string,
    },
  })

  revalidatePath('/todos')
}

export async function toggleTodo(id: string, completed: boolean) {
  const todo = await prisma.todo.findUnique({
    where: {
      id,
    },
  })
  await prisma.todo.update({
    where: {
      id,
    },
    data: {
      completed: !todo.completed,
    },
  })
  revalidatePath('/todos')
}

export async function removeTodo(id: string) {
  await prisma.todo.update({
    where: {
      id,
    },
    data: {
      deleted: true,
    },
  })
  revalidatePath('/todos')
}

export async function clearCompletedTodos() {
  await prisma.todo.updateMany({
    where: {
      completed: true,
      deleted: false,
    },
    data: {
      deleted: true,
    },
  })
  revalidatePath('/todos')
}
