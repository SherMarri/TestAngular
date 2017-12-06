import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FirstChild2Component } from './first-child2.component';
import { SecondChild21Component } from './second-child21/second-child21.component';
import { SecondChild22Component } from './second-child22/second-child22.component';


const routes: Routes = [
    // { path: '', redirectTo: 'firstchild2', pathMatch: 'full' },
    { path: 'firstchild2', component: FirstChild2Component,
        children: [
        { path: '', redirectTo: 'secondchild1', pathMatch: 'full' },
        { path: 'secondchild1', component: SecondChild21Component },
        { path: 'secondchild2', component: SecondChild22Component }
        ]
    },
];

@NgModule({
    imports: [
      RouterModule.forChild(
        routes,
      )
    ],
    exports: [
      RouterModule
    ]
  })
  export class FirstChild2Routing {}
