import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {FormGroup} from '@angular/forms';
@Injectable({
  providedIn: 'root'
})
export class CovidStatsService {

  constructor(private http: HttpClient) { }

  getStats(form: FormGroup){
    console.log(`in getStats`)
    let country = form.value.countryControl;
    return this.http.get('http://localhost:3000/ps5/get/' + country);
  }
}
