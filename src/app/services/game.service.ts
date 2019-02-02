import {of, Subject} from 'rxjs';
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import * as myGlobals from '../model/globals';

;
import {Game} from '../model/models';

;
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/observable/of';
import {PlayerStatus} from "../model/playerStatus";
import { catchError, tap } from 'rxjs/operators';

@Injectable()
export class GameService {

  constructor(private httpClient: HttpClient) {
  }

  getPlayerStates(): Observable<PlayerStatus[]> {
    console.log("in getPlayerStates");
    return null ;
    return this.httpClient.get<PlayerStatus[]>(myGlobals.welcomeURL).pipe(
      catchError(this.handleError('getPlayerStates', []))
    );;
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }


}
