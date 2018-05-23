import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotificationComponent } from './notification.component';
import { Routes, RouterModule } from '@angular/router';
const routes: Routes = [
  {
    path: '', component: NotificationComponent, children: [
      { path: '', redirectTo: 'list1', pathMatch: 'full' },
      { path: 'list1', loadChildren: './list1/list1.module#List1Module' }, //localhost:4200/main/notification/list
      { path: 'add1', loadChildren: './add1/add1.module#Add1Module' }, //localhost:4200/main/notification/add
    ]
  }
]
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [NotificationComponent]
})
export class NotificationModule { }
