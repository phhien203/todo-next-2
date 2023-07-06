import { prisma } from '@/utils/db'
import { NextResponse } from 'next/server'

export async function DELETE(_, { params }) {
  const todo = await prisma.todo.update({
    where: {
      id: params.id,
    },
    data: {
      deleted: true,
    },
  })

  return NextResponse.json(todo)
}

export async function PUT(_, { params }) {
  const todo = await prisma.todo.findUnique({
    where: {
      id: params.id,
    },
  })
  const updated = await prisma.todo.update({
    where: {
      id: todo.id,
    },
    data: {
      completed: !todo.completed,
    },
  })

  return NextResponse.json(updated)
}
