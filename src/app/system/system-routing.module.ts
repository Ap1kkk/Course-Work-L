import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { SystemComponent } from "./system.component";
import { AuthenticatedGuard } from "../shared/guards/authenticated.guard";
import { HomeComponent } from "./home/home.component";
import { AdoptComponent } from "./adopt/adopt.component";
import { DonateComponent } from "./donate/donate.component";
import { NewsComponent } from "./news/news.component";
import { UserProfileComponent } from "./user-profile/user-profile.component";

const routes: Routes = [
    {path: 'system', component: SystemComponent, canActivate: [AuthenticatedGuard], children: [
        {path: 'home',component: HomeComponent},
        {path: 'adopt', component: AdoptComponent},
        {path: 'donate',component: DonateComponent},
        {path: 'news', component: NewsComponent},
        {path: 'user-profile', component: UserProfileComponent},
        // {path: 'about',component: MainPageComponent},
        // {path: 'contacts',component: MainPageComponent},
    ]}
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class SystemRoutingModule {

}