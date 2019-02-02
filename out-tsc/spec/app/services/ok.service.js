import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as myGlobals from '../model/globals';
var OKService = /** @class */ (function () {
    function OKService(httpClient) {
        this.httpClient = httpClient;
        this.isAuth = '';
    }
    OKService.prototype.getOKFromServer = function () {
        this.httpClient
            .get(myGlobals.okURL)
            .subscribe(function (data) { return console.log(data); }, function (error) {
            console.log("JSON " + JSON.stringify(error));
            alert(error.error);
            ;
        });
    };
    OKService.prototype.getOKFromServerTesting = function () {
        this.httpClient
            .get(myGlobals.welcomeURL)
            .subscribe(function (data) { return console.log(data); }, function (error) { return console.log(error); });
    };
    OKService.prototype.signIn = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            setTimeout(function () {
                _this.isAuth = '';
                resolve(true);
            }, 2000);
        });
    };
    OKService = tslib_1.__decorate([
        Injectable(),
        tslib_1.__metadata("design:paramtypes", [HttpClient])
    ], OKService);
    return OKService;
}());
export { OKService };
//# sourceMappingURL=ok.service.js.map