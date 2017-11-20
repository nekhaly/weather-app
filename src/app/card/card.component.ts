import { Component, OnInit, ViewEncapsulation, Input, AfterViewInit } from '@angular/core';
import { WeatherService } from '../weather.service';
import { EndpointService } from '../endpoint.service';
import { SharedDataService } from '../shared-data.service';
import { splitClasses } from '@angular/compiler';

@Component({
  selector: 'app-card',
  templateUrl: 'card.component.html',
  styleUrls: ['card.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class CardComponent implements OnInit {

  cityWeatherData: object;
  @Input() city: string;
  scale: string;

  constructor(
    private weatherService: WeatherService,
    private endPointService: EndpointService,
    private sharedDataService: SharedDataService
  ) { 
    this.scale = this.endPointService.getItem('scale');
    this.sharedDataService.scaleChanged$.subscribe( (scale) => {
      this.scale = scale;
    });
  }

  ngOnInit() {
    this.weatherService.getWeatherData(this.city).subscribe(data => {
      this.cityWeatherData = data;
    });
  }

  private _convertToCelsius(degree: number): number {
    return Math.round((degree-32) * 5 / 9);
  }

  private _convertToFahrenheit(degree: number): number {
    return Math.round((degree * 1.8) + 32);
  }

  public getTemprature(degree: number): number {
    if(this.scale == 'f')
      return this._convertToFahrenheit(degree);
    else 
      return Math.round(degree);
  }

  public removeCity(city: string) {
    this.endPointService.removeItem('cities', city);
    this.sharedDataService.setCities(this.endPointService.getItem('cities', 'array'));
  }

}
