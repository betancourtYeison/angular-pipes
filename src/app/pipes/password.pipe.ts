import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "password"
})
export class PasswordPipe implements PipeTransform {
  transform(value: any, mask: boolean = true): string {
    return mask ? value.replace(/./g, "*") : value;
  }
}
