import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {GameService} from '../services/game.service';
import {allCards} from '../model/models';
import {PlayerStatus} from "../model/playerStatus";
import {Observable, pipe, Subject} from "rxjs";
import {map, switchMap} from 'rxjs/operators';

@Component({
  selector: 'app-game-view',
  templateUrl: './game-view.component.html',
  styleUrls: ['./game-view.component.scss']
})
export class GameViewComponent implements OnInit {

  username: string;

  @Input() statuses: PlayerStatus [] = [];

  @Input() inHands: number[] = [];

  _selectCardId: number;


  myObservable = null;// = Observable.of(this.selectCardId);
  //observable = null;
  constructor(private gameService: GameService) {
  }

  get selectCardId(): number {
    // transform value for display
    return this._selectCardId;
  }

  set selectCardId(x) {
    // transform value for display
    console.log("setter ... ")
    this._selectCardId = x ;
    this.myChange();

  }

  ngOnInit() {
    this.onFetchMock();
    this.myObservable = Observable.create((observer:any) => {
      observer.next(this.selectCardId);
    });
  }

  ngDoCheck() {
    //this.statuses.filter(x =>x.playerName == 'You').map( x=> x.cardId = this.observeSelectCardId());
    //this.statuses.filter(x =>x.playerName == 'You').map( x=> x.cardId = this.selectCardId);
    //this.statuses.filter(x =>x.playerName == 'You').map( x=> x.cardId = this.observeSelectCardId2());
    //this.myChange();
  }

  myChange(){
    console.log("myChange");
    this.statuses.filter(x =>x.playerName == 'You').map( x=> x.cardId = this.selectCardId);
    //this.statuses.filter(x =>x.playerName == 'You').map( x=> x.inHands.splice(this.selectCardId,1));
  }

  // observeSelectCardId2() : number{
  //   if (this.selectCardId != null) {
  //     this.selectCardId.subscribe((x: any) => {
  //       this.temp = x;
  //     });
  //     return this.temp;
  //   }
  //   return 0;
  // }



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
      "cardId":  null,
      "playerId": 3,
      "inHands": [64, 2, 66, 3, 37, 6, 7, 8, 40, 9, 74, 46, 47, 48, 52, 53, 22, 24, 26]
    }]
    temp.forEach(s => {
      let p: PlayerStatus;
      if (s.playerName != 'You') {
        p = new PlayerStatus(s.playerName, s.cardId, s.playerId, s.inHands);
        this.statuses.push(p);
      } else {
        p = new PlayerStatus(s.playerName,  this.observeSelectCardId() , s.playerId, s.inHands);
        console.log(JSON.stringify(this.selectCardId));
        console.log(JSON.stringify(p));
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


