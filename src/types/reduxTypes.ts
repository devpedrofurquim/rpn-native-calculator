export interface RpnState {
    stack: {
      stack: string[];
      inputState: 'append' | 'replace' | 'push';
      nextNegative: boolean;
      isToogleNegative: boolean;
    };
  }


export interface Payload {
    payload: number;
}
  

export type CalculatePayload = '+' | '-' | '*' | '/';