import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ServiceRestartComponent } from './service-restart/service-restart.component';
import {DropdownModule, ButtonModule, GrowlModule} from 'primeng/primeng';
import { ServiceRestartService } from './services/service-restart.service';

@NgModule({
  declarations: [
    AppComponent,
    ServiceRestartComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    DropdownModule,
    ButtonModule,
    GrowlModule
  ],
  providers: [
    ServiceRestartService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
