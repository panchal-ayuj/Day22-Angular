import { Pipe, PipeTransform } from "@angular/core";

@Pipe({name: 'customUpper'})
export class CustomPipe implements PipeTransform {
    transform(value: string): string {
        if (value) {
            value = value.trim();
        } else {
            return "";
        }
        return value.toLocaleUpperCase();
    }
}