import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { CONFIG } from "../../../core/app.config";
import { TokenService } from "../../../core/token.service";
@Injectable()
export class Add1Service {

  constructor(
    private _http: Http,
    private _tokenService: TokenService
  ) { }

  private createHeaders() {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('token', this._tokenService.getToken(CONFIG.TOKEN));
    return headers;
  }

  getPositions() {
    return this._http.get(CONFIG.BASE_API + '/positions', { headers: this.createHeaders() }).map(res => res.json());
  }
  addNotification(notification: Object) {
    return this._http.post(CONFIG.BASE_API + '/notifications/add', notification, { headers: this.createHeaders() }).map(res => res.json());
  }

  tokenError() {
    this._tokenService.tokenError();
  }

}
