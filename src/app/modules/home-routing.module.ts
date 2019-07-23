import { HomepageComponent } from './home/components/homepage/homepage.component';
import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
 
const homeRoutes: Routes = [
  { path: 'home',  component: HomepageComponent }
];
 
@NgModule({
  imports: [
    RouterModule.forChild(homeRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class HomeRoutingModule { }