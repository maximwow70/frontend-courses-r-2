import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent implements OnInit {
  public isContactsVisible: boolean;

  constructor() {}

  ngOnInit(): void {
    this.isContactsVisible = localStorage.getItem('isAdmin') === '1';
  }
}
