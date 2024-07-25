import { Reducer, configureStore } from '@reduxjs/toolkit';
import {persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER, persistStore} from 'redux-persist';
import storage from '@react-native-async-storage/async-storage';
import reducers from './reducers';


const persistConfig = {
  key: 'root',
  storage,
  version: 1,
};

const persistedReducer = <T>(reducer:Reducer<T>) => persistReducer(persistConfig, reducer);


export const store = configureStore({
  reducer: {
    expenses: persistedReducer(reducers.expenses),
    income:persistedReducer(reducers.income),
    theme: persistedReducer(reducers.theme), 
    currency:persistedReducer(reducers.currency)
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
