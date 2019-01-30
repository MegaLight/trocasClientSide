import {Component, EventEmitter, Input, OnChanges, OnInit, Output} from '@angular/core';
import {allCards} from "../model/models";

@Component({
  selector: 'app-in-hands',
  templateUrl: './in-hands.component.html',
  styleUrls: ['./in-hands.component.scss']
})
export class InHandsComponent implements OnInit, OnChanges {

  @Input() cardIds: number[] = [];
  @Input() selectCardId : number ;
  @Output() selectInHands: EventEmitter<number> = new EventEmitter();
  @Output() selectCardIdChange: EventEmitter<number>  = new EventEmitter();
  previousSelection : number = null ;

  constructor() {
  }

  ngOnInit() {

  }

  ngOnChanges(changes){
    console.log("in Hands ngOnChanges ");
    console.log("in Hands ngOnChanges "+this.selectCardId  );
  }

  getCardName(id) {
    let cardName = allCards.filter(
      b => b.id === id);
    if (cardName.length > 0) {
      return cardName[0].name;
    } else {
      return '';
    }
  }

  selectThisCardId(cardId:number){
    if(this.previousSelection!= null){
      this.cardIds.push(this.previousSelection);
    }
    this.cardIds = this.cardIds.filter( x=> x != cardId);
    this.selectCardId = cardId ;
    this.previousSelection=cardId;
    this.selectCardIdChange.emit(cardId);
  }

}
