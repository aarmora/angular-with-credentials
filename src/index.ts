/***
 * This is a service that should be used to add the withCredentials flag when needed.
 * Adding it like this allows the a cookie to be set and sent.
 * Having it a separate service allows stubbing of this service for easy testing.
 */

import {Injectable} from '@angular/core';
import {Http} from '@angular/http';

@Injectable()
export class CredentialsService {
  private http: any;
  private _augmentFunctions = <any>[];

  constructor(
    http: Http) {
    this.http = <any>http;
    let build = this.http._backend._browserXHR.build;
    this.http._backend._browserXHR.build = () => {
      let xhr = build();
      this._augmentFunctions.forEach( (f: any) => {
        f(xhr);
      });
      return xhr;
    };
  }

  public augmentXhrBuild(f: any) {
    this._augmentFunctions.push(f);
  }
}
