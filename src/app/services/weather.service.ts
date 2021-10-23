import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';
import { SingleGameResult } from '../models/singleGameResult.model';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  public apiKey: string = '9cff733aee57cb05b63dd4f731c46bc4';
  private gameResults: any = [];
  public winGame: number = 0;
  public gameResultsSubject = new BehaviorSubject<SingleGameResult[]>([]);

  constructor(private http: HttpClient) {}

  getWeatherForCity(currentCity: string): Observable<any> {
    const path = `https://api.openweathermap.org/data/2.5/weather?q=${currentCity.toLowerCase()}&appid=${
      this.apiKey
    }&units=metric`;
    return this.http.get(path).pipe(map((response: any) => response));
  }

  addToGameResults(item: any) {
    this.gameResults.push(item);
    this.gameResultsSubject.next(this.gameResults);
  }

  getGameResults(): Observable<any> {
    this.gameResultsSubject.forEach(element => { 

      if(element[0] && element[0].victory)
      {
        this.winGame++;
      }
    });
    return this.gameResultsSubject.asObservable();
  }
  
}
