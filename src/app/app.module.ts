import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { WordsOfWisdomComponent } from './words-of-wisdom/words-of-wisdom.component';
import { FeedingAlarmComponent } from './feeding-alarm/feeding-alarm.component';
import { MaryLeeComponent } from './mary-lee/mary-lee.component';
import { VetAssistanceComponent } from './vet-assistance/vet-assistance.component';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { environment } from 'src/environments/environment';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { MarkWayneComponent } from './mark-wayne/mark-wayne.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProfileComponent,
    WordsOfWisdomComponent,
    FeedingAlarmComponent,
    VetAssistanceComponent,
    MaryLeeComponent,
    MarkWayneComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    AngularFirestoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
