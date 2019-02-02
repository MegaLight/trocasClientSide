import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { allCards } from "../model/models";
import { Input } from '@angular/core';
import { GameViewComponent } from "../game-view/game-view.component";
import { GameService } from "../services/game.service";
import { Router } from "@angular/router";
var CardComponent = /** @class */ (function (_super) {
    tslib_1.__extends(CardComponent, _super);
    // The properties must have different names.
    //
    // Remember that at runtime, JavaScript class instances are just objects, and objects are just mappings from key to value.
    // The property names are the key, and you can't have two different keys with the same name.
    function CardComponent(_gameService, router) {
        var _this = _super.call(this, _gameService) || this;
        _this._gameService = _gameService;
        _this.router = router;
        return _this;
    }
    CardComponent.prototype.ngOnInit = function () {
    };
    CardComponent.prototype.getCardName = function (id) {
        var cardName = allCards.filter(function (b) { return b.id === id; });
        if (cardName.length > 0) {
            return cardName[0].name;
        }
        else {
            return '';
        }
    };
    CardComponent.prototype.selectCard = function (cardId) {
        console.log(JSON.stringify(this.statuses));
        this.putCardOnTable(cardId);
    };
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Number)
    ], CardComponent.prototype, "cardId", void 0);
    CardComponent = tslib_1.__decorate([
        Component({
            selector: 'app-card',
            templateUrl: './card.component.html',
            styleUrls: ['./card.component.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [GameService, Router])
    ], CardComponent);
    return CardComponent;
}(GameViewComponent));
export { CardComponent };
//# sourceMappingURL=card.component.js.map