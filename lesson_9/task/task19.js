// todo: решить Задача 2 см. lesson9.pdf

// исходный код
class Car {
    constructor (f) {
        this.fuel = f
        console.log('Маúина создана. Бак заправлен на ' + this.fuel)
     }
     reFuel (q) {
        let diff = (this.fuel + q) - 100
        this.fuel = (this.fuel + q) <= 100 ? (this.fuel + q) : 100
        return (this.fuel + q) > 100 ? diff : 0
     }
}

let renoLogan = new Car(71)
