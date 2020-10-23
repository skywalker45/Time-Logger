import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { PtoComponent } from './pto/pto.component';
import { OptionsComponent } from './options/options.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { DatepickerBasicComponent } from './datepicker-basic/datepicker-basic.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { TimepickerBasicComponent } from './timepicker-basic/timepicker-basic.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    PtoComponent,
    OptionsComponent,
    DatepickerBasicComponent,
    TimepickerBasicComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFontAwesomeModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
