import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IdeasService } from './../services/ideas.service';

@Component({
  selector: 'app-idea',
  templateUrl: './idea.component.html',
  styleUrls: ['./idea.component.scss']
})
export class IdeaComponent implements OnInit {

  ideas:any[] = []

  constructor(
    
    private ruta:ActivatedRoute,
    private _service:IdeasService
  ) { 
    this.ruta.params.subscribe(params => {
      console.log(params['id'])
      this.ideas = this._service.getOneIdea(params['id']);
    })
  }

  ngOnInit() {
  }

}
