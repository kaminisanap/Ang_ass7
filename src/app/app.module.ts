import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FirstcompComponent } from './firstcomp/firstcomp.component';
import { SecondcompComponent } from './secondcomp/secondcomp.component';
import { StrinterComponent } from './strinter/strinter.component';
import { TwoButtonsComponent } from './two-buttons/two-buttons.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstcompComponent,
    SecondcompComponent,
    StrinterComponent,
    TwoButtonsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
