import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//we had import FormsModule in order to play around with input fields and two day data binding
import { FormsModule }   from '@angular/forms';

import { AppComponent }  from './app.component';
import { HeroDetailComponent } from './hero-detail.component';

@NgModule({
  imports:      [ 
    BrowserModule,
    FormsModule 
    ],
  declarations: [ 
    AppComponent,
    HeroDetailComponent

    ],
  bootstrap:    [ 
    AppComponent
     ]
})

export class AppModule { }
