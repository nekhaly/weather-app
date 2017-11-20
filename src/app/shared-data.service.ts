import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class SharedDataService {

  private scale = new Subject<string>();
  private cities = new Subject<string>();
  //private data = new Subject<object>();

  scaleChanged$ = this.scale.asObservable();
  citiesChanged$ = this.cities.asObservable();
  //dataChanged$ = this.data.asObservable();

  // setData(key: string, value: any) {
  //   this.data[key].next(value);
  // }

  setScale(scale: string) {
    this.scale.next(scale);
  }

  setCities(cities: string) {
    this.cities.next(cities);
  }
}
