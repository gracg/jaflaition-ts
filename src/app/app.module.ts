import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopbarComponent } from './components/topbar/topbar.component';
import { DefinitionComponent } from './components/definition/definition.component';
import { MaindivComponent } from './components/maindiv/maindiv.component';
import { InFormComponent } from './components/in-form/in-form.component';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CliBackendService } from './services/cli-backend.service';
import { DollarPipe } from './pipes/dollar.pipe';
import { PercentagePipePipe } from './pipes/percentage-pipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    TopbarComponent,
    DefinitionComponent,
    MaindivComponent,
    InFormComponent,
    DollarPipe,
    PercentagePipePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
