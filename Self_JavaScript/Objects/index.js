console.log('hello world fom javascript')
let a = {
    name: 'Quan',
    age: 19,
    Univer: `FPT`
};
console.log(a)
let b = `age`
a[b] = `Nguyen Tat Quan`
console.log(`type of a is: `, typeof a, `. Type of b is: `, typeof b)
console.log(`What is your name?\n`, `My name is: `, a.name)
console.log(`My name in different way is: `, a['name'])
console.log(`Calling function of a: `, a.func)


let d = `age`
a[d] = 20
console.log(`Your age is: `, a[`age`])

a.age = 30
console.log(`Your age is: `, a[`age`])