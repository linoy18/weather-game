import { Component, Input, OnInit } from '@angular/core';
import { SingleGameResult } from 'src/app/models/SingleGameResult.model';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'app-singular-game-result',
  templateUrl: './singular-game-result.component.html',
  styleUrls: ['./singular-game-result.component.css'],
})
export class SingularGameResultComponent implements OnInit {
  @Input() value!: SingleGameResult;
  public result: any;
  public win: boolean = false;
  derivation = 5;

  constructor( private weatherService : WeatherService) {}

  ngOnInit() {}

  ngAfterContentInit() {
    if(this.value){
       this.result = this.value; 
       this.checkVictory();
    }
  }

  public checkVictory() {
    if (
      this.result.tempReal - this.derivation <= this.result.tempGuess &&
      this.result.tempReal + this.derivation >= this.result.tempGuess
    ) {
      this.win = true;
      this.result.victory = true;
      this.weatherService.winGame++;
    } else {
      this.win = false;
      this.result.victory = false;
    }
  }
}
