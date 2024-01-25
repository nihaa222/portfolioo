import { createSlice } from "@reduxjs/toolkit";

const navSlice = createSlice({
  name: "setup",
  initialState: {
    value: null,
  },
  reducers: {
    setSetupFalse: (state) => {
      state.value = false;
    },
    setSetupTrue: (state) => {
      state.value = true;
    },
  },
});

export const { setSetupFalse, setSetupTrue } = navSlice.actions;
export const selectSetup = (state) => state.setup.value;

export default navSlice.reducer;
