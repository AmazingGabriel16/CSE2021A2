import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ViewLeagueTableComponent } from './view-league-table/view-league-table.component';

import { HttpClientModule} from '@angular/common/http';
import { TeamComponent } from './team/team.component';
import { TeamResultComponent } from './team-result/team-result.component';

import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ViewLeagueTableComponent,
    TeamComponent,
    TeamResultComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
