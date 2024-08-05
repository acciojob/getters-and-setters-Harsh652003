//complete this code
class Person {
	constructor(name,age){
	this._name= name
	this._age = age 
	}
	get name(){
		return this._name 
	}
	get age(){
		return this._age
	}
	set age (newage){
		this._age=newage
	}
	
}

class Student extends Person {

	study()
	{
		console.log(this.name + " " + "is studying")
	}
}

class Teacher extends Person {
	teach()
	{
		console.log(this.name + " " +  "is teaching")
	}
}
const person= new Person("john", 25)
console.log(person.name)


person.age = 30;
console.log(person.age); 

const student = new Student("Alice", 22);
const student1 = new Student("john", 26);
student.study(); 
student1.study(); 

const teacher=new Teacher("john",32)
const teacher1=new Teacher("john",32)
teacher.teach()
teacher1.teach()

// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
