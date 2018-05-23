import { Component, OnInit } from '@angular/core';
import { RoomService } from "./room.service";
declare var toastr: any;
declare var $: any;
@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.css']
})
export class RoomComponent implements OnInit {
  public room_name: string = '';
  public list_room: Array<any> = [];
  constructor(
    private _roomService: RoomService
  ) { }

  ngOnInit() {
    this.getRooms()
  }

  //Thêm vị trí mới
  addRoom(){
    if(this.room_name === ''){
      toastr.warning('Bạn chưa nhập tên phòng');
      $('#room-name').focus();
      return;
    }
    var data = JSON.stringify({
      room_name: this.room_name
    });
    this._roomService.addRoom(data).subscribe(res => {
      if(res.status === 'error'){
        toastr.error(res.message);
        return;
      }
      if(res.status === 'success'){
        toastr.success(res.message);
        $('#room-name').val('');
        this.getRooms();
      }
    }, error => {
      toastr.error('Không kết nối được đến server');
      return;
    });
  }

  //Lấy danh sách vị trí
  getRooms(){
    this._roomService.getRooms().subscribe(res => {
      if(res.status === 'error'){
        toastr.error(res.message);
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

  //Xoá vị trí
  delRoom(room_id){
    this._roomService.delRoom(room_id).subscribe(res => {
      if(res.status === 'error'){
        toastr.error(res.message);
        return;
      }
      if(res.status === 'success'){
        toastr.success(res.message);
        this.getRooms();
      }
    }, error => {
      toastr.error('Không kết nối được đến server');
      return;
    });
  }

}
