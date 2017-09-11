import { Component, Input } from '@angular/core';
import {city} from './app.city';
import { cityService } from './city.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  cityForm : FormGroup;
  constructor(private cityService: cityService, fb: FormBuilder) {
    this.cityForm = fb.group({
      'cityName' : ['', Validators.required]
    } )
  }


  model = new city().name;
  submitted = false;
  resvalue = {};

  
  onSubmit(){
    if(!this.cityForm.valid){
alert('Please enter city name;')
    }else{
    this.cityService.getUser(this.model).subscribe(data => {
      this.resvalue = data;
      debugger;
    this.submitted=true;
    });
    }
    
  }

  reset(){
    this.submitted = false;
    this.model = '';
  }

}
