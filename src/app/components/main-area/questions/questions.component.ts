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
  public checkBtn: boolean=false;
  @Output() finishGame = new EventEmitter();

  constructor(private weatherService: WeatherService) {}

  ngOnInit() {
    this.getCurrentCity();
  }

  public getCurrentCity() {
    this.currentCity = this.cities[this.attempts];
  }

  public checkHandler() {
    this.checkResult();
  }
  public checkResult() {
    this.getRealTemperatureFromAPI();
  }

  public getRealTemperatureFromAPI() {
    this.checkBtn = true;
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
          this.finishGame.emit();
        } else {
          this.getCurrentCity();
          this.checkBtn = false;
        }
      });
  }
}
