import { HomeRoutingModule } from './../home-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { HomepageComponent } from './components/homepage/homepage.component';



@NgModule({
  declarations: [HomepageComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
