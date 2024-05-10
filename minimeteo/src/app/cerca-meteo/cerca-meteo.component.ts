import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-cerca-meteo',
  templateUrl: './cerca-meteo.component.html',
  styleUrls: ['./cerca-meteo.component.css']
})
export class CercaMeteoComponent {
  query: string;
  title = 'first-routed-app';
  obsCW: Observable<Object>;
  results: any;

  constructor(private http:HttpClient) {
  }
  Token='21f9529c13d6e3fa70d96edf514e2d8e'
 
  submit(query: HTMLInputElement): void {
    if (!query.value) {
      return;
    }
    this.query = query.value;

  this.http.get(`https://api.openweathermap.org/data/2.5/weather?q=${this.query}&appid=${this.Token}&units=metric&lang=it`).subscribe(data => {
this.results=data
  });
  }
}

