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
      const currentNumber = state.stack.stack[0];

      switch (state.stack.inputState) {
        case 'append':
          if (currentNumber.includes('.')) {
            state.stack.stack[0] += value.toString();
          } else {
            state.stack.stack[0] = (parseFloat(currentNumber) * 10 + value).toString();
          }
          break;
        case 'replace':
          state.stack.stack[0] = value.toString();
          state.stack.inputState = 'append';
          break;
        case 'push':
          break;
        default:
          break;
      }
    },
    pressDot: (state) => {
      if (!state.stack.stack[0].includes('.')) {
        state.stack.stack[0] += '.';
      }
      state.stack.inputState = 'append';
    },
    pressOperation: (state) => {

    },
    clear: (state) => {
      state.stack.stack = ["0"];
    },
    enter: (state) => {
      const currentNumber = state.stack.stack[0];
      if (currentNumber.endsWith('.')) {
        state.stack.stack[0] = 'NaN';
      } else {
        state.stack.stack = [currentNumber, ...state.stack.stack];
        state.stack.inputState = 'replace';
      }
    }
  },
});

export const { pressNum, pressDot, pressOperation, clear, enter } = rpnSlice.actions;
export default rpnSlice.reducer;