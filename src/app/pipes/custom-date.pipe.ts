import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customDate'
})
export class CustomDatePipe implements PipeTransform {
  /**
   * Преобразовать дату в строку соответсвующего вида
   * @param value - дата, которую необходимо преобразовать
   */
  transform(value: Date): string {
    const diffMs = Date.now() - value.getTime();
    const diffDays = Math.floor(diffMs / 86400000);
    const diffHrs = Math.floor((diffMs % 86400000) / 3600000);
    const diffMins = Math.floor(((diffMs % 86400000) % 3600000) / 60000);

    const optionsDate = {day: '2-digit', month: '2-digit', year: 'numeric'};
    const optionsTime = {hour: '2-digit', minute: '2-digit'};

    let result = diffMins ? `${diffMins} minutes ago` : 'just now';
    result = diffHrs ? `${diffHrs} hours ago` : result;
    result = diffDays ? `${value.toLocaleString('ru-RU', optionsDate)} at ${value.toLocaleString('ru-RU', optionsTime)}` : result;

    return result;
  }
}
