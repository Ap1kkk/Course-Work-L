import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AdminComponent } from "./admin/admin.component";

export const routes: Routes = [
    {path: '', redirectTo: 'system', pathMatch: 'full'},
    {path: 'admin', component: AdminComponent}
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule{

}