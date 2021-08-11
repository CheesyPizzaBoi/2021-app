import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-messages",
  templateUrl: "./messages.component.html",
  styleUrls: ["./messages.component.css"],
})
export class MessagesComponent implements OnInit {
  constructor() {}

  inMessages: String[] = [];
  outMessages: String[] = [];

  message: String;

  addMessage() {
    console.log("button pushed");
    console.log(this.message);
    this.inMessages.push(this.message);
    this.message = "";
  }

  ngOnInit(): void {}
}
