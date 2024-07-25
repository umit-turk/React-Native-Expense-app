// src/slices/currencySlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CurrencyState {
  selectedCurrency: string;
}

const initialState: CurrencyState = {
  selectedCurrency: 'USD',
};

const currencySlice = createSlice({
  name: 'currency',
  initialState,
  reducers: {
    setCurrency(state, action: PayloadAction<string>) {
      state.selectedCurrency = action.payload;
    },
  },
});

export const { setCurrency } = currencySlice.actions;
export default currencySlice.reducer;
