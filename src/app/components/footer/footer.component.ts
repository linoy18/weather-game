import { Component, Input, OnInit } from '@angular/core';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent implements OnInit {
  public gameResultsArray!: any;

  constructor(private weatherService: WeatherService) {}

  ngOnInit(): void {
    this.subscribeToGetGameResults();
  }

  public subscribeToGetGameResults() {
    return this.weatherService
      .calculatesSingularGameResults()
      .subscribe((item) => (this.gameResultsArray = item));
  }
}
