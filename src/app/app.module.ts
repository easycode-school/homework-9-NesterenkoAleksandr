import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PipeExampleComponent } from './components/pipe-example/pipe-example.component';
import { SortByPipe } from './pipes/sort-by.pipe';
import { CustomDatePipe } from './pipes/custom-date.pipe';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    PipeExampleComponent,
    SortByPipe,
    CustomDatePipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
