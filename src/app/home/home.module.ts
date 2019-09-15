import { NgModule } from '@angular/core';

import { HomeRoutingModule } from './home-routing.module';
import { HomeContainerComponent } from './components/homeContainer/homeContainer.component';
import { HomeDetailComponent } from './components/homeDetail/homeDetail.component';
import { SharedModule } from '../shared/shared.module';
import { HomeGrandComponent } from './components/homeGrand/homeGrand.component';
import { HomeService } from './services/home.service';


@NgModule({
  declarations: [HomeContainerComponent,HomeDetailComponent,HomeGrandComponent],
  imports: [
    SharedModule,
    HomeRoutingModule
  ],
  providers:[HomeService]
})
export class HomeModule { }
