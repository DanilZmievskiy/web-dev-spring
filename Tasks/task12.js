//todo: Написать функцию анаграммы

// 'finder', 'friend' === true
// 'test', 'sets' === false
// 'abc', 'aaa' === false
// 'abb', 'aab' === false

function checkAnagram (value1, value2) {
    if (typeof(value1) != 'string' || typeof(value1) != 'string') {
        console.log("Values should be string")
    } else {
        return value1.split('').sort().join('') === value2.split('').sort().join('')
    }
}

console.log(checkAnagram('test', 'sets'))