import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './pages/footer/footer.component';
import { HeaderComponent } from './pages/header/header.component';
import { NavbarComponent } from './pages/navbar/navbar.component';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
  declarations: [FooterComponent, HeaderComponent, NavbarComponent],
  imports: [CommonModule, AppRoutingModule],
  exports: [FooterComponent, HeaderComponent, NavbarComponent],
})
export class SharedModule {}
