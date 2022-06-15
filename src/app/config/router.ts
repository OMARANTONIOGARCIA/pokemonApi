import { Routes } from '@angular/router';
import { HomeComponent } from '../componente/home/home.component';

export const ROUTERS_MODULE_COMPONENT: Routes = [
    {
        path:'home',
        pathMatch:'prefix',
        component: HomeComponent,
    },
    {
        path:'**',
        redirectTo: 'home'
    },
]