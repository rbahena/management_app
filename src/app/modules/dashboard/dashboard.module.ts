import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { InventaryComponent } from './pages/inventary/inventary.component';



@NgModule({
  declarations: [
    SidebarComponent,
    InventaryComponent
  ],
  imports: [
    CommonModule
  ]
})
export class DashboardModule { }
