import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dates-user',
  templateUrl: './dates-user.component.html',
  styleUrls: ['./dates-user.component.scss']
})
export class DatesUserComponent implements OnInit {
  
  usuarios:Array<any> = [
    {name: 'Harol', lastName: 'Conde', email: 'harolconde@novatec.com.co', age: 29, img: 'assets/img/userPerfil.png'}
  ]
  constructor() { }

  ngOnInit() {
  }

}
