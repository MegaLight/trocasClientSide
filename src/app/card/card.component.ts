import {Component, EventEmitter, OnChanges, OnInit, Output} from '@angular/core';
import {allCards} from "../model/models";
import {Input} from '@angular/core';
import {GameViewComponent} from "../game-view/game-view.component";
import {GameService} from "../services/game.service";
import {Router} from "@angular/router";
import {CardSelectionService} from "../services/card-selection.service";
import {Observable, Observer, timer} from "rxjs";
import {HelperService} from "../common/helper.service";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() cardId: number;
  @Output()select = new EventEmitter();
  @Input() human: boolean;
  @Input() myMethod: Function;

  constructor(private cardSelectionService: CardSelectionService, private helperService: HelperService) {
  }

  ngOnInit() {
  }

  setValue(cardId: number) {
    this.cardSelectionService.setValue(cardId);
    this.select.emit(cardId);
  }

}
