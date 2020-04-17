import { Component, OnInit } from '@angular/core';
import { CovidService } from 'src/app/services/covid.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private covidService : CovidService
  ) { }

  ngOnInit(): void {
    this.covidService.getCovidToDay().subscribe(x => console.log(x.Deaths));
  }

}
