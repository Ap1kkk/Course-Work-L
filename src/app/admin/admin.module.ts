import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { NgbDropdownModule, NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { AdminRoutingModule } from "./admin-routing.module";
import { SharedModule } from "src/app/shared/shared.module";
import { AdminComponent } from "./admin.component";
import { AddNewsComponent } from "./add-news/add-news.component";
import { AddAnimalComponent } from "./add-animal/add-animal.component";
import { UserStatsComponent } from "./user-stats/user-stats.component";
import { ReactiveFormsModule } from "@angular/forms";
import { AdminHeaderComponent } from './admin-header/admin-header.component';
import { AllNewsComponent } from './all-news/all-news.component';


@NgModule({
    imports: [
        NgbDropdownModule,
        CommonModule, 
        SharedModule,
        AdminRoutingModule,     
        ReactiveFormsModule,   
    ],
    declarations: [
        AdminComponent,
        AddNewsComponent,
        AddAnimalComponent,
        UserStatsComponent,
        AdminHeaderComponent,
        AllNewsComponent,
  ]
})
export class AdminModule {

}