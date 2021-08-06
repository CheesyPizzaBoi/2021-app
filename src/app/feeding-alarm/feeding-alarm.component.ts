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

  submit(alarm: NgForm) {
    let obj = {
      number: alarm.value.num,
      message: alarm.value.message,
    };
    this.http.post("https://app-2021-server.herokuapp.com/sms", obj).subscribe(() => {
      console.log(obj);
    });
    alarm.reset();
  }

  ngOnInit(): void {}
}
