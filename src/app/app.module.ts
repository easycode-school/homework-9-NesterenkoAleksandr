import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PipeExampleComponent } from './components/pipe-example/pipe-example.component';
import { SortByPipe } from './pipes/sort-by.pipe';
import { CustomDatePipe } from './pipes/custom-date.pipe';

@NgModule({
  declarations: [
    AppComponent,
    PipeExampleComponent,
    SortByPipe,
    CustomDatePipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
