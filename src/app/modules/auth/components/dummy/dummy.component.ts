import { Component, OnInit} from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { REGEX } from "src/app/common/constant";
import { dummyService } from "src/app/core/service/dummy.service";
@Component({
    selector: 'app-dummy',
    templateUrl: './dummy.component.html',
    styleUrls: ['./dummy.component.scss']

})

export class DummyComponent implements OnInit {
    registerForm: any;
    submitted: boolean = false;
    user: any = [];
    userDetail:any;
    createMode:boolean=false;
    editMode:boolean=false;
    rowIndex:number | undefined;
    constructor(
        private form: FormBuilder,
        private service: dummyService
    ) { }

    ngOnInit(): void {
        this.initRegisterForm();
    }

    initRegisterForm() {
        this.registerForm = this.form.group({
            name: ['', [Validators.required]],
            email: ['', [Validators.required, Validators.email]],
            password: ['', [Validators.required, Validators.pattern(REGEX.PASSWORD)]]
        })
    }

    submitData() {
        this.submitted = true;
        this.createMode = true;
        if (this.registerForm.valid) {
            if(this.rowIndex || this.rowIndex == 0){
                console.log("Edit user-->",this.registerForm.value);
                this.service.updateUser(this.registerForm.value,this.rowIndex);
                this.registerForm.reset();
                this.rowIndex=undefined;
            }
            else{
                console.log("add user-->",this.registerForm.value);
                this.service.storeData(this.registerForm.value);
                this.registerForm.reset();
            }
            
        }
    }
    getData($event:any){

        this.userDetail = $event;
        this.rowIndex=this.userDetail.index;
        // console.log("dummy component-->",this.userDetail);
        this.registerForm.controls['name'].patchValue(this.userDetail.user.name);
        this.registerForm.controls['email'].patchValue(this.userDetail.user.email);
        // console.log("index-->",this.userDetail.index);

    }
}
// Object.keys(this.registerForm.controls).forEach(key=>{
//     this.registerForm.controls[key].patchValue(this.userDetail[key]);
// })