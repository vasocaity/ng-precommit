import { Component, OnInit } from '@angular/core';
import { Air4thaiService } from './services/air4thai.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'air4us';
  list: Array<any>;
  constructor(private air4Thai: Air4thaiService) { }

  ngOnInit() {
    // this.getAir();
  }
  getAir() {
    this.air4Thai.getAir4Thai().subscribe(res => this.list = res);
  }
}
