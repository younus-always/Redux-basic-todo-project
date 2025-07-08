import { AddTaskModal } from "@/components/module/tasks/AddTaskModal";
import TaskCard from "@/components/module/tasks/TaskCard";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { selectTasks, updateFilter } from "@/redux/features/task/taskSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";

const Tasks = () => {
  const tasks = useAppSelector(selectTasks);
  const dispatch = useAppDispatch();
  // console.log(tasks);

  return (
    <div className="lg:w-11/12 mx-auto pt-10">
      <div className="flex items-center justify-between gap-5 mb-4">
        <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold">All Task</h3>
        <div className="flex flex-col-reverse sm:flex-row gap-3">
          <Tabs defaultValue="all" className="">
            <TabsList>
              <TabsTrigger
                className="cursor-pointer"
                onClick={() => dispatch(updateFilter("all"))}
                value="all"
              >
                All
              </TabsTrigger>
              <TabsTrigger
                className="cursor-pointer"
                onClick={() => dispatch(updateFilter("low"))}
                value="low"
              >
                Low
              </TabsTrigger>
              <TabsTrigger
                className="cursor-pointer"
                onClick={() => dispatch(updateFilter("medium"))}
                value="medium"
              >
                Medium
              </TabsTrigger>
              <TabsTrigger
                className="cursor-pointer"
                onClick={() => dispatch(updateFilter("high"))}
                value="high"
              >
                High
              </TabsTrigger>
            </TabsList>
          </Tabs>
          <AddTaskModal  />
        </div>
      </div>
      <div className="space-y-5">
        {tasks.map((task) => (
          <TaskCard key={task.id} task={task} />
        ))}
      </div>
    </div>
  );
};

export default Tasks;
