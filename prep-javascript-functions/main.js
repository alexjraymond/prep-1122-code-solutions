function addTwoNumbers(num1, num2) {
  return num1 + num2;
}

const addTwoNumbersValue = addTwoNumbers(2, 2);
console.log(addTwoNumbersValue);

function convertHourstoMinutes(hours) {
  return hours * 60;
}

const convertHourstoMinutesValue = convertHourstoMinutes(3);
console.log(convertHourstoMinutesValue);

function getGreeting(name) {
  return 'hello ' + name + '!';
}

const getGreetingValue = getGreeting('Jack');
console.log(getGreetingValue);

function addAndMultiplyBy5(num1, num2) {
  return (num1 * num2) / 5;
}

const addAndMultiplyBy5Value = addAndMultiplyBy5(5, 10);
console.log(addAndMultiplyBy5Value);

function subtractTwoNumbers(num1, num2) {
  return num1 - num2;
}

const subtractTwoNumbersValue = subtractTwoNumbers(8, 2);
console.log(subtractTwoNumbersValue);

function getCircleCircumference(radius) {
  return 2 * radius * Math.PI;
}

const getCircleCircumferenceValue = getCircleCircumference(4);
console.log(getCircleCircumferenceValue);

function getFullName(firstName, lastName) {
  return firstName + ' ' + lastName;
}

const getFullNameValue = getFullName('Alex', 'Raymond');
console.log(getFullNameValue);

function cube(number) {
  return number ^ 3;
}

const cubeValue = cube(4);
console.log(cubeValue);
