import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public area = [['','',''],['','',''],['','','']];
  public actual = 'X';
  public old = 'O';
  public win = '';
  public remis = false;


  public click(areaIndex: number, lineIndex: number){
    if(this.area[areaIndex][lineIndex] == '' && this.win == ''){
      this.area[areaIndex][lineIndex] = this.actual;
      this.actual = this.old;
      this.old = this.area[areaIndex][lineIndex];
      this.checkWin();
    }
  }

  public checkWin(){
    for (var line of [0,1,2]) {
      if(this.area[line][0] == this.area[line][1]
          && this.area[line][1] == this.area[line][2]
          && this.area[line][1] != ''){
        this.win = this.area[line][0];
        break;
      }
    }

    for (var column of [0,1,2]) {
      if(this.area[0][column] == this.area[1][column]
        && this.area[1][column] == this.area[2][column]
        && this.area[1][column] != ''){
        this.win = this.area[0][column];
        break;
      }
    }

    if(this.area[0][0] == this.area[1][1]
      && this.area[2][2] == this.area[1][1]
      && this.area[0][0] != ''){
      this.win = this.area[0][0];
    }

    if(this.area[0][2] == this.area[1][1]
      && this.area[2][0] == this.area[1][1]
      && this.area[0][2] != ''){
      this.win = this.area[0][0];
    }

    if(this.win == ''){
      let remis = true;
      for (var line of [0,1,2]) {
        for (var column of [0,1,2]) {
          if(this.area[line][column] == '') {
            remis = false;
            break;
          }
        }
        if(!remis){
          break;
        }
      }
      this.remis = remis;
    }
  }

  public reset(){
    this.area = [['','',''],['','',''],['','','']];
    this.win = '';
  }
}
