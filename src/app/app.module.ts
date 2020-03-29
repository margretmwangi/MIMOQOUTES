import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DateCountPipe } from './date-count.pipe';
import { HighlightDirective } from './highlight.directive';
import { VoteComponent } from './vote/vote.component';
import { QouteComponent } from './qoute/qoute.component';
import { QouteFormComponent } from './qoute-form/qoute-form.component';
import { QouteDetailsComponent } from './qoute-details/qoute-details.component';

@NgModule({
  declarations: [
    AppComponent,
    DateCountPipe,
    HighlightDirective,
    VoteComponent,
    QouteComponent,
    QouteFormComponent,
    QouteDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
