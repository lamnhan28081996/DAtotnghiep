import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddComponent } from './add.component';
import { FormsModule } from "@angular/forms";
import { AddService } from "./add.service";
import { Routes, RouterModule } from "@angular/router";
const routes: Routes = [
  { path: '', component: AddComponent }
]
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes)
  ],
  providers: [AddService],
  declarations: [AddComponent]
})
export class AddModule { }
