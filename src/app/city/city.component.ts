import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { SharedDataService } from '../shared-data.service';
import { EndpointService } from '../endpoint.service';
import { WeatherService } from '../weather.service';
import { CompleterService, CompleterData } from 'ng2-completer';

@Component({
  selector: 'app-city',
  templateUrl: 'city.component.html',
  styleUrls: ['city.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class CityComponent implements OnInit {

  public model: any = {};
  protected validCitiesList: string[]; // = ['Cairo', 'London', 'Athene', 'Rome', 'Munich', 'Berlin', 'Istanbul', 'Moscow'];

  constructor(
    private sharedDataService: SharedDataService,
    private endPointService: EndpointService,
    private weatherService: WeatherService
  ) { 
    this.validCitiesList = this.weatherService.getCitiesList();
  }

  ngOnInit() {
    
  }

  public addCity() {
    let currentCities: string[] = this.endPointService.getItem('cities', 'array');
    if(this.validCitiesList.indexOf(this.model.city) !== -1) {
      if(currentCities) {
        if(currentCities.indexOf(this.model.city) == -1)
          this.endPointService.setItem('cities', this.model.city, true);
      } else {
        this.endPointService.setItem('cities', this.model.city);
      }
      this.sharedDataService.setCities(this.endPointService.getItem('cities'));
      this.model.city = "";
    }
  }
}
