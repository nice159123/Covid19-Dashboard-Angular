import { Component, OnInit } from '@angular/core';
import { CovidService } from 'src/app/services/covid.service';
import {
  CovidToday,
  CovidTimeline,
  CovidCasesSum,
  CovidArea
} from '../../models/covid.model';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public CovidToDay: CovidToday;
  public CovidTimeline: CovidTimeline;
  public CovidCasesSum: CovidCasesSum;
  public CovidArea: CovidArea;

  constructor(
    private covidService : CovidService
  ) { }

  ngOnInit(): void {
    this.covidService.getCovidToDay().subscribe(result => this.CovidToDay = result);
    this.covidService.getCovidTimeline().subscribe(result => this.CovidTimeline = result);
    this.covidService.getCovidCasesSum().subscribe(result => this.CovidCasesSum = result);
    this.covidService.getCovidArea().subscribe(result => this.CovidArea = result);
  }

}
