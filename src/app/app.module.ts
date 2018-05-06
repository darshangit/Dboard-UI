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
   TooltipModule, PickListModule, ChartModule, PasswordModule, PanelModule, PanelMenuModule,
   ConfirmDialogModule, ConfirmationService } from 'primeng/primeng';
import { ServiceRestartService } from './services/service-restart.service';
import { PropertiesConfigComponent } from './properties-config/properties-config.component';
import {TableModule} from 'primeng/table';
import {MultiSelectModule} from 'primeng/multiselect';
import {EditorModule} from 'primeng/editor';
import { PropertiesService } from './services/properties.service';
import { HttpClientModule } from '@angular/common/http';
import { MessageService } from 'primeng/components/common/messageservice';
import { RouterModule } from '@angular/router';
import { appRoutes } from './routes';
import { LoginComponent } from './login/login.component';
import { LoginService } from './services/login.service';
import { RouteGuardService } from './services/route-guard.service';
@NgModule({
  declarations: [
    AppComponent,
    ServiceRestartComponent,
    PropertiesConfigComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
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
    EditorModule,
    ConfirmDialogModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    ServiceRestartService,
    PropertiesService,
    ConfirmationService,
    MessageService,
    LoginService,
    RouteGuardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
