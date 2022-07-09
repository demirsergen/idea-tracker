import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface Idea {
  id: number;
  idea: string;
  category?: string;
}

const initialState: Idea[] = [
  {
    id: 1,
    idea: "Read",
    category: "books",
  },
  {
    id: 2,
    idea: "Bicycle",
    category: "vehicle",
  },
];

export const ideasSlice = createSlice({
  name: "ideas",
  initialState,
  reducers: {
    addIdea: (state, action: PayloadAction<Idea>) => {
      state.push(action.payload);
    },
  },
});

export const { addIdea } = ideasSlice.actions;

export default ideasSlice.reducer;
