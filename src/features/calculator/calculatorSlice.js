import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  actions: {
    last: null,
    current: null,
  },
  operations: {
    last: null,
    current: null,
  },
  values: {
    last: null,
    current: "0",
  },
};

const calculatorSlice = createSlice({
  name: "calculator",
  initialState,
  reducers: {
    resetAll(state) {
      state.actions = { last: null, current: null };
      state.operations = { last: null, current: null };
      state.values = { last: null, current: "0" };
    },
    updateActions(state, action) {
      const { last, current } = action.payload;
      state.actions.last = last;
      state.actions.current = current;
    },
    updateValues(state, action) {
      const { current, last } = action.payload;
      state.values.current = current;
      state.values.last = last;
    },
    updateOperations(state, action) {
      const { current, last } = action.payload;
      state.operations.current = current;
      state.operations.last = last;
    },
  },
});

export const {
  resetAll,
  updateActions,
  updateValues,
  updateOperations,
} = calculatorSlice.actions;

export default calculatorSlice.reducer;

export const selectActions = (state) => state.calculator.actions;
export const selectValues = (state) => state.calculator.values;
export const selectOperations = (state) => state.calculator.operations;
