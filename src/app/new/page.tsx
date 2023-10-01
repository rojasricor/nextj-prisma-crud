import TaskForm from '@/components/TaskForm'

function NewPage(): React.ReactNode {
  return (
    <div className="container mx-auto flex justify-center items-center h-[calc(100vh-7rem)]">
      <TaskForm />
    </div>
  )
}

export default NewPage
