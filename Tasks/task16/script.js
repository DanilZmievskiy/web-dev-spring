function createCalendar(year, month, day) {
  let datesArr = []
  let currentDate = new Date(year, month, day);

  currentDate.setDate(1); // первое число текущего месяца
  let firstDay = currentDate.getDay();

  if (firstDay == 0) {
    firstDay = 7; // по усолчанию воскреснье - 0, заменим на 7 для подсчета дней предыдущего месяца
  }
  
  let previousMonthDays = firstDay == 1 ? 0 : -(firstDay - 1) // количество дней предыдущего месяца

  for (let i = previousMonthDays + 1; i <= (42 + previousMonthDays); i++) {
    let d = new Date(year, month, day);
    d.setDate(i)
    datesArr.push(d)
  }

  const calendar = Array.from({ length: 6 }, (v, i) =>
    datesArr.slice(i * 7, i * 7 + 7) // меняем размер массива (1, 42) на (1, 6, 7) 
  );
  
return calendar
}

function calendarRendering(calendar, currentDate) {
  const monthNames = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь",
                      "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];

  const d = currentDate;

  let root = document.querySelector('div[name="calendar"]')
  let month_wrap = document.createElement('h2')
  let month = document.createTextNode(monthNames[d.getMonth()] + ' ' + d.getFullYear())
  month_wrap.appendChild(month)
  month_wrap.classList.add('month')
  root.appendChild(month_wrap)

  let table = document.createElement('table')

  const daysOfWeek = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс']

  let dayNames = document.createElement('tr')
  daysOfWeek.forEach(elem => {
    let td = document.createElement('th')
    let name = document.createTextNode(elem)
    td.appendChild(name)
    dayNames.appendChild(td)
  })

  table.appendChild(dayNames)

  calendar.forEach(elem => {
    let week = document.createElement('tr')
    elem.forEach(el => {
      let td = document.createElement('td')
      let dayNumber = document.createTextNode(el.getDate())
      td.appendChild(dayNumber)
      if (el.getMonth() != d.getMonth()) {
        td.classList.add('not-current')
      } else if (el.setHours(0, 0, 0, 0) === (new Date).setHours(0, 0, 0, 0)) {
        td.classList.add('today')
      }
      week.appendChild(td)
    })
    table.appendChild(week)
  })

  root.appendChild(table)
}

let currDate = new Date;
const previousButton = document.querySelector('button[name="previous"]')
const nextButton = document.querySelector('button[name="next"]')

function main() {
  let calendar = createCalendar(currDate.getFullYear(),
                                currDate.getMonth(),
                                currDate.getDate())
  calendarRendering(calendar, currDate)
}

main()

previousButton.addEventListener('click', (event) => {
    currDate.setMonth(currDate.getMonth() - 1)
    let calendarDelete = document.querySelector('div[name="calendar"]')
    calendarDelete.innerHTML = ""
    main() 
  })

nextButton.addEventListener('click', (event) => {
    currDate.setMonth(currDate.getMonth() + 1)
    let calendarDelete = document.querySelector('div[name="calendar"]')
    calendarDelete.innerHTML = ""
    main() 
  })
