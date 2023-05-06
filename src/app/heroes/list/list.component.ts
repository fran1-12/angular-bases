import { Component } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  public heroNames: any[] = ['Mujer Maravilla','Superman','Batman',7,true];
  public deleteHero?: string;


  removeLastHero():void{
    this.deleteHero = this.heroNames.pop();
    
  }

}
