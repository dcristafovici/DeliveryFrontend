export interface ButtonInterface {
  name: string;
  className?: string;
  disabled: boolean;
  onClickEvent?: React.MouseEventHandler<HTMLButtonElement>;
}

export interface ButtonStyledInterface {
  disabled: boolean;
}
