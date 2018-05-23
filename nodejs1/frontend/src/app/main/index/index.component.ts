import { Component, OnInit } from '@angular/core';
//import { TokenService } from '../../core/token.service';
import { IndexService } from './index.service';
@Component({
  selector: 'app-index',
  templateUrl: './index.component.html'
})
export class IndexComponent implements OnInit {

  constructor(
    //private _tokenService: TokenService,
    private _indexService: IndexService
  ) { }

  ngOnInit() {
    //this.getProfile();
  }

  getProfile(){
    this._indexService.getProfile().subscribe(res => {
      console.log(res)
    }, error => {
      console.log(error)
    });
  }

}
