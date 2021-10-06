import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  queuedOperation: null,
  lastAction: null,
  firstValue: "0",
  secondValue: "0",
  displayValue: "0",
};

const calculatorSlice = createSlice({
  name: "calculator",
  initialState,
  reducers: {
    updateQueuedOperation(state, action) {
      state.queuedOperation = action.payload;
    },
    updateLastAction(state, action) {
      state.lastAction = action.payload;
    },
    updateFirstValue(state, action) {
      state.firstValue = action.payload;
    },
    updateSecondValue(state, action) {
      state.secondValue = action.payload;
    },
    updateDisplayValue(state, action) {
      state.displayValue = action.payload;
    },
    clearLast(state, action) {},
    resetAll(state) {
      state.queuedOperation = null;
      state.lastAction = null;
      state.firstValue = "0";
      state.secondValue = "0";
      state.displayValue = "0";
    },
  },
});

export const {
  updateQueuedOperation,
  updateLastAction,
  updateFirstValue,
  updateSecondValue,
  updateDisplayValue,
  clearLast,
  resetAll,
} = calculatorSlice.actions;

export default calculatorSlice.reducer;
