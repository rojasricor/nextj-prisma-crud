import TaskCard from '@/components/TaskCard'
import { prisma } from '@/libs/prisma'

async function LoadTasks() {
  return await prisma.task.findMany()
}

// cache refresh interval
// export const revalidate = 60

// Force inmediately refresh on some change
export const dynamic = 'force-dynamic'

async function HomePage(): Promise<React.ReactElement> {
  const tasks = await LoadTasks()

  return (
    <main className="container mx-auto">
      <div className="grid grid-cols-3 gap-3 mt-10">
        {tasks.map((t) => (
          <TaskCard key={t.id} t={t} />
        ))}
      </div>
    </main>
  )
}

export default HomePage
