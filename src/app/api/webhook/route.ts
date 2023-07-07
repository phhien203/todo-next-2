import { prisma } from '@/utils/db'
import { WebhookEvent } from '@clerk/nextjs/dist/types/server'
import { headers } from 'next/headers'
import { Webhook } from 'svix'

const webhookSecret = process.env.WEBHOOK_SECRET || ''

export async function POST(req: Request) {
  const payload = await req.json()
  const payloadString = JSON.stringify(payload)
  const headerPayload = headers()
  const svixId = headerPayload.get('svix-id')
  const svixTimestamp = headerPayload.get('svix-timestamp')
  const svixSignature = headerPayload.get('svix-signature')

  if (!svixId || !svixTimestamp || !svixSignature) {
    console.log('svixId', svixId)
    console.log('svixTimestamp', svixTimestamp)
    console.log('svixSignature', svixSignature)
    return new Response('Error occurred', {
      status: 400,
    })
  }

  const svixHeaders = {
    'svix-id': svixId,
    'svix-timestamp': svixTimestamp,
    'svix-signature': svixSignature,
  }

  const wh = new Webhook(webhookSecret)
  let evt: WebhookEvent | null = null

  try {
    evt = wh.verify(payloadString, svixHeaders) as WebhookEvent
  } catch (_) {
    console.log('error verifying webhook')
    return new Response('Error when verifying webhook', { status: 400 })
  }

  const eventType = evt.type
  const { id } = evt.data

  if (eventType === 'user.created' || eventType === 'user.updated') {
    const { email_addresses } = evt.data
    if (!email_addresses[0] || !email_addresses[0].email_address) {
      return new Response(`Error locating user ${id}`, {
        status: 400,
      })
    }

    const match = await prisma.user.findUnique({
      where: {
        clerkId: id,
      },
    })

    if (!match) {
      console.log('no user, create new')
      await prisma.user.create({
        data: {
          clerkId: id,
          email: email_addresses[0].email_address,
        },
      })
    } else {
      console.log('user already existed')
    }
  }

  console.log(`User ${id} was ${eventType}`)

  return new Response('Success', {
    status: 201,
  })
}
