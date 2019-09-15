import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeContainerComponent } from './components/homeContainer/homeContainer.component';
import { HomeDetailComponent } from './components/homeDetail/homeDetail.component';
import { HomeGrandComponent } from './components/homeGrand/homeGrand.component';


const routes: Routes = [
  {
    path: 'home',
    component: HomeContainerComponent,
    children: [
      {
        path: '',
        redirectTo: 'hot',
        pathMatch: 'full'
      },
      {
        path: ':tablink',
        component: HomeDetailComponent,
        children: [
          {
            path: 'grand',
            component: HomeGrandComponent
          }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
