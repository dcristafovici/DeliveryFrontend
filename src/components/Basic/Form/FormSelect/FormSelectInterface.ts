export interface FormSelectInterface {
  selectDefault: string;
  label: string;
  values: {name: string, label: string}[];
  onSelect: any;
}
