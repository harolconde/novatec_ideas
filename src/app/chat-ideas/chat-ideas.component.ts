import { Component, OnInit } from '@angular/core';
import { IdeasService } from './../services/ideas.service';
import * as $ from 'jquery';

@Component({
  selector: 'app-chat-ideas',
  templateUrl: './chat-ideas.component.html',
  styleUrls: ['./chat-ideas.component.scss']
})
export class ChatIdeasComponent implements OnInit {

  ideas:any[] = []

  constructor(private _service:IdeasService) { 
    this.ideas = _service.getDataIdeas();
  }

  ngOnInit() {
    
  }
  
}
$(function(){
  $('[data-toggle="tooltip"]').tooltip()
 })


