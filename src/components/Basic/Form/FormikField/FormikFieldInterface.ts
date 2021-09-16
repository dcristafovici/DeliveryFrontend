export interface FormikFieldInterface {
  name: string;
  label: string;
  type?: string;
  error?: string;
  touched?: boolean;
  isTextarea?: boolean;
  [prop:string]: any;
}
