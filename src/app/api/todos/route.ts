import { prisma } from '@/utils/db'
import { NextResponse } from 'next/server'

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url)
  const displayMode = searchParams.get('displayMode') ?? 'all'

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

  return NextResponse.json(visibleTodos)
}

export async function POST(req) {
  const { content } = await req.json()
  const todo = await prisma.todo.create({
    data: {
      content,
    },
  })
  return NextResponse.json(todo)
}

export async function PUT() {
  await prisma.todo.updateMany({
    where: {
      completed: true,
      deleted: false,
    },
    data: {
      deleted: true,
    },
  })
  return NextResponse.json({ message: 'ok' })
}
