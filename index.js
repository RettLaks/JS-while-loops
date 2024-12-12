// for (let i = 0; i < 10; i++) {
//     console.log(i);
// }

// Oppgave 1
let a = 0;
while (a < 10) {
  a++;
  document.write(`<p style="color:red">${a}</p>`);
}
document.write("<br><br>");

// Oppgave 2
let b = 0;
while (b < 20) {
  b++;
  if (b % 2 == 0) {
    document.write(`<p style="color:white; background-color:blue">${b}</p>`);
  }
}
document.write(`<br><br>`);

// Oppgave 3
let c = 0;
let sum = 0;
while (c < 10) {
  c++;
  sum = sum + c;
}
console.log(sum);
document.write(`<br><br>`);

// Oppgave 4
let hashtag = "";
let d = 0;
while (d < 4) {
  d++;
  hashtag = hashtag + "#";
  document.write(`${hashtag}<br>`);
}
document.write(`<br><br>`);

// Oppgave 5
let e = 20;
while (e > 0) {
  document.write(`${e}<br>`)
  e--;
}
document.write(`<br><br>`)

// Oppgave 6
let f = 28;
let muligSvar = prompt("Gjett et tall:")
while (f != muligSvar) {
  muligSvar = prompt("Gjett et tall:")
  if (f == muligSvar) {
    break
  } 
}
document.write(`<br><br>`)

// Oppgave 7
let g = 0
while (g < 100) {
  g++
  if (g % 5 == 0 && g % 3 == 0) {
    console.log("FizzBuzz");
  } else if (g % 5 == 0) {
    console.log("Buzz");
  } else if (g % 3 == 0) {
    console.log("Fizz");
  } else {
    console.log(g);
  }
}

// Oppgave 8
let h = 0
while (h<5) {
  h++
  document.write(`**** <br>`)
}
document.write(`<br><br>`)

// Oppgave 9
let i = 0
let summ = [1, 1]

while (i<10) {
  i++
  let summm = summ.slice(-2);
  let sum1 = summm.reduce((a, b) => a + b, 0);
  summ.push(sum1)
}
document.write(summ)