import { LandingComponent } from "./landing/landing.component";
import { UserComponent } from "./user/user.component";
import { UserOldComponent } from "./user/user-old/user-old.component";
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        component: LandingComponent,
        children: []
    },
    {
        path: 'user',
        pathMatch: 'full',
        component: UserComponent,
        children: []
    },
    {
        path: 'user-old',
        pathMatch: 'full',
        component: UserOldComponent,
        children: []
    }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }