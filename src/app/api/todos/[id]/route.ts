import { getLoggedInUser } from '@/utils/auth'
import { prisma } from '@/utils/db'
import { NextResponse } from 'next/server'

export async function DELETE(_, { params }) {
  const user = await getLoggedInUser()
  const todo = await prisma.todo.update({
    where: {
      id_userId: {
        id: params.id,
        userId: user.id,
      },
    },
    data: {
      deleted: true,
    },
  })

  return NextResponse.json(todo)
}

export async function PUT(_, { params }) {
  const user = await getLoggedInUser()
  const todo = await prisma.todo.findUnique({
    where: {
      id_userId: {
        id: params.id,
        userId: user.id,
      },
    },
  })
  const updated = await prisma.todo.update({
    where: {
      id_userId: {
        id: params.id,
        userId: user.id,
      },
    },
    data: {
      completed: !todo.completed,
    },
  })

  return NextResponse.json(updated)
}
