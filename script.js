let numbers = [];

//Заполните массив numbers целыми числами от -10 до 10 (включительно) с помощью цикла.
for (let i = -10; i <= 10; i++) {
    numbers.push(i);
}
console.log(numbers);

//Удалите все отрицательные числа из массива
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] < 0) {
        numbers.splice(i, 1);
        i--
    }
}
console.log(numbers);

//Возведите каждое число в квадрат
for (let i = 0; i < numbers.length; i++) {
    numbers[i] = Math.pow(numbers[i], 2);
}
console.log(numbers);

//Отсортируйте числа в порядке убывания
numbers.sort(function (a, b) {
    return b - a;
});
console.log(numbers);
