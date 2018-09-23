import { Component, OnInit } from '@angular/core';
import { HomeService } from 'src/app/services/home.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  list = [];
  constructor(private homeService: HomeService) { }

  ngOnInit() {
    this.homeService.getAll().subscribe(result => {
      this.list = result;
    });
  }
}
