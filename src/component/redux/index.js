import { configureStore } from "@reduxjs/toolkit";
import expenseSlice from "./redux";

const store = configureStore({
	reducer: {
		expenseSlice: expenseSlice,
	},
});

export default store;
