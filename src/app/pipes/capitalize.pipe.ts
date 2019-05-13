import { Pipe, PipeTransform } from "@angular/core";

@Pipe({ name: "capitalize" })
export class CapitalizePipe implements PipeTransform {
  transform(value: string, allLetters = true): string {
    value = value.toLowerCase();
    let words = value.split(" ");
    if (allLetters) {
      for (let i in words) {
        words[i] = words[i][0].toUpperCase() + words[i].substring(1);
      }
    } else {
      words[0] = words[0][0].toUpperCase() + words[0].substring(1);
    }
    return words.join(" ");
  }
}
