import { Component } from '@angular/core';
import { ChatService } from '../../providers/chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styles: [
  ]
})
export class ChatComponent  {

  mensaje:String="";

  constructor(public chatService:ChatService) {

    this.chatService.cargarMensajes().subscribe();
   }

  enviarMensaje(){

    console.log(this.mensaje);
    
  }

}
