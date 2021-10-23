export class SingleGameResult {
  tempGuess: string;
  tempReal: string ;
  victory: boolean =false;

  constructor(tempGuess: string, tempReal: string,victory: boolean) {
    this.tempGuess = tempGuess;
    this.tempReal = tempReal;
    this.victory = victory;
  }

  
}
