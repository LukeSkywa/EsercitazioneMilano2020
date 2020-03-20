import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MenuItem } from 'src/app/model/menu-item.interface';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  @Output()
  selectMenuId: EventEmitter<number> = new EventEmitter()

  menuItems: MenuItem[] = [
      {
        id: 1, description: 'Home', url: '/home'
      },
      {
        id: 2, description: 'Lista Videogiochi', url: '/list'
      },
      {
        id: 3, description: 'Modifica', url: '/edit'
      }
    ];

  constructor() { }

  ngOnInit(): void {
  }

  selectMenuItem(id: number) {
    this.selectMenuId.emit(id);
  }

}
