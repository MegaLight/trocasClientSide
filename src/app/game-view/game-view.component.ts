import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {GameService} from '../services/game.service';
import {CardSelectionService} from '../services/card-selection.service';
import {allCards} from '../model/models';
import {PlayerStatus} from "../model/playerStatus";
import {BehaviorSubject, Observable, pipe, Subject} from "rxjs";
import {timer} from 'rxjs';

@Component({
  selector: 'app-game-view',
  templateUrl: './game-view.component.html',
  styleUrls: ['./game-view.component.scss']
})
export class GameViewComponent implements OnInit {

  @Input() statuses: PlayerStatus [] = [];

  @Input() inHands: number[] = [];

  myNumber: number = null;

  private source = timer(5000);

  private selectedCard = null;

  public selectionObservable: Observable<number>;

  constructor(private gameService: GameService, private cardSelectionService: CardSelectionService) {
  }


  ngOnInit() {
    this.onFetchMock();
    this.selectionObservable = this.cardSelectionService.getValue();
    this.selectionObservable.subscribe(x => {
      this.selectedCard = x;
    });
    this.selectionObservable.subscribe(x => this.source.subscribe(val => {
      console.log("temps écoulé !!!" + x);
    }))


  }

  onFetchMock() {
    let temp: PlayerStatus[] = [{
      "playerName": "Bob",
      "cardId": 5,
      "playerId": 0,
      "inHands": [67, 42, 44, 12, 13, 45, 77, 16, 49, 17, 50, 21, 54, 23, 57, 58, 62, 30]
    }, {
      "playerName": "Bill",
      "cardId": 20,
      "playerId": 1,
      "inHands": [33, 34, 35, 36, 68, 70, 38, 39, 72, 11, 76, 78, 14, 18, 55, 56, 25, 61]
    }, {
      "playerName": "Jane",
      "cardId": 4,
      "playerId": 2,
      "inHands": [32, 65, 69, 71, 41, 10, 43, 75, 15, 51, 19, 59, 27, 28, 60, 29, 63, 31]
    }, {
      "playerName": "You",
      "cardId": this.selectedCard,
      "playerId": 3,
      "inHands": [64, 2, 66, 3, 37, 6, 7, 8, 40, 9, 74, 46, 47, 48, 52, 53, 22, 24, 26]
    }]
    temp.forEach(s => {
      let p: PlayerStatus;
      if (s.playerName != 'You') {
        p = new PlayerStatus(s.playerName, s.cardId, s.playerId, s.inHands);
        this.statuses.push(p);
      } else {
        p = new PlayerStatus(s.playerName, null, s.playerId, s.inHands);
        this.statuses.push(p);
        for (let entry of s.inHands) {
          this.inHands.push(entry);
        }
      }
    })
  }


  //onFetch() {
  //   this.gameService.getPlayerStates().subscribe(statuses => {
  //     statuses.forEach( s =>  {
  //       let  p : PlayerStatus ;
  //       if (s.playerName != 'You') {
  //         p = new PlayerStatus(s.playerName, s.cardId, s.playerId, s.inHands);
  //         this.statuses.push(p);
  //       }
  //       else {
  //         //this.selectCardId = null ;
  //         //(Observable.of(this.selectCardId).subscribe(x=> {return x;}))
  //         p = new PlayerStatus(s.playerName, s.playerId , s.playerId, s.inHands);
  //         console.log( JSON.stringify(this.selectCardId));
  //         console.log( JSON.stringify(p));
  //         //this.myObservable.
  //         this.statuses.push(p);
  //         for (let entry of s.inHands) {
  //           this.inHands.push(entry);
  //         }
  //       }
  //     })
  //     }
  //   );
  // }

}


