let c = 5;
let f = 12;
const celsius = (f - 32) * 5/9;
const fahrenheit = (c * 9/5) + 32;
console.log(celsius + " По Цельсию равно" + fahrenheit + " По Фаренгейту");
console.log(fahrenheit + " По Фаренгейту равно" + celsius + " По Цельсию");


function triangle(first,second,third){
if (first + second > third && first + third > second && second + third > first){
    console.log("Треугольник существует")
}
else if (first - second < third && first - third < second && second - third < first) {
    console.log("Треугольник не существует")
}
else{
    console.log("Треугольник не существует")
}
let perimeter = first + second + third;
let semiperimeter = perimeter/2;
console.log("Периметр равен = " + perimeter);
let square = Math.sqrt(semiperimeter * (semiperimeter - first) * (semiperimeter - second) * (semiperimeter - third));
console.log("Площадь равна = " + square);
let ratio = perimeter / square;
console.log("Соотношение равно = " + ratio)};
triangle(16,15,10);



let m = 5;
for (let i = 0; i <= m; i++) {
    if (i % 2 == 0) {
        console.log(i + " buzz");
    }
    else if (i % 5 == 0) {
        console.log(i + " fizz buzz");
    }
    else {
        console.log(i + " fizz");
    }
}

function func(layer){
    let tree = ">";
}
for (let i=1; i<=layer;i++){

let symbol = "";

let count = (i===1 || i === layer) ? i : i-1;

symbol += (i % 2 === 0) ? "#" : "*"


}






function number(n, x, y) {
    if (n % x == 0, n % y == 0) {
        return true;
    }
    return false;
}
console.log("n = 3 " + "x = 1 " + " y = 3 " + " => ", number(3, 1, 3))
console.log("n = 12 " + "x = 2 " + " y = 6 " + " => ", number(12, 2, 6))
console.log("n = 100" + " x = 5 " + " y = 3" + " => ", number(100, 5, 3))
console.log("n = 12" + " x = 7 " + " y = 5" + " => ", number(12, 7, 5))



function year(month) {
    switch (true) {
        case (month >= 1 && month <= 3):
            return 1;

        case (month >= 4 && month <= 6):
            return 2;

        case (month >= 7 && month <= 9):
            return 3;

        case (month >= 10 && month <= 12):
            return 4;

        default:
            return "Проверьте ошибку.";
    }
}
console.log("месяц 2 " + year(2) + " квартал")
console.log("месяц 11 " + year(11) + " квартал")



let l = 5
let quotes = '';
for (let v = 0; v <= l; v++) {
    let pow = Math.pow(2, v);
    console.log(pow)
}
console.log(quotes)