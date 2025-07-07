import { createSlice } from "@reduxjs/toolkit";

const initialState = {
      title: "What will do tomorrow",
      content: "I will do practice more tomorrow."
}

const taskSlice = createSlice({
      name: "task",
      initialState,
      reducers: {}
});


export default taskSlice.reducer;
