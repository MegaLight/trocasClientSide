import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { OKService } from '../services/ok.service';
var OKComponent = /** @class */ (function () {
    function OKComponent(okService) {
        this.okService = okService;
    }
    OKComponent.prototype.ngOnInit = function () {
        var cards = this.okService.getOKFromServer();
        console.log(cards);
    };
    OKComponent = tslib_1.__decorate([
        Component({
            selector: 'app-ok',
            templateUrl: './ok.component.html',
            styleUrls: ['./ok.component.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [OKService])
    ], OKComponent);
    return OKComponent;
}());
export { OKComponent };
//# sourceMappingURL=ok.component.js.map