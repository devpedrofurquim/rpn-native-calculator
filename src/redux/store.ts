import {configureStore} from '@reduxjs/toolkit';
import rpnReducer from './counter/counterSlice';

export const store = configureStore({
  reducer: {
    rpn: rpnReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;