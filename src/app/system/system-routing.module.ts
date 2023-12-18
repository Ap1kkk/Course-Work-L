import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { SystemComponent } from "./system.component";
import { AdminPanelComponent } from "./admin-panel/admin-panel.component";
import { AdminGuard } from "../shared/guards/admin.guard";
import { AuthenticatedGuard } from "../shared/guards/authenticated.guard";
import { HomeComponent } from "./home/home.component";
import { AdoptComponent } from "./adopt/adopt.component";
import { DonateComponent } from "./donate/donate.component";
import { NewsComponent } from "./news/news.component";

const routes: Routes = [
    {path: 'system', component: SystemComponent, canActivate: [AuthenticatedGuard], children: [
        {path: 'home',component: HomeComponent},
        {path: 'adopt', component: AdoptComponent},
        {path: 'donate',component: DonateComponent},
        {path: 'news', component: NewsComponent},
        // {path: 'about',component: MainPageComponent},
        // {path: 'contacts',component: MainPageComponent},
        // {path: 'user-profile', component: UserProfilePageComponent},
        {path: 'admin', component: AdminPanelComponent, canActivate: [AdminGuard] },
    ]}
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class SystemRoutingModule {

}