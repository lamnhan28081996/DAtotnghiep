import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { Routes, RouterModule } from '@angular/router';
import { MainService } from './main.service';
import { HttpModule } from '@angular/http';
import { TokenService } from '../core/token.service';
const routes: Routes = [
  {
    path: '', component: MainComponent,
    children: [
      { path: '', redirectTo: 'index', pathMatch: 'full' },
      { path: 'index', loadChildren: './index/index.module#IndexModule' }, //localhost:4200/main/index
      { path: 'profile', loadChildren: './profile/profile.module#ProfileModule' }, //localhost:4200/main/profile
      { path: 'room', loadChildren: './room/room.module#RoomModule' }, //localhost:4200/main/room
      { path: 'position', loadChildren: './position/position.module#PositionModule' }, //localhost:4200/main/position
      { path: 'staff', loadChildren: './staff/staff.module#StaffModule' }, //localhost:4200/main/staff
      { path: 'notification', loadChildren: './notification/notification.module#NotificationModule' },
    ]
  }
]
@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    RouterModule.forChild(routes)
  ],
  providers: [MainService, TokenService],
  declarations: [MainComponent]
})
export class MainModule { }
