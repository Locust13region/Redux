import { configureStore } from "@reduxjs/toolkit";
import counterReduser from "./counterSlice";

export default configureStore({
	reducer: {
		countStore: counterReduser,
	},
});
