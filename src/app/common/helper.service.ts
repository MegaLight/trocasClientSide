import {Injectable} from "@angular/core";
import {allCards} from "../model/models";

@Injectable({
  providedIn: 'root'
})
export class HelperService {

  getCardName(id) {
    let cardName = allCards.filter(
      b => b.id === id);
    if (cardName.length > 0) {
      return cardName[0].name;
    } else {
      return '';
    }
  }

}
