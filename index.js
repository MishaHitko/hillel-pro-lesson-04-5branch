document.write('Вивести на сторінку в один рядок через кому числа від 10 до 20:   ');
let count = 10;
while (count <= 20) {
	const comma = count === 20 ? ' ' : ',';
	document.write(count + comma);
	count += 1;
}

document.write('<br>');

document.write('Вивести квадрати чисел від 10 до 20:   ');
for (let count = 10; count <= 20; count +=1) {
	const comma = count === 20 ? ' ' : ',';
	document.write(count * count + comma);
}

document.write('<br>');

document.write('Вивести таблицю множення на 7:   ');
for (let count = 1; count <= 10; count += 1) {
	const comma = count === 10 ? ' ' : ',';
	document.write(count * 7 + comma);
}

document.write('<br>');

document.write('Знайти суму всіх цілих чисел від 1 до 15:   ');
let result = 0;
for (let count = 1; count <= 15; count += 1) {
	result = count + result;
}
document.write(result + '<br>');


document.write('Знайти добуток усіх цілих чисел від 15 до 35:   ');
let resultMult = 1;
for (let count = 15; count <= 35; count += 1) {
	resultMult = count * resultMult;
}
document.write(resultMult+ '<br>');

document.write('Знайти середнє арифметичне всіх цілих чисел від 1 до 500:   ');
let summa = 0;
for(let count = 1; count <= 500; count += 1) {
	summa = count + summa;
}
let arithmeticMean = summa / 500;
document.write(arithmeticMean + '<br>');

document.write('Вивести суму лише парних чисел в діапазоні від 30 до 80:   ');
let summaEvenNumbers = 0;
for (let count = 30; count <= 80; count += 1) {
	if (count % 2 === 0) {
		summaEvenNumbers = count + summaEvenNumbers;
	}
}
document.write(summaEvenNumbers + '<br>');

document.write('Вивести всі числа в діапазоні від 100 до 200 кратні 3:   ');
for (let count = 100; count <= 200; count += 1) {
	if (count % 3 === 0) {
		document.write(count + ' ');
	}
}

document.write('<br>');

document.write('Дано натуральне число. Знайти та вивести на сторінку всі його дільники:   ');
const naturalNumber = +prompt('Введите натуральное число, что б узнать все его делители.')
let numberOfDelimiters = 0;
let summaNumberOfDelimiters = 0;
for (let count = 1; count <= naturalNumber; count += 1) {
	if (naturalNumber % count === 0) {
		document.write(count + ' ');
		if (count % 2 === 0) {
			numberOfDelimiters += 1
			summaNumberOfDelimiters += count
		}
	}
}
document.write('<br>');	
document.write('Визначити кількість його парних дільників:   ');
document.write(numberOfDelimiters + '<br>');
document.write('Знайти суму його парних дільників:   ');
document.write(summaNumberOfDelimiters + '<br>');

document.write('Надрукувати повну таблицю множення від 1 до 10:   <br>' );
for(let count = 1; count <= 10; count +=1) {
	for(let innerCount = 1; innerCount <= 10; innerCount +=1) {
		let multiplicationTable = count * innerCount;
		document.write(`${count} * ${innerCount} = ${multiplicationTable}`);
		document.write('<br>');
	}
	document.write('<br>');
}
