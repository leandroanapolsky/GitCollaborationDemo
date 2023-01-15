function sum(arrayOfNumbers) {
    let sum = 0;
    console.log('Calculating sum...');
    arrayOfNumbers.forEach((number) => sum+=number);
    return sum;
}

const arraySum = sum([1,2,3,4]);
console.log(arraySum);