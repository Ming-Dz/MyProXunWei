import {Component, OnInit} from '@angular/core';
// import {GlobalService} from '../../services/global.service';
// import {Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  _hiddenNavs: boolean;
  _showheader: boolean;

  constructor(
    // private glo: GlobalService,
    //           private route: Router
  ) {
  }

  ngOnInit() {
    // this._hiddenNavs = !this.glo._hiddenNavs;
    // this._showheader = true;
  }

  toindex() {
    // this.route.navigate(['/index']);
  }
}
