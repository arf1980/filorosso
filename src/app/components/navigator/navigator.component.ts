import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigator',
  templateUrl: './navigator.component.html',
  styleUrls: ['./navigator.component.css']
})
export class NavigatorComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  isHome(): boolean {
    return this.router.url === '/'
      || this.router.url === '/home';
  }

}
