import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface IdeasState {
  ideas: Array<string>;
}

const initialState: IdeasState = {
  ideas: [],
};

export const ideasSlice = createSlice({
  name: "ideas",
  initialState,
  reducers: {},
});

export const {} = ideasSlice.actions;

export default ideasSlice.reducer;
