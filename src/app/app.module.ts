import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { GameListComponent } from './components/game-list/game-list.component';
import { GameDetailComponent } from './components/game-detail/game-detail.component';
import { EditGameComponent } from './components/edit-game/edit-game.component';
import { MenuComponent } from './components/menu/menu.component';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';

const appRoutes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'list', component: GameListComponent},
  {path: 'edit', component: EditGameComponent},
  {path: 'detail', component: GameDetailComponent},
  {path: 'login', component: LoginComponent},
  {path: '', redirectTo: '/login', pathMatch: 'full'}
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GameListComponent,
    GameDetailComponent,
    EditGameComponent,
    MenuComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
