import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { GameService } from './services/game.service';
import { OKService } from './services/ok.service';
import { Routes, RouterModule } from '@angular/router';

import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { GameViewComponent } from './game-view/game-view.component';
import { OKComponent } from './ok/ok.component';
import { CardComponent } from './card/card.component';
import { InHandsComponent } from './in-hands/in-hands.component';

const appRoutes: Routes = [
  { path: 'play',  component: GameViewComponent },
  { path: 'ok', component: OKComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    GameViewComponent,
    OKComponent,
    CardComponent,
    InHandsComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [GameService, OKService],
  bootstrap: [AppComponent]
})
export class AppModule { }
