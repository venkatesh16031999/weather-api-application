import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { PostService } from '../weather.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor( public weatherservice:PostService,public toastcontrol:ToastController ) {}
  weatherdata="";
  cityname="";
  weatherdata1="";
  cityname1="";
  weatherdata2="";
  cityname2="";
  weatherdata3="";
  cityname3="";

  cityPanel=0;

  statusMessage=0;

  async enableSelect(num){
    this.cityPanel=num;
  }

  async findweather(num){
    
    if(num==1 && this.cityname.length!=0 ){
      this.weatherservice.getReport1(this.cityname);
      this.weatherservice.getPostObserver1().subscribe((data)=>{
        this.weatherdata=data[0];
      })
      this.weatherservice.getStatus().subscribe((data)=>{
        this.statusMessage=Number(data);
        let messageText=this.statusMessage == 404 ? "City Not Found" : "City Data Fetched Successfully"
        this.toastMessage(messageText,this.statusMessage);
      });
      this.cityPanel=0;
    }

    if(num==2  && this.cityname1.length!=0){
      this.weatherservice.getReport2(this.cityname1);
      this.weatherservice.getPostObserver2().subscribe((data)=>{
        this.weatherdata1=data[0];
      })
      this.weatherservice.getStatus().subscribe((data)=>{
        this.statusMessage=Number(data);
        let messageText=this.statusMessage == 404 ? "City Not Found" : "City Data Fetched Successfully"
        this.toastMessage(messageText,this.statusMessage);
      });
      this.cityPanel=0;
    }

    if(num==3  && this.cityname2.length!=0){
      this.weatherservice.getReport3(this.cityname2);
      this.weatherservice.getPostObserver3().subscribe((data)=>{
        this.weatherdata2=data[0];
      })
      this.weatherservice.getStatus().subscribe((data)=>{
        this.statusMessage=Number(data);
        let messageText=this.statusMessage == 404 ? "City Not Found" : "City Data Fetched Successfully"
        this.toastMessage(messageText,this.statusMessage);
      });
      this.cityPanel=0;
    }

    if(num==4  && this.cityname3.length!=0){
      this.weatherservice.getReport4(this.cityname3);
      this.weatherservice.getPostObserver4().subscribe((data)=>{
        this.weatherdata3=data[0];
      })
      this.weatherservice.getStatus().subscribe((data)=>{
        this.statusMessage=Number(data);
        let messageText=this.statusMessage == 404 ? "City Not Found" : "City Data Fetched Successfully"
        this.toastMessage(messageText,this.statusMessage);
      });
      this.cityPanel=0;
    }
    
    

  }



  async toastMessage(messageText,status){

    let colorText=status!=404 ? "success" : "danger"


    const toast=await this.toastcontrol.create({
      message:messageText,
      duration:2000,
      color:colorText
    });
    toast.present();
  }


}


