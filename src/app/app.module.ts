import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ListProjectsComponent } from './compts/list-projects/list-projects.component';

import { ProjectsService } from './service/projects.service';
import { APP_ROUTING } from './app.routing';
import { Project } from './interfaces/project';

@NgModule({
  declarations: [
    AppComponent,
    ListProjectsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    APP_ROUTING
  ],
  providers: [ProjectsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
