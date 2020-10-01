import { Component } from '@angular/core';
import { ChatService } from '../../providers/chat.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
  ]
})
export class LoginComponent {

  constructor(public chatService:ChatService) { }

  

  ingresar(proveedor:String){
    console.log(proveedor);
    this.chatService.login(proveedor);
  }

}
