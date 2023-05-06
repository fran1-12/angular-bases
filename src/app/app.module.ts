import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CouterModule } from './counter/counter.module';
import { AppComponent } from './app.component';
import { HeroComponent } from './heroes/hero/hero.component';
import { ListComponent } from './heroes/list/list.component';

@NgModule({
  declarations: [
    AppComponent,

    HeroComponent,
    ListComponent
  ],
  imports: [
    BrowserModule,
    CouterModule    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
