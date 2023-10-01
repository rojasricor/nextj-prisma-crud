'use client'

import { Task } from '@prisma/client'
import { useRouter } from 'next/navigation'

interface IProps {
  t: Task
}

function TaskCard({ t }: IProps): React.ReactNode {
  const router = useRouter()

  return (
    <div
      onClick={() => router.push(`/tasks/edit/${t.id}`)}
      className="bg-slate-900 p-3 hover:bg-slate-800 hover:cursor-pointer"
    >
      <h3 className="font-bold text-2xl mb-2">{t.title}</h3>
      <p>{t.description}</p>
      <p>{new Date(t.createdAt).toLocaleDateString()}</p>
    </div>
  )
}

export default TaskCard
