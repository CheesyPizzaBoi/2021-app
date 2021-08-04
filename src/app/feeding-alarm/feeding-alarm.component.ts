import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { LogInstance } from 'twilio/lib/rest/serverless/v1/service/environment/log';


export interface Message {
  breed: string;
  weight: number;
  message: string;
}

@Component({
  selector: 'app-feeding-alarm',
  templateUrl: './feeding-alarm.component.html',
  styleUrls: ['./feeding-alarm.component.css']
})





export class FeedingAlarmComponent implements OnInit {


  constructor(private http: HttpClient) {

  }

  submit(alarm: NgForm) {
    let obj = {
      number: alarm.value.num,
      message: alarm.value.message,
    };
    this.http.post("http://localhost:3000/sms", obj).subscribe(() => {
      console.log(obj);

    })
    alarm.reset();
  };









  ngOnInit(): void {
  }


}


