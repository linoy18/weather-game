import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-area',
  templateUrl: './main-area.component.html',
  styleUrls: ['./main-area.component.css']
})
export class MainAreaComponent implements OnInit {
  public isGameFinished: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  public onFinish(finished: boolean){
      if(finished){
        this.isGameFinished=true;
      }
      else {
        this.isGameFinished=false;
      }
  }
}
