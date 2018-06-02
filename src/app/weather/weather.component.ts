import { Component, OnInit } from '@angular/core';
import { FetchService } from './../fetch.service';
declare var Highcharts:any;

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

  chennaiWeatherData:any=[];
  guntakalWeatherData:any=[];
  datesData:any=[];
  options: Object;
  x=[];
  constructor(private _fetchService:FetchService) { 
  }

  formatDate(date){
    let d = new Date(date);
    let x = d.toString();
    let y = x.slice(0,3)+','+x.slice(15,21);
    return y;
  }

  drawChart(){
    Highcharts.chart('container', {
      title:'Weather',
      chart: {
          type: 'spline'
      },
    colors:['lightcoral','green'],
      xAxis: {
          categories:this.chennaiWeatherData.map(row=>{
            return row.ts
          })
      },
      yAxis: {
        title:'Temp.,',
          labels: {
              formatter: function () {
                  return this.value + '°C';
              }
          }
      },
      tooltip: {
      },
      plotOptions: {
          spline: {
              marker: {
                  radius: 4,
                  lineColor: '#666666',
                  lineWidth: 0.5
              }
          }
      },
      series: [{
          name: 'Chennai',
          marker: {
              symbol: 'circle'
          },
          data:this.chennaiWeatherData,
      },
      {
        name: 'Guntakal',
        marker: {
            symbol: 'circle'
        },
        data:this.guntakalWeatherData,
    }]
    });
  }

  ngOnInit() {

    this._fetchService.fetchChennaiWeather().subscribe(data=>{
      let x = data.list;
      x.map((row,index)=>{
        if(index < 8){
          let p = {y:row.main.temp,marker:{symbol:'url(https://openweathermap.org/img/w/'+row.weather[0].icon+'.png)'},ts:this.formatDate(row.dt_txt),desc:row.weather[0].description};
          this.chennaiWeatherData = [p,...this.chennaiWeatherData];
          let newDate = new Date(row.dt_txt);
          this.datesData = [newDate.toString(),...this.datesData];
        }
      })
      this.chennaiWeatherData = this.chennaiWeatherData.reverse();
      this.drawChart();
    })

    console.log(this.chennaiWeatherData,"asdfa");

    this._fetchService.fetchGuntakalWeather().subscribe(data=>{
      let x = data.list;
      x.map((row,index)=>{
        if(index < 8){
          let p = {y:row.main.temp,marker:{symbol:'url(https://openweathermap.org/img/w/'+row.weather[0].icon+'.png)'},ts:this.formatDate(row.dt_txt),desc:row.weather[0].description};
          this.guntakalWeatherData = [p,...this.guntakalWeatherData];
          let newDate = new Date(row.dt_txt);
          this.datesData = [newDate.toString(),...this.datesData];
        }
      })
      this.guntakalWeatherData = this.guntakalWeatherData.reverse();
      this.drawChart();
    })

  }
  
}
