import Link from 'next/link'
import styles from './page.module.css'

export default function Home() {
  return (
    <div className={styles.main}>
      <h1 className="text-5xl">Getting things done easily!</h1>
      <Link
        href="/todos"
        className="inline-block mt-8 text-lg text-center px-4 py-2 bg-slate-300/50 rounded-sm"
      >
        Get started
      </Link>
    </div>
  )
}
