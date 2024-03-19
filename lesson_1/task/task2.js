// todo: Даны три переменные a и b и с им присвоены целочисленные значения.
// Необходимо вывести значения по возрастанию.
// Пример:
let a = 10
let b = 7
let c = 8

let numbersSorted = [a, b, c].sort(function(a, b){return a - b});

console.log(String(numbersSorted))

// Вывод: 7 8 10 
