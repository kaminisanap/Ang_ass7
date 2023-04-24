import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-two-buttons',
  templateUrl: './two-buttons.component.html',
  styleUrls: ['./two-buttons.component.css']
})
export class TwoButtonsComponent {

  //public Name = "Marvellous Infosystems";
  public UName = "";
  public LName = "";
  
  public onClickUpper()
  {
    this.UName = "Marvellous Infosystems";
  }

  public onClickLower(){
    this.LName = "Marvellous Infosystems";
  }
}
