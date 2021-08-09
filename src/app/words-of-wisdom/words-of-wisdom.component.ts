import { Component, OnInit } from "@angular/core";
import { AngularFireDatabase } from "@angular/fire/database";
import { AngularFirestore } from "@angular/fire/firestore";
import { NgForm } from "@angular/forms";
import * as firebase from "firebase";
@Component({
  selector: "app-words-of-wisdom",
  templateUrl: "./words-of-wisdom.component.html",
  styleUrls: ["./words-of-wisdom.component.css"],
})
export class WordsOfWisdomComponent implements OnInit {
  courses: any[];
  messages: { id: string; message: any }[];

  constructor(public fireservices: AngularFirestore) {}

  ngOnInit() {
    this.get_AllData().subscribe((data) => {
      this.messages = data.map((e) => {
        return {
          id: e.payload.doc.id,
          name: e.payload.doc.data()["name"],
          message: e.payload.doc.data()["message"],
        };
      });
      console.log(this.messages);
    });
  }

  record() {
    let record = {};
  }

  get_AllData() {
    return this.fireservices.collection("blogPostCollection").snapshotChanges();
  }

  create_Newemployee(add: NgForm) {
    let value = {
      name: add.value.name,
      message: add.value.message,
    };
    return this.fireservices.collection("blogPostCollection").add(value);
  }
}
