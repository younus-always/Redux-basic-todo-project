import type { RootState } from "@/redux/store";
import type { IUser } from "@/types";
import { createSlice, nanoid, type PayloadAction } from "@reduxjs/toolkit";

interface InitialState {
      users: IUser[]
}
const initialState: InitialState = {
      users: [
            {
                  id: "zE_0o-4F3gmm7I7UXBzas",
                  name: "Ayaan Rahman"
            },
            {
                  id: "i4p6FgO1Sa2x_iR1yexWU",
                  name: "Elina Chowdhury"
            },
            {
                  id: "QQHGLE0sSfeG7ekwW5w12",
                  name: "Sana Faruq"
            }
      ]
};

type DraftUser = Pick<IUser, "name">;

const createUser = (userData: DraftUser): IUser => {
      return {
            ...userData,
            id: nanoid()
      }
}

const userSlice = createSlice({
      name: "user",
      initialState,
      reducers: {
            addUser: (state, action: PayloadAction<DraftUser>) => {
                  const userData = createUser(action.payload)
                  state.users.push(userData)
            },
            removeUser: (state, action: PayloadAction<string>) => {
                  state.users = state.users.filter(user => user.id !== action.payload)
            }
      }
});

export const selectUsers = ((state: RootState) => state.user.users)

export const { addUser, removeUser } = userSlice.actions;
export default userSlice.reducer;