export class CovidToday {
  Confirmed: Number;
  Recovered: Number;
  Hospitalized: Number;
  Deaths: Number;
  NewConfirmed: Number;
  NewDeaths: Number;
  NewHospitalized: Number;
  NewRecovered: Number;
  UpdateDate: String;
  Source: String;
  DevBy: String;
  SeverBy: String;
}

export class CovidTimeline {
  UpdateDate: String;
  Source: String;
  DevBy: String;
  SeverBy: String;
  Data: [
    {
      Date: String;
      NewConfirmed: Number;
      NewRecovered: Number;
      NewHospitalized: Number;
      NewDeaths: Number;
      Confirmed: Number;
      Recovered: Number;
      Hospitalized: Number;
      Deaths: Number;
    }
  ];
}

export class CovidCasesSum {
  Province: any;
  Nation: any;
  Gender: any;
  LastData: String;
  UpdateDate: String;
  Source: String;
  DevBy: String;
  SeverBy: String;
}

export class CovidArea {

}
