// todo: Дан номер месяца (1 — январь, 2 — февраль, ...). 
// Вывести название соответствующего времени года("зима", "весна" и т.д.). 
// Примечание: решить задачу через конструкцию switch

let month = 3;

switch (month) {
	case 1:
	case 2:
	case 12:
		console.log("Зима");
		break;
	
	case 3:
	case 4:
	case 5:
	    console.log("Весна");
		break;
		
	case 6:
	case 7:
	case 8:
	    console.log("Лето");
		break;
	
	case 9:
	case 10:
	case 11:
	    console.log("Осень");
		break;
}