import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {
  name :string ="spiderman";
  age : number = 45;

  get capitalizedName():string{
    return this.name.toUpperCase();
  }

  getHeroDescription():string{

    return `${this.name} - ${this.age}`
  }

  changeHero(value : string):void{
    this.name=value;
  }

  changeAge(value : number):void{
    this.age=value;
  }

  resetForm(): void{
    this.name="spiderman";
    this.age=45
  }

}
