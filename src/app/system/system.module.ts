import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { SharedModule } from "../shared/shared.module";
import { SystemRoutingModule } from "./system-routing.module";

import { HomeComponent } from './home/home.component';
import { AdoptComponent } from './adopt/adopt.component';
import { DonateComponent } from './donate/donate.component';
import { NewsComponent } from './news/news.component';
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { UserProfileComponent } from "./user-profile/user-profile.component";
import { ReactiveFormsModule } from "@angular/forms";


@NgModule({
    imports: [
        CommonModule, 
        SharedModule,
        SystemRoutingModule,
        ReactiveFormsModule,     
        NgbModule,   
    ],
    declarations: [
        HomeComponent,
        AdoptComponent,
        DonateComponent,
        NewsComponent,
        UserProfileComponent,
  ]
})
export class SystemModule {

}