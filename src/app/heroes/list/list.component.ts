import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  heronames : string[] = ["Spiderman", "Ironman", "Hulk", "She Hulk" ,"Thor"];
  deletedHero ?: string ;


  removeLastHero():void{
    this.deletedHero=this.heronames.pop();
  }
}
