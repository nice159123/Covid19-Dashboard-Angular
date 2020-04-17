import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Covid } from '../models/covid.model';

@Injectable({
  providedIn: 'root'
})
export class CovidService {

  constructor(
    private http: HttpClient
  ) { }

  api = 'https://covid19.th-stat.com/api/open/today';

  getCovidToDay () {
    return this.http.get<Covid>(this.api);
  }
}
