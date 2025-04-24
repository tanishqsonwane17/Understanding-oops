

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
// class Employe{
//     constructor(name,age,salary){
//        this.name = name,
//         this.age = age,
//         this.salary = salary
//     }
// }
// Employe.prototype.post = 'HR'
// let t1 = new Employe('tanishq', 20, 52000)
// let t2 = new Employe('rohit', 19, 48000)



//  Liabrary in Oops concept
class Liabrary{
 constructor(){
   this.Books = []
 }
 addBook(book){
    this.Books.push(book)
 }
 lisAllBooks(){
  this.Books.forEach((elem, index)=>{
    console.log(index+1 , '' + `${elem.name} by ${elem.author}`)
  })
 }
}

class Books{
  constructor(name, price, author, readStatus){
  this.name = name,
  this.price = price
  this.author = author
  this.readStatus = false
  }
  information(){
    console.log(`${this.name} is written by ${this.author} and the price of this book is ${this.price} ${this.readStatus? 'You already read this book': 'but you did not read this book'}`)
  }
  changeReadStatus(){
    this.readStatus = !this.readStatus
    console.log(this.readStatus)
  }
}
let JhansiLiabrary = new Liabrary()
let book = new Books('Gunaho ka devta', 1200, 'Dharmveer bharti',  )


JhansiLiabrary.addBook(book)