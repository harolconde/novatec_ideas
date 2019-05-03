import { Component, OnInit } from '@angular/core';
import { IdeasService } from './../services/ideas.service';
import * as $ from 'jquery';
import { owlCarousel } from 'owl.carousel'
import { OwlModule } from 'ngx-owl-carousel';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  ideas:any[] = []
  constructor(private _service:IdeasService) { 
    this.ideas = this._service.getDataIdeas()
    
  }

  ngOnInit() {
  }
  
}
$(document).ready(function() {
    console.log('Inicio')
    $(".owl-carousel").owlCarousel();
})
