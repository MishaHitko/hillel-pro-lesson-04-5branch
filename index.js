const mathematicalAction = prompt('Введіть дію(add, sub, mult, div), яку бажаете зробити.');
const firstNumber = +prompt('Введіть перше число.');
const secondNumber = +prompt('Введіть друге число.');
let example;
let result;


if (mathematicalAction === 'add' || mathematicalAction === '+') {
	result = firstNumber + secondNumber;
	example = `${firstNumber} + ${secondNumber}`;
	alert(`${example} = ${result}`);
} else if (mathematicalAction === 'sub' || mathematicalAction === '-') {
	result = firstNumber - secondNumber;
	example = `${firstNumber} - ${secondNumber}`;
	alert(`${example} = ${result}`);
} else if (mathematicalAction ==='mult' || mathematicalAction === '*') {
	result = firstNumber * secondNumber;
	example = `${firstNumber} * ${secondNumber}`;
	alert(`${example} = ${result}`);
} else if (mathematicalAction === 'div' || mathematicalAction === '/') {
	result = firstNumber / secondNumber;
	example = `${firstNumber} / ${secondNumber}`;
	alert(`${example} = ${result}`);
} else {
	result = 'Неправильно введені данні';
	alert(result);
}
