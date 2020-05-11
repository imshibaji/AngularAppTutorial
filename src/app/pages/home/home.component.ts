import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  songs: any[];

  constructor() { }

  ngOnInit(): void {
    this.songs = [
      {
        title: 'Song 1',
        subtitle: 'Most Popular Song',
        details: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit!',
        img: 'assets/imgs/audio1.jpg',
        url: 'http://www.google.com',
      },
      {
        title: 'Song 12',
        subtitle: 'Most Popular Song',
        details: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit!',
        img: 'assets/imgs/audio1.jpg',
        url: 'http://www.google.com',
      },
      {
        title: 'Song 3',
        subtitle: 'Most Popular Song',
        details: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit!',
        img: 'assets/imgs/audio1.jpg',
        url: 'http://www.google.com',
      },
      {
        title: 'Song 4',
        subtitle: 'Most Popular Song',
        details: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit!',
        img: 'assets/imgs/audio1.jpg',
        url: 'http://www.google.com',
      },
      {
        title: 'Chori Chori',
        subtitle: 'Most Popular Song',
        details: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit!',
        img: 'assets/imgs/audio1.jpg',
        url: 'http://www.google.com',
      },
      {
        title: 'Chori Chori',
        subtitle: 'Most Popular Song',
        details: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit!',
        img: 'assets/imgs/audio1.jpg',
        url: 'http://www.google.com',
      },
      {
        title: 'Chori Chori',
        subtitle: 'Most Popular Song',
        details: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit!',
        img: 'assets/imgs/audio1.jpg',
        url: 'http://www.google.com',
      }
    ]
  }

}
