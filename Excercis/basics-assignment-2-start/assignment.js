const task3Element = document.getElementById('task-3');

function alertMe(){
  alert('Hello World');
}

task3Element.addEventListener('click', alertMe);

function nameMe(myName){
  alert('Hello ' + myName);
}

nameMe('Meran');

function combine(num1, num2, num3,){
  const all = `${num1}  ${num2}  ${num3}`;
  return all;
}

const allMe = combine('Hi ', 'Hello ', 'Bitchhhh!!!!!!!!!');
alert(allMe)

