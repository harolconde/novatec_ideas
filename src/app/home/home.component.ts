import { Component, OnInit } from '@angular/core';
import { IdeasService } from './../services/ideas.service';
import * as $ from 'jquery';
import 'owl.carousel';
import { OwlModule } from 'ngx-owl-carousel';

declare var $:any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
    ideas:any[] = [];
    constructor(private _service:IdeasService){ 
        this.ideas = this._service.getDataIdeas(); 
    }

    ngOnInit() {
        $(document).ready(() => {
            $(".owl-carousel-proposal").owlCarousel({
                nav:false,
                dots:true,
                responsive:{
                    0:{
                        items:1
                    },
                    600:{
                        items:1
                    },
                    1000:{
                        items:2
                    }
                }
            });
            $(".owl-carousel-process").owlCarousel({
                center:true,
                nav:false,
                dots:true,
                responsive:{
                    0:{
                        items:1
                    },
                    600:{
                        items:1
                    },
                    1000:{
                        items:1
                    }
                }
            });
            $('.owl-carouse-aproved').owlCarousel({
                center:true,
                nav:false,
                dots:true,
                responsive:{
                    0:{
                        items:1
                    },
                    600:{
                        items:1
                    },
                    1000:{
                        items:1
                    }
                }
            })
        });
    }
}

