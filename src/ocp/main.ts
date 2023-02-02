import { CarrinhoCompras } from "./entities/CarrinhoCompra";
import { Messaging } from "./services/messaging";
import { Order } from "./entities/order";
import { Persistency } from "./services/persistency";
import { Product } from "./entities/product";
import { FiftyPercentDescount, NoDescount } from "./entities/discount";

const noDescount = new NoDescount();
const fiftyPercentDescount = new FiftyPercentDescount();
const messaging = new Messaging();
const persistency = new Persistency();
const carrinho = new CarrinhoCompras(noDescount);

const order = new Order(carrinho,messaging , persistency);

carrinho.addProduct(new Product('Camiseta', 40));
carrinho.addProduct(new Product('Caderno', 30));

console.log(carrinho.products);
console.log(carrinho.total());
console.log(carrinho.totalWithDiscount());
console.log(order.orderStatus);
order.checkout();
console.log(order.orderStatus);
