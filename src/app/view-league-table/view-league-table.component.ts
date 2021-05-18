import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Team } from '../team';
import { Tip } from '../tip';
import { Game } from '../game';
import { DataService } from '../data.service';



@Component({
  selector: 'app-view-league-table',
  templateUrl: './view-league-table.component.html',
  styleUrls: ['./view-league-table.component.css']
})
export class ViewLeagueTableComponent implements OnInit {

  teams!: Team[];
  tips!: Tip[];
  games!: Game[];
  gameYear = null
  tipYear = null;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.getAFLTeams();
    this.getGames();
    this.getTips();
  }

  getAFLTeams(): void {
    this.dataService.getTeams().subscribe(temp => { this.teams = temp; });
  }

  /*
  getGames(): void {
    this.dataService.getGames().subscribe(temp => { this.games = temp; });
  }*/

  /*
   * Get games from the API
   * Filter the results to only get results where the home team won
  */
  
  getGames(): void {
    this.dataService.getGames().subscribe(temp => { 
      var tempArr: Game[] = [];

      // loop through the raw data array to find games where the home team won
      // logic: hteam == winner from the Game model we get from the transformed API data
      
      temp.forEach(element => {
        if(element.hteam == element.winner){
          if(this.gameYear == element.year)
            {
              tempArr.push(element);
            }
            else if (this.gameYear == null)
            {
              tempArr.push(element);
            }
        }
      });
      
      this.games = tempArr;  

      // Sort the games array based on the highest score by the winning team
      this.games.sort(this.compareFunc);    
    });
  }

  compareFunc(a: Game, b: Game) {
    const gameAScore = a.hscore;
    const gameBScore = b.hscore;

    let compare = 0;
    if (gameAScore < gameBScore) {
      compare = 1;
    } else if (gameAScore > gameBScore) {
      compare = -1;
    }

    return compare;
  }

  getTips(): void {
    this.dataService.getTips().subscribe(temp => { 
      var tempArr: Tip[] = [];

      temp.forEach(element => {
          if(this.tipYear == element.year)
            {
              tempArr.push(element);
            }
            else if (this.tipYear == null)
            {
              tempArr.push(element);
            }
      });

      this.tips = tempArr;

      this.tips.sort(this.compareTimeTips);
    });
  }

  compareTimeTips(a: Tip, b: Tip) {
    const tipAScore = a.date;
    const tipBScore = b.date;

    let compare = 0;
    if (tipAScore < tipBScore) {
      compare = 1;
    } else if (tipAScore > tipBScore) {
      compare = -1;
    }

    return compare;
  }


  //this.tips = temp;
}
