import type { RootState } from "@/redux/store";
import type { ITask } from "@/types";
import { createSlice, nanoid, type PayloadAction } from "@reduxjs/toolkit";
import { removeUser } from "../user/userSlice";
// import { v4 as uuidv4 } from 'uuid';

interface InitialState {
      tasks: ITask[];
      filter: "all" | "high" | "medium" | "low"
}

const initialState: InitialState = {
      tasks: [
            {
                  id: "456dgfs3gmm7I7UXBzas",
                  title: "Buy groceries",
                  description: "Milk, bread, eggs, and fruits from the supermarket.",
                  priority: "medium",
                  dueDate: "2025-07-22T17:00:10.350Z",
                  assignTo: "zE_0o-4F3gmm7I7UXBzas",
                  isCompleted: false,
            },
            {
                  id: "dghser2346dggmm73456sdjkgl",
                  title: "Finish portfolio website",
                  description: "Complete the contact form and responsive design.",
                  priority: "high",
                  dueDate: "2025-07-22T17:43:22.000Z",
                  assignTo: "i4p6FgO1Sa2x_iR1yexWU",
                  isCompleted: false,
            },
            {
                  id: "6ihseIRrqwy46dg_6sdjk87465",
                  title: "Book dentist appointment",
                  description: "Call the clinic and book a check-up for next week.",
                  priority: "low",
                  dueDate: "2025-07-22T18:23:05.080Z",
                  assignTo: null,
                  isCompleted: false,
            },
            {
                  id: "456dgfs3gmm7I7UXBzas",
                  title: "Review pull request",
                  description: "Check the new features added in the latest PR.",
                  priority: "high",
                  dueDate: "2025-07-22T17:34:04.000Z",
                  assignTo: "QQHGLE0sSfeG7ekwW5w12",
                  isCompleted: false,
            },
            {
                  id: "J7TLOgE3mh8UsT9Ov73rS1y",
                  title: "Nobis eu nostrud ut ",
                  description: "Maxime molestias dol",
                  priority: "medium",
                  dueDate: "2025-07-22T18:00:00.000Z",
                  assignTo: null,
                  isCompleted: false
            }
      ],
      filter: "all"
}

type DraftTask = Pick<ITask, "title" | "description" | "priority" | "dueDate" | "assignTo">;

const createTask = (taskData: DraftTask): ITask => {
      return {
            ...taskData,
            id: nanoid(),
            isCompleted: false,
            assignTo: taskData.assignTo ? taskData.assignTo : null
      }
};


const taskSlice = createSlice({
      name: "task",
      initialState,
      reducers: {
            addTask: (state, action: PayloadAction<DraftTask>) => {
                  const taskData = createTask(action.payload)
                  state.tasks.push(taskData)
            },
            toggleCompleteState: (state, action: PayloadAction<string>) => {
                  // console.log(action)
                  state.tasks.forEach((task) => task.id === action.payload
                        ? task.isCompleted = !task.isCompleted
                        : task.isCompleted)
            },
            deleteTask: (state, action: PayloadAction<string>) => {
                  state.tasks = state.tasks.filter(task => task.id !== action.payload)
            },
            updateFilter: (state, action: PayloadAction<"all" | "low" | "medium" | "high">) => {
                  state.filter = action.payload
            }
      },
      extraReducers: (builder) => {
            builder.addCase(removeUser, (state, action) => {
                  state.tasks.forEach(task => task.assignTo === action.payload
                        ? task.assignTo = null : task)
            })
      },
});

export const selectTasks = (state: RootState) => {
      const filter = state.todo.filter;
      // console.log("filter by", filter)
      switch (filter) {
            case "high":
                  return state.todo.tasks.filter(task => task.priority === "high")
            case "medium":
                  return state.todo.tasks.filter(task => task.priority === "medium")
            case "low":
                  return state.todo.tasks.filter(task => task.priority === "low")
            default:
                  return state.todo.tasks
      }
};
export const selectFilter = (state: RootState) => state.todo.filter;

export const { addTask, toggleCompleteState, deleteTask, updateFilter } = taskSlice.actions;
export default taskSlice.reducer;
