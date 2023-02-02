
import { OrderStatus } from "./protocols/order-status";
import { CustomerOrder } from "./protocols/customer-protocol";
import { CarrinhoComprasProtocol } from "./protocols/Carrinho-comprasProtocol";
import { MessagingProtocol } from "./protocols/messagingProtocol";
import { PersistencyProtocol } from "./protocols/PersistencyProtocol";

export class Order{
  private _orderStatus: OrderStatus = 'open';

  constructor(
    private readonly carrinho: CarrinhoComprasProtocol,
    private readonly message: MessagingProtocol,
    private readonly persistency: PersistencyProtocol,
    private readonly customer: CustomerOrder,
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
    this.message.sendMessage( `Seu pedido com total de R$${this.carrinho.total()} foi recebido.`);
    this.persistency.saveOrder();
    this.carrinho.clear();

    console.log('Esse cliente e:',this.customer.getName(), this.customer.getIDN());
  }


}
