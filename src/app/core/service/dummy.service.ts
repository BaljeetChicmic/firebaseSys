import { Injectable } from "@angular/core";

@Injectable({
    providedIn:'root'
})
export class dummyService{
    dataStore:Array<userData>=[{
        name:'xyz',
        email:'xyz@gmail.com'
    },
    {
        name:'abc',
        email:'abc@gmail.com'
    }];
    rowindex:number=-1;
    constructor(){}
 
    storeData(data:any){
        this.dataStore.push(data);
    }

    deleteUser(data:any,index:any){
        this.dataStore.splice(index,1);
    }
    
    updateUser(data:userData,index:number){
        this.dataStore[index]=data;
    }
}

interface userData{
    name:string,
    email:string
}