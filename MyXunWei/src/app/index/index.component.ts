import {Component, OnInit} from '@angular/core';
import {HealthService} from '../services/health.service';
import {CookbookService} from '../services/cookbook.service';
import {Router} from '@angular/router';


declare var $: any;


@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css'],
  providers: [HealthService, CookbookService]
})

export class IndexComponent implements OnInit {
  _indexhealth: any;
  _indexcookbook: any;

  hottopic = [
    {'img': 'hottopic01.jpg'},
    {'img': 'hottopic02.jpg'},
    {'img': 'hottopic03.jpg'},
    {'img': 'hottopic04.jpg'},
    {'img': 'hottopic05.jpg'},
    {'img': 'hottopic06.jpg'}
  ];

  constructor(private hs: HealthService,
              private cs: CookbookService,
              private router: Router) {
  }

  ngOnInit() {
    let that = this;
    that.hs.getIndexHealth(function (result) {
      that._indexhealth = result;
    });
    that.cs.getIndexCookBook(function (result) {
      that._indexcookbook = result;
    });
  }

  toHealthDetail(title) {
    this.router.navigate(['/health-detail', title]);
  }

  toCookBookDetail(title) {
    // this.router.navigate(['/health-detail', title]);
  }
}
