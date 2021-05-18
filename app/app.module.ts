import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { ViewLeagueTableComponent } from './view-league-table/view-league-table.component';
import { AppRoutingModule } from './app-routing.module';
//import { TeamComponent } from './team/team.component';
//import { TeamResultComponent } from './team-result/team-result.component';

@NgModule({
  declarations: [
    AppComponent,
    ViewLeagueTableComponent,
    //TeamComponent,
    //TeamResultComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
