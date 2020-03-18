import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'src/app/model/menu-item.interface';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  menuItems: MenuItem[] = [
    {
      id: 1, description: 'Home', selected: true
    },
    {
      id: 2, description: 'Lista Videogiochi', selected: true
    },
    {
      id: 3, description: 'Modifica', selected: true
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  selectMenuItem(id: number){
      console.log('id: '+id);
  }

}
