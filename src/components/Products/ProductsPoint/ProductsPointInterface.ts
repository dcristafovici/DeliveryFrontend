export interface ProductsPointInterface {
  category: {
    id: string;
    name: string;
  },
  onSetName?(name:string): void;
}
