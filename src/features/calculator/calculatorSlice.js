import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  operations: {
    last: null,
    current: null,
  },
  values: {
    last: null,
    current: "0",
  },
  disableOperator: true,
  operationQueued: false,
};

const calculatorSlice = createSlice({
  name: "calculator",
  initialState,
  reducers: {
    resetAll(state) {
      state.operations = { last: null, current: null };
      state.values = { last: null, current: "0" };
      state.disableOperator = true;
      state.operationQueued = false;
    },
    updateValues(state, action) {
      state.values.current = action.payload;
    },
    updateOperations(state, action) {
      state.values.last = state.values.current;
      state.operations.last = state.operations.current;
      state.operations.current = action.payload;
    },
    updateDisableOperator(state, action) {
      state.disableOperator = !state.disableOperator;
    },
    updateOperationQueued(state) {
      state.operationQueued = !state.operationQueued;
    },
  },
});

export const {
  resetAll,
  updateValues,
  updateOperations,
  updateDisableOperator,
  updateOperationQueued,
} = calculatorSlice.actions;

export default calculatorSlice.reducer;

export const selectDisableOperator = (state) =>
  state.calculator.disableOperator;
export const selectOperationQueued = (state) =>
  state.calculator.operationQueued;

export const selectValues = (state) => state.calculator.values;
export const selectCurrentValue = (state) => state.calculator.values.current;
export const selectLastValue = (state) => state.calculator.values.last;

export const selectOperations = (state) => state.calculator.operations;
export const selectCurrentOperation = (state) =>
  state.calculator.operations.current;
export const selectLastOperation = (state) => state.calculator.operations.last;
