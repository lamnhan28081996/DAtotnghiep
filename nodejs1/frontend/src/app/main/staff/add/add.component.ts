import { Component, OnInit } from '@angular/core';
import { CONFIG } from "../../../core/app.config";
import { AddService } from "./add.service";
declare var $: any;
declare var toastr: any;
@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  public folder_avatar: string = CONFIG.BASE_API + '/uploads/avatar/';
  public staff_avatar: string = '';
  public staff_name: string = '';
  public staff_phone: string = '';
  public staff_email: string = '';
  public staff_birthday: string = '';
  public staff_sex: string = '';
  public staff_address: string = '';
  public staff_position: number;
  public staff_room: number;
 
  public list_postion: Array<any> = [];
  public list_room: Array<any> = [];
  constructor(
    private _addService: AddService
  ) { }

  ngOnInit() {
    this.getRooms();
    this.getPositions();
    $('#staff-birthday').datetimepicker({
      format: 'DD/MM/YYYY'
    });
  }

  uploadAvatar(e) {
    var formData = new FormData();
    formData.append('avatar', e.target.files["0"]);
    $.ajax({
      url: CONFIG.BASE_API + '/staffs/upload-avatar',
      type: 'POST',
      data: formData,
      processData: false,  // tell jQuery not to process the data
      contentType: false,  // tell jQuery not to set contentType
      success: (data) => {
        if (data.status === 'success') {
          toastr.success(data.message);
          this.staff_avatar = data.avatar;
          return;
        }
        if (data.status === 'error') {
          console.log(data);
        }
      }
    });
  }

  getRooms(){
    this._addService.getRooms().subscribe(res => {
      if(res.status === 'error'){
        toastr.error(res.message);
        if(!res.isAuth){
          this._addService.tokenError();
        }
        return;
      }
      if(res.status === 'success'){
        this.list_room = res.rooms;
      }
    }, error => {
      toastr.error('Không kết nối được đến server');
      return;
    });
  }

  getPositions(){
    this._addService.getPositions().subscribe(res => {
      if(res.status === 'error'){
        toastr.error(res.message);
        if(!res.isAuth){
          this._addService.tokenError();
        }
        return;
      }
      if(res.status === 'success'){
        this.list_postion = res.positions;
      }
    }, error => {
      toastr.error('Không kết nối được đến server');
      return;
    });
  }

  addStaff(){
    //validate
    if(this.staff_name === ''){
      toastr.warning('Bạn chưa nhập tên nhân viên');
      $('#staff-name').focus();
      return;
    }
    if(this.staff_phone === ''){
      toastr.warning('Bạn chưa nhập số điện thoại');
      $('#staff-phone').focus();
      return;
    }
    if(this.staff_email === ''){
      toastr.warning('Bạn chưa nhập email');
      $('#staff-email').focus();
      return;
    }
    var email = this.staff_email, atpos = email.indexOf("@"), dotpos = email.lastIndexOf(".");
    if (atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= email.length) {
      toastr.warning('Email không hợp lệ');
      $('#staff-email').focus();
      return;
    }
    var data = JSON.stringify({
      staff_room_id: this.staff_room,
      staff_position_id: this.staff_position,
      staff_fullname: this.staff_name,
      staff_birthday: this.staff_birthday,
      staff_address: this.staff_address,
      staff_phone: this.staff_phone,
      staff_email: this.staff_email,
      staff_sex: this.staff_sex,
      staff_avatar: this.staff_avatar
    });
    console.log(data);
  }

}
