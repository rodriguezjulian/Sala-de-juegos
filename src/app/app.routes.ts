import { Routes } from '@angular/router';

export const routes: Routes = [
    
        {
            path:'register',
            loadComponent: () => import ('./components/register/register.component')
            .then((m)=> m.RegisterComponent), 
        },
        {
            path:'quiensoy',
            loadComponent: () => import ('./components/quien-soy/quien-soy.component')
            .then((m)=> m.QuienSoyComponent), 
        },
        {
            path:'',
            loadComponent: () => import ('./components/login/login.component')
            .then((m)=> m.LoginComponent), 
        },
    ];
