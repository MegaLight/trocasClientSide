import { Component, OnInit } from '@angular/core';
import { OKService } from '../services/ok.service';

@Component({
  selector: 'app-ok',
  templateUrl: './ok.component.html',
  styleUrls: ['./ok.component.scss']
})
export class OKComponent implements OnInit {

  constructor(private okService: OKService) { }

  ngOnInit() {
     const cards = this.okService.getOKFromServer();
     console.log(cards);
  }

}
