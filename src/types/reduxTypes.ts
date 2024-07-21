export interface RpnState {
    stack: {
      stack: string[];
      inputState: 'append' | 'replace' | 'push';
    };
  }


export interface Payload {
    payload: number;
}
  

export type CalculatePayload = '+' | '-' | '*' | '/';