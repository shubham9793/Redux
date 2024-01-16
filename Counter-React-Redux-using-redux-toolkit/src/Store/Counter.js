import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: { counterValue: 0 },
  reducers: {
    increment: (state) => {
      state.counterValue++;
    },
    decrement: (state) => {
      state.counterValue--;
    },
    add: (state, action) => {
      state.counterValue += Number(action.payload.num);
    },
    substract: (state, action) => {
      state.counterValue -= Number(action.payload.num);
    },
  },
});

export const counterAction = counterSlice.actions;

export default counterSlice;
