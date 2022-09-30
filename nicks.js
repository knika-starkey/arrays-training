"use strict";
let en = ["ні", "буль", "кіль", "то", "ро", "паль", "мі", "ма"];
let n = prompt("Скількі складів?");
let str = " ";
for (let i = 0; i < n; i++) {
  str += en[Math.floor(Math.random() * en.length)];
}
alert(str);
