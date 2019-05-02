import { Component, OnInit } from '@angular/core';
import { UsersService } from './../services/users.service';

@Component({
  selector: 'app-dates-user',
  templateUrl: './dates-user.component.html',
  styleUrls: ['./dates-user.component.scss']
})
export class DatesUserComponent implements OnInit {
  
  users:any[] = []
  constructor(private _service:UsersService) {
    this.users = _service.returnDates()
   }

  ngOnInit() {
  }

}
