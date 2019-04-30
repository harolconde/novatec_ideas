import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-chat-ideas',
  templateUrl: './chat-ideas.component.html',
  styleUrls: ['./chat-ideas.component.scss']
})
export class ChatIdeasComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    
  }
  
}
$(function(){
  $('[data-toggle="tooltip"]').tooltip()
 })


