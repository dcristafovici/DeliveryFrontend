export interface SelectValue {
  name: string;
  label: string;
}
export interface SelectInterface {
  values: SelectValue[];
  initialValue: string;
  className?: string;
  onChangeEvent: any;
}
