export interface FieldUpdateInterface {
  type?: string;
  name: string;
  defaultValue?: string;
  placeholder?: string;
  label?: string;
}

export enum fieldStateEnum {
  NO_EDIT = 'NO_EDIT',
  EDIT = 'EDIT',
  WAITING_SEND = 'WAITING_SEND',
}
