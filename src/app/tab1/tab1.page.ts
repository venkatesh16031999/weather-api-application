import { Component } from '@angular/core';

import { PostService } from '../weather.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor( public weatherservice:PostService ) {}
  weatherdata="";
  cityname="";
  weatherdata1="";
  cityname1="";
  weatherdata2="";
  cityname2="";
  weatherdata3="";
  cityname3="";

  cityPanel=0;

  enableSelect(num){
    this.cityPanel=num;
  }

  findweather(num){
    
    

    if(num==1){
      this.weatherservice.getReport1(this.cityname);
      this.weatherservice.getPostObserver1().subscribe((data)=>{
        this.weatherdata=data[0];
      })
      
    }

    if(num==2){
      this.weatherservice.getReport2(this.cityname1);
      this.weatherservice.getPostObserver2().subscribe((data)=>{
        this.weatherdata1=data[0];
      })
      
    }

    if(num==3){
      this.weatherservice.getReport3(this.cityname2);
      this.weatherservice.getPostObserver3().subscribe((data)=>{
        this.weatherdata2=data[0];
      })
      
    }

    if(num==4){
      this.weatherservice.getReport4(this.cityname3);
      this.weatherservice.getPostObserver4().subscribe((data)=>{
        this.weatherdata3=data[0];
      })
    
    }
    
    this.cityPanel=0;

  }

}
