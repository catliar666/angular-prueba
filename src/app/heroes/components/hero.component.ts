import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: '../hero/hero.component.html',
  styleUrl: '../hero/hero.component.css'
})
export class HeroComponent {
  public nombre:string = 'Iron-man';
  public edad:number = 45;

  get capitalizedName():string{
    return this.nombre.toUpperCase();
  }

  getHeroDescription():string{
    return `${this.nombre} - ${this.edad}`;
  }

  changeHero():void{
    this.nombre = 'Spiderman';
  }

  changeAge():void{
    this.edad = 18;
  }
  reset():void{
    this.edad = 45;
    this.nombre = 'Iron-man';
  }
}
