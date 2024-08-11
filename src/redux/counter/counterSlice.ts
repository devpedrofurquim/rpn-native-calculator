import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RpnState } from '../../types/reduxTypes';

const initialState: RpnState = {
  stack: {
    stack: [],
    inputState: 'replace',
    nextNegative: false,
    isToogleNegative: false,
  }
};

const switchNegative = (x: string): string => {
  if (x && x.startsWith('-')) {
    return x.slice(1);
  }
  return `-${x}`;
}

export const rpnSlice = createSlice({
  name: 'rpn',
  initialState,
  reducers: {
    pressNum: (state, action: PayloadAction<{ stack: 'stack'; value: number }>) => {
      const { value } = action.payload;
      const currentNumber = state.stack.stack[0];

      if (state.stack.nextNegative && state.stack.isToogleNegative) {
        state.stack.stack[0] = `-${value}`;
        state.stack.inputState = 'append';
        return;
      }

      switch (state.stack.inputState) {
        case 'append':
          if (currentNumber && currentNumber.includes('.')) {
            state.stack.stack[0] += value.toString();
          } 
          else {
            state.stack.stack[0] = `${currentNumber}${value}`;
          }
          break;
        case 'replace':
          state.stack.stack[0] = value.toString();
          state.stack.inputState = 'append';
          break;
        case 'push':
          state.stack.stack = [value.toString(), ...state.stack.stack];
          state.stack.inputState = 'append';
          break;
        default:
          break;
      }
    },
    pressDot: (state) => {
      if (!state.stack.stack[0]) {
        state.stack.stack[0] = 'NaN';
      }
      else if (state.stack.stack[0] && !state.stack.stack[0].includes('.')) {
        state.stack.stack[0] += '.';
      }
      state.stack.inputState = 'append';
    },
    pressOperation: (state, action: PayloadAction<{operation: string}>) => {
      const currentNumber = parseFloat(state.stack.stack[0]);
      const operandNumber = parseFloat(state.stack.stack[1]);
      switch(action.payload.operation) {
        case '/':
          state.stack.stack[0] = (operandNumber / currentNumber).toString();
          state.stack.inputState = 'push';
          break;
        case 'x':
          state.stack.stack[0] = (operandNumber * currentNumber).toString();
          state.stack.inputState = 'push';

          break;
        case '+':
          state.stack.stack[0] = (operandNumber + currentNumber).toString();
          state.stack.inputState = 'push';
          break;
        case 'pow':
          state.stack.stack = [`${(operandNumber ** currentNumber)}`, ...state.stack.stack.slice(2)];
          state.stack.inputState = 'push';
          break;
        case 'swap':
          state.stack.stack = [state.stack.stack[1], state.stack.stack[0], ...state.stack.stack.slice(2)];
          state.stack.inputState = 'push';
          break;
        default:
          state.stack.stack[0] = '0';
          break;
      }
    },
    pressClear: (state) => {
      state.stack.stack = ["0"];
      state.stack.nextNegative = false;
    },
    pressEnter: (state) => {
      const currentNumber = state.stack.stack[0];
      if (state.stack.isToogleNegative) {
        state.stack.nextNegative = true;
      } else if (currentNumber.endsWith('.')) {
        state.stack.stack[0] = 'NaN';
      } else if (currentNumber) {
        state.stack.stack = [currentNumber, ...state.stack.stack];
        state.stack.inputState = 'replace';
      }
    },
    toogleNegative: (state) => {
      state.stack.isToogleNegative = true;
      const currentNumber = parseFloat(state.stack.stack[0]);
      const operandNumber = parseFloat(state.stack.stack[1]);

      if (!operandNumber && !currentNumber) {
        state.stack.nextNegative = true;
      } else if (!operandNumber) {
        state.stack.stack[0] = switchNegative(currentNumber.toString());
        state.stack.nextNegative = false;
      } else {
        state.stack.stack[0] = (operandNumber - currentNumber).toString();
        state.stack.inputState = 'push';
      }
    }
  },
});

export const { pressNum, pressDot, pressOperation, pressClear, pressEnter, toogleNegative } = rpnSlice.actions;
export default rpnSlice.reducer;