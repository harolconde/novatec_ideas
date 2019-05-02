import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  users:any[] = [
    {name: 'Harol',lastName: 'Conde', nikName: 'harol.conde', email: 'harolconde@novatec.com.co', password: 'Temporal123', img:'assets/img/userPerfil.png'},
    {name: 'Luisa',lastName: 'Rodriguez', nikName: 'luisa.rodriguez', email: 'harolconde@novatec.com.co', password: 'Temporal123', img:'assets/img/userPerfil.png'}
  ]

  constructor() { 
    console.log('Llamando servicio')
  }

  returnDates(){
    return this.users
  }

}
