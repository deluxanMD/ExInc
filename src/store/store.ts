import { configureStore } from '@reduxjs/toolkit';
import appReducer from './app/app.slice';
import { matchesApi } from '../api/matches-api/matches-api';
import { setupListeners } from '@reduxjs/toolkit/query';

export const store = configureStore({
  reducer: {
    app: appReducer,
    [matchesApi.reducerPath]: matchesApi.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(matchesApi.middleware),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
