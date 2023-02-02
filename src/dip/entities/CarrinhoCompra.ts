import { CarrinhoComprasProtocol } from './protocols/Carrinho-comprasProtocol';
import { ProductItemProtocol } from './protocols/IProduct-item';

export class CarrinhoCompras implements CarrinhoComprasProtocol{
  private readonly _products:  ProductItemProtocol[] = [];

  addProduct(product:  ProductItemProtocol): void {
    this._products.push(product);
  }

  removeProduct(index:number):void {
    this._products.splice(index, 1);
  }

  get products(): Readonly< ProductItemProtocol[]> {
   return this._products;
  }

  total(): number{
    return +this._products.reduce((total, next) => total + next.price, 0).toFixed(2);
  }

  isEmpty(): boolean{
    return this._products.length === 0;
  }


  clear(): void{
    console.log('Carrinho de compras limpo');
    this._products.length = 0;
  }
}

