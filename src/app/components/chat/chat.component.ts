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

    if(this.mensaje.length===0){
      return;
    }
    this.chatService.agregarMensaje(this.mensaje)
      .then(()=>{
        console.log('Mensaje enviado!');
        this.mensaje='';
      })
      .catch((err)=>{
        console.log('Mensaje no enviado!',err);
      });
    
  }

}
