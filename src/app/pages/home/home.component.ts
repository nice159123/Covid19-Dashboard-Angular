import { Component, OnInit } from '@angular/core';
import { CovidService } from 'src/app/services/covid.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public covidNewConfirmed: Number;
  public covidConfirmed: Number;
  public covidRecovered: Number;
  public covidHospitalized: Number;
  public covidDeaths: Number;
  public covidTotalMale: Number;
  public covidTotalFemale: Number;
  public covidUpdate: String;

  public covidProvince: any;
  public covidNation: any;

  constructor(
    private covidService : CovidService
  ) { }

  ngOnInit(): void {
    this.covidService.getCovidToDay().subscribe( (result) => {
      this.covidNewConfirmed = result.NewConfirmed;
      this.covidConfirmed = result.Confirmed;
      this.covidRecovered = result.Recovered;
      this.covidHospitalized = result.Hospitalized;
      this.covidDeaths = result.Deaths;
      this.covidUpdate = result.UpdateDate;
    });
    this.covidService.getCovidCasesSum().subscribe( (result) => {
      this.covidTotalMale = result.Gender.Male;
      this.covidTotalFemale = result.Gender.Female;
      this.covidProvince = result.Province;
      this.covidNation = result.Nation;
    });
  }

}
