import { Component } from '@angular/core';
import { SharedDataService } from './shared-data.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  providers: [ SharedDataService ]
})
export class AppComponent {

  scale: string;
  cities: string;

  constructor(private sharedDataService: SharedDataService) {
    sharedDataService.scaleChanged$.subscribe(
      scale => {
        this.scale = scale;
      });
    sharedDataService.citiesChanged$.subscribe(
      cities => {
        this.cities = cities;
      }
    )

  }
}
