// Cгенерировать массив 6(строк) на 7(колонок),  который должнем быть заполнен днями в текущем месяце (календарь на месяц).
// Месяц задается произвольно. Календарь должен включать дни недели предыдущего месяца и последующего.
// В решении задачи воспользоваться стандартными функциями работы с датой и временем.
//https://learn.javascript.ru/datetime

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