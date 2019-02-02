import {Component, EventEmitter, Input, OnChanges, OnInit, Output} from '@angular/core';
import {allCards} from "../model/models";
import {GameService} from "../services/game.service";
import {CardSelectionService} from "../services/card-selection.service";
import {HelperService} from "../common/helper.service";

@Component({
  selector: 'app-in-hands',
  templateUrl: './in-hands.component.html',
  styleUrls: ['./in-hands.component.scss']
})
export class InHandsComponent implements OnInit {

  @Input() cardIds: number[] = [];

  previousSelection : number = null ;

  constructor() {
  }

  ngOnInit() {
  }

  selectThisCardId(cardId:number){
    if(this.previousSelection!= null){
      this.cardIds.push(this.previousSelection);
    }
    this.cardIds = this.cardIds.filter( x=> x != cardId);
    this.previousSelection=cardId;
  }

}
