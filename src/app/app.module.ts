import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { FooterComponent } from './components/footer/footer.component';
import { MainAreaComponent } from './components/main-area/main-area.component';
import { SingularGameResultComponent } from './components/footer/singular-game-result/singular-game-result.component';
import { QuestionsComponent } from './components/main-area/questions/questions.component';
import { ResultsComponent } from './components/main-area/results/results.component';
import { WeatherService } from './services/weather.service';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from './material.module';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    MainAreaComponent,
    SingularGameResultComponent,
    QuestionsComponent,
    ResultsComponent,
    
  ],
  imports: [
    BrowserModule,
    NoopAnimationsModule,
    FormsModule,
    HttpClientModule,
    MaterialModule
  ],
  providers: [WeatherService],
  bootstrap: [AppComponent]
})
export class AppModule { }
