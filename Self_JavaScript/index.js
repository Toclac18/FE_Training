// alert('Hello Quannt47')
console.log('Hello Quannt47')
x = 3, y = 5, z = 6
console.log(x == y)
str = `Hello`
console.log(str + x + y + z)
console.log(x + y + z + str)
str =  `Hello, my name is "Quan", you can also call me 'Bobby'`
console.log(str)
 a = 5
 b = Number('2.5')
 c = `2`
console.log(a*b)
console.log(`type of a: `, typeof a, `. Type of b: `, typeof b)
console.log(`Ask quannt47 that a = ${a} and b = ${b} so a + b = ${a+b} is true or false`)
console.log(5 === '5')
    
function checkScope() {
    const x = 5
    console.log(`in function, value of const x is: `, x)
}

checkScope()
console.log(`x = `, x)