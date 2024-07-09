import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RpnState } from '../../types/reduxTypes'; // Assuming your types are imported correctly

const initialState: RpnState = {
  stack: {
    stack1: [0],
    stack2: [0],
    stack3: [0],
  }
};

export const rpnSlice = createSlice({
  name: 'rpn',
  initialState,
  reducers: {
    push: (state, action: PayloadAction<{ stack: 'stack1' | 'stack2' | 'stack3'; value: number }>) => {
      const { stack, value } = action.payload;
      state.stack[stack].push(value);
    },
    pop: (state, action: PayloadAction<'stack1' | 'stack2' | 'stack3'>) => {
      const stack = action.payload;
      state.stack[stack].pop();
    },
    clear: (state, action: PayloadAction<'stack1' | 'stack2' | 'stack3'>) => {
      const stack = action.payload;
      state.stack[stack] = [];
    },
    calculate: (state, action: PayloadAction<{ stack: 'stack1' | 'stack2' | 'stack3'; operator: string }>) => {
      const { stack, operator } = action.payload;
      const currentStack = state.stack[stack];
      if (currentStack.length < 2) return;
      const b = currentStack.pop() as number;
      const a = currentStack.pop() as number;
      let result: number;
      switch (operator) {
        case '+':
          result = a + b;
          break;
        case '-':
          result = a - b;
          break;
        case '*':
          result = a * b;
          break;
        case '/':
          result = a / b;
          break;
        default:
          return;
      }
      currentStack.push(result);
    },
  },
});

export const { push, pop, clear, calculate } = rpnSlice.actions;
export default rpnSlice.reducer;