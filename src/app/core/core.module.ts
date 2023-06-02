import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { HeaderComponent } from './header/header.component';
import { AboutMeComponent } from './about-me/about-me.component';



@NgModule({
  declarations: [
    NavbarComponent,
    HeaderComponent,
    AboutMeComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NavbarComponent,
    HeaderComponent,
    AboutMeComponent
  ]
})
export class CoreModule { }
