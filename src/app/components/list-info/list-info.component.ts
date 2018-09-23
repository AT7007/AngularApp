import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HomeService } from '../../services/home.service';

@Component({
  selector: 'app-list-info',
  templateUrl: './list-info.component.html',
  styleUrls: ['./list-info.component.css']
})
export class ListInfoComponent implements OnInit {
  info = {};
  constructor(private route: ActivatedRoute, private homeService: HomeService) { }

  ngOnInit() {
    this.route.params.subscribe(info => {
      if (info.listId) {
        this.homeService.getInfoById(info.listId).subscribe(result => {
          this.info = result[0];
        });
      }
    });
  }

}
