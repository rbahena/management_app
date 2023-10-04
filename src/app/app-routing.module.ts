import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthModule } from './modules/auth/auth.module';
import { HomeModule } from './modules/home/home.module';
import { SharedModule } from './shared/shared.module';
import { HomeComponent } from './modules/home/pages/home/home.component';

const routes: Routes = [
  {
    path: 'usuario',
    loadChildren: () =>
      import('./modules/auth/auth.module').then((module) => AuthModule),
  },
  { path: '**', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
