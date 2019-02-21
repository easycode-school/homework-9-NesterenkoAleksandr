import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe-example',
  templateUrl: './pipe-example.component.html',
  styleUrls: ['./pipe-example.component.css']
})
export class PipeExampleComponent implements OnInit {
  /** Направление сортировки */
  private sortDirection = 'unsorted';
  /** Свойство, по которому необходимо отсортировать данные */
  private sortBy = 'name';

  /** Текущее время/дата */
  private now = new Date();

  /** Дата создания комментария менее минуты назад */
  private justNow = new Date(this.now.getTime() - 20000);

  /** Дата создания комментария более минуты назад и менее часа */
  private more5Minutes = new Date(this.now.getTime() - 300000);

  /** Дата создания комментария более часа назад и менее суток */
  private more1Hours = new Date(this.now.getTime() - 7000000);

  /** Дата создания комментария больше суток назад */
  private more1Days = new Date(this.now.getTime() - 700000000);

  /** Массив пользователей */
  private users = [
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
