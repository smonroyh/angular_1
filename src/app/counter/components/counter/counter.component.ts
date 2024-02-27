import { Component} from '@angular/core';

@Component({
  selector: 'app-counter',
  template:`
    <h1> Counter {{counter}}</h1>

    <hr>

    <h1>Bienvenidos a Angular</h1>


    <button (click)="increaseBy(1)">+1</button>
    <button (click)="resetCounter()">Reset</button>
    <button (click)="decreaseBy(1)">-1</button>
  `,
})

export class CounterComponent {

  counter:number=10;

  increaseBy(value:number):void{
    this.counter+= value;
  }

  decreaseBy(value:number):void{
    this.counter-= value;
  }

  resetCounter():void{
    this.counter=10;
  }

  constructor() { }

}
