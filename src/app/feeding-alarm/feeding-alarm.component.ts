import { Component, OnInit } from "@angular/core";

import { HttpClient } from "@angular/common/http";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-feeding-alarm",
  templateUrl: "./feeding-alarm.component.html",
  styleUrls: ["./feeding-alarm.component.css"],
})
export class FeedingAlarmComponent implements OnInit {
  constructor(private http: HttpClient) {}
  // https://app-2021-server.herokuapp.com/sms
  submit(alarm: NgForm) {
    let obj = {
      number: alarm.value.num,
      message: "It's time to feed your pet from " + alarm.value.av1 + " to " + alarm.value.av2 + "." + " Your pet's breed is " + alarm.value.breed + " and its weight is " + alarm.value.weight + ".",
      alarmTime: alarm.value.av1
    };
    this.http.post("http://localhost:3000/sms", obj).subscribe(() => {
      console.log(obj);
    });
    alarm.reset();
    alert('Alarm Set. You will get a text when the alarm goes off at the specified time.')
  }

  ngOnInit(): void {}
}
