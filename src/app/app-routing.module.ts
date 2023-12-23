import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AdminComponent } from "./admin/admin.component";
import { AdminGuard } from "./shared/guards/admin.guard";

export const routes: Routes = [
    {path: '', redirectTo: 'system', pathMatch: 'full'},
    {path: 'admin', component: AdminComponent,  canActivate: [AdminGuard],}
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule{

}