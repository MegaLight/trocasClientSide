import * as tslib_1 from "tslib";
import { Component, Input } from '@angular/core';
import { GameService } from '../services/game.service';
import { allCards } from '../model/models';
import { PlayerStatus } from "../model/playerStatus";
var GameViewComponent = /** @class */ (function () {
    function GameViewComponent(gameService) {
        this.gameService = gameService;
        this.statuses = [];
        this.myString = null;
        this.inHands = [];
    }
    GameViewComponent.prototype.ngOnInit = function () {
        this.onFetch();
    };
    GameViewComponent.prototype.getCardName = function (id) {
        var cardName = allCards.filter(function (b) { return b.id === id; });
        if (cardName.length > 0) {
            return cardName[0].name;
        }
        else {
            return '';
        }
    };
    GameViewComponent.prototype.onFetch = function () {
        var _this = this;
        this.gameService.getPlayerStates().subscribe(function (statuses) {
            statuses.forEach(function (s) {
                var p;
                p = new PlayerStatus(s.playerName, s.cardId, s.playerId, s.inHands);
                _this.statuses.push(p);
                console.log("statuses init " + JSON.stringify(_this.statuses));
                if (s.playerName == 'You') {
                    for (var _i = 0, _a = s.inHands; _i < _a.length; _i++) {
                        var entry = _a[_i];
                        _this.inHands.push(entry);
                    }
                }
            });
            _this.card1Id = statuses[0].cardId;
            _this.card2Id = statuses[1].cardId;
            _this.card3Id = statuses[2].cardId;
            _this.card4Id = statuses[3].cardId;
        });
        this.myString = "done";
    };
    GameViewComponent.prototype.test = function () {
        console.log(JSON.stringify(this.statuses));
    };
    GameViewComponent.prototype.putCardOnTable = function (id) {
        console.log(this.myString);
        console.log("putting " + id);
        console.log("statuses init " + JSON.stringify(this.statuses));
        // console.log("length "+this.statuses.length)
        // for (let entry of this.statuses) {
        //   console.log(JSON.stringify(entry)); // 1, "string", false
        // }
        //
        // if (this.card4Id == null ) {
        //   this.card4Id = id;
        //   console.log("in if putting "+this.card4Id);
        //   let  p : PlayerStatus ;
        //   p = new PlayerStatus("You", id, 4, null);
        //   this.statuses[3] = p ;
        //   //this.statuses.push(p);
        //
        // }
        //
        //
        // for (let entry of this.statuses) {
        //   console.log(JSON.stringify(entry)); // 1, "string", false
        // }
        //
        // console.log("status 0 "+ JSON.stringify(this.statuses[0]));
        // console.log("status 1 "+ JSON.stringify(this.statuses[1]));
        // console.log("status 2 "+ JSON.stringify(this.statuses[2]));
        // console.log("status 3 "+ JSON.stringify(this.statuses[3]));
    };
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Number)
    ], GameViewComponent.prototype, "card1Id", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Number)
    ], GameViewComponent.prototype, "card2Id", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Number)
    ], GameViewComponent.prototype, "card3Id", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Number)
    ], GameViewComponent.prototype, "card4Id", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Array)
    ], GameViewComponent.prototype, "inHands", void 0);
    GameViewComponent = tslib_1.__decorate([
        Component({
            selector: 'app-game-view',
            templateUrl: './game-view.component.html',
            styleUrls: ['./game-view.component.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [GameService])
    ], GameViewComponent);
    return GameViewComponent;
}());
export { GameViewComponent };
//# sourceMappingURL=game-view.component.js.map