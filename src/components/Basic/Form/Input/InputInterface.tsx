export interface InputInterface {
  name: string;
  error?: string;
  type?: string;
  disabled? : boolean;
  [prop: string]: any;
}

export interface InputStyledInterface {
  disabled: boolean;
}
