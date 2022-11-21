import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.scss'],
})
export class PipesComponent implements OnInit {
  public myNumber: number = 2145.2345;

  public date: Date = new Date();

  constructor() {}

  ngOnInit(): void {}
}
