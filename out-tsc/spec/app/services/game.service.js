import * as tslib_1 from "tslib";
import { of, Subject } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import * as myGlobals from '../model/globals';
;
;
import 'rxjs/add/observable/of';
import { catchError } from 'rxjs/operators';
var GameService = /** @class */ (function () {
    function GameService(httpClient) {
        this.httpClient = httpClient;
        this.gameSubject = new Subject();
        this.cards = [];
    }
    GameService.prototype.getGameFromServer = function () {
        this.httpClient.get(myGlobals.welcomeURL).pipe(map(function (res) {
            return res;
        }));
    };
    GameService.prototype.getPlayerStates = function () {
        console.log("in getPlayerStates");
        return this.httpClient.get(myGlobals.welcomeURL).pipe(catchError(this.handleError('getPlayerStates', [])));
        ;
    };
    GameService.prototype.handleError = function (operation, result) {
        if (operation === void 0) { operation = 'operation'; }
        return function (error) {
            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead
            // TODO: better job of transforming error for user consumption
            console.log(operation + " failed: " + error.message);
            // Let the app keep running by returning an empty result.
            return of(result);
        };
    };
    GameService = tslib_1.__decorate([
        Injectable(),
        tslib_1.__metadata("design:paramtypes", [HttpClient])
    ], GameService);
    return GameService;
}());
export { GameService };
//# sourceMappingURL=game.service.js.map