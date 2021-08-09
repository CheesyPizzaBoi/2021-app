import { Component, OnInit } from "@angular/core";
import { AngularFireDatabase } from "@angular/fire/database";
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from "@angular/fire/firestore";

import { NgForm } from "@angular/forms";
import * as firebase from "firebase/app";
import { FirebaseApp } from "@angular/fire";
import { AngularFireModule } from "@angular/fire";
import { timer } from "rxjs";

import { HttpClient } from "@angular/common/http";

let a = 0;
let m = setInterval(scroll, 1000)



document.addEventListener("keyup", function(event) {
  if (event.code === 'AltRight') {

      m = setInterval(scroll, 1000)
  }
});

document.addEventListener("keyup", function(event) {
  if (event.code === "ShiftRight") {

      clearInterval(m);
  }
});




function scroll() {

  document.getElementById('div1').scrollTop = document.getElementById('div1').scrollHeight;
  console.log('l')
  

}
@Component({
  selector: 'app-mark-wayne',
  templateUrl: './mark-wayne.component.html',
  styleUrls: ['./mark-wayne.component.css']
})
export class MarkWayneComponent implements OnInit {
  messages: { id: string; message: any; }[];
  constructor(public fireservices: AngularFirestore, private http: HttpClient) { }
  person = prompt("Please enter  name:", "");
  times = 0;
  

  ngOnInit(): void {
    this.get_AllData().subscribe(data =>{
      this.messages = data.map(e => {
        return {
          id: e.payload.doc.id,
          name: e.payload.doc.data()['name'],
          message: e.payload.doc.data()['message'],

        };
      })
      
      console.log(this.messages);
      
    });
  }

  record() {
    let record = {};

  }

  get_AllData() {
    return this.fireservices.collection('mark_Wayne').snapshotChanges();
  }

  mary_Lee() {
    let ok = {
      ok: true, 
    }

    this.http.post("https://app-2021-server.herokuapp.com/send", ok).subscribe(() => {
        console.log(ok);
    });
  }




  create_Newemployee(add: NgForm) {
    
  
    
    
    
    let whole = {
      message: add.value.message,
      name: this.person
    }

    if (this.person == null) {
      this.person = prompt("Please enter your name:", "");
    } else if (whole.message == null) {
      alert('Say something')
    } else {
      this.http.post("https://app-2021-server.herokuapp.com/send", whole).subscribe(() => {
        console.log(whole);
      });

    }
    
    
    
    

    
    add.reset();

    
    
    

  }

}
