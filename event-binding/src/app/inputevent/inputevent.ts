import { Component } from '@angular/core';

@Component({
  selector: 'app-inputevent',
  imports: [],
  templateUrl: './inputevent.html',
})
export class Inputevent {
  handleInput(event : any){
    console.log("Event type :: "+event.type);
    event.target.value && console.log("Event target value :: "+event.target.value);
  }
}
