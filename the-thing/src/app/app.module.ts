import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { JumbotronComponent } from './jumbotron/jumbotron.component';
import { FooterComponent } from './footer/footer.component';
import { ContentComponent } from './content/content.component';
import { ExperimentComponent } from './experiment/experiment.component';
import { EnvironmentComponent } from './environment/environment.component';
import { HostComponent } from './host/host.component';
import { ReactorComponent } from './experiment/reactor/reactor.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    NavbarComponent,
    JumbotronComponent,
    FooterComponent,
    ContentComponent,
    ExperimentComponent,
    EnvironmentComponent,
    HostComponent,
    ReactorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
