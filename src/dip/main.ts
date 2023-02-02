import { CarrinhoCompras } from "./entities/CarrinhoCompra";
import { Messaging } from "./services/messaging";
import { Order } from "./entities/order";
import { Persistency } from "./services/persistency";
import { Product } from "./entities/product";
import { IndividualCustomer } from "./entities/customer";

const messaging = new Messaging();
const persistency = new Persistency();
const carrinho = new CarrinhoCompras();
const individualCustomer = new IndividualCustomer('Mateus', 'Monaco', '111.111.111-11');

const order = new Order(carrinho,messaging , persistency,individualCustomer);

carrinho.addProduct(new Product('Camiseta', 40));
carrinho.addProduct(new Product('Caderno', 30));

console.log(carrinho.products);
console.log(carrinho.total());
console.log(order.orderStatus);
order.checkout();
console.log(order.orderStatus);
