import { Discount } from './discount';
import { ProductItem } from './protocols/IProduct-item';

export class CarrinhoCompras{
  private readonly _products:  ProductItem[] = [];

  constructor(private readonly discount: Discount){}

  addProduct(product:  ProductItem): void {
    this._products.push(product);
  }

  removeProduct(index:number):void {
    this._products.splice(index, 1);
  }

  get products(): Readonly< ProductItem[]> {
   return this._products;
  }

  total(): number{
    return +this._products.reduce((total, next) => total + next.price, 0).toFixed(2);
  }

  totalWithDiscount(): number{
    return this.discount.calculate(this.total())
  }

  isEmpty(): boolean{
    return this._products.length === 0;
  }


  clear(): void{
    console.log('Carrinho de compras limpo');
    this._products.length = 0;
  }
}

