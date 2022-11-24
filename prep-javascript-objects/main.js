const person = {
  firstName: 'Alex',
  lastName: 'Raymond',
  hobby: 'video games'
};
console.log(person);
person.job = 'music production';
const fullName = person.firstName + ' ' + person.lastName;
const str = "The person's full name is" + ' ' + fullName + '.';
console.log(str);
const strTwo = "The person's job is" + ' ' + person.job + '.';
console.log(strTwo);
person.previousJob = 'student';
console.log("The Person's previous job was" + ' ' + person.previousJob + '.');
console.log(person);
