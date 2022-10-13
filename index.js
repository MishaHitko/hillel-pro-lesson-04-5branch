const firstNumber = +prompt('Введіть перше число.');
const secondNumber = +prompt('Введіть друге число.');

const pl = firstNumber + secondNumber;
const min = firstNumber - secondNumber;
const um = firstNumber * secondNumber;
const del = firstNumber / secondNumber;

alert(`
Ви ввели ${firstNumber} і ${secondNumber}:
${firstNumber} + ${secondNumber} = ${pl}
${firstNumber} - ${secondNumber} = ${min}
${firstNumber} * ${secondNumber} = ${um}
${firstNumber} / ${secondNumber} = ${del}
`);