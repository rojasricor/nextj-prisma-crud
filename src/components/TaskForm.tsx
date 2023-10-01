'use client'

import { Task } from '@prisma/client'
import { useRouter, useParams } from 'next/navigation'
import { useEffect, useState } from 'react'

function TaskForm() {
  const initData: Partial<Task> = {
    title: '',
    description: '',
  }
  const [formData, setFormData] = useState(initData)

  const router = useRouter()
  const params = useParams()

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    await fetch(`/api/tasks/${params.taskId || ''}`, {
      method: !params.taskId ? 'POST' : 'PUT',
      body: JSON.stringify(formData),
      headers: {
        'Content-Type': 'application/json',
      },
    })

    router.refresh()
    router.push('/')
  }

  const onChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  useEffect(() => {
    if (params.taskId) {
      fetch(`/api/tasks/${params.taskId}`)
        .then((res) => res.json())
        .then((data) => setFormData(data))
    }
  }, [params.taskId])

  return (
    <form
      className="rounded-md bg-slate-800 p-10 lg:w-2/5 md:w-2/4 sm:w-3/6 justify-center"
      onSubmit={handleSubmit}
    >
      <label htmlFor="title" className="text-sm font-bold">
        Write your task title:
      </label>
      <input
        type="text"
        name="title"
        id="title"
        className="rounded-md outline-none border border-gray-400 p-2 mb-4 w-full text-black"
        placeholder="Task title"
        onChange={onChange}
        value={formData.title}
        autoFocus
        required
      />

      <label htmlFor="description" className="text-sm font-bold">
        Write the task description:
      </label>
      <textarea
        name="description"
        id="description"
        className="resize-none outline-none rounded-md border border-gray-400 p-2 mb-4 w-full text-black"
        rows={3}
        placeholder="Task description"
        onChange={onChange}
        value={formData.description as string}
        required
      />

      <div className="flex justify-between">
        <button
          type="submit"
          className="bg-slate-900 rounded-md p-3 hover:bg-slate-950"
        >
          {!params.taskId ? 'Create Task' : 'Update Task'}
        </button>
        {params.taskId && (
          <button
            type="button"
            className="bg-red-600 hover:bg-red-700 p-3 rounded-md"
            onClick={async () => {
              await fetch(`/api/tasks/${params.taskId}`, {
                method: 'DELETE',
              })

              router.refresh()
              router.push('/')
            }}
          >
            Delete
          </button>
        )}
      </div>
    </form>
  )
}

export default TaskForm
