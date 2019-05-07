import { Component, OnInit } from '@angular/core';
import { IdeasService } from './../services/ideas.service';
import { ChatIdeasComponent } from './../chat-ideas/chat-ideas.component';

@Component({
  selector: 'app-all-ideas',
  templateUrl: './all-ideas.component.html',
  styleUrls: ['./all-ideas.component.scss']
})
export class AllIdeasComponent implements OnInit {


  //Filtro de busqueda mostrar todas las ideas
  inputFilter:any = document.querySelector('#inputFilterSearch')
  btnSearch:any = document.getElementById('btnFilterSearch')

  //Variables mostrar idea completa
  btnShowIdea:any = document.getElementsByClassName('btnSeeMoreMessageAllIdeas')
  textCollapse:any = document.getElementsByClassName('ideaMessageChatUsersAllIdeas')
  panelReply:any = document.getElementsByClassName('containerDisplayReplyAllIdeas')
  btnMinus:any = document.getElementsByClassName('iconMoreMinusAllIdeas')
  stateCollapseAllIdea:boolean = false;


  ideas:any[] = []
  constructor(private _service:IdeasService) { 
    this.ideas = _service.getDataIdeas()
  }

  ngOnInit() {
  }

  filterIdeas(){
    let texto = this.inputFilter.value.toLowerCase()
    let contenido = ''
    console.log(texto)
  }

  collapseIdea(i){
    if(this.stateCollapseAllIdea == false){
      this.textCollapse[i].style.whiteSpace = "normal"
      this.textCollapse[i].style.transitionDuration = "0.5s"
      this.panelReply[i].style.display = 'flex'
      this.panelReply[i].style.transition = 'all 500ms linear'
      this.btnShowIdea[i].style.backgroundColor = '#f1f1f1'
      this.btnShowIdea[i].style.fontWeight = '600'
      this.btnShowIdea[i].style.border = '1px solid #ddd'
      this.btnShowIdea[i].style.borderRadius = '22px'
      this.btnShowIdea[i].style.transition = 'all 700ms linear'
      this.btnMinus[i].classList.remove('fa-plus')
      this.btnMinus[i].classList.add('fa-minus')
      this.stateCollapseAllIdea = true
    }
    else{
      this.textCollapse[i].style.whiteSpace = "nowrap"
      this.textCollapse[i].style.transitionDuration = "0.5s"
      this.panelReply[i].style.display = 'none'
      this.panelReply[i].style.transition = 'all 500ms linear'
      this.btnShowIdea[i].style.backgroundColor = '#fafafa'
      this.btnShowIdea[i].style.fontWeight = '400'
      this.btnShowIdea[i].style.border= '1px solid transparent'
      this.btnShowIdea[i].style.borderRadius = '5px'
      this.btnShowIdea[i].style.transition = 'all 700ms linear'
      this.btnMinus[i].classList.remove('fa-minus')
      this.btnMinus[i].classList.add('fa-plus')
      this.stateCollapseAllIdea = false
    }
  }

}
