import { Component, OnInit } from '@angular/core';
import { IdeasService } from './../services/ideas.service';

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
  // getDataCardsIdeas(){
  //   let container = document.querySelector('#containerCardIdeas');
  //   let info ="Hola mundo"
  //   container.innerHTML += //html
  //   `
  //     <ul *ngFor="let idea of ideas, index as i">
  //       <li>${container}</li>
  //     </ul>
  //   `
  // }
}
