import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'filter',

})

export class FilterPipe implements PipeTransform {

    transform(items: any, filterBy: string) {
        const list = [];
        items.map(item => item.name.includes(filterBy) ? list.push(item) : null);
        if (list.length > 0) {
            return list;
        } else {
            return items;
        }
    }
}
