export interface RpnState {
    stack: {
      stack: number[];
      inputState: 'append' | 'replace' | 'push';
    };
  }


export interface Payload {
    payload: number;
}
  

export type CalculatePayload = '+' | '-' | '*' | '/';