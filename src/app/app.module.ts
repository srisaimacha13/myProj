import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { QuillModule } from 'ngx-quill'

import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';

import { AntdModule } from './antd.module';

import { NavComponent } from './components/nav/nav.component';
import { EmailEditorComponent } from './components/email-editor/email-editor.component';
import { RichTextComponent } from './components/rich-text/rich-text.component';

registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    EmailEditorComponent,
    RichTextComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NzButtonModule,
    AntdModule,
    QuillModule.forRoot()
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent]
})
export class AppModule { }
