import { createSlice } from "@reduxjs/toolkit";

const expenseSlice = createSlice({
	name: "expenseSlice",
	initialState: {
		balance: 0,
		totalExpense: 0,
		reducers: {
			updateBalance(state, action) {
				state.balance -= state.totalExpense;
			},
		},
	},
});
