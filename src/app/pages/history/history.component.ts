import { Component, OnInit } from '@angular/core';
import { CovidService } from 'src/app/services/covid.service';
@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {

  public covidTimeline: any;

  constructor(
    private covidService : CovidService
  ) { }

  ngOnInit(): void {
    this.covidService.getCovidTimeline().subscribe( (result) => {
      this.covidTimeline = result.Data;
    });
  }

}
