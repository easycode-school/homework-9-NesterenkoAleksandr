import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe-example',
  templateUrl: './pipe-example.component.html',
  styleUrls: ['./pipe-example.component.css']
})
export class PipeExampleComponent implements OnInit {
  public date = new Date('2019/02/19 18:30');

  public users = [
    {
      name: 'Denis',
      age: 29
    },
    {
      name: 'Ivan',
      age: 17
    },
    {
      name: 'Olga',
      age: 19
    },
    {
      name: 'Maks',
      age: 20
    },
    {
      name: 'Aleks',
      age: 31
    }

  ];

  constructor( ) { }

  ngOnInit() { }
}
