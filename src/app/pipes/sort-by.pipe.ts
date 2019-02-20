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
  // tslint:disable-next-line:ban-types
  transform(value: Array<Object>, prop: string, direction: string = 'ASC'): Array<Object> {
    value = value.sort((a, b) => {
      if (a[prop] > b[prop]) {
        return 1;
      }
      if (a[prop] < b[prop]) {
        return -1;
      }
      return 0;
    });
    return direction.toUpperCase() === 'DESC' ? value.reverse() : value;
  }
}
