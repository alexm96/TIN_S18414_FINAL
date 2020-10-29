const Student={
    firstName:"Alex",
    lastName:"Martynek",
    id:111,
    courses:["English","Math"]
}

function createStudent(firstName,lastName,id){ // Prototype doesn't exist when you use object initializer? How are we supposed to do this?
    let returnStudent=Object.create(Student)
    returnStudent.firstName=firstName;
    returnStudent.lastName=lastName;
    returnStudent.id=id;
    returnStudent.courses=Student.courses;
    return returnStudent;
}
console.log(Student)
console.log(createStudent("Not alex","Not martynek",121))
