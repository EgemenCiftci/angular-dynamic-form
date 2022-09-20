import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { DynamicFormComponent } from './components/dynamic-form/dynamic-form.component';
import { DynamicFormGroupComponent } from './components/dynamic-form-group/dynamic-form-group.component';
import { DynamicFormControlComponent } from './components/dynamic-form-control/dynamic-form-control.component';

@NgModule({
  imports: [BrowserModule, FormsModule, ReactiveFormsModule],
  declarations: [
    AppComponent,
    DynamicFormComponent,
    DynamicFormGroupComponent,
    DynamicFormControlComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
