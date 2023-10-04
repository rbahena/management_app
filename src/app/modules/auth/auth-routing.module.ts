import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'inicia-sesion', component: LoginComponent },
      { path: 'registrarse', component: RegisterComponent },
      { path: '**', component: LoginComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports:[RouterModule]
})
export class AuthRoutingModule {}
