import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { List1Component } from './list1.component';
import { Routes, RouterModule } from "@angular/router";
import { List1Service } from "./list1.service";

const routes: Routes = [
  { path: '', component: List1Component }
]
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  providers: [List1Service],
  declarations: [List1Component]
})
export class List1Module { }