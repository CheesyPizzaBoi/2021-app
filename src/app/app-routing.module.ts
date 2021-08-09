import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { ProfileComponent } from "./profile/profile.component";
import { WordsOfWisdomComponent } from "./words-of-wisdom/words-of-wisdom.component";
import { FeedingAlarmComponent } from "./feeding-alarm/feeding-alarm.component";
import { MaryLeeComponent } from "./mary-lee/mary-lee.component";
import { VetAssistanceComponent } from "./vet-assistance/vet-assistance.component";
import { MarkWayneComponent } from "./mark-wayne/mark-wayne.component";


const routes: Routes = [
  { path: "", redirectTo: "/home", pathMatch: "full" },
  { path: "home", component: HomeComponent },
  { path: "profile", component: ProfileComponent },
  { path: "words-of-wisdom", component: WordsOfWisdomComponent },
  { path: "feeding-alarm", component: FeedingAlarmComponent},
  { path: "mary-lee", component: MaryLeeComponent},
  { path: "vet-assistance", component: VetAssistanceComponent},
  { path: "mark-wayne", component: MarkWayneComponent}


];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
