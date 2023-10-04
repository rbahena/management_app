import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './pages/sidebar/sidebar.component';
import { InventaryComponent } from './pages/inventary/inventary.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { EntradasComponent } from './components/entradas/entradas.component';
import { SalidasComponent } from './components/salidas/salidas.component';
import { AlmacenComponent } from './components/almacen/almacen.component';
import { ProveedoresComponent } from './pages/proveedores/proveedores.component';
import { ProductosComponent } from './pages/productos/productos.component';
import { CategoriasComponent } from './pages/categorias/categorias.component';



@NgModule({
  declarations: [
    SidebarComponent,
    InventaryComponent,
    EntradasComponent,
    SalidasComponent,
    AlmacenComponent,
    ProveedoresComponent,
    ProductosComponent,
    CategoriasComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class DashboardModule { }
