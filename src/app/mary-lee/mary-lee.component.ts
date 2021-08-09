import { Component, OnInit } from "@angular/core";
import { AngularFireDatabase } from "@angular/fire/database";
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from "@angular/fire/firestore";

import { NgForm } from "@angular/forms";
import * as firebase from "firebase/app";
import { FirebaseApp } from "@angular/fire";
import { AngularFireModule } from "@angular/fire";
import { timer } from "rxjs";

import { HttpClient } from "@angular/common/http";


let chatContainer = document.getElementById('div1');


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

/*
document.addEventListener("", logKey);
document.addEventListener("keypress", logKeyR);

function logKey() {
    a = a + 1;

    clearInterval(m);
    
}

function logKeyR() {
  m = setInterval(scroll, 100)
}
*/




function scroll() {

  document.getElementById('div1').scrollTop = document.getElementById('div1').scrollHeight;
  console.log('l')
  

}












@Component({
  selector: 'app-mary-lee',
  templateUrl: './mary-lee.component.html',
  styleUrls: ['./mary-lee.component.css']
})



export class MaryLeeComponent implements OnInit {
  messages: { id: string; message: any; }[];
  constructor(public fireservices: AngularFirestore, private http: HttpClient) { }
  person = prompt("Please enter  name:", "");
  
  times = 0;


  ngOnInit() {
    
    this.get_AllData().subscribe(data =>{
      this.messages = data.map(e => {
        return {
          id: e.payload.doc.id,
          name: e.payload.doc.data()['name'],
          message: e.payload.doc.data()['message'],

        };
      })
      
      console.log(this.messages);

      if(this.messages.length > this.messages.length) {
        console.log('hi')
      }
      
    });
    

    





  }










  record() {
    let record = {};

  }

  get_AllData() {
    return this.fireservices.collection('mary_Lee').snapshotChanges();
  }

  mary_Lee() {
    let ok = {
      ok: true, 
    }

    this.http.post("http://localhost:3000/mary_Lee", ok).subscribe(() => {
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
      this.http.post("https://app-2021-server.herokuapp.com/mary_Lee", whole).subscribe(() => {
        console.log(whole);
      });

    }
    
    
    
    
    
    

    
    add.reset();
  

    



  }
}
