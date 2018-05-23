import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile.component';
import { Routes, RouterModule } from '@angular/router';
import {FormsModule} from '@angular/forms';
import { ProfileService } from './profile.service';
const routes: Routes = [
  { path: '', component: ProfileComponent } //localhost:4200/main/profile
]
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes)
  ],
  providers: [ProfileService],
  declarations: [ProfileComponent]
})
export class ProfileModule { }
