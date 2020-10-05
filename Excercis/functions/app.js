const sayHello = name => console.log('Hi ' + name);

const sayHello2 = (name, phrase) => console.log(phrase + ' ' + name);
const sayHello3 = () => console.log('Hi Hard coded');
const sayHello4 = name => 'Hi ' + name;

sayHello('Max');
sayHello2('Max ', 'Hello ');
sayHello3();
console.log(sayHello4(' Max'));

const sayHello5 = (name, phrase = 'Hi') => console.log(phrase + ' ' + name);

sayHello5('Ron');
sayHello5('Ron', 'Hello');

function checkInput(cb, ...strings){
  let emptyText = false;
  for (const text of strings) {
    if ( !text) {
      emptyText = true;
      break;
    }
  }
  if(!emptyText){
    cb();

  }
}

checkInput(() => {
  console.log('All not empty');
  },
  'Hello',
  '12',
  'asdasfgas',
  'Not Empty'
);