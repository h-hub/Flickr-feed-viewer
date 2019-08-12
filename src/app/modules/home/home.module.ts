import { HomeRoutingModule } from './../home-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { HomepageComponent } from './components/homepage/homepage.component';
import { FormsModule } from '@angular/forms';
import { DecodeURIComponentPipe  } from './components/decode-uri-component/decode-uri-component';


@NgModule({
  declarations: [HomepageComponent, DecodeURIComponentPipe ],
  imports: [
    CommonModule,
    HttpClientModule,
    HomeRoutingModule,
    FormsModule
  ]
})
export class HomeModule { }
