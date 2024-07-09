export interface RpnState {
    stack: {
      stack1: number[];
      stack2: number[];
      stack3: number[];
    };
  }


export interface Payload {
    payload: number;
}
  

export type CalculatePayload = '+' | '-' | '*' | '/';