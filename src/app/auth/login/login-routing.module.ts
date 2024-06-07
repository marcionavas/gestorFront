import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './components/login/login.component';

export const LOGIN_ROUTES: Routes = [
    {
        path: 'login',
        component: LoginComponent

    }
]

@NgModule({
    imports: [RouterModule.forChild(LOGIN_ROUTES)],
    exports: [RouterModule]

})


export class LoginRoutingModule {
}
