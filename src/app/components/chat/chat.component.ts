import { Component } from '@angular/core';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styles: [
  ]
})
export class ChatComponent  {

  mensaje:String="";

  constructor() { }

  enviarMensaje(){

    console.log(this.mensaje);
    
  }

}
