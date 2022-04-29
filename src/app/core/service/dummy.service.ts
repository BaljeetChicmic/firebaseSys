import { Injectable } from "@angular/core";

@Injectable({
    providedIn:'root'
})
export class dummyService{
    dataStore:Array<userData>=[];
    constructor(){}

    storeData(data:any){
        this.dataStore.push(data);
        console.log("user data----->",this.dataStore);
    }
    deleteUser(index:any){
        this.dataStore.splice(index,1);
    }
    editUser(data:any,index:any){
        
    }
}

interface userData{
  username:string,
  email:string
}