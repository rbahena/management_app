import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './pages/sidebar/sidebar.component';
import { InventaryComponent } from './pages/inventary/inventary.component';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    SidebarComponent,
    InventaryComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class DashboardModule { }
