document.write('Вивести числа від 20 до 30 через пропуск, використовуючи крок 0,5 (20 20,5 21 21,5….):   ')
for (let count = 20; count <= 30; count += 0.5) {
	document.write(count + ' ');
}

document.write('<br> Один долар коштує 27 гривень. Вивести дані з розрахунком вартості 10, 20, 30... 100 доларів:   ')
for(let count = 10; count <= 100; count += 10) {
	document.write(27 * count + ' ');
}

document.write('<br> Дане ціле число. Вивести всі цілі числа від 1 до 100, квадрат яких не перевищує числа N:   ');

const number = +prompt('Введите целое число.')
for (let count = 1; count <= 100; count += 1) {
	let result = count * count;
	if (result <= number) {
		document.write(count + ' ');
	}
}

document.write(`<br> Дане ціле число. З'ясувати, чи є воно простим (простим називається число, більше 1, які не мають інших дільників крім 1 і себе):   `);

const numberPrime = parseInt(prompt("Введите число: "));
let isPrime = true;
if (numberPrime <= 1) {
    document.write("1 и ниже не простые числа");
}
else if (numberPrime > 1) {
  for (let i = 2; i < numberPrime; i++) {
    if (numberPrime % i === 0) {
      isPrime = false;
      break;
    }
  }
  if (isPrime) {
    document.write(`${numberPrime} простое число`);
  } else {
    document.write(`${numberPrime} не простое число`);
  }
}


document.write(`<br> Дане деяке число. Визначити, чи можна одержати це число шляхом зведення числа 3 у деякий ступінь. (Наприклад, числа 9, 81 можна отримати, а 13 - не можна):   `);

const randomNumber = +prompt('Введите число.')
let results = 1;
let finish
do {
	let count = 3;
	results *= count;
	if (results === randomNumber) {
		finish = 'можно'
	} else {
		finish = 'нельзя'
	}
} while(results < randomNumber)

document.write(`Данное число ${finish} получить путем возведения в степень числа 3`)
