import { Component, OnInit } from '@angular/core';
import { CONFIG } from "../../../core/app.config";
import { Add1Service } from "./add1.service";
declare var $: any;
declare var toastr: any;

@Component({
  selector: 'app-add1',
  templateUrl: './add1.component.html',
  styleUrls: ['./add1.component.css']
})
export class Add1Component implements OnInit {

  public notification_name: string = '';
  public notification_content: string = '';
  public notification_date: string = '';
  public notification_position: number;

  public list_postion: Array<any> = [];
  constructor(
    private _add1Service: Add1Service
  ) { }

  ngOnInit() {
    this.getPositions();
    $('#notification-date').datetimepicker({
      format: 'DD/MM/YYYY'
    });
  }
  getPositions() {
    this._add1Service.getPositions().subscribe(res => {
      if (res.status === 'error') {
        toastr.error(res.message);
        return;
      }
      if (res.status === 'error' && !res.isAuth) {
        this._add1Service.tokenError();
        return;
      }
      if (res.status === 'success') {
        this.list_postion = res.positions;
      }
    }, error => {
      toastr.error('Không kết nối được đến server');
      return;
    });
  }

  add1Notification() {
    //validate
    if (this.notification_name === '') {
      toastr.warning('Bạn chưa nhập tên thông báo !');
      $('#notification-name').focus();
      return;
    }
    if ($('#notification-date').val() === '') {
      toastr.warning('Bạn chưa nhập ngày đăng thông báo !');
      $('#notification-date').focus();
      return;
    }
    if (this.notification_position === undefined) {
      toastr.warning('Bạn chưa chọn chức vụ !');
      $('#notification-position').focus();
      return;
    }
    if (this.notification_content === '') {
      toastr.warning('Bạn chưa nhập nội dung thông báo !');
      $('#notification-content').focus();
      return;
    }

    var notification = JSON.stringify({
      notification_position_id: this.notification_position,
      notification_name: this.notification_name,
      notification_content: this.notification_content,
      notification_date: $('#notification-date').val(),
    });
    this._add1Service.addNotification(notification).subscribe(res => {
      if (res.status === 'error') {
        toastr.error(res.message);
        return;
      }
      if (res.status === 'error' && !res.isAuth) {
        this._add1Service.tokenError();
        return;
      }
      if (res.status === 'success') {
        toastr.success(res.message);
        this.notification_position = undefined;
        this.notification_name = '';
        this.notification_content = '';
        $('#notification-date').val('');
        return;
      }
    }, error => {
      toastr.error('Không kết nối được đến server');
      return;
    });
    console.log(notification);
  }

}
