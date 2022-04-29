import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";
import { PATH } from "../common/constant";
import { DummyComponent } from "./auth/components/dummy/dummy.component";
import { TableComponent } from "./auth/components/table/table.component";

const routes:Routes=[
    {
        path:PATH.DUMMY.TEST, component:DummyComponent
    }
]
@NgModule({
    declarations:[
        DummyComponent,
        TableComponent
    ],
    imports:[
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forChild(routes)
    ],
    exports:[TableComponent],
    providers:[]
})

export class DummyModule{}