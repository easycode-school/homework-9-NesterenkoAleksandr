import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortBy'
})
export class SortByPipe implements PipeTransform {

  /**
   * Преобразование массива обьектов, в массив отсортированный по значению
   * указанного свойства и в указанном направлении
   * @param value - массив обьектов, элементы которого необходимо отсортировать
   * @param prop - наименование свойства для сортировки
   * @param direction - направление сортировки (ASC, DESC)
   */
  transform(value: Array<object>, prop: string, direction: string = 'ASC'): Array<object> {
    direction = direction.toUpperCase();

    // Проверка входящих параметров
    if (!prop || !(direction === 'ASC' || direction === 'DESC')) {
      return value;
    }

    value = value.slice().sort((a, b) =>  a[prop] > b[prop] ? 1 : (a[prop] < b[prop] ? -1 : 0));

    return direction === 'DESC' ? value.reverse() : value;
  }
}
