export interface RpnState {
    stack: {
      stack: string[];
      inputState: 'append' | 'replace' | 'push';
      nextNegative: boolean;
      pressNegative: boolean;
    };
  }


export interface Payload {
    payload: number;
}
  

export type CalculatePayload = '+' | '-' | '*' | '/';