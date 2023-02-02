type Product ={ name: string, price: number,}

type OrderStatus =  'open' | 'closed';

export class CarrinhoComprasLegacy{
  private readonly _products: Product[] = [];
  private _orderStatus: OrderStatus = 'open';

  addProduct(product: Product): void {
    this._products.push(product);
  }

  removeProduct(index:number):void {
    this._products.splice(index, 1);
  }

  get products(): Readonly<Product[]> {
   return this._products;
  }

  get orderStatus(): OrderStatus{
    return this._orderStatus;
  }

  total(): number{
    return +this._products.reduce((total, next) => total + next.price, 0).toFixed(2);
  }

  checkout(): void{
    if(this.isEmpty()){
      console.log('Seu carrinho esta vazio.');
      return;
    }
    this._orderStatus = 'closed';
    this.sendMessage( `Seu pedido com total de ${this.total} foi recebido.`);
    this.saveOrder();
    this.clear();
  }

  isEmpty(): boolean{
    return this._products.length === 0;
  }

  sendMessage(msg: string): void{
    console.log('Mensagem enviada: ' + msg);
  }

  saveOrder(): void{
    console.log('Pedido salvo com sucesso');
  }

  clear(): void{
    console.log('Carrinho de compras limpo');
    this._products.length = 0;
  }
}

const carrinho = new CarrinhoComprasLegacy();
carrinho.addProduct({name: 'Camiseta', price:50.00});
carrinho.addProduct({name: 'Caderno', price:30.20});
console.log(carrinho.total());

