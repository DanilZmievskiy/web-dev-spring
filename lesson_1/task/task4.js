//todo: Задано число. Проверить на  истинность (true или false) что 
// сумма цифр данного трехзначного числа является четным числом. Числа меняются !
// Пример:

let x = 552;

let numberToString = String(x).split('').map((x) => parseInt(x));

let sum = 0;

numberToString.forEach(num => {
	sum += num;
})

if (sum % 2 == 0) {
	console.log(true);
} else {
	console.log(false);
}

// Сумма чисел: 5 + 5 + 2 = 12 
// 12 - четное число (true)