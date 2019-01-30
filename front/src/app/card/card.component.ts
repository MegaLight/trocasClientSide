import {Component, EventEmitter, OnChanges, OnInit, Output} from '@angular/core';
import {allCards} from "../model/models";
import {  Input } from '@angular/core';
import {GameViewComponent} from "../game-view/game-view.component";
import {GameService} from "../services/game.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit, OnChanges {

  @Input() cardId: number;
  @Output() select = new EventEmitter();
  @Input() human: boolean;
  @Input() myMethod: Function;

  // The properties must have different names.
  //
  // Remember that at runtime, JavaScript class instances are just objects, and objects are just mappings from key to value.
  // The property names are the key, and you can't have two different keys with the same name.
  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes){
    console.log("ngOnChanges cardComponent -->"+this.cardId );
   // this.finalSelect = this.cardId ;
   // this.select.emit(this.finalSelect);
  }


  selectCard(cardId) {
    console.log("cardComponent selectCard");
    this.select.emit(cardId);
  }

  getCardName(id) {
    if (id==null){ return 'X';}
    let cardName = allCards.filter(
      b => b.id === id);
    if (cardName.length > 0) {
      return cardName[0].name;
    } else {
      return 'X';
    }
  }

}
