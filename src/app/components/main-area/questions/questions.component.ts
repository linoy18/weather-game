import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css'],
})
export class QuestionsComponent implements OnInit {
  public cities: string[] = [
    'Paris',
    'London',
    'Tel Aviv',
    'Amsterdam',
    'New York',
  ];
  public currentCity!: string;
  public temperatureGuess!: string;
  private temperatureReal: any;
  private attempts: number = 0;
  @Output() finishGame = new EventEmitter();;

  constructor(private weatherService: WeatherService) {}

  ngOnInit() {
    this.getCurrentCity();
  }

  public getCurrentCity() {
    this.currentCity = this.cities[this.attempts];
  }

  public checkHandler() {
    this.checkResult();
    this.getCurrentCity();

  }
  public checkResult() {
    this.getRealTemperatureFromAPI();
  }

  public getRealTemperatureFromAPI() {
    this.weatherService
      .getWeatherForCity(this.currentCity)
      .subscribe((data) => {
        this.temperatureReal = data.main.temp;
        this.weatherService.addToGameResults({
          tempGuess: this.temperatureGuess,
          tempReal: this.temperatureReal,
        });
        this.attempts++;
        if (this.attempts == 5) {
          this.finishGame.emit(true);
        }
      });

  }

}
