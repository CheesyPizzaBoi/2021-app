import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { ProfileComponent } from "./profile/profile.component";
import { WordsOfWisdomComponent } from "./words-of-wisdom/words-of-wisdom.component";
import { FeedingAlarmComponent } from "./feeding-alarm/feeding-alarm.component";
import { VetAssistComponent } from "./vet-assist/vet-assist.component";
import { MessagesComponent } from "./vet-assist/messages/messages.component";

const routes: Routes = [
  { path: "", redirectTo: "/home", pathMatch: "full" },
  { path: "home", component: HomeComponent },
  { path: "profile", component: ProfileComponent },
  { path: "words-of-wisdom", component: WordsOfWisdomComponent },
  { path: "feeding-alarm", component: FeedingAlarmComponent },
  { path: "vet-assist", component: VetAssistComponent },
  { path: "vet-assist/messages", component: MessagesComponent },

];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
