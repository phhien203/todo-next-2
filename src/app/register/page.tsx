import { prisma } from '@/utils/db'
import { currentUser } from '@clerk/nextjs'
import { redirect } from 'next/navigation'

async function createUser() {
  const user = await currentUser()
  const match = await prisma.user.findUnique({
    where: {
      clerkId: user.id,
    },
  })

  if (!match) {
    console.log('no user, create new')
    await prisma.user.create({
      data: {
        clerkId: user.id,
        email: user.emailAddresses[0].emailAddress,
      },
    })
  } else {
    console.log('user already existed')
  }

  redirect('/todos')
}

export default async function RegisterUserPage() {
  await createUser()
  return <div>loading...</div>
}
