import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EntradasComponent } from './components/entradas/entradas.component';
import { SalidasComponent } from './components/salidas/salidas.component';
import { AlmacenComponent } from './components/almacen/almacen.component';
import { RouterModule, Routes } from '@angular/router';
import { InventaryComponent } from './pages/inventary/inventary.component';
import { InicioComponent } from './pages/inicio/inicio.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'entradas', component: EntradasComponent },
      { path: 'salidas', component: SalidasComponent },
      { path: 'almacen', component: AlmacenComponent },
      { path: '**', component: InicioComponent },
    ],
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
