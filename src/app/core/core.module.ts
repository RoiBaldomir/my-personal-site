import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { HeaderComponent } from './header/header.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { FooterComponent } from './footer/footer.component';
import { ProjectsComponent } from './projects/projects.component';
import { TimelineComponent } from './timeline/timeline.component';



@NgModule({
  declarations: [
    NavbarComponent,
    HeaderComponent,
    AboutMeComponent,
    FooterComponent,
    ProjectsComponent,
    TimelineComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NavbarComponent,
    HeaderComponent,
    AboutMeComponent,
    TimelineComponent,
    ProjectsComponent,
    FooterComponent
  ]
})
export class CoreModule { }
