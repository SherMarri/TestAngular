import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';


import { FirstChild1Component } from './first-child1.component';
import { SecondChild11Component } from './second-child11/second-child11.component';
import { SecondChild12Component } from './second-child12/second-child12.component';

import { FirstChild1Routing } from './first-child1-routing.module';

// import { RouterModule, Routes } from '@angular/router'; // For Routes

@NgModule({
  declarations: [
    FirstChild1Component,
    SecondChild11Component,
    SecondChild12Component,
  ],
  imports: [
    FirstChild1Routing
  ],
  providers: [],
})
export class FirstChild1Module { }
