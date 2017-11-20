import { Injectable } from '@angular/core';
import { WindowRefService } from './window-ref.service';
import { SharedDataService } from './shared-data.service';

@Injectable()
export class EndpointService {
  
  private _window: Window;

  constructor(
    private windowRefService: WindowRefService, 
    private sharedDataService: SharedDataService
  ) { 
    this._window = windowRefService.nativeWindow;
  }

  public trim(str: string, charList: string) {
    if (charList === "]") charList = "\\]";
    if (charList === "\\") charList = "\\\\";
    return str.replace(new RegExp(
      "^[" + charList + "]+|[" + charList + "]+$", "g"
    ), "");
  }

  public setItem(key: string, value: string, add: boolean = false): boolean {
    if(value !== null && value !== undefined) {
      if(add) {
        value = this._window.localStorage.getItem(key) + ',' + value;
        value = this.trim(value, ",");
      }
      if(this._window.localStorage.setItem(key, value)) return true; 
      else return false;
    }
    return false;
  }

  public getItem(key: string, parse?: string): any {
    let value: any = this._window.localStorage.getItem(key);
    if(value) { 
      if(parse == 'json') {
        value = JSON.parse(value);
      } else if (parse == 'array') {
        value = value.split(',');
      } 
    }
    return value;
  }

  public removeItem(key: string, item?: string) {
    if(!item) {
      this._window.localStorage.removeItem(key);
    }
    else {
      let valueArray: string[] = this.getItem(key, 'array');
      valueArray.splice(valueArray.indexOf(item),1);
      this.setItem(key, valueArray.toString());
    }
  }

}
