import { PersistencyProtocol } from "../entities/protocols/PersistencyProtocol";

export class Persistency implements PersistencyProtocol{
  saveOrder(): void{
    console.log('Pedido salvo com sucesso');
  }
}
