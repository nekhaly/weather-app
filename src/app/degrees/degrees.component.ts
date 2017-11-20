import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { EndpointService } from '../endpoint.service';
import { SharedDataService } from '../shared-data.service';

@Component({
  selector: 'app-degrees',
  templateUrl: 'degrees.component.html',
  styleUrls: ['degrees.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class DegreesComponent {

  scale: string;
  
  constructor(
    private endPointService: EndpointService,
    private sharedDataService: SharedDataService
  ) { 
    // Celsius is Default
    this.scale = this.endPointService.getItem('scale') || 'c';
  }

  public changeScale(scale: string) {
    this.scale = scale;
    this.endPointService.setItem('scale', this.scale);
    this.sharedDataService.setScale(this.scale);
  }

  public getScale(): string {
    return this.scale;
  }

}
