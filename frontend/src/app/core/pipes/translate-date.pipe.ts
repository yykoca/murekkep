import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  standalone: true,
  name: 'translateDate',
})
export class TranslateDatePipe implements PipeTransform {
  transform(value: string | null, ...args: unknown[]): string | null {
    const months = {
      Jan: 'Ocak',
      Feb: 'Şubat',
      Mar: 'Mart',
      Apr: 'Nisan',
      May: 'Mayıs',
      Jun: 'Haziran',
      Jul: 'Temmuz',
      Aug: 'Ağustos',
      Sep: 'Eylül',
      Oct: 'Ekim',
      Nov: 'Kasım',
      Dec: 'Aralık',
    };

    for (const [shortName, longName] of Object.entries(months)) {
      if (value && value.includes(shortName)) {
        value = value.replace(shortName, longName);
      }
    }

    return value;
  }
}
