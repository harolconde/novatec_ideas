import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IdeasService {

  ideas:any[] =[
    { id: 1, user: 'Harol Conde', description: ' Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore voluptas incidunt deserunt, velit aut quis quam, praesentium voluptatibus optio accusamus pariatur modi, quaerat rerum a consequuntur atque rem! Vitae, quo.', votes: 8, votePos: 4, voteNeg: 2, voteMeeh: 2},
    { id: 2, user: 'Luisa Rodriguez', description: ' Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore voluptas incidunt deserunt, velit aut quis quam, praesentium voluptatibus optio accusamus pariatur modi, quaerat rerum a consequuntur atque rem! Vitae, quo.', votes: 10, votePos: 5, voteNeg: 2, voteMeeh: 3},
    { id: 3, user: 'Luisa Rodriguez', description: ' Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore voluptas incidunt deserunt, velit aut quis quam, praesentium voluptatibus optio accusamus pariatur modi, quaerat rerum a consequuntur atque rem! Vitae, quo.', votes: 2, votePos: 0, voteNeg: 0, voteMeeh: 2},
    { id: 4, user: 'Harol Conde', description: ' Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore voluptas incidunt deserunt, velit aut quis quam, praesentium voluptatibus optio accusamus pariatur modi, quaerat rerum a consequuntur atque rem! Vitae, quo.', votes: 1, votePos: 0, voteNeg: 1, voteMeeh: 0},
    { id: 5, user: 'Harol Conde', description: ' Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore voluptas incidunt deserunt, velit aut quis quam, praesentium voluptatibus optio accusamus pariatur modi, quaerat rerum a consequuntur atque rem! Vitae, quo.', votes: 8, votePos: 2, voteNeg: 4, voteMeeh: 2},
    { id: 6, user: 'Luisa Rodriguez', description: ' Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore voluptas incidunt deserunt, velit aut quis quam, praesentium voluptatibus optio accusamus pariatur modi, quaerat rerum a consequuntur atque rem! Vitae, quo.', votes: 10, votePos: 3, voteNeg: 4, voteMeeh: 3},
    { id: 7, user: 'Luisa Rodriguez', description: ' Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore voluptas incidunt deserunt, velit aut quis quam, praesentium voluptatibus optio accusamus pariatur modi, quaerat rerum a consequuntur atque rem! Vitae, quo.', votes: 15, votePos: 12, voteNeg: 2, voteMeeh: 1},
    { id: 8, user: 'Harol Conde', description: ' Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore voluptas incidunt deserunt, velit aut quis quam, praesentium voluptatibus optio accusamus pariatur modi, quaerat rerum a consequuntur atque rem! Vitae, quo.', votes: 3, votePos: 1, voteNeg: 1, voteMeeh: 1}  
  ]

  constructor() { }

  getDataIdeas(){
    return this.ideas
  }
  getOneIdea(i){
    return this.ideas[i]
  }

}
