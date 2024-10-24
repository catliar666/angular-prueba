import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: '../list/list.component.html',
  styleUrl: '../list/list.component.css'
})
export class ListComponent {
  public heroeNames: string[] = ['Spiderman', 'Ironman', 'Hulk', 'Martosman', 'Thor'];


  public heroeBorrado?:string;
  
  borrar():void{
    this.heroeBorrado = this.heroeNames.pop();
  }


}
