export interface PopupInterface {
  status: boolean;
}

export interface OverlayInterface {
  children: React.ReactNode;
  onClickEvent?: React.MouseEventHandler<HTMLDivElement>;
}
