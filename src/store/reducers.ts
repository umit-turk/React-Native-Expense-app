import expensesReducer from './slices/expenseSlice';
import incomeReducer from './slices/incomeSlice';
import themeReducer from './slices/themeSlice'; 
import currencyReducer from './slices/currencySlice'; 

const reducers = {
  expenses: expensesReducer,
  income: incomeReducer,
  theme: themeReducer,
  currency:currencyReducer
};

export default reducers;
