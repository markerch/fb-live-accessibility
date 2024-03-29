import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { NxExpertModule } from '@aposin/ng-aquila/config';
import { NdbxIconModule } from '@allianz/ngx-ndbx/icon';
import { HeaderComponent } from './header/header.component';
import { ContentComponent } from './content/content.component';
import { FooterComponent } from './footer/footer.component';
import { NxHeaderModule } from '@aposin/ng-aquila/header';
import { NxLinkModule } from '@aposin/ng-aquila/link';
import { AppRoutingModule } from './app.routing.module';
import { NxIconModule } from '@aposin/ng-aquila/icon';
import { NxContextMenuModule } from '@aposin/ng-aquila/context-menu';
import { NxButtonModule } from '@aposin/ng-aquila/button';
import { NxFooterModule } from '@aposin/ng-aquila/footer';
import { NxGridModule } from '@aposin/ng-aquila/grid';
import { NxCircleToggleModule } from '@aposin/ng-aquila/circle-toggle';
import { NxSmallStageModule } from '@aposin/ng-aquila/small-stage';
import { NxHeadlineModule } from '@aposin/ng-aquila/headline';
import { NxCopytextModule } from '@aposin/ng-aquila/copytext';
import { NxCardModule } from '@aposin/ng-aquila/card';
import { NxInputModule } from '@aposin/ng-aquila/input';
import { NxFormfieldModule } from '@aposin/ng-aquila/formfield';
import { NxRadioModule } from '@aposin/ng-aquila/radio-button';
import { FormsModule } from '@angular/forms';
import { NxDropdownModule } from '@aposin/ng-aquila/dropdown';
import { CommonModule } from '@angular/common';
import { NxCheckboxModule } from '@aposin/ng-aquila/checkbox';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContentComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    NxExpertModule,
    NdbxIconModule,
    NxHeaderModule,
    NxLinkModule,
    NxIconModule,
    NxContextMenuModule,
    NxButtonModule,
    NxFooterModule,
    NxGridModule,
    NxCircleToggleModule,
    NxSmallStageModule,
    NxHeadlineModule,
    NxCopytextModule,
    NxCardModule,
    NxInputModule,
    NxFormfieldModule,
    NxRadioModule,
    FormsModule,
    NxDropdownModule,
    NxFormfieldModule,
    NxInputModule,
    NxCheckboxModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
