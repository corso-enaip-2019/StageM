import { Component} from '@angular/core';
import { DataService } from 'src/app/service/data-service';

@Component({
  selector: 'userlist',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent {

  public list:Array<any>;

  public isTableVisible:boolean;

  public selectedItem: any;

  constructor(data:DataService) {
    var self : UserListComponent = this;
    
    this.isTableVisible= true;

    data.getList(function(list:Array<Object>):void{

      self.list = list;

    })
    }
    public viewDetail(id:number):void{
      let detail = this.list.findIndex(x=> x.id === id );
      this.isTableVisible = false;
      this.selectedItem = this.list[detail];
    }
   
}
