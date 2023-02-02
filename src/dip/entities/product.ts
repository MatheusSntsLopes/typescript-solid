import { ProductItemProtocol } from './protocols/IProduct-item';

export class Product implements ProductItemProtocol {
  constructor(public name:string,public price:number){}

}
