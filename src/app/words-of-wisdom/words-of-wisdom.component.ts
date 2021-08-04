import { stringify } from '@angular/compiler/src/util';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-words-of-wisdom',
  templateUrl: './words-of-wisdom.component.html',
  styleUrls: ['./words-of-wisdom.component.css']
})
export class WordsOfWisdomComponent implements OnInit {
  
  
  
  
  

  
  user: any;
  text: any;
  currentVal="";

  


  constructor() { 
    this.user = {
      posts: [
        "Post",
      ]
    };

  }

  getVal(val) {
    console.log(val);
    this.currentVal=val
    this.user.posts.push(this.currentVal);
  }


  
 

  ngOnInit(): void {
  }

}
