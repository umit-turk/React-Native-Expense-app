import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ExpenseState {
  expenses: number[];
}

const initialState: ExpenseState = {
  expenses: [],
};

const expenseSlice = createSlice({
  name: 'expense',
  initialState,
  reducers: {
    addExpense(state, action: PayloadAction<number>) {
      state.expenses.push(action.payload);
    },
    // Diğer expense işlemleri
  },
});

export const { addExpense } = expenseSlice.actions;

export default expenseSlice.reducer;
