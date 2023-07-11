import { auth } from '@clerk/nextjs'
import Link from 'next/link'
import styles from './page.module.css'

export default async function Home() {
  const { userId } = await auth()
  const href = userId ? '/todos' : '/register'

  return (
    <div className={styles.main}>
      <h1 className="text-3xl md:text-5xl uppercase text-white text-center">
        Getting things done easily!
      </h1>
      <Link
        href={href}
        className="inline-block mt-8 text-lg text-center px-4 py-2 bg-gradient-to-tr from-[#5596FF] to-[#AC2DEB] rounded-md text-white font-light"
      >
        Get started
      </Link>
    </div>
  )
}
