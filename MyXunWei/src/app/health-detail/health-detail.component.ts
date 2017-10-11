import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {HealthService} from '../services/health.service';


@Component({
  selector: 'app-health-detail',
  templateUrl: './health-detail.component.html',
  styleUrls: ['./health-detail.component.css'],
  providers: [HealthService]
})
export class HealthDetailComponent implements OnInit {
  _detail: any;

  constructor(private route: ActivatedRoute,
              private hs: HealthService) {
  }

  ngOnInit() {
    //接收路由中的参数，传给getDetailHealth方法
    let title = this.route.snapshot.paramMap.get('title');
    let that = this;
    that.hs.getDetailHealth(title, function (result) {
      that._detail = result[0];
    });

  }

}
