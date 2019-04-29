import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationLateralComponent } from './navigation-lateral/navigation-lateral.component';
import { DatesUserComponent } from './dates-user/dates-user.component';
import { ChatIdeasComponent } from './chat-ideas/chat-ideas.component';
import { BoardIdeasComponent } from './board-ideas/board-ideas.component';
import { FooterComponent } from './footer/footer.component';
import { IdeasDeadComponent } from './ideas-dead/ideas-dead.component';
import { IdeasFinishComponent } from './ideas-finish/ideas-finish.component';

const routes: Routes = [
  { path: 'board', component: BoardIdeasComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    NavigationLateralComponent,
    DatesUserComponent,
    ChatIdeasComponent,
    BoardIdeasComponent,
    FooterComponent,
    IdeasDeadComponent,
    IdeasFinishComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
