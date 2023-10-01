import { prisma } from '@/libs/prisma'
import { NextResponse } from 'next/server'

export async function GET(req: any, { params }: any) {
  const task = await prisma.task.findUnique({
    where: {
      id: +params.taskId, // the id of the task
    },
  })

  return NextResponse.json(task)
}

export async function PUT(req: any, { params }: any) {
  const data = await req.json()

  const taskUpdated = await prisma.task.update({
    where: {
      id: +params.taskId, // the id of the task
    },
    data,
  })

  return NextResponse.json(taskUpdated)
}

export async function DELETE(req: any, { params }: any) {
  try {
    const taskDeleted = await prisma.task.delete({
      where: {
        id: +params.taskId, // the id of the task
      },
    })

    return NextResponse.json(taskDeleted)
  } catch (err: any) {
    return NextResponse.json(err.message)
  }
}
