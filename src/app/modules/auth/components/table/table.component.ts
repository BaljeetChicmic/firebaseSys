import { Component, OnInit, Output ,EventEmitter} from "@angular/core";
import { dummyService } from "src/app/core/service/dummy.service";

@Component({
    selector:'app-table',
    templateUrl:'./table.component.html',
    styleUrls:['./table.component.scss']
})

export class TableComponent implements OnInit{

    @Output() tableData= new EventEmitter<any>();
    constructor(
        private service:dummyService
    ){}
    userData:any=this.service.dataStore;
    getUser:any;
    ngOnInit(): void {
    
    }
    editUser(data:any,index:any){
      this.getUser=data;
      console.log("getUser-->",this.getUser);
      this.tableData.emit({user:this.getUser,index:index});
    }

    deleteUser(data:any,index:any){
        this.service.deleteUser(data,index);
        console.log("Remaining User--->",this.userData);
    }
}
