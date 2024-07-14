import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RpnState } from '../../types/reduxTypes';

const initialState: RpnState = {
  stack: {
    stack: [],
    inputState: 'replace',
  }
};

export const rpnSlice = createSlice({
  name: 'rpn',
  initialState,
  reducers: {
    pressNum: (state, action: PayloadAction<{ stack: 'stack'; value: number }>) => {
      const { value } = action.payload;
      switch (state.stack.inputState) {
        case 'append':
          state.stack.stack[0] = (state.stack.stack[0] || 0) * 10 + value;
          break;
        case 'replace':
          state.stack.stack[0] = value;
          state.stack.inputState = 'append';
          break;
        case 'push':
          break;
        default:
          break;
      }
    },
    clear: (state) => {
      state.stack.stack = [0];
    }
  },
});

export const { pressNum, clear } = rpnSlice.actions;
export default rpnSlice.reducer;