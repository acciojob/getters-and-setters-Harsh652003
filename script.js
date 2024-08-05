//complete this code
class Person {
	constructor(name,age)
	this.name= name
	this.age = age 
	
	get name(){
		return this.name 
	}
	set age (newage){
		this.age=newage
	}
	
}

class Student extends Person {

	study()
	{
		console.log(this.name()"is studying")
	}
}

class Teacher extends Person {
	teach( name)
	{
		console.log(this.name()"is teaching")
	}
}
const person= new Person("john", 25)
console.log(person.name)

// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
