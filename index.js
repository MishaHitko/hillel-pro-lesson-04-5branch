const hours = +prompt('Введите количество часов, которое нужно перевести в секунды.')
let hoursStr;
if (hours === 1) {
	hoursStr = 'часу.'
} else {
	hoursStr = 'часах.'
}
let result = `${hours * 3600} секунд в ${hours} ${hoursStr}`;
alert(result);