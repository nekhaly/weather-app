import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { Ng2CompleterModule } from 'ng2-completer';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { WidgetComponent } from './widget/widget.component';
import { CityComponent } from './city/city.component';
import { DegreesComponent } from './degrees/degrees.component';
import { CardComponent } from './card/card.component';

import { WeatherService } from './weather.service';
import { EndpointService } from './endpoint.service';
import { WindowRefService } from './window-ref.service';
import { SharedDataService } from './shared-data.service';

@NgModule({
  declarations: [
    AppComponent,
    WidgetComponent,
    CityComponent,
    DegreesComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    Ng2CompleterModule,
    HttpClientModule
  ],
  providers: [WeatherService, WindowRefService, EndpointService, SharedDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
