export class PlayerStatus {
  playerName: string;
  cardId: number;
  playerId: number;
  inHands: number[] ;

  constructor(
     _playerName: string,
    _cardId: number,
    _playerId: number,
     _inHands: number[],
  ) {
    this.playerName = _playerName ;
    this.cardId = _cardId;
    this.playerId  = _playerId ;
    this.inHands = _inHands ;

  }

  // public getInHands():number[]{
  //   return this.inHands;
  // }

}
