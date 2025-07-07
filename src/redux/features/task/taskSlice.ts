import type { RootState } from "@/redux/store";
import type { ITask } from "@/types";
import { createSlice } from "@reduxjs/toolkit";

interface InitialState {
      tasks: ITask[];
      filter: "all" | "high" | "medium" | "low"
}

const initialState: InitialState = {
      tasks: [
            {
                  id: "345ghsdrg6472",
                  title: "What will do tomorrow",
                  description: "I will do practice more tomorrow.",
                  dueDate: "2025-7-14",
                  priority: "high",
                  isCompleted: false
            },
            {
                  id: "345ghsdrg6472",
                  title: "What will do tomorrow",
                  description: "I will do practice more tomorrow.",
                  dueDate: "2025-7-14",
                  priority: "high",
                  isCompleted: false
            }
      ],
      filter: "all"
}

const taskSlice = createSlice({
      name: "task",
      initialState,
      reducers: {}
});

export const selectTasks = (state: RootState) => state.todo.tasks;
export const selectFilter = (state: RootState) => state.todo.filter;

export default taskSlice.reducer;
