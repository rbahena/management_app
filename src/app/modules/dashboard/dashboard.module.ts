import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { InventaryComponent } from './pages/inventary/inventary.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { EntradasComponent } from './components/entradas/entradas.component';
import { SalidasComponent } from './components/salidas/salidas.component';
import { AlmacenComponent } from './components/almacen/almacen.component';
import { DashboardRoutingModule } from './dashboard-routing.module';

@NgModule({
  declarations: [SidebarComponent, InventaryComponent, EntradasComponent, SalidasComponent, AlmacenComponent],
  imports: [CommonModule, SharedModule, DashboardRoutingModule],
  exports:[EntradasComponent, SalidasComponent, AlmacenComponent]

})
export class DashboardModule {}
