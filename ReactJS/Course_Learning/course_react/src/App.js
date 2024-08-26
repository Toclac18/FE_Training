import logo from './logo.svg';
import './App.css';
import {logger2} from './logger/index.js';
import * as constants from './constants.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

const sum = (a,b) => a+b;
console.log(sum(1,2))

// Import modules from external file (logger.js)
logger2(typeof logger2)
// logger(`Quannt47`)
console.log(constants)
logger2('Message error....', constants.TYPE_ERROR)

//Enahnced object literal
//shorten definition for object
// Example to define an object

var name =`javaScript`
var price = 1000;

var course = {
  name: name,
  price: price,
  getName: function() {
    return name;
  }
};
console.log(course.getName())

//Using enhanced object literal

var fieldName = `Quannt47`
var fieldPrice = 1000

var courses = {
  [fieldName]: `Java Script`,
  [fieldPrice]: 5000
}
console.log(courses)

//REST

function logger(a,b,...params) {
  console.log(params)
}
logger(1,2,3,4)

function restObj({name, age, ...rest}) {
  console.log(`name: `, name);
  console.log(`age: `, age);
  console.log(rest)
}

restObj({
  name: `Quannt47`,
  age: 20,
  School: `FPT University`
});


const myObj = {
  name: `Nguyen Tat Quan`,
  age: 20,
  school: `FPT university`
}

const {school : b} = myObj
console.log(`The school is: `, b)

function  arrayJ([a,b, ...params]){
  console.log(`a = `, a)
  console.log(`b = `, b)
  console.log(params)
}
arrayJ([1,5,6,8,3,2])

const arr0 = [1,2,3,4,5,6,7,8,9]

const {[8] : nine} = arr0
console.log('The ninth element is: ',nine)

// SPREAD

var arr1 = [`JavaScript`, `ReactJS`, `TypeScript`]
var arr2 = [`Ruby`, `PHP`]
var arr3 = [...arr2, ...arr1, `Java`, `Csharp`]
console.log(arr3)

var obj1 = {
  Name: `Nguyen Tat Quan`,
  Account: `Quannt47`
}


var obj2 = {
  BU: `FI.RHS`
}

var obj3 = {
  ...obj1, 
  ...obj2,
  Project: `Risak`
}

console.log(obj3)


//Spread to pass the params for function

var arr = [`Java script`, `Type Script`, `ReactJS`]

function logger3(...rest) {
  console.log(rest)
  rest.forEach(element => {
    console.log(element)
  });
}

logger3(...arr)
