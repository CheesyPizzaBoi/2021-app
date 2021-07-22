import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { WordsOfWisdomComponent } from './words-of-wisdom/words-of-wisdom.component';
import { FeedingAlarmComponent } from './feeding-alarm/feeding-alarm.component';
import { PlayDatesComponent } from './play-dates/play-dates.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProfileComponent,
    WordsOfWisdomComponent,
    FeedingAlarmComponent,
    PlayDatesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
