import { Component, OnInit } from '@angular/core';


import { Observable } from 'rxjs';
import { Team } from '../team';


import { DataService } from '../data.service';

@Component({
  selector: 'app-view-league-table',
  templateUrl: './view-league-table.component.html',
  styleUrls: ['./view-league-table.component.css']
})
export class ViewLeagueTableComponent implements OnInit {

  constructor(private dataService: DataService) { }
 // ngOnInit(): void {
  //  throw new Error('Method not implemented.');
 // }

  // Local array variable
  //var tempArr:String[];

  teams!: Team[];

  ngOnInit(): void {
    this.getAFLTeams();
  }

  getAFLTeams(): void {
    this.dataService.getTeams().subscribe(temp => { this.teams = temp; });
  }
}