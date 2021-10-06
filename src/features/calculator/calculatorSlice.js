import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  operation: null,
  lastKey: null,
  firstValue: "0",
  secondValue: "0",
  displayValue: "0",
};

const calculatorSlice = createSlice({
  name: "calculator",
  initialState,
  reducers: {
    resetAll(state) {
			state.operation = null
			state.lastKey = null
			state.firstValue = "0"
			state.secondValue = "0"
			state.displayValue = "0"
    },
		updateLastKey(state, action){
			state.lastKey = action.payload
		},
		updateDisplayValue(state, action){
			state.displayValue = action.payload
		},
		updateFirstValue(state, action){
			state.firstValue = action.payload
		},
		updateSecondValue(state, action){
			state.secondValue = action.payload
		},
		updateOperation(state, action){
			state.operation = action.payload
		},
  },
});

export const {
  resetAll,
	updateLastKey,
	updateDisplayValue,
	updateFirstValue,
	updateSecondValue,
	updateOperation
} = calculatorSlice.actions;

export default calculatorSlice.reducer;
