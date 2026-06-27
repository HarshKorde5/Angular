import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  btnDisable = true

  toggleBtn(){
    this.btnDisable = !this.btnDisable;
  }

  inputReadonly = true;
  imgUrl = "https://cdn.britannica.com/97/1597-050-008F30FA/Flag-India.jpg"
}
