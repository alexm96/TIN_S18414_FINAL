function Student(firstName,lastName,id,grades){
    this.firstName=firstName;
    this.lastName=lastName;
    this.id=id;
    this.grades=grades;
    this.printInfo=function(){
        return this.firstName+" "+this.lastName+" "+(this.grades.reduce((x,y)=>x+y)/this.grades.length)
    }
}
let sampleStudent=new Student("alex","martynek",111,[1,2,3,5])
console.log(sampleStudent.printInfo())