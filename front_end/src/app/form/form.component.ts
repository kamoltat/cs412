import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {CovidStatsService} from '../covid-stats.service'
import {COUNTRY} from '../data/country';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  title = 'formComponent';
  result: any
  
  constructor(private form: FormBuilder, private covidStatsService: CovidStatsService) { }
  
  countryFormGroup = this.form.group({
    countryControl: ['south-africa', [Validators.required,Validators.minLength(2)]]
  });

  getCovidStatByCountry() {
    this.covidStatsService.getStats(this.countryFormGroup).subscribe(
      response => {
        this.result = response
        console.log(response)
      }

    )}
    
  ngOnInit(): void {
      
  }
  

}
