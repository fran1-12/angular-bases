import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {
  public titleName:string = 'Iroman';
  public name:string = 'Tony';
  public age:number = 34;
  public method:string = 'Fuego';

  cambiarNombre():void{
   this.name = 'Negro';
  }

  cambiarEdad():void{
   this.age = 65;
  }

  resetAll():void{
    this.name = 'Tony';
    this.age = 34;
   }

   get capitalizedName():string{
    return this.name.toUpperCase();
   }

   getHeroDescription():string{
    return `${ this.name } - ${ this.age }`;
   }


}
