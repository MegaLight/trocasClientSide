var PlayerStatus = /** @class */ (function () {
    function PlayerStatus(_playerName, _cardId, _playerId, _inHands) {
        this.playerName = _playerName;
        this.cardId = _cardId;
        this.playerId = _playerId;
        this.inHands = _inHands;
    }
    PlayerStatus.prototype.getInHands = function () {
        return this.inHands;
    };
    return PlayerStatus;
}());
export { PlayerStatus };
//# sourceMappingURL=playerStatus.js.map