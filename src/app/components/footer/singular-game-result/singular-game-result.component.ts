import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { SingleGameResult } from 'src/app/models/SingleGameResult.model';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'app-singular-game-result',
  templateUrl: './singular-game-result.component.html',
  styleUrls: ['./singular-game-result.component.css'],
})
export class SingularGameResultComponent implements OnChanges {
  @Input() value!: SingleGameResult;
  public result: any;
  public win: boolean = false;
  derivation = 5;

  constructor(private weatherService: WeatherService) {}
  ngOnChanges(changes: SimpleChanges): void {
    if (this.value) {
      this.result = this.value;
      this.checkVictory();
    }
  }

  ngOnInit() {}

  public checkVictory() {
    if (
      this.result.tempReal - this.derivation <= this.result.tempGuess &&
      this.result.tempReal + this.derivation >= this.result.tempGuess
    ) {
      this.win = true;
      this.result.victory = true;
      this.weatherService.calculatesSingularGameResults();
    } else {
      this.win = false;
      this.result.victory = false;
    }
  }
}
