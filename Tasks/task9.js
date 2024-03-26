//todo: Определить, является ли строка полиндромом. Палиндром - это число или слова, читающиеся одинаково в обоих направлениях. 

// 'потоп'
// 'мадам'
// 'комок'

// 'Уж истово вот сижу'

// 37573 - true
// 23442 - false


function checkPalindrom (value) {
	if (typeof(value) != 'string') {
	    value = String(value);
	} 
	
	let noBlankSpace = value.trim().replace(/\s+/g, '').toLowerCase();
	let reverseValue = noBlankSpace.split('').reverse().join("");
	
	if (noBlankSpace == reverseValue) {
	    return true
	} else {
	    return false
	}
}

console.log(checkPalindrom('потоп'))