import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IncomeState {
  incomes: number[];
}

const initialState: IncomeState = {
  incomes: [],
};

const incomeSlice = createSlice({
  name: 'income',
  initialState,
  reducers: {
    addIncome(state, action: PayloadAction<number>) {
      state.incomes.push(action.payload);
    },
    // Diğer income işlemleri
  },
});

export const { addIncome } = incomeSlice.actions;

export default incomeSlice.reducer;
