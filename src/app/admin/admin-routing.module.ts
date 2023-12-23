import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AdminComponent } from "./admin.component";
import { AdminGuard } from "src/app/shared/guards/admin.guard";
import { AddNewsComponent } from "./add-news/add-news.component";
import { AddAnimalComponent } from "./add-animal/add-animal.component";
import { UserStatsComponent } from "./user-stats/user-stats.component";
import { AllNewsComponent } from "./all-news/all-news.component";


const routes: Routes = [
    {path: 'admin', component: AdminComponent, children: [
    // {path: 'admin', component: AdminComponent, children: [
        {path: 'add-news',component: AddNewsComponent},
        {path: 'all-news',component: AllNewsComponent},
        {path: 'add-animal',component: AddAnimalComponent},
        {path: 'user-stats',component: UserStatsComponent},
    ]}
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AdminRoutingModule {

}