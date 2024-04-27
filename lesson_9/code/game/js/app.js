
const Game = {
    // свойства 
    СЛОВА: [{ 
        слово: "Фомаа",
        описание: "Контекст выполнения"
    }],
    игровоеПоле: document.querySelector('div[name="поле"]'),
    кнопкаГО: document.querySelector('button[name="go"]'),
    кнопкаПроверка: document.querySelector('button[name="проверить"]'),

    // методы
    initGame: function () { 
        this.кнопкаПроверка.addEventListener("click", (событие) => {
        let сосед = событие.target.previousElementSibling
        console.log(сосед)
        this.проверкаБуквы(сосед.value);
        })
        
        this.кнопкаГО.addEventListener("click", (событие) => {
               событие.target.style.visibility = 'hidden';
        this.начатьИгру();
    })
   },

    создатьПоле: function (индекс) { 
        let поле = document.createElement('div')
        поле.setAttribute('data-id', индекс)
        поле.classList.add('field')
        this.игровоеПоле.appendChild(поле)
    },
   
    проверкаБуквы: function (буква) { 
        let мИндексов = []
        let мбукв = this.СЛОВА[0].слово.split("")
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
    },
   
    начатьИгру: function () { 
        let элем = this.СЛОВА[0]
        мбукв = элем.слово.split("")
        console.log(мбукв)
        мбукв.forEach((element, index) => {
            this.создатьПоле(index)    
        });
    }
}

Game.initGame()