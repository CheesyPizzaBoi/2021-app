import { Component, OnInit } from "@angular/core";
import { AngularFireDatabase } from "@angular/fire/database";
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from "@angular/fire/firestore";

import { NgForm } from "@angular/forms";
import * as firebase from "firebase/app";
import { FirebaseApp } from "@angular/fire";
import { AngularFireModule } from "@angular/fire";
import { timer } from "rxjs";

import { HttpClient } from "@angular/common/http";






@Component({
  selector: 'app-vet-assistance',
  templateUrl: './vet-assistance.component.html',
  styleUrls: ['./vet-assistance.component.css']
})
export class VetAssistanceComponent implements OnInit {
  constructor() { }
  
  ngOnInit() {
  

  }
  
}
