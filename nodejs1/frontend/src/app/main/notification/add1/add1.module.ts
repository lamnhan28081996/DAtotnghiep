import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Add1Component } from './add1.component';
import { FormsModule } from "@angular/forms";
import { Add1Service } from "./add1.service";
import { Routes, RouterModule } from "@angular/router";
const routes: Routes = [
  { path: '', component: Add1Component }
]
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes)
  ],
  providers: [Add1Service],
  declarations: [Add1Component]
})
export class Add1Module { }

