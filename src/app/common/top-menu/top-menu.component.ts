import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-top-menu',
  templateUrl: './top-menu.component.html',
  styleUrls: ['./top-menu.component.scss']
})
export class TopMenuComponent implements OnInit {
  @Output() sidebar= new EventEmitter<String>();
  items: MenuItem[];

  constructor() {}

  ngOnInit(): void {
    this.items = [
        {
          label: 'Home',
          icon: 'pi pi-fw pi-home',
          routerLink: '/',
        },
        {
          label: 'About',
          icon: 'pi pi-fw pi-home',
          routerLink: '/about',
        },
        {
          label: 'Menu',
          command: (e) => this.onSidebar()
        },
        {
            label: 'Catagories',
            icon: 'pi pi-fw pi-file',
            items: [{
                    label: 'Bengali', 
                    icon: 'pi pi-fw pi-plus',
                    items: [
                        {label: 'Project', command: this.onClick},
                        {label: 'Other'},
                    ]
                },
                {label: 'Hindi'},
                {label: 'English'}
            ]
        },
        {
            label: 'Gallery',
            icon: 'pi pi-fw pi-pencil',
            items: [
                {label: 'Images', icon: 'pi pi-fw pi-trash'},
                {label: 'Videos', icon: 'pi pi-fw pi-refresh'},
                {label: 'Audios', icon: 'pi pi-fw pi-refresh'}
            ]
        },
        {
          label: 'Contact',
          icon: 'pi pi-fw pi-home',
          routerLink: '/contact',
        },
    ];
  }

  onSidebar(){
    this.sidebar.emit('true');
  }
  onClick(e){
    console.log(e);
  }
}
