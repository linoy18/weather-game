import { Component, OnInit } from '@angular/core';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css'],
})
export class ResultsComponent implements OnInit {
  public win: boolean = false;
  public congrats: string = 'You Won the game!';
  public sorry: string = 'Sorry, you lose the game...';

  constructor(private weatherService: WeatherService) {}

  ngOnInit(): void {
    this.subscribeToGetGameResults();
  }


  public subscribeToGetGameResults() {
    if (this.weatherService.winGame >= 3) {
      this.win = true;
    } else {
      this.win = false;
    }
  }

  public startAgain() {
    window.location.reload();
  }
}