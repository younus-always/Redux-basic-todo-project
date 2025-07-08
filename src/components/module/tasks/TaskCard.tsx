import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { cn } from "@/lib/utils";
import {
  deleteTask,
  toggleCompleteState,
} from "@/redux/features/task/taskSlice";
import { selectUsers } from "@/redux/features/user/userSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import type { ITask } from "@/types";
import { Trash2 } from "lucide-react";

interface IProps {
  task: ITask;
}

const TaskCard = ({ task }: IProps) => {
  const dispatch = useAppDispatch();
  const { id, title, description, priority, isCompleted, assignTo } = task;
  const users = useAppSelector(selectUsers);
  const assignUser = users.find((user) => user.id === assignTo);

  return (
    <div className="border p-3 sm:px-5 rounded-md shadow shadow-green-300">
      <div className="flex justify-between items-center">
        <div className="flex gap-2 items-center">
          <div
            className={cn("size-3 rounded-full", {
              "bg-red-500": priority === "low",
              "bg-yellow-500": priority === "medium",
              "bg-green-500": priority === "high",
            })}
          ></div>
          <h2 className={cn({ "line-through": isCompleted })}>{title}</h2>
        </div>
        <div className="flex gap-3 items-center">
          <Button
            onClick={() => dispatch(deleteTask(id))}
            variant={"link"}
            className="p-0 text-red-500 cursor-pointer"
          >
            <Trash2 />
          </Button>
          <Checkbox
            onClick={() => dispatch(toggleCompleteState(id))}
            className="cursor-pointer"
          />
        </div>
      </div>
      <div className="pl-5 space-y-2">
        <p>Assign To - {assignUser ? assignUser.name : "No One"}</p>
        <p>Description: {description}</p>
      </div>
    </div>
  );
};

export default TaskCard;
