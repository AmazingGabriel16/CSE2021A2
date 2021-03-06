import { Component, Input, OnInit, SimpleChanges } from '@angular/core';

import { Game } from '../game';
import { Team } from '../team';
import { DataService } from '../data.service';

@Component({
  selector: 'app-team-result',
  templateUrl: './team-result.component.html',
  styleUrls: ['./team-result.component.css']
})
export class TeamResultComponent implements OnInit {

  games!:Game[];
  @Input() team!: Team;
  teamName = null;
  gameYear = null;
  constructor(private dataService: DataService) { }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['team']) {
      this.getGames();
    }
  }

  ngOnInit(): void {
  }

  getGames(): void {
    this.dataService.getGames().subscribe(temp => { 
      var tempArr: Game[] = [];

      temp.forEach(element => {
        if(element.hteamid == this.team.id || element.ateamid == this.team.id)
        {
          if(this.teamName != null)
          {
            if(this.teamName == element.hteam)
            {
              if(this.gameYear == element.year)
              {
                tempArr.push(element);
              }
              //tempArr.push(element);
            }
          }
          else
          {
            tempArr.push(element);
          }
        }
      });
      
      this.games = tempArr;    
    });
  }
}
