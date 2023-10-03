import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthModule } from './modules/auth/auth.module';
import { HomeModule } from './modules/home/home.module';
import { SharedModule } from './shared/shared.module';

const routes: Routes = [
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes), AuthModule, HomeModule, SharedModule],
  exports: [RouterModule],
})
export class AppRoutingModule {}
