import { Component, OnInit } from '@angular/core';
import { HomeService } from '../../services/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  list = [];
  constructor(private homeService: HomeService) { }

  ngOnInit() {
    this.homeService.getAll().subscribe(result => {
      this.list = result;
    });
  }

}
