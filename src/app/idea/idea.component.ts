import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IdeasService } from './../services/ideas.service';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-idea',
  templateUrl: './idea.component.html',
  styleUrls: ['./idea.component.scss']
})
export class IdeaComponent implements OnInit {

  ideas:any[] = []
  //LineChart = []
  constructor(
    
    private ruta:ActivatedRoute,
    private _service:IdeasService
  ) { 
    this.ruta.params.subscribe(params => {
      //console.log(params['id'])
      this.ideas = this._service.getOneIdea(params['id']);
    })
    


  }

  ngOnInit() {
    const ctx = document.getElementById('myChart');

    let myChart = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: ['Me gusta', 'No me gusta', 'Me es indiferente'],
            datasets: [{
                label: 'Cantidad de votos',
                data: [4,2,2],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            // scales: {
            //     yAxes: [{
            //         ticks: {
            //             beginAtZero: true
            //         }
            //     }]
            // }
        }
    });
    
  }

}
