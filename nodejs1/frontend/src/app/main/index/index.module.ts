import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './index.component';
import { Routes, RouterModule } from '@angular/router';
import {HttpModule} from '@angular/http'
import { IndexService } from './index.service';
const routes: Routes = [
  { path: '', component: IndexComponent } //localhost:4200/main/index
]
@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    RouterModule.forChild(routes)
  ],
  providers: [IndexService],
  declarations: [IndexComponent]
})
export class IndexModule { }
