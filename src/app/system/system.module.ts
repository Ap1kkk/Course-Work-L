import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { SharedModule } from "../shared/shared.module";
import { SystemRoutingModule } from "./system-routing.module";

import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { HomeComponent } from './home/home.component';
import { AdoptComponent } from './adopt/adopt.component';
import { DonateComponent } from './donate/donate.component';
import { NewsComponent } from './news/news.component';


@NgModule({
    imports: [
        CommonModule, 
        SharedModule,
        SystemRoutingModule,        
    ],
    declarations: [
        AdminPanelComponent,
        HomeComponent,
        AdoptComponent,
        DonateComponent,
        NewsComponent
  ]
})
export class SystemModule {

}