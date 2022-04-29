import { Component, OnInit } from "@angular/core";
import { dummyService } from "src/app/core/service/dummy.service";

@Component({
    selector:'app-table',
    templateUrl:'./table.component.html',
    styleUrls:['./table.component.scss']
})

export class TableComponent implements OnInit{
    constructor(
        private service:dummyService
    ){}
    userData:any=this.service.dataStore;
    getUser:any;
     
    ngOnInit(): void {
    
    }
    editUser(data:any){
      console.log("values-->",data);
      this.getUser=data;
    }

    deleteUser(data:any){
        this.service.deleteUser(data);
        console.log("Remaining User--->",this.userData);
    }
}
