import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'AudioFy';
  display: boolean;
  songs:Array<any> = [];

  ngOnInit(){

  }
  onSidebar(ev){
    console.log(ev);
    this.display = ev;
  }
}
