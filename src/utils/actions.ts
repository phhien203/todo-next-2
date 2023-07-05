'use server'

import { revalidatePath } from 'next/cache'
import { prisma } from './db'

export async function clearCompletedTodos() {}

export async function addNewTodo(formData: FormData) {
  await prisma.todo.create({
    data: {
      content: formData.get('content') as string,
    },
  })

  revalidatePath('/todos')
}

export async function toggleTodo(id: string, completed: boolean) {
  await prisma.todo.update({
    where: {
      id,
    },
    data: {
      completed,
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
