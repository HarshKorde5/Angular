import { Component } from '@angular/core';
import { Inputevent } from './inputevent/inputevent';

@Component({
  selector: 'app-root',
  imports: [Inputevent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  takeAction(){
    alert("Hello click event is binded successfully!");
  }

  count = 0;

  counter(action : string){
    if(action == "plus"){
      this.count += 1;
    }else{
      this.count -= 1;
    }
  }
}
