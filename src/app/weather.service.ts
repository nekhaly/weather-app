import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class WeatherService {

  constructor(private http: HttpClient) {}

  public getWeatherData(city: string) {

    let weatherData: any = {};

    let url = "http://localhost:4200/api";

    return this.http.get(url, {
      params: {
        q: city,
        APPID: 'b29885e6ff3f09b6db309ebe8c7242f7',
        units: 'metric'
      } 
    });

    // weatherData = {
    //   "coord": {
    //     "lon": -0.13,
    //     "lat": 51.51
    //   },
    //   "weather": [
    //     {
    //       "id": 300,
    //       "main": "Drizzle",
    //       "description": "light intensity drizzle",
    //       "icon": "09d"
    //     }
    //   ],
    //   "base": "stations",
    //   "main": {
    //     "temp": 280.32,
    //     "pressure": 1012,
    //     "humidity": 81,
    //     "temp_min": 279.15,
    //     "temp_max": 281.15
    //   },
    //   "visibility": 10000,
    //   "wind": {
    //     "speed": 4.1,
    //     "deg": 80
    //   },
    //   "clouds": {
    //     "all": 90
    //   },
    //   "dt": 1485789600,
    //   "sys": {
    //     "type": 1,
    //     "id": 5091,
    //     "message": 0.0103,
    //     "country": "GB",
    //     "sunrise": 1485762037,
    //     "sunset": 1485794875
    //   },
    //   "id": 2643743,
    //   "name": city,
    //   "cod": 200
    // };
    // if(city == 'Cairo') {
    //   weatherData.weather = [{
    //     "id": 800,
    //     "main": "Clear",
    //     "description": "clear sky",
    //     "icon": "01d"
    //   }];
    //   weatherData.main = {
    //     "temp": 286.67,
    //     "temp_min": 281.556,
    //     "temp_max": 286.67,
    //     "pressure": 972.73,
    //     "humidity": 75
    //   };
    // } else if (city == 'London') {
    //   weatherData.weather = [{
    //     "id": 803,
    //     "main": "Clouds",
    //     "description": "broken clouds",
    //     "icon": "04d"
    //   }];
    //   weatherData.main = {
    //     "temp": 275.568,
    //     "temp_min": 275.568,
    //     "temp_max": 275.568,
    //     "pressure": 966.6,
    //     "humidity": 89
    //   };
    // }

    //return weatherData;
  }

  public getCitiesList(): string[] {
    let cities: string[] = [];
    this.http.get('../assets/json/city.list.json').subscribe( (data: any) => {
        data.map(value => {
          cities.push(value.name);
        });
    });
    return cities;
  }

}
