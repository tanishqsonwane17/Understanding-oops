

// function student(name, age, number){
//     this.name = name,
//     this.age = age
//     this.number = 20
// }
//  let std1 =  new student('tanishq', 20 )
//  let std2 =  new student('rohit', 40)


// console.log(std1, std2)


// UnderStand Prototype in oops 

// function Employee(name,age,salary){
//     this.name = name,
//     this.age = age,
//     this.salary = salary
// }
// Employee.prototype.Details = function(){
//     console.log(`${this.name} is an Employe of our company, his age is ${this.age} and getting ${this.salary} per month `)
// }
// let emp1 =new Employee('John',20, 50000 )    


// creating objects using classes
class Employe{
    constructor(name,age,salary){
       this.name = name,
        this.age = age,
        this.salary = salary
    }
}
Employe.prototype.post = 'HR'
let t1 = new Employe('tanishq', 20, 52000)
let t2 = new Employe('rohit', 19, 48000)