import Link from 'next/link'

function NotFound() {
  return (
    <section
      className="container mx-auto h-[calc(100vh-7rem)] flex items-center justify-center
    "
    >
      <div className="text-center">
        <h1 className="font-bold text-4xl">Not Found</h1>

        <Link className="text-zinc-400 hover:text-zinc-500" href="/">
          Go to home
        </Link>
      </div>
    </section>
  )
}

export default NotFound
