import { Component, OnInit } from '@angular/core';
import { List1Service } from "./list1.service"
declare var toastr: any;
@Component({
  selector: 'app-list1',
  templateUrl: './list1.component.html',
  styleUrls: ['./list1.component.css']
})
export class List1Component implements OnInit {
  public list_notification: Array<any> = [];
  public select_notification: object = {};
  constructor(
    private _list1Service: List1Service
  ) { }

  ngOnInit() {
    this.getNotifications();
  }
  getNotifications() {
    this._list1Service.getNotifications().subscribe(res => {
      if (res.status === 'error') {
        toastr.error(res.message);
        return;
      }
      if (res.status === 'error' && !res.isAuth) {
        this._list1Service.tokenError();
      }
      if (res.status === 'success') {
        this.list_notification = res.notifications;
      }
    }, error => {
      toastr.error('Không kết nối được đến sever !');
      return;
    });
  }
  delNotification(notification_id){
    this._list1Service.delNotification(notification_id).subscribe(res => {
      if(res.status === 'error'){
        toastr.error(res.message);
        return;
      }
      if(res.status === 'success'){
        toastr.success(res.message);
        this.getNotifications();
      }
    }, error => {
      toastr.error('Không kết nối được đến server');
      return;
    });
  }
  selectNotification(notification){
    this.select_notification = notification;
    console.log(notification);
  }

}
