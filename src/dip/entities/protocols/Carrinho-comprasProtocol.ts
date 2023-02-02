import { ProductItemProtocol } from "./IProduct-item";

export interface CarrinhoComprasProtocol{
  products: Readonly<ProductItemProtocol[]>;
  addProduct(product:  ProductItemProtocol): void;
  removeProduct(index:number):void;
  total(): number;
  isEmpty(): boolean;
  clear(): void;
}
