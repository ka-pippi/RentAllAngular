import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';  

import { ItemsComponent }      from './items/items.component';
import { RentalsComponent } from './rentals/rentals.component';

import { HttpClientModule }    from '@angular/common/http';
import { MessagesComponent } from './messages/messages.component';
import { MyItemsComponent } from './my-items/my-items.component';

@NgModule({
  declarations: [
    AppComponent,
    RentalsComponent,
    ItemsComponent,
    MessagesComponent,
    MyItemsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
