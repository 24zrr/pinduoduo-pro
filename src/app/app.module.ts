import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { HomeModule } from './home/home.module';



@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        BrowserModule,
        FormsModule,
        AppRoutingModule,
        SharedModule,
        HomeModule, //注意这里不是引入component了，而是模块
      
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
