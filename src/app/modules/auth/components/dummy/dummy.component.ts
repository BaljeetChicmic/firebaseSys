import { AfterViewInit, Component, OnInit, Output, ViewChild,EventEmitter } from "@angular/core";
import { FormBuilder, NgForm, Validators } from "@angular/forms";
import { REGEX } from "src/app/common/constant";
import { dummyService } from "src/app/core/service/dummy.service";
import { TableComponent } from "../table/table.component";
@Component({
    selector:'app-dummy',
    templateUrl:'./dummy.component.html', 
    styleUrls:['./dummy.component.scss']
 
})

export class DummyComponent implements AfterViewInit{
    @ViewChild(TableComponent)
    data!: { getUser: any; };
    @Output() formData=new EventEmitter<any>();
    registerForm:any;
    submitted:boolean=false;
    user:any=[];
    constructor(
        private form:FormBuilder,
        private service:dummyService){}
    ngAfterViewInit(): void {
        this.user=this.data.getUser;
    }

    ngOnInit(): void {
        this.initRegisterForm();
        
    }
    
    initRegisterForm(){
        this.registerForm=this.form.group({
            name:['',[Validators.required]],
            email:['',[Validators.required,Validators.email]],
            password:['',[Validators.required,Validators.pattern(REGEX.PASSWORD)]]
        })
    }

    get controls(){
        return this.registerForm.controls;
    }

    submitData(){
        this.submitted=true;
        if(this.registerForm.valid){
            this.service.storeData(this.registerForm.value);//get data of signle user
            //console.log("user-->",this.registerForm.value);
            console.log(this.formData.emit(this.registerForm));
            this.registerForm.reset();
            console.log("---->u",this.user=this.data.getUser);
        }
    }
    
}