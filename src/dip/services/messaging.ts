import { MessagingProtocol } from "../entities/protocols/messagingProtocol";

export class Messaging implements MessagingProtocol{
  sendMessage(msg: string): void{
    console.log('Mensagem enviada: ' + msg);
  }

}
