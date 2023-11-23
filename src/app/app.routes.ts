import { Routes } from '@angular/router';
import { LoginComponent } from './view/login/login.component';
import { RegistroComponent } from './view/registro/registro.component';
import { HomeComponent } from './view/home/home.component';
import { AuthGuard } from './guard/auth/auth.guard';

export const routes: Routes = [
    {path: "",component: LoginComponent},
    {path: "login",component: LoginComponent},
    {path: "registro",component: RegistroComponent},
    {path: "home",component: HomeComponent,canActivate: [AuthGuard]},
];
