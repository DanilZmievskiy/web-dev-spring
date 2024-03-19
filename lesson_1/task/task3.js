//todo: Дан номер некоторого года (положительное целое число). 
// Вывести соответствующий ему номер столетия, учитывая, что, 
// к примеру, началом 20 столетия был 1901 год.

let year = 2024;
let century;

if (year % 100 == 0) {
	century = parseInt(year / 100);
} else {
	century = parseInt(year / 100) + 1;
}

console.log(century)