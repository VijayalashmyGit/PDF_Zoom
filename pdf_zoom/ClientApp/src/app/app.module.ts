import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { PdfviewverComponent } from './pdfviewver/pdfviewver.component';
import { FlowTemplateComponent } from './flowtemplate/flowtemplate.component';

import { PdfViewerModule } from 'ng2-pdf-viewer';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';
@NgModule({
  declarations: [
    AppComponent,   
    FlowTemplateComponent,
    PdfviewverComponent    
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
      FormsModule,
      PdfViewerModule,
      NgxExtendedPdfViewerModule,
    RouterModule.forRoot([
        { path: '', component: FlowTemplateComponent, pathMatch: 'full' }     
    ])
    ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
