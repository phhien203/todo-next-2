import Image from 'next/image'
import Link from 'next/link'

export default function TodoHeader() {
  return (
    <header className="flex justify-between h-5 md:h-12 mb-10 md:mb-10">
      <Link href="/">
        <h1 className="uppercase text-white text-lg md:text-4xl font-bold tracking-widest">
          Todo
        </h1>
      </Link>
      <div className="self-center">
        <Image
          alt="moon icon"
          width={24}
          height={24}
          src="/moon.svg"
          className="cursor-pointer hidden"
        />
      </div>
    </header>
  )
}
