import Link from 'next/link'

function Navbar() {
  return (
    <section className="bg-slate-800">
      <nav className="container mx-auto flex justify-between py-3 items-center">
        <Link href="/">
          <h1 className="font-bold text-3xl flex">NEXTCRUD </h1>
        </Link>

        <ul>
          <li className="flex gap-x-3">
            <Link
              className="font-bold text-zinc-100 hover:text-zinc-300"
              href="/about"
            >
              About
            </Link>
            <Link
              className="font-bold text-zinc-100 hover:text-zinc-300"
              href="/new"
            >
              New
            </Link>
          </li>
        </ul>
      </nav>
    </section>
  )
}

export default Navbar
