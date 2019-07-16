import { Component } from '@angular/core';
import { Itodolist} from 'src/app/models/todolist';

@Component({
  selector: 'a-list',
  templateUrl: './a-list.component.html',
  styleUrls: ['./a-list.component.scss']
})
export class AListComponent {

  public list:Array<Itodolist>;

  public contId: number;

  public newElement: Itodolist;

  public getlist(){
    return[
        {id : 0, description: 'samsung Galaxy', updateDes : null},
        {id : 1, description: 'IPhone 6', updateDes :null},
    ];
  }

  constructor() {
    this.list = this.getlist();
   }

   public updateItem(id: number)
   {
     this.list.find(x => x.id === id).description = this.list.find(x => x.id === id).updateDes;
   }

   public deleteItem(id:number)
   {
    let del = this.list.findIndex(x => x.id === id);
    this.list.splice(del,1);
   }

   public addItem(){
     this.list.push(this.newElement)
   }

}