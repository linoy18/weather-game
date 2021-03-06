import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';
import { SingleGameResult } from '../models/SingleGameResult.model';

@Injectable({
  providedIn: 'root',
})

/**
 * Weather Service
 */
export class WeatherService {
  public apiKey: string = '9cff733aee57cb05b63dd4f731c46bc4';
  private gameResults: any[] = [];
  public winGame: number = 0;
  public gameResultsSubject = new Observable();
  private _gameResultsSubject = new BehaviorSubject<SingleGameResult[]>([]);

  constructor(private http: HttpClient) {
    this.gameResultsSubject = this._gameResultsSubject.asObservable();
  }

  /**
   * returns the current updated city weather
   * @param  {[string]} currentCity name of city in the world
   * @return {[any]} current city weather
   */
  getWeatherForCity(currentCity: string): Observable<any> {
    const path = `https://api.openweathermap.org/data/2.5/weather?q=${currentCity.toLowerCase()}&appid=${
      this.apiKey
    }&units=metric`;
    return this.http.get(path).pipe(map((response: any) => response));
  }

  /**
   * adds the singular game result item into the gameResultsSubject array
   * @param  {[any]} item SingleGameResult object
   */
  addToGameResults(item: any) {
    this.gameResults.push(item);
    this._gameResultsSubject.next(this.gameResults);
  }

  /**
   * calculates if a game is a win or lose
   * @return {[Observable<any>]}  gameResultsSubject the game results
   */
  calculatesSingularGameResults(){
    this.gameResults.forEach((element) => {
      if (element.victory) {
        this.winGame++;
      }
    });
  }
}
