import { AddTaskModal } from "@/components/module/tasks/AddTaskModal"
import TaskCard from "@/components/module/tasks/TaskCard"
import { selectTasks } from "@/redux/features/task/taskSlice"
import { useAppSelector } from "@/redux/hooks"

const Tasks = () => {
      const tasks = useAppSelector(selectTasks)
      console.log(tasks)

      return (
            <div className="lg:w-11/12 mx-auto">
                  <div className="flex items-center justify-between mb-4">
                        <h3 className="text-3xl font-semibold">All Task</h3>
                        <AddTaskModal />
                  </div>
                  <div className="space-y-5">
                        {tasks.map(task => <TaskCard key={task.id} task={task} />)}
                  </div>
            </div>
      )
}

export default Tasks
