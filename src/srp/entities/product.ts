import { ProductItem } from './protocols/IProduct-item';

export class Product implements ProductItem {
  constructor(public name:string,public price:number){}

}
