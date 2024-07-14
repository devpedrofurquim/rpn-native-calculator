import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RpnState } from '../../types/reduxTypes'; // Assuming your types are imported correctly

const initialState: RpnState = {
  stack: {
    stack1: [0],
    stack2: [0],
    stack3: [0],
    inputState: 'append',
  }
};

export const rpnSlice = createSlice({
  name: 'rpn',
  initialState,
  reducers: {
    pressNum: (state, action: PayloadAction<{ stack: 'stack1' | 'stack2' | 'stack3'; value: number }>) => {
      const { value } = action.payload;
      state.stack.stack1.push(value);
    },
    clear: (state) => {
      state.stack.stack1 = [0];
    }
  },
});

export const { pressNum, clear } = rpnSlice.actions;
export default rpnSlice.reducer;