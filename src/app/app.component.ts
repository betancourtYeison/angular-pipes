import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "angular-pipes";
  name = "Yeison";
  numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  PI = Math.PI;
  numberPercent = 0.234;
  salary = 1234.5;
  heroe = {
    name: "Tony Stark",
    nickName: "Iron Man",
    gender: "Male",
    age: "52-53",
    address: {
      calle: "First",
      house: "19"
    }
  };
  valuePromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Data ready");
    }, 3500);
  });
  currentDate = new Date();
  fullName = "yeiSon betANcourt sOliS";
  videoYoutube = "XlmaJ-yU46U";
  passwordActivate = true;
}
