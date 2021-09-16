export interface InputInterface {
  name: string;
  error?: string;
  type?: string;
  [prop: string]: any;
}
