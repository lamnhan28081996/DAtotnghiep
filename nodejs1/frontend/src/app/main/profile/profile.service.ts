import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { TokenService } from '../../core/token.service';
import { CONFIG } from '../../core/app.config';
@Injectable()
export class ProfileService {

  constructor(
    private _http: Http,
    private _tokenService: TokenService
  ) { }

  private createHeaders(): any {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('token', this._tokenService.getToken(CONFIG.TOKEN));
    return headers;
  }

  getProfile(){
    return this._http.get(CONFIG.BASE_API + '/users/user', { headers: this.createHeaders() }).map(res => res.json());
  }

  updateProfile(data: Object){
    return this._http.put(CONFIG.BASE_API + '/users/user', data, { headers: this.createHeaders() }).map(res => res.json());
  }

}
