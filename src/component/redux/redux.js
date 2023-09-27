import { createSlice } from "@reduxjs/toolkit";

const expenseSlice = createSlice({
	name: "expenseSlice",
	initialState: {
		balance: 0,
		totalExpense: 0,
	},
	reducers: {
		addBalance(state, action) {
			state.balance += action.payload;
		},
		updateBalance(state, action) {
			state.balance = action.payload;
		},
		updateTotalExpense(state, action) {
			state.totalExpense = action.payload;
		},
	},
});

export const { updateBalance, updateTotalExpense, addBalance } =
	expenseSlice.actions;
export default expenseSlice.reducer;
