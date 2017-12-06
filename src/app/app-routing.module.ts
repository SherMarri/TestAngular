import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FirstChild1Component } from './first-child1/first-child1.component';
import { SecondChild11Component } from './first-child1/second-child11/second-child11.component';
import { SecondChild12Component } from './first-child1/second-child12/second-child12.component';


const routes: Routes = [
    { path: '', redirectTo: 'firstchild1', pathMatch: 'full' },
    // { path: 'firstchild1', component: FirstChild1Component,
    // children: [
    //    { path: '', redirectTo: 'secondchild1', pathMatch: 'full' },
        // { path: 'secondchild1', component: SecondChild12Component },
        // { path: 'secondchild2', component: SecondChild12Component }
        // ]
    // }
];

@NgModule({
    imports: [
      RouterModule.forRoot(
        routes,
        { enableTracing: true } // <-- debugging purposes only
      )
    ],
    exports: [
      RouterModule
    ]
  })
  export class AppRoutingModule {}
