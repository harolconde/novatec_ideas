import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { OwlModule } from 'ngx-owl-carousel';

//  Servicios
import { UsersService } from './services/users.service';
import { IdeasService } from './services/ideas.service';

// Layouts
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationLateralComponent } from './navigation-lateral/navigation-lateral.component';
import { DatesUserComponent } from './dates-user/dates-user.component';
import { ChatIdeasComponent } from './chat-ideas/chat-ideas.component';
import { BoardIdeasComponent } from './board-ideas/board-ideas.component';
import { FooterComponent } from './footer/footer.component';
import { IdeasDeadComponent } from './ideas-dead/ideas-dead.component';
import { IdeasFinishComponent } from './ideas-finish/ideas-finish.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './users/login/login.component';
import { IdeaComponent } from './idea/idea.component';

const routes: Routes = [
  { path: '',   redirectTo: '/home', pathMatch: 'full' },
  { path: 'login', component: LoginComponent},
  { path: 'home', component: HomeComponent},
  { path: 'idea/:id', component: IdeaComponent},
  { path: 'board', component: BoardIdeasComponent },
  { path: '**', redirectTo: '/home', pathMatch: 'full' }
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
    IdeasFinishComponent,
    HomeComponent,
    LoginComponent,
    IdeaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    OwlModule
  ],
  providers: [
    UsersService,
    IdeasService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
