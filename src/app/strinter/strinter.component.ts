import { Component } from '@angular/core';

@Component({
  selector: 'app-strinter',
  templateUrl: './strinter.component.html',
  styleUrls: ['./strinter.component.css']
})
export class StrinterComponent {
  public fun(){
    return "Marvellous Infosystems"; 
  }

  public btnVal = "Marvellous Infosystem";
  public changetext()
  {
    this.btnVal = "Educating for better Tomorrow";
  }
}
