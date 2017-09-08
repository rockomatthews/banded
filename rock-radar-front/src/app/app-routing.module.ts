import { LandingComponent } from "./landing/landing.component";
import { UserComponent } from "./user/user.component";
import { UserOldComponent } from "./user/user-old/user-old.component";
import { UserEditComponent } from "./user/user-edit/user-edit.component";
import { SwipeComponent } from "./swipe/swipe.component";
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserService } from "./user/user.service";
import { AuthGuardGuard } from "./auth-guard.guard";

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
    },
    {
        path: 'user-edit',
        pathMatch: 'full',
        component: UserEditComponent,
        children: []
    },
    {
        path: 'app-swipe',
        pathMatch: 'full',
        canActivate: [AuthGuardGuard],
        component: SwipeComponent,
        children: []
    }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [UserService],
})
export class AppRoutingModule { }