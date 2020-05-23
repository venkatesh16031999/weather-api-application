import { Injectable } from '@angular/core';

import { Subject } from 'rxjs';

import { HttpClient } from '@angular/common/http';

@Injectable({providedIn:'root'})
export class PostService{
    private posts1=[];
    private posts2=[];
    private posts3=[];
    private posts4=[];
    private updatedPost1= new Subject();
    private updatedPost2= new Subject();
    private updatedPost3= new Subject();
    private updatedPost4= new Subject();

    private interval1;
    private interval2;
    private interval3;
    private interval4;

    constructor( private http:HttpClient ){}

     getReport1(cityname){
      
        
            const link=`http://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=9b41d6fd6bf6b93bac3fffbc3dd2768b`;
            this.http.get(link).subscribe((resData)=>{

                console.log(resData);

               this.posts1=[];
           this.posts1=[resData];
           this.updatedPost1.next([...this.posts1]);
       })

       clearInterval(this.interval1);

           this.interval1=setInterval(()=>{
   
               this.http.get(link).subscribe((resData)=>{
                   this.posts1=[];
               this.posts1=[resData];
               this.updatedPost1.next([...this.posts1]);
           })
   
           },30000)
       
           

    }

    getReport2(cityname){

        const link=`http://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=9b41d6fd6bf6b93bac3fffbc3dd2768b`;
        this.http.get(link).subscribe((resData)=>{
            this.posts2=[];
        this.posts2=[resData];
        this.updatedPost2.next([...this.posts2]);
    })


    clearInterval(this.interval2);

    this.interval2=setInterval(()=>{
const link=`http://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=9b41d6fd6bf6b93bac3fffbc3dd2768b`;
           this.http.get(link).subscribe((resData)=>{
               this.posts2=[];
           this.posts2=[resData];
           this.updatedPost2.next([...this.posts2]);
       })
            
        },30000)

        
   }

   getReport3(cityname){
   
    const link=`http://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=9b41d6fd6bf6b93bac3fffbc3dd2768b`;
    this.http.get(link).subscribe((resData)=>{
        this.posts3=[];
    this.posts3=[resData];
    this.updatedPost3.next([...this.posts3]);
})

clearInterval(this.interval3);

this.interval3=setInterval(()=>{

 const link=`http://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=9b41d6fd6bf6b93bac3fffbc3dd2768b`;
       this.http.get(link).subscribe((resData)=>{
           this.posts3=[];
       this.posts3=[resData];
       this.updatedPost3.next([...this.posts3]);
   })
            
    },30000)

}

    getReport4(cityname){

        
        const link=`http://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=9b41d6fd6bf6b93bac3fffbc3dd2768b`;
                this.http.get(link).subscribe((resData)=>{
                    this.posts4=[];
                this.posts4=[resData];
                this.updatedPost4.next([...this.posts4]);
            })

            clearInterval(this.interval4);

            this.interval4=setInterval(()=>{

        const link=`http://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=9b41d6fd6bf6b93bac3fffbc3dd2768b`;
                this.http.get(link).subscribe((resData)=>{
                    this.posts4=[];
                this.posts4=[resData];
                this.updatedPost4.next([...this.posts4]);
            })
            
        },30000)

    }

    getPostObserver1(){
        return this.updatedPost1.asObservable();
    }

    getPostObserver2(){
        return this.updatedPost2.asObservable();
    }
    getPostObserver3(){
        return this.updatedPost3.asObservable();
    }
    getPostObserver4(){
        return this.updatedPost4.asObservable();
    }
}
