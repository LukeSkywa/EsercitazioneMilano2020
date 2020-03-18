import { Component, ViewChild, AfterViewChecked } from '@angular/core';
import { MenuComponent } from './components/menu/menu.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  currentSection: number = 1;

  @ViewChild(MenuComponent)
  menuComponentRef: MenuComponent;


}
