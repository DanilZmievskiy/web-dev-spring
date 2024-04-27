// todo 17: См строки 35, 36, 37

const игровоеПоле = document.querySelector('div[name="поле"]');
console.log(игровоеПоле);

const СЛОВА = [{ 
    слово: "Фомаа",
    описание: "Контекст выполнения"
}]

let кнопкаГО = document.querySelector('button[name="go"]');
let кнопкаПроверка = document.querySelector('button[name="проверить"]');

кнопкаПроверка.addEventListener("click", (событие) => {
    let сосед = событие.target.previousElementSibling
    console.log(сосед)
    проверкаБуквы(сосед.value);
})

кнопкаГО.addEventListener("click", (событие) => {
    событие.target.style.visibility = 'hidden';
    начатьИгру();
})

// фабрика
function создатьПоле(индекс) { 
    let поле = document.createElement('div')
    поле.setAttribute('data-id', индекс)
    поле.classList.add('field')
    игровоеПоле.appendChild(поле)
}

function проверкаБуквы(буква) { 
    // todo: Проверить что буква одна что это не цифра, удалить пробелы при их наличии.
    // todo: Реализовать подсчет неудачных попыток и проигрыша в случае 10 попыток.
    // todo: Реализовать выдачу приза и конца игры в случае открытия всех букв.

    let мИндексов = []
    let мбукв = СЛОВА[0].слово.split("")
    мбукв.forEach((element, index) => {
        console.log(element)
        if (буква == element) { 
            мИндексов.push(index)
        }
       
    })
    if (мИндексов.length != 0) { 
        мИндексов.forEach((index) => {
            let узел = document.querySelector('div[data-id="' + index + '"]')
            узел.innerHTML = буква
        })
    }
    console.log(мИндексов);
    console.log('Буква', буква)
}

function начатьИгру() { 
    let элем = СЛОВА[0]
    мбукв = элем.слово.split("")
    console.log(мбукв)
    мбукв.forEach((element, index) => {
        создатьПоле(index)    
    });
}