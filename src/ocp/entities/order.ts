import { CarrinhoCompras } from "./CarrinhoCompra";
import { Messaging } from "../services/messaging";
import { Persistency } from "../services/persistency";
import { OrderStatus } from "./protocols/order-status";

export class Order{
  private _orderStatus: OrderStatus = 'open';

  constructor(
    private readonly carrinho: CarrinhoCompras,
    private readonly message: Messaging,
    private readonly persistency: Persistency
    ){}

  get orderStatus(): OrderStatus{
    return this._orderStatus;
  }

  checkout(): void{
    if(this.carrinho.isEmpty()){
      console.log('Seu carrinho esta vazio.');
      return;
    }

    this._orderStatus = 'closed';
    this.message.sendMessage( `Seu pedido com total de R$${this.carrinho.totalWithDiscount()} foi recebido.`);
    this.persistency.saveOrder();
    this.carrinho.clear();
  }


}
