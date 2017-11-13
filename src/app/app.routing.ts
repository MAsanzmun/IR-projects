import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListProjectsComponent } from './compts/list-projects/list-projects.component';


const APP_ROUTES: Routes = [
  {path: '', component: ListProjectsComponent},
];

//export const appRoutingProviders: any[] = [];

//export const app_routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES,{useHash:true});
