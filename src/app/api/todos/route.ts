import { getLoggedInUser } from '@/utils/auth'
import { prisma } from '@/utils/db'
import { NextResponse } from 'next/server'

export async function GET(req: Request) {
  const user = await getLoggedInUser()
  const { searchParams } = new URL(req.url)
  const displayMode = searchParams.get('displayMode') ?? 'all'

  const visibleTodos = await prisma.todo.findMany({
    where: {
      userId: user.id,
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

export async function POST(req: Request) {
  const user = await getLoggedInUser()
  const { content } = await req.json()
  const todo = await prisma.todo.create({
    data: {
      userId: user.id,
      content,
    },
  })
  return NextResponse.json(todo)
}

export async function PUT() {
  const user = await getLoggedInUser()
  await prisma.todo.updateMany({
    where: {
      userId: user.id,
      completed: true,
      deleted: false,
    },
    data: {
      deleted: true,
    },
  })
  return NextResponse.json({ message: 'ok' })
}
