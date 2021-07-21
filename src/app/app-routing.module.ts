import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { ProfileComponent } from "./profile/profile.component";
import { WordsOfWisdomComponent } from "./words-of-wisdom/words-of-wisdom.component";

const routes: Routes = [
  { path: "home", component: HomeComponent },
  { path: "profile", component: ProfileComponent },
  { path: "words-of-wisdom", component: WordsOfWisdomComponent }
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
