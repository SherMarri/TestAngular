import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';

import { RouterModule, Routes } from '@angular/router'; // For Routes

import { AppRoutingModule } from './app-routing.module';

import { FirstChild1Module } from './first-child1/first-child1.module';
import { FirstChild2Module } from './first-child2/first-child2.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FirstChild1Module,
    FirstChild2Module,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
