import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {GlobalPropertyService} from './services/global-property.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  nav: boolean = true;

  constructor(private router: Router,
              private glo: GlobalPropertyService) {
  }

  ngOnInit() {
    this.nav = this.glo.Navs;
  }

  ngAfterContentChecked() {
    this.nav = this.glo.Navs;
  }
}
