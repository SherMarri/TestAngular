import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';


import { FirstChild2Component } from './first-child2.component';
import { SecondChild21Component } from './second-child21/second-child21.component';
import { SecondChild22Component } from './second-child22/second-child22.component';

import { FirstChild2Routing } from './first-child2-routing.module';

// import { RouterModule, Routes } from '@angular/router'; // For Routes

@NgModule({
  declarations: [
    FirstChild2Component,
    SecondChild21Component,
    SecondChild22Component,
  ],
  imports: [
    FirstChild2Routing
  ],
  providers: [],
})
export class FirstChild2Module { }
