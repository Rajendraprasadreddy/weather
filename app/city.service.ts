import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class cityService {
  constructor (
    private http: Http
  ) {}

  getUser(name) {
      let url = 'http://samples.openweathermap.org/data/2.5/weather?q='+name+',uk&appid=b1b15e88fa797225412429c1c50c122a1'
    return this.http.get(url)
    .map((res:Response) => res.json());
  }

}