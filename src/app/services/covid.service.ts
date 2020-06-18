import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {
  CovidToday,
  CovidTimeline,
  CovidCasesSum,
  CovidArea
} from '../models/covid.model';

@Injectable({
  providedIn: 'root'
})
export class CovidService {

  constructor(
    private http: HttpClient
  ) { }

  // Today
  private apiCovid19Today = 'https://covid19.th-stat.com/api/open/today';
  // Timeline
  private apiCovid19Timeline = 'https://covid19.th-stat.com/api/open/timeline';
  // Cases Sum
  private apiCovid19CasesSum = 'https://covid19.th-stat.com/api/open/cases/sum';
  // Area
  private apiCovid19Area = 'https://covid19.th-stat.com/api/open/area';

  /**
   *  Get Api covid19 Today
   *  @return object
   */
  getCovidToDay () {
    return this.http.get<CovidToday>(this.apiCovid19Today);
  }

  /**
   *  Get Api covid19 Timeline
   *  @return object
   */
  getCovidTimeline () {
    return this.http.get<CovidTimeline>(this.apiCovid19Timeline);
  }

  /**
   *  Get Api covid19 Cases Sum
   *  @return object
   */
  getCovidCasesSum () {
    return this.http.get<CovidCasesSum>(this.apiCovid19CasesSum);
  }

  /**
   *  Get Api covid19 Area
   *  @return object
   */
  getCovidArea () {
    return this.http.get<CovidArea>(this.apiCovid19Area);
  }
}
