import { Component, OnInit } from '@angular/core';
import { PositionService } from "./position.service";
declare var toastr: any;
declare var $: any;
@Component({
  selector: 'app-position',
  templateUrl: './position.component.html',
  styleUrls: ['./position.component.css']
})
export class PositionComponent implements OnInit {
  public position_name: string = '';
  public list_positon: Array<any> = [];
  constructor(
    private _positionService: PositionService
  ) { }

  ngOnInit() {
    this.getPositions();
  }

  //Thêm vị trí mới
  addPosition(){
    //Kiểm tra tên vị trí 
    if(this.position_name === ''){
      toastr.warning('Bạn chưa nhập tên vị trí');
      $('#position-name').focus();
      return;
    }
    var data = JSON.stringify({
      position_name: this.position_name
    });
    this._positionService.addPosition(data).subscribe(res => {
      if(res.status === 'error'){
        toastr.error(res.message);
        return;
      }
      if(res.status === 'success'){
        toastr.success(res.message);
        $('#position-name').val('');
        this.getPositions();
      }
    }, error => {
      toastr.error('Không kết nối được đến server');
      return;
    });
  }

  //Lấy danh sách vị trí
  getPositions(){
    this._positionService.getPositions().subscribe(res => {
      if(res.status === 'error'){
        toastr.error(res.message);
        return;
      }
      if(res.status === 'success'){
        this.list_positon = res.positions;
      }
    }, error => {
      toastr.error('Không kết nối được đến server');
      return;
    });
  }

  //Xoá vị trí
  delPosition(position_id){
    this._positionService.delPosition(position_id).subscribe(res => {
      if(res.status === 'error'){
        toastr.error(res.message);
        return;
      }
      if(res.status === 'success'){
        toastr.success(res.message);
        this.getPositions();
      }
    }, error => {
      toastr.error('Không kết nối được đến server');
      return;
    });
  }

}
