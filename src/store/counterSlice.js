import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
	name: "counter",
	initialState: {
		counter: 0,
	},
	reducers: {
		inc(state, action) {
			state.counter += 1;
		},
		dec(state, action) {
			state.counter -= 1;
		},
		rnd(state, action) {
			console.log(action);
			state.counter += action.payload;
		},
	},
});

export const { inc, dec, rnd } = counterSlice.actions;
export default counterSlice.reducer;
