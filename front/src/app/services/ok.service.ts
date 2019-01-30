import {Subject} from 'rxjs';
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import * as myGlobals from '../model/globals';

@Injectable()
export class OKService {

  isAuth = '';

  constructor(private httpClient: HttpClient) {
  }

  getOKFromServer() {
    this.httpClient
      .get(myGlobals.okURL)
      .subscribe(
        data => console.log(data),
        error => {
          console.log("JSON " +  JSON.stringify(error));
          alert(error.error);
          ;
        }
      );
  }

  getOKFromServerTesting() {
    this.httpClient
      .get(myGlobals.welcomeURL)
      .subscribe(
        data => console.log(data),
        error => console.log(error));
  }


  signIn() {
    return new Promise(
      (resolve, reject) => {
        setTimeout(
          () => {
            this.isAuth = '';
            resolve(true);
          }, 2000
        );
      }
    );
  }


}
