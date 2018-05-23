import { Component, OnInit } from '@angular/core';
import { MainService } from './main.service';
import { TokenService } from '../core/token.service';
declare var toastr: any;
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  public user: Object = {
    user_fullname: ''
  };
  constructor(
    private _mainService: MainService,
    private _tokenService: TokenService
  ) { }

  ngOnInit() {
    this.getProfile()
  }

  getProfile() {
    this._mainService.getProfile().subscribe(res => {
      if (res.status === 'error') {
        if (!res.isAuth) {
          this._mainService.tokenError();
        }
        toastr.error(res.message);
      } else if (res.status === 'success') {
        this.user = res.user;
      }
    }, error => {
      console.log(error)
    });
  }

  logout(){
    this._mainService.logout();
  }

}
