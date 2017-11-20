import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { EndpointService } from '../endpoint.service';
import { SharedDataService } from '../shared-data.service';

@Component({
  selector: 'app-widget',
  templateUrl: 'widget.component.html',
  styles: [],
  encapsulation: ViewEncapsulation.None
})
export class WidgetComponent implements OnInit {

  public cities: string[];

  constructor(
    private endpointService: EndpointService,
    private sharedDataService: SharedDataService
  ) { 
    this.sharedDataService.citiesChanged$.subscribe( (cities) => {
      this._getCities();
    })
  }

  ngOnInit() {
    this._getCities();
  }

  private _getCities(): void {
    this.cities = this.endpointService.getItem('cities', 'array');
  };

  public removeAllCities() {
    this.endpointService.removeItem('cities');
    this.sharedDataService.setCities(this.endpointService.getItem('cities'));
  }

}
