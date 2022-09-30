"use strict";
let n = prompt("Скільки чисел ви хочете?");
let arr = [];
document.write("Весь масив: ");
for (let i = 0; i < n; i++) {
  arr[i] = Math.floor(Math.random() * (100 - -100 + 1)) + -100;
  document.write(arr[i] + "; ");
}

let negativ = 0;
let sumN = 0;
let positiv = 0;
let sumP = 0;
for (let i = 0; i < arr.length; i++) {
  if (arr[i] < 0) {
    //document.write(arr[i] + " ");
    negativ++;
    sumN += arr[i];
  } else if (arr[i] > 0) {
    positiv++;
    sumP += arr[i];
  }
}
document.write(
  `<br>Кількість від'ємних - ${negativ} Кількість додатніх - ${positiv}`
);
document.write(`<br>Cумма від'ємних - ${sumN} Сумма додатніх - ${sumP}`);
document.write(
  `<br>Середнє арифметичне від'ємних - ${Math.round(
    sumN / negativ
  )} Середнє арифметичне додатніх - ${Math.round(sumP / positiv)}`
);
