import * as tslib_1 from "tslib";
import { Component, Input } from '@angular/core';
import { allCards } from "../model/models";
var InHandsComponent = /** @class */ (function () {
    function InHandsComponent() {
        this.cardIds = [];
    }
    InHandsComponent.prototype.ngOnInit = function () {
    };
    InHandsComponent.prototype.ngAfterViewChecked = function () {
    };
    InHandsComponent.prototype.getCardName = function (id) {
        var cardName = allCards.filter(function (b) { return b.id === id; });
        if (cardName.length > 0) {
            return cardName[0].name;
        }
        else {
            return '';
        }
    };
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Array)
    ], InHandsComponent.prototype, "cardIds", void 0);
    InHandsComponent = tslib_1.__decorate([
        Component({
            selector: 'app-in-hands',
            templateUrl: './in-hands.component.html',
            styleUrls: ['./in-hands.component.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], InHandsComponent);
    return InHandsComponent;
}());
export { InHandsComponent };
//# sourceMappingURL=in-hands.component.js.map