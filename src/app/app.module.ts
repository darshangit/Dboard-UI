import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ServiceRestartComponent } from './service-restart/service-restart.component';
import {DropdownModule, ButtonModule, GrowlModule, CheckboxModule, InputTextModule, DataGridModule,
  CodeHighlighterModule, InputTextareaModule, DialogModule, CalendarModule, TabViewModule, SharedModule,
   SelectButtonModule, DataTableModule, ToggleButtonModule, SliderModule,
   TooltipModule, PickListModule, ChartModule, PasswordModule, PanelModule, PanelMenuModule } from 'primeng/primeng';
import { ServiceRestartService } from './services/service-restart.service';
import { PropertiesConfigComponent } from './properties-config/properties-config.component';
import {TableModule} from 'primeng/table';
import {MultiSelectModule} from 'primeng/multiselect';
import {EditorModule} from 'primeng/editor';
@NgModule({
  declarations: [
    AppComponent,
    ServiceRestartComponent,
    PropertiesConfigComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    ButtonModule,
    TableModule,
    PanelModule,
    DialogModule,
    PanelMenuModule,
    InputTextModule,
    CalendarModule,
    CheckboxModule,
    TabViewModule,
    DataGridModule,
    CodeHighlighterModule,
    SharedModule,
    InputTextareaModule,
    DropdownModule,
    SelectButtonModule,
    DataTableModule,
    ToggleButtonModule,
    TooltipModule,
    SliderModule,
    PasswordModule,
    GrowlModule,
    PickListModule,
    ChartModule,
    MultiSelectModule,
    EditorModule
  ],
  providers: [
    ServiceRestartService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
